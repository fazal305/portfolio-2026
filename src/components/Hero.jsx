const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/fazal305/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fazal-abbas-4653dg86/",
  },
  {
    label: "Email",
    href: "mailto:fazalabbas2002@gmail.com",
  },
];

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual__frame">
        <svg viewBox="0 0 620 620" role="presentation" focusable="false">
          <defs>
            <linearGradient
              id="signal-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="var(--accent-secondary)" />
            </linearGradient>
          </defs>

          <circle className="hero-visual__orbit" cx="310" cy="310" r="214" />

          <circle
            className="hero-visual__orbit hero-visual__orbit--inner"
            cx="310"
            cy="310"
            r="142"
          />

          <path
            className="hero-visual__signal"
            d="M78 353L176 353L228 254L298 411L366 196L426 353L542 353"
          />

          <rect
            className="hero-visual__panel"
            x="184"
            y="156"
            width="252"
            height="308"
            rx="8"
          />

          <path className="hero-visual__panel-line" d="M214 202H326" />
          <path className="hero-visual__panel-line" d="M214 232H386" />
          <path className="hero-visual__panel-line" d="M214 262H350" />

          <rect
            className="hero-visual__module"
            x="214"
            y="314"
            width="82"
            height="96"
            rx="4"
          />

          <rect
            className="hero-visual__module"
            x="312"
            y="314"
            width="94"
            height="42"
            rx="4"
          />

          <rect
            className="hero-visual__module"
            x="312"
            y="368"
            width="94"
            height="42"
            rx="4"
          />

          <circle
            className="hero-visual__node hero-visual__node--one"
            cx="96"
            cy="353"
            r="7"
          />

          <circle
            className="hero-visual__node hero-visual__node--two"
            cx="542"
            cy="353"
            r="7"
          />

          <circle
            className="hero-visual__node hero-visual__node--three"
            cx="426"
            cy="353"
            r="7"
          />
        </svg>

        <span className="hero-visual__corner hero-visual__corner--top" />
        <span className="hero-visual__corner hero-visual__corner--bottom" />

        <div className="hero-visual__meta mono-label">
          <span>Signal / 2026</span>
          <span>Karachi, PK</span>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section
      id="top"
      className="hero hero-grid-background"
      aria-labelledby="hero-heading"
    >
      <div className="container hero__layout">
        <div className="hero__content">
          <p className="hero__eyebrow mono-label hero-reveal hero-reveal--one">
            <span aria-hidden="true" />
            Available for frontend roles and internships
          </p>

          <h1
            id="hero-heading"
            className="hero__heading hero-reveal hero-reveal--two"
          >
            Frontend Engineer{" "}
            <span className="hero__heading-accent">&amp;</span> Software
            Engineering Student
          </h1>

          <p className="hero__description hero-reveal hero-reveal--three">
            I build structured, interactive web applications with strong
            JavaScript foundations, browser APIs, and a growing React practice.
            Based in Karachi and interested in ambitious frontend products.
          </p>

          <div className="hero__actions hero-reveal hero-reveal--four">
            <a className="button button--primary" href="#work">
              View selected work
              <span aria-hidden="true">↓</span>
            </a>

            <a
              className="button button--secondary"
                href={resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              Download résumé
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <ul
            className="hero__socials hero-reveal hero-reveal--five"
            aria-label="Profile and contact links"
          >
            {socialLinks.map((link) => {
              const isEmail = link.href.startsWith("mailto:");

              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noreferrer"}
                  >
                    {link.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

export default Hero;
