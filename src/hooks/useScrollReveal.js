import { useEffect } from "react";

const revealSelector = [
  ".selected-work__header",
  ".project-card",
  ".project-archive",
  ".about__editorial",
  ".skill-group",
  ".experience__header",
  ".experience-entry",
  ".education-entry",
  ".engineering-notes__header",
  ".note-card",
  ".engineering-notes__footer",
  ".contact__content",
].join(",");

function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(revealSelector));
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    elements.forEach((element, index) => {
      element.classList.add("reveal-target");
      element.style.setProperty("--reveal-delay", `${(index % 3) * 70}ms`);
    });

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-revealed"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

export default useScrollReveal;
