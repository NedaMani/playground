import { useState } from "react";
import { m } from "./paraglide/messages.js";
import { getLocale, setLocale, locales } from "./paraglide/runtime.js";

const localeLabels: Record<(typeof locales)[number], string> = {
  en: "English",
  fa: "فارسی",
};

export function App() {
  const locale = getLocale();
  const [name] = useState("Neda");
  const [messageCount, setMessageCount] = useState(1);

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <h1>{m.app_title()}</h1>

      <section>
        <label htmlFor="locale-select">{m.language_label()}: </label>
        <select
          id="locale-select"
          value={locale}
          // setLocale() writes the "cookie" strategy configured in
          // vite.config.ts and then does a full document navigation
          // (reload) — Paraglide messages are resolved once per document,
          // not re-rendered reactively like lingui's I18nProvider.
          onChange={(e) => setLocale(e.target.value as (typeof locales)[number])}
        >
          {locales.map((code: (typeof locales)[number]) => (
            <option key={code} value={code}>
              {localeLabels[code]}
            </option>
          ))}
        </select>
      </section>

      <hr />

      <section>
        <h2>{m.basic_message_heading()}</h2>
        <p>{m.hello_world()}</p>
      </section>

      <section>
        <h2>{m.interpolation_heading()}</h2>
        <p>{m.greeting({ name })}</p>
      </section>

      <section>
        <h2>{m.pluralization_heading()}</h2>
        <p>{m.inbox_message_count({ count: messageCount })}</p>
        <button onClick={() => setMessageCount((c) => Math.max(0, c - 1))}>
          -
        </button>
        <span style={{ margin: "0 0.5rem" }}>{messageCount}</span>
        <button onClick={() => setMessageCount((c) => c + 1)}>+</button>
      </section>

      <section>
        <h2>{m.formatting_heading()}</h2>
        {/* datetime formatting is locale-aware: Intl.DateTimeFormat under
            the hood, driven by the "today: datetime dateStyle=long"
            declaration in messages/{locale}.json. */}
        <p>{m.today_is({ today: new Date() })}</p>
      </section>

      <section>
        <h2>{m.generated_code_heading()}</h2>
        <p>{m.generated_code_body()}</p>
      </section>
    </main>
  );
}
