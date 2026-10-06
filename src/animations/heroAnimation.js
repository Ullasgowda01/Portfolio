import gsap from "gsap";

const reduced = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- 1. LOAD-IN (plays once) ---------- */
export function playHeroIntro() {
  // stat numbers start at 0 and count up
  const counters = gsap.utils.toArray("[data-count]");
  counters.forEach((el) => (el.textContent = "0"));
  if (reduced()) {
    counters.forEach((el) => (el.textContent = el.dataset.count));
    return gsap.timeline();
  }

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.from(".hero-bg", { opacity: 0, duration: 1.4 }, 0)
    .from(".hero-title svg", { opacity: 0, y: 70, duration: 1.3 }, 0.1)
    .from(
      ".hero-portrait__img",
      { opacity: 0, y: 90, scale: 0.95, transformOrigin: "50% 100%", duration: 1.4 },
      0.35
    )
    .from(".nav__brand, .nav__status", { opacity: 0, y: -18, duration: 0.8, stagger: 0.1 }, 0.7)
    .from(".nav__line", { scaleX: 0, transformOrigin: "left center", duration: 1.1, ease: "power2.inOut" }, 0.7)
    .from(
      ".hello, .hello-line, .name, .role, .role-line, .bio, .location",
      { opacity: 0, x: -50, duration: 0.9, stagger: 0.09 },
      0.9
    )
    .from(
      ".tagline-icon, .tagline, .tagline-glow, .stat",
      { opacity: 0, x: 50, duration: 0.9, stagger: 0.09 },
      1.0
    );

  // count-up: 0 -> 3, 10, 20
  counters.forEach((el) => {
    const state = { v: 0 };
    gsap.to(state, {
      v: Number(el.dataset.count),
      duration: 1.8,
      delay: 1.3,
      ease: "power2.out",
      onUpdate: () => (el.textContent = Math.round(state.v)),
    });
  });

  return tl;
}

/* ---------- 2. IDLE MOTION (loops forever) ---------- */
export function startHeroIdle() {
  if (reduced()) return;

  // red glow breathing
  gsap.to(".hero-bg__glow", {
    opacity: 0.72,
    duration: 3.6,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  });

  // sparkle pulse
  gsap.to(".nav__spark", {
    scale: 1.18,
    duration: 2.4,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    transformOrigin: "50% 50%",
  });

  // tagline star: slow spin
  gsap.to(".tagline-icon svg", {
    rotate: 360,
    duration: 12,
    ease: "none",
    repeat: -1,
    transformOrigin: "50% 50%",
  });
}