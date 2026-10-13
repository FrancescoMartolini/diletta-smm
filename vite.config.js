import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // In locale "/", su GitHub Pages "/<nome-repo>/" (impostato dal workflow via VITE_BASE).
  base: process.env.VITE_BASE || "/",
  plugins: [react()],
});
