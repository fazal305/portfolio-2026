import { useEffect, useState } from "react";
import useStickyNav from "../hooks/useStickyNav";
import useTheme from "../hooks/useTheme";

const navigationItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  const isScrolled = useStickyNav();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <header className={`site-nav${isScrolled ? " site-nav--scrolled" : ""}`}>
      <div className="container site-nav__inner">
        <a
          className="site-nav__brand"
          href="#top"
          aria-label="Fazal Abbas — back to top"
          onClick={closeMenu}
        >
          <span className="site-nav__brand-mark" aria-hidden="true" />
          Fazal Abbas
        </a>

        <button
          className="site-nav__menu-button"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`site-nav__links${isMenuOpen ? " site-nav__links--open" : ""}`}
          aria-label="Primary navigation"
        >
          <ul>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>{item.label}</a>
              </li>
            ))}
          </ul>
          <a
            className="button button--compact site-nav__mobile-resume"
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Résumé <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <div className="site-nav__actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${nextTheme} theme`}
            aria-pressed={theme === "light"}
            title={`Switch to ${nextTheme} theme`}
            onClick={toggleTheme}
          >
            <span className="theme-toggle__icon" aria-hidden="true">
              {theme === "dark" ? "☼" : "☾"}
            </span>
            <span className="theme-toggle__label">
              {theme === "dark" ? "Light" : "Dark"}
            </span>
          </button>

          <a
            className="button button--compact site-nav__resume"
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Résumé <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Nav;
