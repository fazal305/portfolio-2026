import { projectStacks } from "./projectStacks.js";

const githubBase = "https://github.com/fazal305";
const pagesBase = "https://fazal305.github.io";

const project = (
  slug,
  name,
  category,
  liveUrl = `${pagesBase}/${slug}/`,
  extra = {},
) => {
  const id = slug.toLowerCase();
  const verifiedStack = projectStacks[id];

  return {
    id,
    name,
    category,
    stack: verifiedStack?.length ? verifiedStack : ["No application source"],
    githubUrl: `${githubBase}/${slug}`,
    liveUrl,
    metadataPending: false,
    ...extra,
  };
};

export const archiveProjects = [
  project("rss-news-dashboard", "RSS News Dashboard", "Data tools"),
  project("json-api-explorer", "JSON API Explorer", "Developer tools"),
  project("dataforge", "DataForge", "Data tools"),
  project("sitemap-visualizer", "Sitemap Visualizer", "Developer tools"),
  project(
    "api-response-comparator",
    "API Response Comparator",
    "Developer tools",
  ),
  project("config-file-manager", "Config File Manager", "Developer tools"),
  project("product-data-importer", "Product Data Importer", "Data tools"),
  project(
    "specforge-api-explorer",
    "SpecForge API Explorer",
    "Developer tools",
  ),
  project("postman-lite", "Postman Lite", "Developer tools"),
  project("json-schema-builder", "JSON Schema Builder", "Developer tools"),
  project("data-mapper", "Data Mapper", "Data tools"),
  project("devkit-studio", "DevKit Studio", "Developer tools", undefined, {
    isFlagship: true,
  }),
  project(
    "jira-lite-sprint-manager",
    "Jira Lite Sprint Manager",
    "Productivity",
  ),
  project("cms-admin-panel", "CMS Admin Panel", "Business applications"),
  project("crm-dashboard", "CRM Dashboard", "Business applications"),
  project(
    "hr-management-portal",
    "HR Management Portal",
    "Business applications",
  ),
  project(
    "school-management-dashboard",
    "School Management Dashboard",
    "Education",
  ),
  project(
    "browser-devtools-clone",
    "Browser DevTools Clone",
    "Browser technologies",
  ),
  project(
    "browser-memory-visualizer",
    "Browser Memory Visualizer",
    "Browser technologies",
  ),
  project("flexbox-grid-builder", "Flexbox Grid Builder", "Frontend tools"),
  project("rest-flow-designer", "REST Flow Designer", "Developer tools"),
  project("json-database-studio", "JSON Database Studio", "Database tools"),
  project("figma-lite", "Figma Lite", "Design tools"),
  project("fazal-labs", "Fazal Labs", "Project ecosystem", undefined, {
    isFlagship: true,
  }),
  project(
    "vbnet-algorithms-and-data-structures",
    "VB.NET Algorithms and Data Structures",
    "Computer science",
    null,
  ),
  project(
    "cpsim-web-and-office-automation",
    "CPSIM Web and Office Automation",
    "Automation",
    null,
  ),
  project("FazalAbbas305", "FazalAbbas305", "GitHub profile", null),
  project("should-i-do-it", "Should I Do It?", "Interactive experiments"),
  project(
    "roast-me-generator",
    "Roast Me Generator",
    "Interactive experiments",
  ),
  project(
    "reaction-speed-tester",
    "Reaction Speed Tester",
    "Interactive experiments",
  ),
  project(
    "fake-hacker-terminal",
    "Fake Hacker Terminal",
    "Interactive experiments",
  ),
  project(
    "zombie-survival-choice-game",
    "Zombie Survival Choice Game",
    "Games",
  ),
  project("boss-fight-button-masher", "Boss Fight Button Masher", "Games"),
  project(
    "nightshift-fm-radio-dashboard",
    "Nightshift FM Radio Dashboard",
    "Media",
  ),
  project("particle-reactor", "Particle Reactor", "Visual experiments"),
  project("devboard", "DevBoard", "Productivity"),
  project(
    "visual-algorithm-studio",
    "Visual Algorithm Studio",
    "Computer science",
  ),
  project(
    "karachi-transit-tracker",
    "Karachi Transit Tracker",
    "Civic technology",
  ),
  project("markdown-knowledge-base", "Markdown Knowledge Base", "Productivity"),
  project("firebase-habit-tracker", "Firebase Habit Tracker", "Productivity"),
  project("visual-query-builder", "Visual Query Builder", "Database tools"),
  project(
    "portfolio-website",
    "Portfolio Website",
    "Portfolio",
    "https://fazal-abbas-portfolio.web.app/",
  ),
  project(
    "firebase-project-suite",
    "Firebase Project Suite",
    "Web applications",
  ),
  project("decodelabs-static-agency", "DecodeLabs Static Agency", "Frontend"),
  project("nightcity-os", "NIGHTCITY OS", "Browser simulation", undefined, {
    isFlagship: true,
  }),
  project(
    "retro-arcade-dashboard",
    "Retro Arcade Dashboard",
    "Interactive experiments",
  ),
  project("physics-playground", "Physics Playground", "Visual experiments"),
  project(
    "HexSoftwares_Personal_Portfolio",
    "HexSoftwares Personal Portfolio",
    "Portfolio",
  ),
  project("CodeAlpha_MusicPlayer", "CodeAlpha Music Player", "Media"),
  project("CodeAlpha_ImageGallery", "CodeAlpha Image Gallery", "Media"),
  project(
    "nexsoft-chat-application-socketio",
    "NexSoft Chat Application",
    "Full-stack",
    "https://nexsoft-chat-application-socketio.onrender.com/",
  ),
  project(
    "nexsoft-blog",
    "NexSoft Blog",
    "Full-stack",
    "https://fazal305.github.io/nexsoft-blog/",
    {
      apiUrl: "https://nexsoft-blog.onrender.com",
    },
  ),
  project(
    "decodelabs-responsive-web-layout",
    "DecodeLabs Responsive Web Layout",
    "Frontend",
  ),
  project(
    "DecodeLabs-Internship",
    "DecodeLabs Internship",
    "Internship work",
    null,
  ),
  project("hexsoftwares-todo-app", "HexSoftwares Todo App", "Productivity"),
  project(
    "HexSoftwares_Resume_Website",
    "HexSoftwares Résumé Website",
    "Portfolio",
  ),
  project("CodeAlpha_Calculator_App", "CodeAlpha Calculator App", "Utilities"),
  project(
    "CodeAlpha_Portfolio_Website",
    "CodeAlpha Portfolio Website",
    "Portfolio",
  ),
  project(
    "nexsoft-portfolio",
    "NexSoft Portfolio",
    "Portfolio",
    "https://whimsical-cannoli-515ef2.netlify.app/",
  ),
  project("nexsoft-landing-page", "NexSoft Landing Page", "Frontend"),
  project("nexsoft-todo-app", "NexSoft Todo App", "Productivity"),
  project("nexsoft-calculator-app", "NexSoft Calculator App", "Utilities"),
  project("nexsoft-weather-app", "NexSoft Weather App", "Web applications"),
  project("nexsoft-notes-app", "NexSoft Notes App", "Productivity"),
  project("nexsoft-movie-search", "NexSoft Movie Search", "Web applications"),
  project(
    "nexsoft-admin-dashboard",
    "NexSoft Admin Dashboard",
    "Business applications",
  ),
  project("nexsoft-expense-tracker", "NexSoft Expense Tracker", "Finance"),
  project(
    "nexsoft-ecommerce",
    "NexSoft Ecommerce",
    "Ecommerce",
    "https://nexsoft-ecommerce.netlify.app/",
  ),
  project(
    "nexsoft-task-manager",
    "NexSoft Task Manager",
    "Productivity",
    "https://nexsoft-task-manager.netlify.app/",
  ),
  project(
    "decodelabs-interactive-web-elements",
    "DecodeLabs Interactive Web Elements",
    "Frontend",
  ),
  project(
    "rainwater-harvesting-eproject",
    "Rainwater Harvesting eProject",
    "Education",
  ),
  project(
    "HexSoftwares_WebMusicPlayer",
    "HexSoftwares Web Music Player",
    "Media",
  ),
  project(
    "HexSoftwares_AnimalCharityWebsite",
    "HexSoftwares Animal Charity Website",
    "Frontend",
  ),
  project("HexSoftwares_GymWebsite", "HexSoftwares Gym Website", "Frontend"),
  project(
    "HexSoftwares_CrowdfundingPlatform",
    "HexSoftwares Crowdfunding Platform",
    "Full-stack",
    `${pagesBase}/HexSoftwares_CrowdfundingPlatform/`,
    {
      apiUrl: "https://hexsoftwares-crowdfundingplatform.onrender.com/",
    },
  ),
  project(
    "HexSoftwares_BookLibrary",
    "HexSoftwares Book Library",
    "Web applications",
  ),
  project(
    "HexSoftwares_AnimatingWebsite",
    "HexSoftwares Animating Website",
    "Frontend",
  ),
  project(
    "civic-issue-resolution",
    "CivicConnect",
    "Civic technology",
    undefined,
    {
      isFlagship: true,
      stack: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "Firebase Firestore",
        "Leaflet",
        "OpenStreetMap",
      ],
      metadataPending: false,
    },
  ),
  project(
    "structured-data-engineering-studio",
    "Structured Data Engineering Studio",
    "Data tools",
  ),
  project(
    "database-engineering-studio",
    "Database Engineering Studio",
    "Database tools",
    undefined,
    {
      isFlagship: true,
      stack: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "jQuery",
        "SVG",
        "LocalStorage",
      ],
      metadataPending: false,
    },
  ),
  project(
    "fazal-framework",
    "Fazal Framework",
    "Frontend engineering",
    undefined,
    {
      isFlagship: true,
      stack: [
        "HTML5",
        "CSS3",
        "Vanilla JavaScript",
        "CSS Custom Properties",
        "LocalStorage",
      ],
      metadataPending: false,
    },
  ),
  project("Fazal-Notes", "Fazal Notes", "Productivity"),
  project(
    "react-fundamentals-starter-exercises",
    "React Fundamentals Starter Exercises",
    "React learning",
    null,
  ),
  project(
    "database-javascript-engineering-studio",
    "Database JavaScript Engineering Studio",
    "Database tools",
  ),
];

export const archiveStatus = {
  suppliedProjectCount: archiveProjects.length,
  isComplete: false,
  stackVerification: "complete",
  note: "Fazal Abbas must explicitly confirm that this contains every project to date.",
};

export default archiveProjects;
