import { writeFile } from "node:fs/promises";
import { archiveProjects } from "../src/data/archiveProjects.js";

const token = process.env.GITHUB_TOKEN;
if (!token) throw new Error("GITHUB_TOKEN is required for repository stack verification.");

const headers = {
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ${token}`,
  "User-Agent": "portfolio-2026-stack-verifier",
  "X-GitHub-Api-Version": "2022-11-28",
};

const api = async (url) => {
  const response = await fetch(url, { headers });
  if (!response.ok) throw new Error(`${url}: ${response.status} ${response.statusText}`);
  return response.json();
};

const textFile = async (url) => {
  const response = await fetch(url, { headers });
  if (!response.ok) return "";
  const data = await response.json();
  return data.content ? Buffer.from(data.content, "base64").toString("utf8") : "";
};

const languageNames = {
  HTML: "HTML5",
  CSS: "CSS3",
  JavaScript: "JavaScript",
  TypeScript: "TypeScript",
  "Visual Basic .NET": "VB.NET",
  Python: "Python",
  Java: "Java",
  PHP: "PHP",
  Shell: "Shell",
};

const dependencyNames = {
  react: "React",
  "react-dom": "React",
  vite: "Vite",
  firebase: "Firebase",
  appwrite: "Appwrite",
  express: "Express",
  "socket.io": "Socket.IO",
  "socket.io-client": "Socket.IO",
  bootstrap: "Bootstrap",
  jquery: "jQuery",
  leaflet: "Leaflet",
  redux: "Redux",
  "@reduxjs/toolkit": "Redux Toolkit",
  tailwindcss: "Tailwind CSS",
};

const contentSignals = [
  [/bootstrap(?:\.min)?\.(?:css|js)|getbootstrap/i, "Bootstrap"],
  [/jquery(?:\.min)?\.js|code\.jquery\.com/i, "jQuery"],
  [/firebase(?:-app|-firestore|-auth)?(?:-compat)?\.js|firebaseapp\.com|firestore/i, "Firebase"],
  [/leaflet(?:\.min)?\.(?:css|js)|unpkg\.com\/leaflet/i, "Leaflet"],
  [/openstreetmap|tile\.openstreetmap/i, "OpenStreetMap"],
  [/chart(?:\.min)?\.js|new Chart\s*\(/i, "Chart.js"],
  [/<canvas|CanvasRenderingContext2D|getContext\(["']2d/i, "Canvas API"],
  [/<svg|createElementNS\([^)]*svg/i, "SVG"],
  [/localStorage\./i, "LocalStorage"],
  [/fetch\s*\(/i, "Fetch API"],
  [/navigator\.geolocation/i, "Geolocation API"],
  [/domparser|new DOMParser/i, "DOMParser"],
];

const addUnique = (items, value) => {
  if (value && !items.includes(value)) items.push(value);
};

const repositories = archiveProjects
  .map((project) => ({ id: project.id, match: project.githubUrl.match(/github\.com\/([^/]+)\/([^/#?]+)/i) }))
  .filter((project) => project.match)
  .map((project) => ({ id: project.id, owner: project.match[1], repo: project.match[2] }));

const verified = {};

for (const [index, project] of repositories.entries()) {
  const repoUrl = `https://api.github.com/repos/${project.owner}/${project.repo}`;
  const repository = await api(repoUrl);
  const languages = await api(`${repoUrl}/languages`);
  const tree = await api(`${repoUrl}/git/trees/${repository.default_branch}?recursive=1`);
  const paths = tree.tree.filter((item) => item.type === "blob").map((item) => item.path);
  const stack = [];

  Object.entries(languages)
    .sort((left, right) => right[1] - left[1])
    .forEach(([language]) => addUnique(stack, languageNames[language] ?? language));

  const packagePath = paths.find((path) => path.toLowerCase() === "package.json");
  const sourcePaths = [
    packagePath,
    paths.find((path) => /^readme(?:\.md)?$/i.test(path)),
    ...paths.filter((path) => /(^|\/)index\.html$/i.test(path)).slice(0, 2),
    ...paths.filter((path) => /\.(?:js|jsx|ts|tsx)$/i.test(path)).slice(0, 3),
  ].filter(Boolean);

  const sources = [];
  for (const path of [...new Set(sourcePaths)]) {
    sources.push(await textFile(`${repoUrl}/contents/${path.split("/").map(encodeURIComponent).join("/")}`));
  }

  if (packagePath) {
    try {
      const manifest = JSON.parse(sources[0]);
      const dependencies = { ...manifest.dependencies, ...manifest.devDependencies };
      Object.keys(dependencies).forEach((dependency) => addUnique(stack, dependencyNames[dependency]));
      addUnique(stack, "Node.js");
    } catch {
      // A malformed or non-JSON manifest should not block verification of other signals.
    }
  }

  const combinedSource = sources.join("\n");
  contentSignals.forEach(([pattern, label]) => {
    if (pattern.test(combinedSource)) addUnique(stack, label);
  });

  verified[project.id] = stack.slice(0, 10);
  console.log(`[${index + 1}/${repositories.length}] ${project.repo}: ${verified[project.id].join(", ")}`);
}

const output = `// Generated from public repository source by scripts/sync-project-stacks.mjs.\n// Review before committing when repository architecture changes.\n\nexport const projectStacks = ${JSON.stringify(verified, null, 2)};\n\nexport default projectStacks;\n`;
await writeFile(new URL("../src/data/projectStacks.js", import.meta.url), output, "utf8");
console.log(`Verified ${Object.keys(verified).length} repository stacks.`);
