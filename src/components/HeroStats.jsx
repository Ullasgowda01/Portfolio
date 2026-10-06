// Layer 6 (right side): tagline + the three stats.
// data-count is used by the count-up animation in Step 5.
const STATS = [
  { value: 3, label: ["YEARS", "LEARNING &", "BUILDING"] },
  { value: 10, label: ["PROJECTS", "COMPLETED"] },
  { value: 20, label: ["TECHNOLOGIES", "EXPLORED"] },
];

export default function HeroStats() {
  return (
    <div className="hero-stats" data-layer="stats">
      {/* group: the scroll effect fades this wrapper, the intro animates the children */}
      <div className="tagline-group">
        <div className="tagline-icon">
          <svg viewBox="0 0 40 40" aria-hidden="true">
            <path d="M20 0 C21.5 13 27 18.5 40 20 C27 21.5 21.5 27 20 40 C18.5 27 13 21.5 0 20 C13 18.5 18.5 13 20 0Z" fill="#fff" />
          </svg>
        </div>
        <p className="tagline">
          Turning ideas
          <br />
          into real-world
          <br />
          software solutions.
        </p>
        <span className="tagline-glow" />
      </div>

      <div className="stats">
        {STATS.map((s) => (
          <div className="stat" key={s.label[0]}>
            <span className="stat__num">
              <span data-count={s.value}>{s.value}</span>
              <span className="stat__plus">+</span>
            </span>
            <span className="stat__bar" />
            <span className="stat__label">
              {s.label.map((l) => (
                <span key={l} style={{ display: "block" }}>{l}</span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}