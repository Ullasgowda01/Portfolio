import { useState } from "react";

// BEHIND-YOU layer: computer-network style traces (long horizontal lines with
// 45-degree jogs, in bundles, with light pulses running along them) + faint
// binary digits. Shapes are generated randomly in src/animations/networkAnimation.js
const BUNDLES = 4;
const LINES_PER_BUNDLE = 3;
const BIN_ROWS = [14, 24, 34, 68, 78, 88]; // vertical positions in %

const bits = (n) =>
  Array.from({ length: n }, () => (Math.random() < 0.5 ? "0" : "1"))
    .join("")
    .replace(/(.{4})/g, "$1 ");

export default function HeroNetwork() {
  const [rows] = useState(() => BIN_ROWS.map((top) => ({ top, text: bits(260) })));

  return (
    <div className="network" data-layer="network" aria-hidden="true">
      {rows.map((r) => (
        <div key={r.top} className="bin-row" style={{ top: `${r.top}%` }}>
          {r.text}
        </div>
      ))}

      <svg viewBox="0 0 1672 941">
        {Array.from({ length: BUNDLES }).flatMap((_, b) =>
          Array.from({ length: LINES_PER_BUNDLE }).map((__, l) => (
            <g key={`${b}-${l}`} className="net" data-bundle={b}>
              <path className="net-base" d="M 0 0" />
              <path className="net-pulse" pathLength="1" d="M 0 0" />
              <circle className="net-head" r="2.4" cx="0" cy="0" />
            </g>
          ))
        )}
      </svg>
    </div>
  );
}