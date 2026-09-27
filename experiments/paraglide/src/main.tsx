import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { getLocale, getTextDirection } from "./paraglide/runtime.js";
import { App } from "./App";

// Paraglide has no async "activate a catalog" step: the locale is resolved
// synchronously by runtime.js (cookie -> baseLocale, see vite.config.ts)
// and every m.* function reads it directly. There is nothing to await
// before the first render, unlike the lingui experiment's dynamicActivate().
document.documentElement.lang = getLocale();
document.documentElement.dir = getTextDirection();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
