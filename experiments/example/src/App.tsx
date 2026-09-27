import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <h1>example experiment</h1>
      <p>
        This is the template experiment. Copy this folder to start a new
        one — see the root README for the steps.
      </p>
      <button onClick={() => setCount((c) => c + 1)}>count is {count}</button>
    </main>
  );
}
