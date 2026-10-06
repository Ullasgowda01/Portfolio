import gsap from "gsap";

/* The About / Skills / Education part of the scroll timeline `tl`, starting at time `at`.
   1) Projects slides out to the left (blurred) while the profile page slides in from the right.
   2) The photo, red panel and decorations appear, then page 1 (About) pops in.
   3) Each extra scroll step swaps the right side: About -> Skills -> Education
      (old page blurs + slides left, new page slides in from the right, caption/code/dash change).
   Returns the time it ends. */
export function addProfileSection(tl, at) {
  const slides = gsap.utils.toArray(".pslide");
  if (!slides.length) return at;

  const W = () => document.querySelector(".profile__stage")?.offsetWidth || window.innerWidth;
  const pop = (slide) => slide.querySelectorAll(".pr");
  const cap = (i) => `.pf-cap[data-i="${i}"]`;
  const code = (i) => `.pf-code[data-i="${i}"]`;
  const dashes = gsap.utils.toArray(".pf-dash");

  // the profile page waits off-screen on the right
  gsap.set(".profile", { xPercent: 100 });

  // ---- 1) Projects leaves, profile arrives (same move as hero -> projects) ----
  tl.to(".projects", { xPercent: -100, duration: 3 }, at)
    .to(".projects__stage, .projects__head", { filter: "blur(10px)", duration: 3 }, at)
    .to(".profile", { xPercent: 0, duration: 3 }, at + 0.2);

  // ---- 2) left side + page 1 appear ----
  tl.fromTo(".pf-panel", { opacity: 0, x: -60 }, { opacity: 1, x: 0, duration: 1.2 }, at + 1.5)
    .fromTo(".pf-portrait", { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 1.3 }, at + 1.7)
    .fromTo(".pf-deco", { opacity: 0 }, { opacity: 1, duration: 0.8, stagger: 0.1 }, at + 2.2)
    .fromTo(".pf-wire path", { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1.2, ease: "power1.out" }, at + 2.4)
    .fromTo(cap(0), { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.8 }, at + 2.4)
    .fromTo(code(0), { opacity: 0 }, { opacity: 1, duration: 0.8 }, at + 2.6)
    .fromTo(
      pop(slides[0]),
      { opacity: 0, y: 30, scale: 0.92 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.09 },
      at + 2.3
    );

  // ---- 3) one step per extra page ----
  let t = at + 3.8;
  for (let k = 1; k < slides.length; k++) {
    const out = slides[k - 1];
    const inn = slides[k];

    tl
      // old page: blur + slide left + fade
      .to(out, { opacity: 0, x: () => -0.05 * W(), filter: "blur(8px)", duration: 1.3, ease: "power2.inOut" }, t)
      // new page: slides in from the right, then its items pop in one by one
      .fromTo(
        inn,
        { opacity: 0, x: () => 0.05 * W(), filter: "blur(8px)" },
        { opacity: 1, x: 0, filter: "blur(0px)", duration: 1.3, ease: "power2.inOut" },
        t + 0.4
      )
      .fromTo(
        pop(inn),
        { opacity: 0, y: 30, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.08 },
        t + 0.6
      )
      // caption + tiny code + page dashes follow
      .to(cap(k - 1), { opacity: 0, y: -12, duration: 0.6 }, t)
      .fromTo(cap(k), { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.8 }, t + 0.5)
      .to(code(k - 1), { opacity: 0, duration: 0.6 }, t)
      .fromTo(code(k), { opacity: 0 }, { opacity: 1, duration: 0.8 }, t + 0.6)
      .to(dashes[k - 1], { backgroundColor: "rgba(255,255,255,0.28)", duration: 0.5 }, t + 0.4)
      .to(dashes[k], { backgroundColor: "#e8453a", duration: 0.5 }, t + 0.4)
      // the photo drifts a little for depth
      .to(".pf-portrait", { x: () => k * 0.01 * W(), duration: 1.6, ease: "power2.inOut" }, t);

    t += 2.2;
  }

  // hold at the end so the last page can be enjoyed
  tl.to({}, { duration: 0.8 }, t - 0.7);
  return t + 0.1;
}