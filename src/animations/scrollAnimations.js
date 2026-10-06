import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { addProjectsTransition, addProjectsCarousel } from "./projectAnimations";

gsap.registerPlugin(ScrollTrigger);

/* ---------- smooth scrolling (Lenis, synced with GSAP) ---------- */
export function initSmoothScroll() {
  const lenis = new Lenis({ lerp: 0.1 });
  lenis.on("scroll", ScrollTrigger.update);
  const tick = (t) => lenis.raf(t * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);
  return () => {
    gsap.ticker.remove(tick);
    lenis.destroy();
  };
}

/* ---------- thick lines that revolve on the orbit ring ----------
   One shared value `u` drives the back half AND the front half, so each line
   passes behind you and comes back in front without a break.            */
function initBar(el) {
  const len = Number(el.dataset.len);
  el.style.strokeDasharray = `${len} ${1 - len}`;
}

function updateBar(el, u) {
  const start = u + Number(el.dataset.phase); // where the line begins on the ring
  el.style.strokeDashoffset = ((-start % 1) + 1) % 1;
}

/* little live readouts: loading bar + percentage */
function updateReadouts(p) {
  const segs = document.querySelectorAll(".hud-seg");
  const pct = document.querySelector(".hud-loader__pct");
  const on = Math.round(p * segs.length);
  segs.forEach((el, i) => el.classList.toggle("on", i < on));
  if (pct) pct.textContent = `${Math.round(p * 100)}%`;
}

/* ---------- HERO SCROLL: "you come forward" ----------
   The hero is pinned; scrolling scrubs this timeline.
   0 -> 4 : gentle camera push-in (max 1.15x), background blurs,
            rings + HUD + glass cards + zigzags appear
   4 -> 5.5 : hold
   5.5 -> 9.3 : hero slides left + blurs, Projects slides in from the right  */
export function initHeroScroll(heroEl) {
  const W = () => document.querySelector(".stage").offsetWidth;

  const tl = gsap.timeline({
    defaults: { ease: "power2.inOut" },
    onUpdate: () => updateReadouts(Math.min(1, tl.time() / 4)),
    scrollTrigger: {
      trigger: heroEl, // the element itself (a ".hero" string would not be found inside the scoped context)
      start: "top top",
      end: "+=830%",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
  updateReadouts(0);

  // MAX ZOOM: change these two numbers to zoom more / less
  tl.to(".stage-camera", { scale: 1.15, transformOrigin: "52% 42%", duration: 4 }, 0)
    .to(".hero-portrait", { scale: 1.05, transformOrigin: "52% 45%", duration: 4 }, 0)

    // background goes soft
    .to(
      ".hero-title",
      { filter: "blur(14px)", opacity: 0.5, scale: 1.06, x: () => -0.05 * W(), duration: 4 },
      0
    )
    // the left text block (Hello, name, role, bio) blurs and drifts left too
    .to(
      ".hero-info",
      { filter: "blur(8px)", opacity: 0.4, x: () => -0.07 * W(), duration: 4 },
      0
    )
    .to(".hero-bg", { filter: "blur(6px)", duration: 4 }, 0)

    // clear the clutter
    .to(".nav", { opacity: 0, y: -30, duration: 1.5 }, 0)
    .to(".tagline-group", { opacity: 0, duration: 1.5 }, 0)

    // the plain stats slide away (like the ghost copies in your video)
    .to(".stats", { opacity: 0, x: () => 0.04 * W(), y: () => 0.03 * W(), duration: 2.2 }, 0.3)

    // rings fade in, HUD appears
    .to(".orbit", { opacity: 1, duration: 1.5 }, 1)
    .to(".zigzag", { opacity: 1, duration: 0.8 }, 0.3)
    // network lines: full strength at the start, then fade back as the HUD panels + cards arrive
    .to(".network", { opacity: 1, duration: 0.8 }, 0.3)
    .to(".network", { opacity: 0.22, duration: 1.6 }, 1.6)
    .to(".hud", { opacity: 1, duration: 0.6, ease: "none" }, 1.6)
    .fromTo(
      ".hud-panel",
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, immediateRender: false },
      1.8
    )

    // lines draw themselves, then nodes pop in
    .to(".hud-line", { strokeDashoffset: 0, duration: 1.4, stagger: 0.1, ease: "power1.out" }, 1.8)
    .to(".hud-node, .hud-ring", { opacity: 1, duration: 0.4, stagger: 0.05 }, 2.4)

    // glass cards slide in one by one
    .fromTo(
      ".hud-card",
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.25, immediateRender: false },
      2.4
    )

    // hold so the scene can be enjoyed
    .to({}, { duration: 1.5 }, 4);

  // Step 7: hero slides away, Projects takes its place
  const projectsReady = addProjectsTransition(tl, 5.5);

  // Step 8: cards move left one by one (4 replaces 1, 5 replaces 2, 6 replaces 3)
  addProjectsCarousel(tl, projectsReady);

  // thick lines revolve around you (loops on its own, not tied to scroll)
  const bars = gsap.utils.toArray(".orbit-bar");
  bars.forEach(initBar);
  const orbit = { u: 0 };
  gsap.to(orbit, {
    u: 1,
    duration: 5.5, // seconds for one full lap: smaller = faster
    ease: "none",
    repeat: -1,
    onUpdate: () => bars.forEach((el) => updateBar(el, orbit.u)),
  });

  return tl;
}