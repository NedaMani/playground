import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { lingui, linguiTransformerBabelPreset } from "@lingui/vite-plugin";
import babel from "@rolldown/plugin-babel";

// Vite 8's `vite` package is rolldown-powered by default, so we follow
// Lingui's "Vite 8+ with Rolldown" setup: @vitejs/plugin-react handles
// the React/JSX transform via Oxc, and a separate Babel pass (via
// @rolldown/plugin-babel) expands only the Lingui macros.
// https://lingui.dev/installation#vite
export default defineConfig({
  plugins: [
    react(),
    lingui(),
    babel({
      presets: [linguiTransformerBabelPreset()],
    }),
  ],
});
