// Layer 5 (left side): everything in front of the portrait on the left.
export default function HeroInfo() {
  return (
    <div className="hero-info" data-layer="info">
      <p className="hello">Hello, I'm</p>
      <span className="hello-line" />

      <h1 className="name">ULLAS R GOWDA</h1>

      <p className="role">
        SOFTWARE DEVELOPER
        <br />
        &amp; CSE STUDENT
      </p>
      <span className="role-line" />

      <p className="bio">
        I am a Computer Science student passionate
        <br />
        about building real-world applications, solving
        <br />
        problems, and learning new technologies.
        <br />
        I enjoy working on projects that combine clean
        <br />
        design, efficient systems, and meaningful impact.
      </p>

      <div className="location">
        <svg className="location__globe" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="#e8141c" />
          <g fill="none" stroke="#000" strokeOpacity="0.55" strokeWidth="1">
            <ellipse cx="12" cy="12" rx="5" ry="11" />
            <line x1="1" y1="12" x2="23" y2="12" />
            <path d="M3 6.5 Q12 9 21 6.5" />
            <path d="M3 17.5 Q12 15 21 17.5" />
          </g>
        </svg>
        <span>BASED IN INDIA</span>
        <span className="location__line" />
      </div>
    </div>
  );
}