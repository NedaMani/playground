import { defineConfig } from "@lingui/cli";

// https://lingui.dev/ref/conf
export default defineConfig({
  sourceLocale: "en",
  locales: ["en", "fa"],
  catalogs: [
    {
      path: "<rootDir>/src/locales/{locale}",
      include: ["src"],
    },
  ],
});
