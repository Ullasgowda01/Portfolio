import { profile } from "../data/profile";

// Page 2 of 3: the floating glossy skill pills.
// Three nested layers on purpose: .pill (pops in) > .pill__tilt (static tilt) > .pill__in (floats + hover)
export default function Skills() {
  const { skills } = profile;

  return (
    <div className="pslide" data-i="1">
      <h2 className="pf-title pr">SKILLS</h2>
      <p className="pf-sub pr">{skills.subtitle}</p>

      {skills.pills.map((p, i) => (
        <div
          key={p.label}
          className="pill pr"
          style={{ left: `${p.left}%`, top: `${p.top}%`, width: `${p.w}%`, height: `${p.h}%` }}
        >
          <div className="pill__tilt" style={{ "--r": `${p.rot}deg` }}>
            <div className="pill__in" style={{ "--d": `${-i * 0.8}s` }}>
              {p.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}