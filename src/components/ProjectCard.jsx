// One project: an angular "window" card + the number row underneath it.
// Shows project.image if you set one, otherwise a drawn placeholder (320 x 250).

function Art({ kind }) {
  const common = { viewBox: "0 0 320 250", preserveAspectRatio: "xMidYMid slice", "aria-hidden": true };

  if (kind === "map") {
    return (
      <svg {...common}>
        <rect width="320" height="250" fill="#0e1a22" />
        <path d="M0 150 C60 120 100 175 160 140 S260 100 320 130 V250 H0Z" fill="#14303a" />
        <rect x="28" y="172" width="70" height="40" rx="7" fill="#1e5a3c" opacity=".85" />
        <rect x="125" y="196" width="56" height="34" rx="7" fill="#1e5a3c" opacity=".7" />
        <rect x="235" y="162" width="64" height="42" rx="7" fill="#1e5a3c" opacity=".8" />
        <path d="M-10 84 C50 58 85 118 150 96 S255 44 330 78" stroke="#2f86c6" strokeWidth="11" fill="none" strokeLinecap="round" />
        <circle cx="210" cy="92" r="44" fill="#ff3b30" opacity=".2" />
        <circle cx="210" cy="92" r="23" fill="#ff3b30" opacity=".3" />
        <path d="M210 66c-9 0-15 7-15 15 0 12 15 28 15 28s15-16 15-28c0-8-6-15-15-15z" fill="#ff4d4d" />
        <circle cx="210" cy="81" r="5" fill="#fff" />
        <rect x="12" y="14" width="104" height="58" rx="7" fill="#0a0f14" stroke="#ffffff30" />
        <text x="24" y="34" fill="#fff" fontSize="9" fontFamily="sans-serif">FLOOD RISK</text>
        <text x="24" y="53" fill="#ff6b5f" fontSize="14" fontFamily="sans-serif" fontWeight="700">78%</text>
        <rect x="24" y="59" width="80" height="5" rx="2.5" fill="#ffffff25" />
        <rect x="24" y="59" width="58" height="5" rx="2.5" fill="#ff4d4d" />
      </svg>
    );
  }
  if (kind === "docs") {
    return (
      <svg {...common}>
        <rect width="320" height="250" fill="#e8ecf2" />
        <rect width="54" height="250" fill="#1b2130" />
        <circle cx="27" cy="24" r="10" fill="#d9a441" />
        {[56, 80, 104].map((y) => (
          <rect key={y} x="12" y={y} width="30" height="6" rx="3" fill="#ffffff40" />
        ))}
        <rect x="54" width="266" height="30" fill="#fff" />
        <rect x="68" y="11" width="70" height="8" rx="4" fill="#cfd6e2" />
        <rect x="262" y="9" width="44" height="13" rx="6.5" fill="#1b2130" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i}>
            <rect x="68" y={44 + i * 33} width="238" height="26" rx="6" fill="#fff" />
            <rect x="80" y={53 + i * 33} width="84" height="8" rx="4" fill="#cfd6e2" />
            <rect x="184" y={53 + i * 33} width="50" height="8" rx="4" fill="#e3e8f0" />
            <rect x="252" y={51 + i * 33} width="44" height="12" rx="6" fill={["#d9a441", "#4ca06b", "#d9a441", "#e0584f", "#4ca06b", "#d9a441"][i]} opacity=".85" />
          </g>
        ))}
      </svg>
    );
  }
  if (kind === "kanban") {
    return (
      <svg {...common}>
        <rect width="320" height="250" fill="#11141b" />
        <rect width="320" height="28" fill="#181d28" />
        <circle cx="16" cy="14" r="5" fill="#ff4d4d" />
        <rect x="30" y="10" width="70" height="8" rx="4" fill="#2a3142" />
        {[0, 1, 2].map((c) => (
          <g key={c}>
            <rect x={12 + c * 104} y="40" width="96" height="198" rx="8" fill="#1a1f2b" />
            <rect x={22 + c * 104} y="50" width="44" height="7" rx="3.5" fill="#3a4258" />
            {[0, 1, 2].slice(0, c === 1 ? 2 : 3).map((r) => (
              <g key={r}>
                <rect x={20 + c * 104} y={68 + r * 56} width="80" height="48" rx="6" fill="#232a3a" />
                <rect x={20 + c * 104} y={68 + r * 56} width="4" height="48" rx="2" fill={["#ff4d4d", "#4c8dff", "#f2b84b"][(r + c) % 3]} />
                <rect x={32 + c * 104} y={78 + r * 56} width="54" height="7" rx="3.5" fill="#46506a" />
                <rect x={32 + c * 104} y={92 + r * 56} width="38" height="6" rx="3" fill="#323a50" />
              </g>
            ))}
          </g>
        ))}
      </svg>
    );
  }
  if (kind === "chat") {
    return (
      <svg {...common}>
        <rect width="320" height="250" fill="#0f1218" />
        <rect width="86" height="250" fill="#151a23" />
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <circle cx="22" cy={30 + i * 40} r="11" fill={["#ff4d4d", "#4c8dff", "#4ca06b", "#f2b84b", "#9b6bff"][i]} opacity=".85" />
            <rect x="40" y={24 + i * 40} width="38" height="6" rx="3" fill="#2d3548" />
            <rect x="40" y={36 + i * 40} width="26" height="5" rx="2.5" fill="#222a3a" />
          </g>
        ))}
        <rect x="104" y="22" width="120" height="30" rx="10" fill="#222a3a" />
        <rect x="190" y="64" width="116" height="30" rx="10" fill="#e8453a" />
        <rect x="104" y="108" width="140" height="44" rx="10" fill="#222a3a" />
        <rect x="170" y="164" width="136" height="30" rx="10" fill="#e8453a" />
        <rect x="104" y="206" width="202" height="26" rx="13" fill="#1a2030" stroke="#ffffff22" />
      </svg>
    );
  }
  if (kind === "shop") {
    return (
      <svg {...common}>
        <rect width="320" height="250" fill="#f4f4f6" />
        <rect width="320" height="30" fill="#fff" />
        <rect x="14" y="10" width="60" height="9" rx="4.5" fill="#d8dbe3" />
        <circle cx="296" cy="15" r="9" fill="#e8453a" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i}>
            <rect x={14 + (i % 3) * 100} y={44 + Math.floor(i / 3) * 102} width="92" height="92" rx="8" fill="#fff" />
            <rect x={22 + (i % 3) * 100} y={52 + Math.floor(i / 3) * 102} width="76" height="50" rx="6" fill={["#f2c9c4", "#c9d8f2", "#d9eacb", "#f2e3c4", "#dcc9f2", "#c4eaf2"][i]} />
            <rect x={22 + (i % 3) * 100} y={110 + Math.floor(i / 3) * 102} width="46" height="7" rx="3.5" fill="#d8dbe3" />
            <rect x={22 + (i % 3) * 100} y={122 + Math.floor(i / 3) * 102} width="28" height="7" rx="3.5" fill="#e8453a" />
          </g>
        ))}
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect width="320" height="250" fill="#f3f5fb" />
      <rect width="48" height="250" fill="#fff" />
      <rect x="12" y="16" width="24" height="8" rx="4" fill="#5b7cff" />
      {[44, 66, 88].map((y) => (
        <rect key={y} x="12" y={y} width="24" height="6" rx="3" fill="#dfe4f0" />
      ))}
      <rect x="62" y="14" width="120" height="100" rx="8" fill="#fff" />
      {[22, 40, 28, 56, 44, 66].map((h, i) => (
        <rect key={i} x={74 + i * 17} y={104 - h} width="10" height={h} rx="3" fill={i % 2 ? "#f2994a" : "#5b7cff"} />
      ))}
      <rect x="194" y="14" width="116" height="100" rx="8" fill="#fff" />
      <circle cx="252" cy="64" r="26" fill="none" stroke="#e3e8f2" strokeWidth="11" />
      <circle cx="252" cy="64" r="26" fill="none" stroke="#5b7cff" strokeWidth="11" strokeDasharray="80 164" transform="rotate(-90 252 64)" />
      <circle cx="252" cy="64" r="26" fill="none" stroke="#f2994a" strokeWidth="11" strokeDasharray="36 164" strokeDashoffset="-82" transform="rotate(-90 252 64)" />
      <rect x="62" y="128" width="248" height="108" rx="8" fill="#fff" />
      <path d="M74 214 C100 166 120 200 150 176 S210 150 240 166 S290 160 298 152" fill="none" stroke="#5b7cff" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function ProjectCard({ project }) {
  const { number, title, subtitle, description, tags, image, art, link } = project;

  return (
    <article className="pitem">
      <div className="pcard">
        {/* frosted glass body (content lives in here) */}
        <div className="pcard__glass">
          <div className="pcard__bar">
            <span className="pcard__dots"><i /><i /><i /></span>
            <span className="pcard__ctrl">
              <svg viewBox="0 0 60 14" aria-hidden="true">
                <path d="M2 11 H12" /><rect x="24" y="2" width="10" height="9" /><path d="M48 2 L58 12 M58 2 L48 12" />
              </svg>
            </span>
          </div>

          <div className="pcard__in">
            <div className="pcard__shot">
              {image ? <img src={image} alt={`${title} screenshot`} draggable="false" /> : <Art kind={art} />}
            </div>
            <div className="pcard__body">
              <h3 className="pcard__title">{title}</h3>
              <p className="pcard__sub">{subtitle}</p>
              <p className="pcard__desc">{description}</p>
            </div>
          </div>
        </div>

        {/* sharp glass edge + grey corner bracket (drawn on top) */}
        <span className="pcard__edge" aria-hidden="true" />
        <span className="pcard__bevel" aria-hidden="true" />
      </div>

      <a className="pfoot" href={link}>
        <span className="pfoot__num">{number}</span>
        <span className="pfoot__txt">
          <b>PROJECT {number}</b>
          <small>{tags.join(" · ")}</small>
        </span>
        <svg className="pfoot__arrow" viewBox="0 0 60 16" aria-hidden="true">
          <path d="M0 8 H56 M49 1 L57 8 L49 15" />
        </svg>
      </a>
    </article>
  );
}