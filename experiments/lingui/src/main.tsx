import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { dynamicActivate } from "./i18n";
import { App } from "./App";

function Root() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    dynamicActivate("en").then(() => setIsReady(true));
  }, []);

  if (!isReady) return null;

  return (
    <I18nProvider i18n={i18n}>
      <App />
    </I18nProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
