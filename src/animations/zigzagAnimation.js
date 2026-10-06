import gsap from "gsap";

/* Twinkling sparkles (banner space 1672 x 941). Shooting-star lines, curves and zigzags were removed. */

const REGION = { x0: 140, x1: 1540, y0: 80, y1: 850 }; // inside the zoomed view
const rand = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

// keep things off your face and off the glass cards
function isBlocked(x, y) {
  const nearFace = Math.hypot(x - 880, y - 430) < 180;
  const onCards = x > 1215 && y > 225 && y < 775;
  return nearFace || onCards;
}
/* Starts everything. Returns a function that stops it (used by React cleanup). */
export function startZigzags() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => { };

  const ctx = gsap.context(() => { });
  let alive = true;

  gsap.utils.toArray(".spark").forEach((el, i) => {
    const run = () => {
      if (!alive) return;
      ctx.add(() => {
        let x, y;
        do {
          x = rand(REGION.x0, REGION.x1);
          y = rand(REGION.y0, REGION.y1);
        } while (isBlocked(x, y));
        gsap.set(el, { x, y, scale: 0, opacity: 0, rotation: rand(0, 90), transformOrigin: "50% 50%" });
        gsap
          .timeline({ delay: rand(0.1, 1.4), onComplete: run })
          .to(el, { scale: rand(0.6, 1.5), opacity: 1, rotation: "+=60", duration: 0.5, ease: "power2.out" })
          .to(el, { scale: 0, opacity: 0, rotation: "+=60", duration: 0.6, ease: "power2.in" });
      });
    };
    gsap.delayedCall(i * 0.3, run);
  });

  return () => {
    alive = false;
    ctx.revert();
  };
}