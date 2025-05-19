import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  // Base path for GitHub Pages (replace with your repo name)
  const base = mode === "production" ? "/fantom-landing-page-spark/" : "/";

  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: "dist", // Ensure output directory matches gh-pages deployment
      rollupOptions: {
        external: [], // Add external dependencies here if needed
      },
    },
    preview: {
      port: 5000, // Local preview port for production builds
    },
  };
});