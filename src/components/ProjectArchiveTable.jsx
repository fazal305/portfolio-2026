import { useState } from "react";
import { archiveProjects } from "../data/archiveProjects";

const INITIAL_PROJECT_COUNT = 12;

function ProjectArchiveTable() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? archiveProjects
    : archiveProjects.slice(0, INITIAL_PROJECT_COUNT);

  return (
    <section
      className="project-archive"
      aria-labelledby="project-archive-heading"
    >
      <div className="project-archive__heading">
        <div>
          <p className="mono-label">Project archive</p>
          <h3 id="project-archive-heading">More projects</h3>
        </div>

        <p>
          A broader record of developer tools, browser experiments, internship
          assignments, and web applications.
        </p>
      </div>

      <div className="project-archive__table-wrapper">
        <table>
          <thead>
            <tr>
              <th scope="col">Project</th>
              <th scope="col">Category</th>
              <th scope="col">Stack</th>
              <th scope="col">
                <span className="visually-hidden">Project links</span>
              </th>
            </tr>
          </thead>

          <tbody>
            {visibleProjects.map((project) => (
              <tr key={project.id}>
                <th scope="row">{project.name}</th>
                <td>{project.category}</td>
                <td>
                  <span
                    className={
                      project.metadataPending
                        ? "archive-stack archive-stack--pending"
                        : "archive-stack"
                    }
                  >
                    {project.stack.join(" · ")}
                  </span>
                </td>
                <td>
                  <div className="project-archive__links">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.name} live project`}
                      >
                        Live <span aria-hidden="true">↗</span>
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.name} GitHub repository`}
                    >
                      GitHub <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {archiveProjects.length > INITIAL_PROJECT_COUNT && (
        <button
          className="project-archive__toggle"
          type="button"
          aria-expanded={showAll}
          onClick={() => setShowAll((current) => !current)}
        >
          {showAll
            ? "Show selected archive"
            : `View all ${archiveProjects.length} projects`}
          <span aria-hidden="true">{showAll ? "↑" : "↓"}</span>
        </button>
      )}

      <p className="project-archive__note mono-label">
        Stack verification is pending where explicitly marked.
      </p>
    </section>
  );
}

export default ProjectArchiveTable;
