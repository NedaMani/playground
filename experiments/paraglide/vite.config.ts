import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { paraglideVitePlugin } from "@inlang/paraglide-js";

// https://paraglidejs.com (Vite plugin) — compiles messages/{locale}.json
// into typed message functions under src/paraglide on every dev/build run,
// the same way @lingui/vite-plugin compiles .po files for the lingui
// experiment. See ./project.inlang/settings.json and ../../README section
// on why the message-format plugin is loaded from node_modules instead of
// the jsdelivr URL shown in the official docs.
export default defineConfig({
  plugins: [
    react(),
    paraglideVitePlugin({
      project: "./project.inlang",
      outdir: "./src/paraglide",
      strategy: ["cookie", "baseLocale"],
      emitTsDeclarations: true,
    }),
  ],
});
