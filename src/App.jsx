import { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import { initSmoothScroll } from "./animations/scrollAnimations";

export default function App() {
  useEffect(() => initSmoothScroll(), []);

  return (
    <main>
      <Hero />
    </main>
  );
}