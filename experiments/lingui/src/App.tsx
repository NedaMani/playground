import { useState } from "react";
import { Trans, Plural, Select, useLingui } from "@lingui/react/macro";
import { dynamicActivate, locales } from "./i18n";

export function App() {
  const { i18n, t } = useLingui();
  const [name] = useState("NedaMani");
  const [messageCount, setMessageCount] = useState(1);
  const [gender, setGender] = useState<"male" | "female">("male");

  return (
    <main
      dir={i18n.locale === "fa" ? "rtl" : "ltr"}
      style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}
    >
      <h1>
        <Trans>Lingui Playground</Trans>
      </h1>

      <section>
        <label htmlFor="locale-select">
          <Trans>Language</Trans>:{" "}
        </label>
        <select
          id="locale-select"
          value={i18n.locale}
          onChange={(e) => dynamicActivate(e.target.value)}
        >
          {Object.entries(locales).map(([code, label]) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>
      </section>

      <hr />

      <section>
        <h2>
          <Trans>Basic message</Trans>
        </h2>
        <p>
          <Trans>Hello, world!</Trans>
        </p>
      </section>

      <section>
        <h2>
          <Trans>Interpolation</Trans>
        </h2>
        <p>
          <Trans>Welcome, {name}!</Trans>
        </p>
        <button onClick={() => alert(t`Hello, ${name}!`)}>
          <Trans>Show alert (t macro)</Trans>
        </button>
      </section>

      <section>
        <h2>
          <Trans>Pluralization</Trans>
        </h2>
        <p>
          <Plural
            value={messageCount}
            one="There's # message in your inbox"
            other="There are # messages in your inbox"
          />
        </p>
        <button onClick={() => setMessageCount((c) => Math.max(0, c - 1))}>
          -
        </button>
        <span style={{ margin: "0 0.5rem" }}>{messageCount}</span>
        <button onClick={() => setMessageCount((c) => c + 1)}>+</button>
      </section>

      <section>
        <h2>
          <Trans>Select</Trans>
        </h2>
        <p>
          <Select
            value={gender}
            _male="He updated his profile"
            _female="She updated her profile"
            other
          />
        </p>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value as typeof gender)}
        >
          <option value="female">
            <Trans>female</Trans>
          </option>
          <option value="male">
            <Trans>male</Trans>
          </option>
        </select>
      </section>
    </main>
  );
}
