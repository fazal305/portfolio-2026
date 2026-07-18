import "./ProfileSections.css";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive design",
      "React — growing practice",
      "Bootstrap",
      "jQuery",
    ],
  },
  {
    title: "Data & Services",
    skills: [
      "Firebase Firestore",
      "REST APIs",
      "JSON",
      "XML",
      "RSS",
      "Open-Meteo",
      "OpenStreetMap",
    ],
  },
  {
    title: "Browser Technologies",
    skills: [
      "DOM APIs",
      "Fetch API",
      "Canvas",
      "SVG",
      "LocalStorage",
      "Clipboard API",
      "Blob API",
    ],
  },
  {
    title: "Practices",
    skills: [
      "Responsive interfaces",
      "Data-driven UI",
      "Frontend architecture",
      "Accessibility foundations",
      "Git and GitHub",
      "GitHub Pages deployment",
    ],
  },
];

function About() {
  const profilePhotoUrl = `${import.meta.env.BASE_URL}profile-photo.jpg`;

  return (
    <section
      id="about"
      className="section about section-anchor"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <p className="section-label mono-label">
          02 <span aria-hidden="true">—</span> About
        </p>

        <div className="about__editorial">
          <div className="about__heading">
            <h2 id="about-heading">About me</h2>

            <figure className="about__portrait">
              <img
                src={profilePhotoUrl}
                alt="Fazal Abbas wearing a dark suit and glasses"
                loading="lazy"
              />

              <span
                className="about__portrait-corner about__portrait-corner--top"
                aria-hidden="true"
              />
              <span
                className="about__portrait-corner about__portrait-corner--bottom"
                aria-hidden="true"
              />
            </figure>
          </div>

          <div className="about__content">
            <p className="about__lead">
              I’m Fazal Abbas, a software engineering student and frontend
              engineer based in Karachi. I build ambitious browser-based
              products with strong JavaScript foundations and a growing React
              skill set.
            </p>

            <p>
              My work focuses on turning complex workflows into structured,
              usable interfaces. That includes developer tools, data
              applications, database visualizations, browser simulations, and
              civic technology. I enjoy working close to browser APIs and
              understanding the systems behind an interface rather than treating
              the UI as a collection of disconnected screens.
            </p>

            <p>
              I’m currently available for frontend roles and internships where I
              can contribute practical JavaScript experience while continuing to
              deepen my React and software engineering skills.
            </p>
          </div>
        </div>

        <div className="about__skills">
          {skillGroups.map((group) => (
            <section
              className="skill-group"
              key={group.title}
              aria-labelledby={`skill-${group.title
                .toLowerCase()
                .replaceAll(" ", "-")
                .replace("&", "and")}`}
            >
              <h3
                id={`skill-${group.title
                  .toLowerCase()
                  .replaceAll(" ", "-")
                  .replace("&", "and")}`}
              >
                {group.title}
              </h3>

              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
