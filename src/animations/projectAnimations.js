import gsap from "gsap";

/* PART 1: hero slides left + blurs, Projects slides in from the right.
   Adds to the scroll timeline `tl`, starting at time `at`. Returns the time it ends. */
export function addProjectsTransition(tl, at) {
  const vw = () => window.innerWidth;
  const items = gsap.utils.toArray(".pitem");

  // Projects waits off-screen on the right
  gsap.set(".projects", { xPercent: 100 });

  tl
    // hero: slides left and blurs (the background moves slower = depth)
    .to(".stage", { x: () => -vw(), filter: "blur(12px)", opacity: 0.15, duration: 3 }, at)
    .to(".hero-bg", { x: () => -vw() * 0.5, filter: "blur(16px)", duration: 3 }, at)

    // Projects slides in from the right and takes the hero's place
    .to(".projects", { xPercent: 0, duration: 3 }, at + 0.2)

    // heading appears
    .fromTo(".projects__head", { opacity: 0, y: -24 }, { opacity: 1, y: 0, duration: 1 }, at + 1.6);

  // the first three cards rise one by one.
  // (we animate the card + number row INSIDE each item, never the item itself,
  //  so the frosted-glass blur keeps working)
  items.slice(0, 3).forEach((item, i) => {
    tl.fromTo(
      item.children,
      { opacity: 0, y: 70 },
      { opacity: 1, y: 0, duration: 1.2 },
      at + 1.8 + i * 0.25
    );
  });

  tl.to({}, { duration: 0.6 }, at + 3.2); // small pause
  return at + 3.8;
}

/* PART 2: the row of cards moves left one card at a time.
   Step 1: project 1 leaves, 4 arrives.  Step 2: 2 leaves, 5 arrives.  Step 3: 3 leaves, 6 arrives.
   The leaving card blurs and fades. Every card keeps exactly the same size. */
export function addProjectsCarousel(tl, at) {
  const items = gsap.utils.toArray(".pitem");
  const track = document.querySelector(".ptrack");
  if (!track || items.length <= 3) return at;

  // one step = one card width + the gap between cards
  const step = () => items[0].offsetWidth + (parseFloat(getComputedStyle(track).columnGap) || 0);

  const STEPS = items.length - 3; // 3 steps for 6 projects
  let t = at;
  for (let k = 1; k <= STEPS; k++) {
    tl.to(track, { x: () => -step() * k, duration: 1.5, ease: "power2.inOut" }, t)
      .to(
        items[k - 1].children,
        { opacity: 0.1, filter: "blur(8px)", duration: 1.5, ease: "power2.inOut" },
        t
      );
    t += 2.2;
  }

  // hold at the end so 4, 5, 6 can be enjoyed
  tl.to({}, { duration: 0.8 }, t - 0.7);
  return t + 0.1;
}