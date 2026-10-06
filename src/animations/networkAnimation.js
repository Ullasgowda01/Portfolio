import gsap from "gsap";

/* Computer-network traces (banner space 1672 x 941).
   Each BUNDLE = 3 almost-parallel lines that run mostly horizontally and jog at ~45 degrees,
   like the circuit lines in your reference picture. Bends are slightly randomised so
   nothing is perfectly exact. A light pulse runs along each line, then the bundle
   re-draws itself with a brand-new random route.                                      */

const REGION = { x0: 140, x1: 1540, y0: 80, y1: 850 };
const rand = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const DASH = 0.18; // length of the moving pulse (fraction of the line)

function makeBundle() {
  for (let attempt = 0; attempt < 6; attempt++) {
    const dirX = Math.random() < 0.5 ? 1 : -1; // flows left->right or right->left
    let x = dirX === 1 ? rand(REGION.x0, 460) : rand(1180, REGION.x1);
    let y = rand(REGION.y0 + 60, REGION.y1 - 60);
    const pts = [[x, y]];
    const total = rand(800, 1300);
    let used = 0;

    while (used < total) {
      const run = rand(70, 250); // straight run
      x += dirX * run;
      used += run;
      if (x < REGION.x0 || x > REGION.x1) {
        pts.push([clamp(x, REGION.x0, REGION.x1), y]);
        break;
      }
      pts.push([x, y]);

      if (Math.random() < 0.85) {
        // ~45 degree jog up or down
        let jog = rand(22, 85) * (Math.random() < 0.5 ? -1 : 1);
        if (y + jog < REGION.y0 + 20 || y + jog > REGION.y1 - 20) jog = -jog;
        x += dirX * Math.abs(jog);
        y += jog;
        used += Math.abs(jog) * 1.4;
        if (x < REGION.x0 || x > REGION.x1) break;
        pts.push([x, y]);
      }
    }
    if (pts.length < 4) continue;

    // 3 near-parallel copies, nudged so they are not perfectly identical
    const offsets = [0, rand(9, 15), -rand(8, 14)];
    return offsets.map((oy, k) =>
      pts
        .map(([px, py], i) => {
          const jx = k === 0 ? 0 : rand(-12, 12);
          return `${i ? "L" : "M"} ${(px + jx).toFixed(1)} ${(py + oy).toFixed(1)}`;
        })
        .join(" ")
    );
  }
  return null;
}

/* Starts everything. Returns a function that stops it (used by React cleanup). */
export function startNetwork() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ctx = gsap.context(() => { }); // collects tweens created later so they can be killed
  let alive = true;

  /* --- faint binary digits sliding sideways --- */
  const W = () => document.querySelector(".stage")?.offsetWidth || 1600;
  if (!reduced) {
    gsap.utils.toArray(".bin-row").forEach((row, i) => {
      const dir = i % 2 ? 1 : -1;
      gsap.fromTo(
        row,
        { x: () => dir * 0.02 * W() },
        { x: () => dir * -0.2 * W(), duration: rand(20, 34), ease: "none", repeat: -1, yoyo: true }
      );
    });
  }

  /* --- network bundles --- */
  const groups = gsap.utils.toArray(".net");
  const bundles = {};
  groups.forEach((g) => (bundles[g.dataset.bundle] = [...(bundles[g.dataset.bundle] || []), g]));

  const runBundle = (members) => {
    if (!alive) return;
    ctx.add(() => {
      const routes = makeBundle();
      if (!routes) return gsap.delayedCall(1, () => runBundle(members));

      let lastEnd = 0;
      members.forEach((g, i) => {
        const [base, pulse, head] = g.children;
        base.setAttribute("d", routes[i]);
        pulse.setAttribute("d", routes[i]);
        pulse.style.strokeDasharray = `${DASH} ${2 - DASH}`;
        pulse.style.strokeDashoffset = DASH;
        const len = pulse.getTotalLength();

        const delay = i * 0.15 + rand(0, 0.3);
        const dur = rand(1.8, 3.2);
        lastEnd = Math.max(lastEnd, delay + dur);

        gsap.fromTo(base, { opacity: 0 }, { opacity: rand(0.22, 0.4), duration: 0.5, delay: i * 0.1 });

        const state = { s: DASH };
        gsap.to(state, {
          s: -1,
          duration: dur,
          delay,
          ease: "power1.inOut",
          onUpdate: () => {
            pulse.style.strokeDashoffset = state.s;
            const t = clamp(DASH - state.s, 0, 1);
            const pt = pulse.getPointAtLength(t * len);
            head.setAttribute("cx", pt.x);
            head.setAttribute("cy", pt.y);
            head.style.opacity = t > 0 && t < 1 ? 1 : 0;
          },
          onComplete: () => (head.style.opacity = 0),
        });
      });

      // fade the old routes out, then draw a new random bundle
      gsap.to(members.map((g) => g.children[0]), { opacity: 0, duration: 0.6, delay: lastEnd });
      gsap.delayedCall(lastEnd + 0.6 + rand(0.2, 1.2), () => runBundle(members));
    });
  };

  Object.values(bundles).forEach((members, i) => gsap.delayedCall(i * 0.7, () => runBundle(members)));

  return () => {
    alive = false;
    ctx.revert();
  };
}