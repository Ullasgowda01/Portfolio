import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

// Sits on top of the hero. It starts off-screen to the right and slides in while you scroll.
// Then the row of cards moves left one card at a time: 4 replaces 1, 5 replaces 2, 6 replaces 3.
// (see animations/projectAnimations.js)
export default function Projects() {
  return (
    <section className="projects" id="projects">
      {/* glowing shapes behind the cards: this is what the frosted glass blurs */}
      <div className="projects__orbs" aria-hidden="true">
        <i /><i /><i /><i />
      </div>

      <header className="projects__head">
        <h2 className="projects__title">Selected Projects</h2>
        <span className="projects__rule" />
        <a className="projects__all" href="#projects">
          VIEW ALL PROJECTS
          <svg viewBox="0 0 60 16" aria-hidden="true">
            <path d="M0 8 H56 M49 1 L57 8 L49 15" />
          </svg>
        </a>
      </header>

      <div className="projects__stage">
        <div className="ptrack">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}