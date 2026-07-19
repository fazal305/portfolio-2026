# Signal — Portfolio 2026

Production portfolio for Fazal Abbas, a frontend engineer and software engineering student based in Karachi.

The site presents selected browser-based products, a complete project archive, verified internship experience, public credentials, engineering notes, and direct contact links in a recruiter-friendly single-page layout.

## Technology

- React 19 and Vite 8
- Plain CSS with custom-property design tokens
- IntersectionObserver-based scroll reveals
- GitHub Actions and GitHub Pages
- Build-time GitHub Gist synchronization

No Bootstrap, jQuery, animation framework, fake terminal navigation, particle system, or dashboard shell is used in this portfolio.

## Local development

```powershell
npm install
npm run dev
```

Quality checks:

```powershell
npm run lint
npm run build
npm run preview
```

Refresh public Gist metadata locally:

```powershell
npm run sync:gists
```

## Content architecture

- `src/data/projects.js` — six flagship projects
- `src/data/archiveProjects.js` — supplied project archive
- `src/data/experience.js` — verified experience, education, project links, and credentials
- `src/data/gists.js` — all public GitHub Gists and three featured notes

The deployment workflow refreshes public Gists through GitHub before every build. Existing editorial titles, summaries, tags, and featured selections are retained. New public Gists are added automatically using their GitHub metadata.

Public Gist synchronization works without authentication. An optional `GIST_TOKEN` Actions secret can be added for a higher API rate limit. If GitHub is temporarily unavailable, deployment continues using the verified checked-in Gist data.

Project entries remain curated. GitHub can supply repository descriptions, languages, and homepage links automatically, but recruiter-facing selection and real screenshots still require editorial review. Add new projects to `archiveProjects.js` after checking their presentation and links.

## Verified real content

- Six confirmed flagship repositories and live demos
- Current résumé and profile photograph
- Verified GitHub and LinkedIn profiles
- Hex Softwares certificate and recommendation letter
- CodeAlpha certificate and recommendation letter
- Ten verified public GitHub Gists
- Verified internship dates and roles

## Deliberate placeholders and pending work

- Six flagship screenshot slots require real 1600×1000 captures
- Aptech program name and current education details require confirmation
- CivicConnect’s detailed personal task attribution can be expanded later
- Archive stacks are verified from repository languages, dependency manifests, and representative source files
- Case-study pages have not yet been written
- The archive contains every repository supplied so far; newly created projects must still be reviewed and added

No fake screenshots, dates, URLs, credentials, or employment claims are used.

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` deploys when `main` is pushed.

1. Open **Settings → Pages** in the GitHub repository.
2. Select **GitHub Actions** as the deployment source.
3. Push `main`.
4. Verify `https://fazal305.github.io/portfolio-2026/`.

Before the custom domain is activated, Vite builds with `/portfolio-2026/` as its base path.

## `fazal.is-a.dev`

After the default Pages deployment works:

1. Add `fazal.is-a.dev` under **Settings → Pages → Custom domain**.
2. Fork `is-a-dev/register`.
3. Follow the current is-a.dev GitHub Pages guide and add the required `domains/fazal.json` registration pointing its CNAME to `fazal305.github.io`.
4. Open a pull request and wait for approval and DNS publication.
5. Add the repository Actions variable `VITE_CUSTOM_DOMAIN=true`.
6. Re-run the Pages workflow so Vite builds for `/`.
7. Enable **Enforce HTTPS** after GitHub issues the certificate.

Confirm the latest registration format in the official is-a.dev documentation before opening the domain pull request.

## Accessibility and motion

- Semantic landmarks and heading hierarchy
- Keyboard-accessible navigation and visible focus states
- Skip-to-content link
- Reduced-motion support
- Responsive mobile, tablet, and desktop layouts
- Restrained IntersectionObserver reveals

## License

Portfolio source and personal content are owned by Fazal Abbas unless a referenced project states otherwise.
