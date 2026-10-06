import { profile } from "../data/profile";

const TOPS = [35.5, 52, 68.5]; // % from the top for the three cards

// Page 3 of 3: a small timeline.
export default function Education() {
  const { education } = profile;

  return (
    <div className="pslide" data-i="2">
      <h2 className="pf-title pr">EDUCATION</h2>
      <p className="pf-sub pr">{education.subtitle}</p>

      <span className="pf-edu-line pr" />
      {education.items.map((e, i) => (
        <div key={e.title}>
          <span className="pf-edu-dot pr" style={{ top: `${TOPS[i] + 5.6}%` }} />
          <div className="glassbox pf-edu pr" style={{ top: `${TOPS[i]}%` }}>
            <div>
              <h3>{e.title}</h3>
              <p>{e.place}</p>
            </div>
            <span className={`yr${e.status ? " yr--live" : ""}`}>{e.status ? `${e.status} · ${e.year}` : e.year}</span>
          </div>
        </div>
      ))}
    </div>
  );
}