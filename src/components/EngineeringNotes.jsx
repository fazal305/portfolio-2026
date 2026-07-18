import { gists, gistProfileUrl } from "../data/gists";
import "./ContentSections.css";

function NoteCard({ gist, index }) {
  return (
    <article className="note-card">
      <div className="note-card__meta mono-label">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>{gist.readTime}</span>
      </div>

      <h3>
        <a href={gist.url} target="_blank" rel="noreferrer">
          {gist.title}
        </a>
      </h3>

      <p>{gist.summary}</p>

      <ul aria-label={`${gist.title} categories`}>
        {gist.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <a
        className="note-card__link"
        href={gist.url}
        target="_blank"
        rel="noreferrer"
      >
        Read on GitHub Gist <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}

function EngineeringNotes() {
  const featuredGists = gists.filter((gist) => gist.featured);

  return (
    <section
      id="writing"
      className="section engineering-notes section-anchor"
      aria-labelledby="engineering-notes-heading"
    >
      <div className="container">
        <header className="engineering-notes__header">
          <p className="section-label mono-label">
            04 <span aria-hidden="true">—</span> Engineering notes
          </p>

          <div>
            <h2 id="engineering-notes-heading">
              Writing through the systems I build.
            </h2>
            <p>
              Architecture notes, implementation decisions, and lessons from
              building browser-based products.
            </p>
          </div>
        </header>

        <div className="engineering-notes__grid">
          {featuredGists.map((gist, index) => (
            <NoteCard key={gist.id} gist={gist} index={index} />
          ))}
        </div>

        <div className="engineering-notes__footer">
          <p>
            All {gists.length} public engineering notes are available on GitHub
            Gists.
          </p>
          <a href={gistProfileUrl} target="_blank" rel="noreferrer">
            View all GitHub Gists <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default EngineeringNotes;
