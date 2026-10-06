import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import { profile } from "../data/profile";

// The page that follows Projects. It slides in from the right while Projects slides out to the left.
// The photo + red panel stay; the right side switches About -> Skills -> Education as you scroll.
// (see animations/profileAnimations.js)
export default function Profile() {
  return (
    <section className="profile" id="about">
      <div className="profile__stage">
        <div className="pf-panel" />
        <div className="pf-portrait">
          <img src={profile.portrait} alt="Ullas R Gowda" draggable="false" />
        </div>

        {/* thin decorations */}
        <span className="pf-bracket pf-bracket--panel pf-deco" />
        <span className="pf-line pf-deco" />
        <span className="pf-mark pf-mark--1 pf-deco" />
        <span className="pf-mark pf-mark--2 pf-deco" />
        <span className="pf-vtext pf-deco">SCROLL</span>
        <svg className="pf-wire pf-deco" viewBox="0 0 2576 1259" aria-hidden="true">
          <path d="M893 320 L1030 180 L1420 180" pathLength="1" />
          <circle cx="893" cy="320" r="7" />
        </svg>
        <span className="pf-bracket pf-bracket--a pf-deco" />
        <span className="pf-bracket pf-bracket--b pf-deco" />
        <span className="pf-bottom pf-deco" />

        {/* one caption + one code snippet per page (they swap while you scroll) */}
        {profile.captions.map((t, i) => (
          <div key={t} className="pf-cap" data-i={i}>{t}</div>
        ))}
        {profile.code.map((t, i) => (
          <pre key={i} className="pf-code" data-i={i}>{t}</pre>
        ))}

        <div className="pf-slides">
          <About />
          <Skills />
          <Education />
        </div>

        <div className="pf-dashes pf-deco">
          <i className="pf-dash" /><i className="pf-dash" /><i className="pf-dash" />
        </div>
      </div>
    </section>
  );
}