// The white rings with thick glowing lines that revolve around you (Step 6).
// Drawn as TWO halves with the same moving lines:
//   side="back"  -> upper half, sits BEHIND your body
//   side="front" -> lower half, sits IN FRONT of your body
// so each line passes behind you and comes back in front.
//
// Change ORBIT if you move the portrait (coords are in the 1672 x 941 banner space):
const ORBIT = { cx: 940, cy: 700, rx: 360, ry: 55 };

// Thick lines running round the ring.
//   phase = where it starts (0..1)   len = length (fraction of the ring)
//   width = thickness                alpha = brightness
const BARS = [
  { phase: 0, len: 0.2, width: 5.5, alpha: 1 }, // main thick line
  { phase: 0.5, len: 0.12, width: 3.5, alpha: 0.7 }, // shorter line on the opposite side
];

const ellipse = (cx, cy, rx, ry) =>
  `M ${cx - rx} ${cy} a ${rx} ${ry} 0 1 0 ${2 * rx} 0 a ${rx} ${ry} 0 1 0 ${-2 * rx} 0`;

export default function HeroOrbit({ side }) {
  const { cx, cy, rx, ry } = ORBIT;
  const d = ellipse(cx, cy, rx, ry);
  const dOuter = ellipse(cx, cy, rx * 1.07, ry * 1.18);
  const id = `orbit-clip-${side}`;
  const y = side === "back" ? 0 : cy;
  const h = side === "back" ? cy : 941 - cy;

  return (
    <div className={`orbit orbit--${side}`} aria-hidden="true">
      <svg viewBox="0 0 1672 941">
        <defs>
          <clipPath id={id}>
            <rect x="-200" y={y} width="2072" height={h} />
          </clipPath>
        </defs>
        <g clipPath={`url(#${id})`}>
          <path d={d} pathLength="1" className="orbit-base" />
          <path d={dOuter} pathLength="1" className="orbit-base orbit-base--dim" transform={`rotate(-3 ${cx} ${cy})`} />

          {BARS.map((b, i) => (
            <path
              key={i}
              d={d}
              pathLength="1"
              className="orbit-bar"
              data-phase={b.phase}
              data-len={b.len}
              style={{ strokeWidth: b.width, opacity: b.alpha }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}