// Everything that appears while you scroll (Step 6): white lines, nodes, glass cards,
// loading bar, three code/status panels on the left, scan pill.
// Coordinates are in the 1672 x 941 banner space.
// Hidden at first; scrollAnimations.js reveals it step by step.
const LINES = [
  // --- left side: from your head to the three left panels ---
  "M 770 335 L 700 335 L 650 189 L 510 189",
  "M 750 420 L 660 420 L 620 325 L 510 325",
  "M 730 500 L 640 500 L 600 437 L 510 437",
  // --- right side: from your head to the three glass cards ---
  "M 985 385 L 1060 385 L 1100 330 L 1237 330",
  "M 1010 470 L 1110 470 L 1140 494 L 1237 494",
  "M 1000 600 L 1090 600 L 1130 659 L 1237 659",
  // --- loading bar (top right) to your head ---
  "M 1190 120 L 1130 120 L 1045 290",
  // --- scan pill (bottom left) to your jacket ---
  "M 680 815 L 730 815 L 790 745",
  // --- search icon line (bottom right) ---
  "M 1085 690 L 1150 760 L 1240 760",
  "M 1259 767 L 1267 775",
  // --- corner brackets around the cards ---
  "M 1220 252 L 1220 236 L 1236 236",
  "M 1545 726 L 1545 742 L 1529 742",
];

const NODES = [
  [770, 335], [510, 189], [750, 420], [510, 325], [730, 500], [510, 437],
  [985, 385], [1237, 330], [1010, 470], [1237, 494], [1000, 600], [1237, 659],
  [1045, 290], [790, 745], [1085, 690],
];

const CARDS = [
  { top: "27%", num: "3+", label: ["YEARS", "LEARNING & BUILDING"] },
  { top: "45%", num: "10+", label: ["PROJECTS COMPLETED"] },
  { top: "63%", num: "20+", label: ["TECHNOLOGIES EXPLORED"] },
];

const CODE_LEFT = `const ullas = {
  role: "Software Developer",
  status: "Open to opportunities",
  building: true,
};`;

// panel 2: terminal  (edit the text freely)
const TERMINAL = [
  { prompt: "$", text: "npm run dev" },
  { dim: true, text: "> vite ready in 312 ms" },
  { dim: true, text: "> compiling portfolio..." },
  { ok: true, text: "ready on localhost" },
];

// panel 3: status  (edit the text freely)
const STATUS = [
  { k: "STATUS", v: "ONLINE", live: true },
  { k: "MODE", v: "BUILDING" },
  { k: "FOCUS", v: "CLEAN CODE" },
];

const CODE_RIGHT = `function build(idea) {
  return solution;
}`;

export default function HeroHud() {
  return (
    <div className="hud" data-layer="hud" aria-hidden="true">
      <svg viewBox="0 0 1672 941">
        {LINES.map((d) => (
          <path key={d} d={d} pathLength="1" className="hud-line" />
        ))}
        {NODES.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="4.5" className="hud-node" />
        ))}

        {/* search icon at the end of the bottom-right line */}
        <circle className="hud-ring" cx="1252" cy="760" r="10" />

        {/* small pointer */}
        <path className="hud-cursor" d="M0 0 L0 17 L4.5 12.5 L8 20 L11 18.5 L7.5 11.5 L14 11.5 Z" transform="translate(570 525)" />
      </svg>

      {/* ---- three panels on the left (they appear together, same animation) ---- */}
      <pre className="hud-codebox hud-panel">{CODE_LEFT}</pre>

      <div className="hud-codebox hud-panel" style={{ top: "29%" }}>
        {TERMINAL.map((l) => (
          <div key={l.text} className={l.dim ? "t-dim" : ""}>
            {l.prompt && <span className="t-red">{l.prompt} </span>}
            {l.ok && <span className="t-red">✓ </span>}
            {l.text}
          </div>
        ))}
      </div>

      <div className="hud-codebox hud-panel" style={{ top: "42%" }}>
        {STATUS.map((r) => (
          <div key={r.k} className="hud-row">
            <span className="t-dim">{r.k}</span>
            <b>
              {r.live && <i className="pulse-dot" />}
              {r.v}
            </b>
          </div>
        ))}
      </div>

      <pre className="hud-code-r hud-panel">{CODE_RIGHT}</pre>

      <div className="hud-loader hud-panel">
        <div className="hud-loader__row">
          <span>LOADING PROFILE</span>
          <span className="hud-loader__pct">0%</span>
        </div>
        <div className="hud-loader__bar">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className="hud-seg" />
          ))}
        </div>
      </div>

      <div className="hud-scan hud-panel">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
          <circle cx="10" cy="10" r="6.5" />
          <line x1="15" y1="15" x2="21" y2="21" />
        </svg>
        <span>
          Scanning profile
          <small>Loading skills and projects</small>
        </span>
      </div>

      {CARDS.map((c) => (
        <div key={c.num} className="hud-card" style={{ top: c.top }}>
          <span className="hud-card__num">{c.num}</span>
          <span className="hud-card__label">
            {c.label.map((l) => (
              <span key={l} style={{ display: "block" }}>{l}</span>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}