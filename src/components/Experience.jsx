import { educationEntries, experienceEntries } from "../data/experience";
import "./ProfileSections.css";

function CredentialLinks({ credentials, organization }) {
  if (!credentials?.length) {
    return null;
  }

  return (
    <ul
      className="experience-entry__credentials"
      aria-label={`${organization} credentials`}
    >
      {credentials.map((credential) => (
        <li key={credential.url}>
          <a
            href={`${import.meta.env.BASE_URL}${credential.url.replace(/^\//, "")}`}
            target="_blank"
            rel="noreferrer"
          >
            {credential.label}
            <span aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function InternshipProjects({ projects, organization }) {
  if (!projects?.length) {
    return null;
  }

  return (
    <details className="experience-entry__projects">
      <summary>
        View internship projects
        <span aria-hidden="true">↓</span>
      </summary>

      <ul aria-label={`${organization} internship projects`}>
        {projects.map((project) => (
          <li key={project.githubUrl}>
            <span>{project.name}</span>

            <div>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live <span aria-hidden="true">↗</span>
                </a>
              )}

              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </details>
  );
}

function ExperienceEntry({ entry }) {
  return (
    <article className="experience-entry">
      <div className="experience-entry__marker" aria-hidden="true">
        <span />
      </div>

      <div className="experience-entry__meta">
        <p className="date-label">{entry.dates}</p>
        <p>{entry.location}</p>
        <span className="experience-entry__status">{entry.status}</span>
      </div>

      <div className="experience-entry__content">
        <p className="experience-entry__organization">{entry.organization}</p>

        <h3>{entry.title}</h3>

        <p className="experience-entry__summary">{entry.summary}</p>

        <ul className="experience-entry__contributions">
          {entry.contributions.map((contribution) => (
            <li key={contribution}>{contribution}</li>
          ))}
        </ul>

        <CredentialLinks
          credentials={entry.credentials}
          organization={entry.organization}
        />

        <InternshipProjects
          projects={entry.projects}
          organization={entry.organization}
        />
      </div>
    </article>
  );
}

function EducationEntry({ entry }) {
  return (
    <article
      className={`education-entry${
        entry.isPlaceholder ? " education-entry--placeholder" : ""
      }`}
    >
      <div>
        <p className="mono-label">Education</p>
        <h3>{entry.institution}</h3>
      </div>

      <div>
        <p className="education-entry__program">{entry.program}</p>

        {entry.details && (
          <p className="education-entry__details">{entry.details}</p>
        )}

        {entry.isPlaceholder && (
          <span className="education-entry__pending mono-label">
            Details pending confirmation
          </span>
        )}
      </div>
    </article>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="section experience section-anchor"
      aria-labelledby="experience-heading"
    >
      <div className="container">
        <header className="experience__header">
          <p className="section-label mono-label">
            03 <span aria-hidden="true">—</span> Experience
          </p>

          <div>
            <h2 id="experience-heading">
              Practical work and continued learning.
            </h2>

            <p>
              Verified virtual internships supported by public completion
              credentials, followed by current education.
            </p>
          </div>
        </header>

        <div className="experience__timeline">
          {experienceEntries.map((entry) => (
            <ExperienceEntry key={entry.id} entry={entry} />
          ))}
        </div>

        <div className="experience__education" aria-label="Education">
          {educationEntries.map((entry) => (
            <EducationEntry key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
