# package-playground

A personal playground for trying out npm packages in a real
**React + Vite + TypeScript** environment — install a package, build a
small example, run it, understand it.

## Why this structure

- **Isolation** was the top priority, so each experiment is a standalone
  Vite project (own `package.json`, own lockfile entries via the pnpm
  workspace, own dev server) rather than one shared app importing every
  package. This avoids version/dependency clashes between experiments
  and matches the "install → try → run → understand → save" loop this
  repo is for.
- A shared `tsconfig.base.json` at the root holds only generic compiler
  options (target, strictness, JSX). It has no dependencies of its own,
  so extending it doesn't compromise isolation — it just avoids retyping
  the same 15 lines in every experiment.

## Getting started

```bash
pnpm install        # installs every experiment's dependencies
pnpm --filter example dev
```

## Current experiments

- **[`example`](./experiments/example)** — blank template
- **[`lingui`](./experiments/lingui)**
- **[`paraglide`](./experiments/paraglide)**
