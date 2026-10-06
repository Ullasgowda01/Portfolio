// Layer 1: black base + red glow + smoke + grain + vignette.
// Pure CSS (see App.css). GSAP will animate these in Step 5.
export default function HeroBackground() {
  return (
    <div className="hero-bg" data-layer="background" aria-hidden="true">
      <div className="hero-bg__glow" />
      <div className="smoke smoke--1" />
      <div className="smoke smoke--2" />
      <div className="smoke smoke--3" />
      <div className="smoke smoke--4" />
      <div className="hero-bg__grain" />
      <div className="hero-bg__vignette" />
    </div>
  );
}