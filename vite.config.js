import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const usesCustomDomain = process.env.VITE_CUSTOM_DOMAIN === "true";

export default defineConfig({
  base: usesCustomDomain ? "/" : "/portfolio-2026/",
  plugins: [react()],
});
