// FRONT layer: twinkling sparkles that pop up while you scroll.
// (The computer-network lines live in HeroNetwork.jsx, behind you.)
const SPARK = "M0 -9 C1 -2.5 2.5 -1 9 0 C2.5 1 1 2.5 0 9 C-1 2.5 -2.5 1 -9 0 C-2.5 -1 -1 -2.5 0 -9Z";

export default function HeroZigzag() {
  return (
    <div className="zigzag" data-layer="zigzag" aria-hidden="true">
      <svg viewBox="0 0 1672 941">
        {Array.from({ length: 8 }).map((_, i) => (
          <path key={`s${i}`} className="spark" d={SPARK} />
        ))}
      </svg>
    </div>
  );
}