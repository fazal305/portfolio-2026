import { useRef } from "react";

function ProjectScreenshot({ project }) {
  if (project.screenshot?.isPlaceholder) {
    return (
      <div className="project-card__placeholder">
        <strong>Screenshot needed</strong>
        <span>Add screenshot: {project.screenshot.filename}</span>
        <span>Recommended size: {project.screenshot.recommendedSize}</span>
      </div>
    );
  }

  return (
    <img
      className="project-card__image"
      src={project.screenshot.src}
      alt={project.screenshot.alt}
      loading="lazy"
    />
  );
}

function ProjectCard({ project, position }) {
  const previewRef = useRef(null);

  const handlePointerMove = (event) => {
    if (event.pointerType === "touch" || !previewRef.current) {
      return;
    }

    const bounds = previewRef.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    previewRef.current.style.setProperty("--parallax-x", `${x * 7}px`);
    previewRef.current.style.setProperty("--parallax-y", `${y * 7}px`);
  };

  const resetParallax = () => {
    if (!previewRef.current) {
      return;
    }

    previewRef.current.style.setProperty("--parallax-x", "0px");
    previewRef.current.style.setProperty("--parallax-y", "0px");
  };

  return (
    <article
      className={`project-card ${
        position % 2 === 1 ? "project-card--reverse" : ""
      }`}
    >
      <div
        ref={previewRef}
        className="project-card__preview"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetParallax}
      >
        <span className="project-card__corner project-card__corner--top" />
        <span className="project-card__corner project-card__corner--bottom" />

        <div className="project-card__preview-inner">
          <ProjectScreenshot project={project} />
        </div>
      </div>

      <div className="project-card__content">
        <p className="project-card__index mono-label">
          {project.index} / {project.name}
        </p>

        <h3>{project.name}</h3>

        <p className="project-card__description">{project.description}</p>

        <div className="project-card__detail">
          <span className="mono-label">Role</span>
          <p>{project.role}</p>
        </div>

        <div className="project-card__detail">
          <span className="mono-label">Engineering focus</span>
          <p>{project.challenge}</p>
        </div>

        <ul
          className="project-card__stack"
          aria-label={`${project.name} technology stack`}
        >
          {project.stack.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-card__links">
          {project.caseStudyUrl ? (
            <a href={project.caseStudyUrl} target="_blank" rel="noreferrer">
              View case study <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="project-card__pending">Case study pending</span>
          )}

          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Live project <span aria-hidden="true">↗</span>
          </a>

          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
