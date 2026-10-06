import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import HeroBackground from "./HeroBackground";
import HeroTitle from "./HeroTitle";
import HeroPortrait from "./HeroPortrait";
import Navbar from "./Navbar";
import HeroInfo from "./HeroInfo";
import HeroStats from "./HeroStats";
import HeroHud from "./HeroHud";
import Projects from "./Projects";
import HeroZigzag from "./HeroZigzag";
import HeroNetwork from "./HeroNetwork";
import { playHeroIntro, startHeroIdle } from "../animations/heroAnimation";
import { initHeroScroll } from "../animations/scrollAnimations";
import { startZigzags } from "../animations/zigzagAnimation";
import { startNetwork } from "../animations/networkAnimation";

// Layer order (back -> front), all inside .stage-camera:
//   Title, Network (behind you), Portrait (with orbit halves), Navbar, Info, Stats, Zigzag, Hud
export default function Hero() {
  const root = useRef(null);

  useLayoutEffect(() => {
    let stopStreaks = () => { };
    let stopNetwork = () => { };
    const ctx = gsap.context(() => {
      playHeroIntro();
      startHeroIdle();
      initHeroScroll(root.current);
      stopStreaks = startZigzags();
      stopNetwork = startNetwork();
    }, root);
    return () => {
      stopStreaks();
      stopNetwork();
      ctx.revert();
    };
  }, []);

  return (
    <section className="hero" id="home" ref={root}>
      <HeroBackground />

      <div className="stage">
        <div className="stage-camera">
          <HeroTitle />
          <HeroNetwork />
          <HeroPortrait />
          <Navbar />
          <HeroInfo />
          <HeroStats />
          <HeroZigzag />
          <HeroHud />
        </div>
      </div>

      <Projects />
    </section>
  );
}