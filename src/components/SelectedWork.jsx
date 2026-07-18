import { projects } from "../data/projects";
import ProjectArchiveTable from "./ProjectArchiveTable";
import ProjectCard from "./ProjectCard";
import "./SelectedWork.css";

function SelectedWork() {
  return (
    <section
      id="work"
      className="section selected-work section-anchor"
      aria-labelledby="selected-work-heading"
    >
      <div className="container">
        <header className="selected-work__header">
          <p className="section-label mono-label">
            01 <span aria-hidden="true">—</span> Selected work
          </p>

          <div className="selected-work__intro">
            <h2 id="selected-work-heading">
              Browser products built with structure and intent.
            </h2>

            <p>
              Selected projects demonstrating frontend architecture, browser
              APIs, data-driven interfaces, and practical JavaScript
              engineering.
            </p>
          </div>
        </header>

        <div className="selected-work__list">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} position={index} />
          ))}
        </div>

        <ProjectArchiveTable />
      </div>
    </section>
  );
}

export default SelectedWork;
