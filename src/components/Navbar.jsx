// Top bar, exactly like the banner: role on the left, status + sparkle on the right.
export default function Navbar() {
  return (
    <header className="nav" data-layer="nav">
      <div className="nav__brand">
        <span className="nav__role">SOFTWARE DEVELOPER</span>
        <span className="nav__sub">
          STUDENT<span className="nav__sep">|</span>JOB SEEKER
        </span>
      </div>

      <div className="nav__status">
        <span>OPEN TO OPPORTUNITIES</span>
        <svg className="nav__spark" viewBox="0 0 40 40" aria-hidden="true">
          {/* 4-point sparkle */}
          <path d="M20 0 C21.5 13 27 18.5 40 20 C27 21.5 21.5 27 20 40 C18.5 27 13 21.5 0 20 C13 18.5 18.5 13 20 0Z" fill="#ff2a2a" />
        </svg>
      </div>

      <div className="nav__line" />
    </header>
  );
}