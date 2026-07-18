const screenshotPlaceholder = (filename) => ({
  src: null,
  alt: null,
  filename,
  recommendedSize: "1600×1000",
  isPlaceholder: true,
});

export const projects = [
  {
    id: "fazal-labs",
    index: "01",
    name: "Fazal Labs",
    description:
      "A browser-based software portfolio ecosystem that organizes standalone projects into shared product suites, architecture documentation, design standards, roadmaps, changelogs, and deployment links.",
    role: "Sole designer and developer",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "CSS Custom Properties",
      "LocalStorage",
      "Blob API",
    ],
    challenge:
      "Organizing many independent repositories into one coherent ecosystem while keeping product, suite, roadmap, theme, and changelog data consistent across multiple pages.",
    solution:
      "Built a configuration-driven, local-first workspace that generates product views, suite pages, ecosystem relationships, and editable planning data from shared browser state.",
    githubUrl: "https://github.com/fazal305/fazal-labs",
    liveUrl: "https://fazal305.github.io/fazal-labs/",
    caseStudyUrl: null,
    caseStudyPending: true,
    screenshot: screenshotPlaceholder("fazal-labs-preview.png"),
  },
  {
    id: "database-engineering-studio",
    index: "02",
    name: "Database Engineering Studio",
    description:
      "A browser-based database engineering workspace for visually designing schemas, executing a defined SQL subset, exploring joins, generating queries, and learning normalization through connected tools.",
    role: "Sole designer and developer",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap 5",
      "jQuery",
      "SVG",
      "LocalStorage",
      "Blob API",
      "Clipboard API",
    ],
    challenge:
      "Supporting meaningful SQL execution in a static browser application without falsely presenting it as a complete database server.",
    solution:
      "Implemented a scoped JavaScript tokenizer, parser, and interpreter for documented SQL operations, connected to browser-stored schemas and table data.",
    githubUrl: "https://github.com/fazal305/database-engineering-studio",
    liveUrl: "https://fazal305.github.io/database-engineering-studio/",
    caseStudyUrl: null,
    caseStudyPending: true,
    screenshot: screenshotPlaceholder(
      "database-engineering-studio-preview.png",
    ),
  },
  {
    id: "nightcity-os",
    index: "03",
    name: "NIGHTCITY OS",
    description:
      "A modular browser-based desktop simulation featuring draggable application windows, taskbar behavior, notifications, persistent notes, weather data, Canvas visuals, themes, and responsive desktop interactions.",
    role: "Sole designer and developer",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Canvas API",
      "LocalStorage",
      "Open-Meteo API",
    ],
    challenge:
      "Coordinating desktop-style window states and interactions while keeping individual simulated applications modular.",
    solution:
      "Separated window management, desktop behavior, storage, widgets, Canvas rendering, and individual applications into focused JavaScript modules.",
    githubUrl: "https://github.com/fazal305/nightcity-os",
    liveUrl: "https://fazal305.github.io/nightcity-os/",
    caseStudyUrl: null,
    caseStudyPending: true,
    screenshot: screenshotPlaceholder("nightcity-os-preview.png"),
  },
  {
    id: "civicconnect",
    index: "04",
    name: "CivicConnect",
    description:
      "A multilingual civic issue reporting application for creating and managing municipal complaints involving waste collection, utilities, water supply, gas supply, and road damage.",
    role: "Frontend developer and product ideation contributor",
    rolePending: false,
    collaborators: ["Sufyan", "Sana"],
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript ES6",
      "jQuery 3.7.1",
      "Bootstrap 5.3.3",
      "Firebase Firestore",
      "Leaflet",
      "OpenStreetMap",
    ],
    challenge:
      "Individual engineering challenge pending confirmation from Fazal Abbas.",
    solution:
      "Individual implementation details pending confirmation from Fazal Abbas.",
    githubUrl: "https://github.com/fazal305/civic-issue-resolution",
    liveUrl: "https://fazal305.github.io/civic-issue-resolution/",
    caseStudyUrl: null,
    caseStudyPending: true,
    screenshot: screenshotPlaceholder("civicconnect-preview.png"),
  },
  {
    id: "devkit-studio",
    index: "05",
    name: "DevKit Studio",
    description:
      "A local-first developer toolkit combining JSON, XML, RSS, API testing, response comparison, schema generation, request collections, environments, and mock response workflows.",
    role: "Sole designer and developer",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap 5",
      "jQuery",
      "Fetch API",
      "DOMParser",
      "XMLSerializer",
      "LocalStorage",
      "Blob API",
      "Clipboard API",
    ],
    challenge:
      "Handling multiple recursive data operations and persistent API workflows consistently across a large collection of independent browser tools.",
    solution:
      "Created shared utilities and storage conventions while isolating each tool in a dedicated page and script, including recursive renderers, diffing, schema generation, and format conversion.",
    githubUrl: "https://github.com/fazal305/devkit-studio",
    liveUrl: "https://fazal305.github.io/devkit-studio/",
    caseStudyUrl: null,
    caseStudyPending: true,
    screenshot: screenshotPlaceholder("devkit-studio-preview.png"),
  },
  {
    id: "fazal-framework",
    index: "06",
    name: "Fazal Framework",
    description:
      "A small dependency-free frontend framework implementing routing, stateful components, observable stores, event buses, runtime theming, and plugins, accompanied by a working documentation site.",
    role: "Sole designer and developer",
    stack: [
      "HTML5",
      "CSS3",
      "Vanilla JavaScript",
      "CSS Custom Properties",
      "LocalStorage",
      "Blob API",
    ],
    challenge:
      "Designing cooperating framework modules without dependencies, build tools, native module imports, or a monolithic global implementation.",
    solution:
      "Created ordered, focused framework modules exposed through a documented namespace, with explicit subsystem dependencies and live demonstrations of every API.",
    githubUrl: "https://github.com/fazal305/fazal-framework",
    liveUrl: "https://fazal305.github.io/fazal-framework/",
    caseStudyUrl: null,
    caseStudyPending: true,
    screenshot: screenshotPlaceholder("fazal-framework-preview.png"),
  },
];

export default projects;
