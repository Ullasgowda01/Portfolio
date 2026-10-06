import HeroOrbit from "./HeroOrbit";

// Layer 3: you. Needs public/images/ullas.png (transparent cutout).
//   .hero-portrait        -> scroll animation (Step 6)
//   .hero-portrait__float -> idle floating (Step 5)
//   .hero-portrait__img   -> load-in animation (Step 5)
export default function HeroPortrait() {
  return (
    <div className="hero-portrait" data-layer="portrait">
      <HeroOrbit side="back" />
      <div className="hero-portrait__float">
        <img
          className="hero-portrait__img"
          src="/images/ullas.png"
          alt="Ullas R Gowda"
          draggable="false"
        />
      </div>
      <HeroOrbit side="front" />
      <div className="hero-portrait__fog" />
    </div>
  );
}