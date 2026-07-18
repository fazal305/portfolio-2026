import { readFile, writeFile } from "node:fs/promises";

const username = "fazal305";
const outputUrl = new URL("../src/data/gists.js", import.meta.url);
const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "portfolio-2026-gist-sync",
  "X-GitHub-Api-Version": "2022-11-28",
};

if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

const existingSource = await readFile(outputUrl, "utf8");
const existingModule = await import(`${outputUrl.href}?updated=${Date.now()}`);
const existingById = new Map(existingModule.gists.map((gist) => [gist.id, gist]));

const response = await fetch(`https://api.github.com/users/${username}/gists?per_page=100`, { headers });
if (!response.ok) {
  throw new Error(`GitHub Gist sync failed: ${response.status} ${response.statusText}`);
}

const publicGists = await response.json();
const titleFromFilename = (filename) =>
  filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());

const syncedGists = await Promise.all(
  publicGists.map(async (gist) => {
    const existing = existingById.get(gist.id);
    const firstFile = Object.values(gist.files)[0];
    let content = firstFile?.content ?? "";

    if (firstFile?.truncated && firstFile.raw_url) {
      const contentResponse = await fetch(firstFile.raw_url, { headers });
      if (contentResponse.ok) content = await contentResponse.text();
    }

    const wordCount = content.match(/\b[\p{L}\p{N}_-]+\b/gu)?.length ?? 0;

    return {
      id: gist.id,
      title: existing?.title ?? titleFromFilename(firstFile?.filename ?? "Untitled Gist"),
      summary: existing?.summary ?? gist.description ?? "Public engineering note on GitHub Gist.",
      url: gist.html_url,
      tags: existing?.tags ?? ["GitHub Gist"],
      readTime: `${Math.max(1, Math.ceil(wordCount / 220))} min read`,
      publishedAt: new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      }).format(new Date(gist.created_at)),
      featured: existing?.featured ?? false,
    };
  }),
);

const featuredCount = syncedGists.filter((gist) => gist.featured).length;
if (featuredCount !== 3) {
  throw new Error(`Expected exactly 3 featured Gists, found ${featuredCount}.`);
}

const serialized = `export const gistProfileUrl = "https://gist.github.com/${username}";\n\nexport const gists = ${JSON.stringify(syncedGists, null, 2)};\n\nexport const gistSyncConfig = {\n  username: "${username}",\n  profileUrl: gistProfileUrl,\n  strategy: "github-actions-build-time",\n  includeAllPublicGists: true,\n  calculateReadTime: true,\n  tokenEnvironmentVariable: "GITHUB_TOKEN",\n};\n\nexport default gists;\n`;

if (serialized !== existingSource) {
  await writeFile(outputUrl, serialized, "utf8");
  console.log(`Synced ${syncedGists.length} public Gists.`);
} else {
  console.log("Gist data is already current.");
}
