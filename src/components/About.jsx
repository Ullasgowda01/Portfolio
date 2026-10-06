import { profile } from "../data/profile";

const TILE_LEFT = [47.5, 63.1, 78.7]; // % from the left for the three number tiles

// Page 1 of 3. Everything with className "pr" pops in when the page appears.
export default function About() {
  const { about, role } = profile;

  return (
    <div className="pslide" data-i="0">
      <h2 className="pf-title pr">ABOUT ME</h2>
      <p className="pf-sub pr">{role}</p>
      <p className="pf-meta pr">
        <span>● {about.location}</span>
        <span>{about.status}</span>
      </p>

      <div className="glassbox pf-about pr">
        <p>{about.text}</p>
      </div>

      {about.stats.map((s, i) => (
        <div key={s.label} className="glassbox pf-tile pr" style={{ left: `${TILE_LEFT[i]}%` }}>
          <b>
            {s.value}
            <i>+</i>
          </b>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}