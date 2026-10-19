import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { init } from "./lib/bugwatcher.js";

const { hostname } = window.location;
const environment = /^(localhost|127\.0\.0\.1)$/.test(hostname)
  ? "development"
  : /-git-|-(?=[a-z]*\d)[a-z0-9]{9}-[a-z0-9]+\.vercel\.app$|^deploy-preview-\d+--.+\.netlify\.app$/.test(hostname)
    ? "staging"
    : "production";

if (environment !== "development") {
  init({
    key: "bwp_pk_WqoIBBHF8waEbPgyEkEQ3EM2MmYsVPclju466n6C",
    endpoint: "https://bugwatcher-pings-api.onrender.com/api/v1/ping",
    environment,
    maxReports: 20,
  });
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
