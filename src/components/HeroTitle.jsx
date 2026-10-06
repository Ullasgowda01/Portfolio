// Layer 2: the giant PORTFOLIO text.
//
// Why SVG? `textLength` forces the word to span EXACTLY the width in your
// banner (1530 units), and the font-size sets the height. So it always
// matches the design, whatever the screen size.
//
// If the height looks off, change only FONT_SIZE and BASELINE:
//   Anton cap-height = 0.859 x font-size  ->  605 x 0.859 = 520 units tall
const WIDTH = 1530;
const FONT_SIZE = 605;
const BASELINE = 520;

export default function HeroTitle() {
  return (
    <div className="hero-title" data-layer="title" aria-hidden="true">
      <svg viewBox={`0 0 ${WIDTH} 560`} xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* bright red at the top, fading into the dark at the bottom */}
          <linearGradient id="portfolio-fill" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="560">
            <stop offset="0" stopColor="#ff0a0a" />
            <stop offset="0.26" stopColor="#f80606" />
            <stop offset="0.5" stopColor="#b50000" stopOpacity="0.8" />
            <stop offset="0.75" stopColor="#6a0000" stopOpacity="0.35" />
            <stop offset="1" stopColor="#3a0000" stopOpacity="0" />
          </linearGradient>
        </defs>
        <text
          x="0"
          y={BASELINE}
          textLength={WIDTH}
          lengthAdjust="spacingAndGlyphs"
          fill="url(#portfolio-fill)"
          style={{ fontFamily: "var(--font-display)", fontSize: FONT_SIZE }}
        >
          PORTFOLIO
        </text>
      </svg>
    </div>
  );
}