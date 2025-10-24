# ZBL Generator

Bootstrap scaffold for a Zebra label design studio powered by Vite, React 18, TypeScript, Tailwind CSS, React Router, and Zustand. The goal of this stack is to provide a ready-to-extend base for building barcode, QR, and thermal label workflows.

## Getting started

```bash
npm install
npm run dev
```

The development server runs on [http://localhost:5173](http://localhost:5173) with hot module replacement enabled. Tailwind CSS is configured in JIT mode, so utility classes are generated on the fly.

## Project scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Type-check and build the production bundle. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint with TypeScript, React, and accessibility rules. |
| `npm run format` | Format the repository with Prettier (append `-- --check` to dry-run). |
| `npm run typecheck` | Run the TypeScript compiler in no-emit mode. |
| `npm run test` | Execute the Vitest suite in a jsdom environment. |
| `npm run test:coverage` | Execute the tests with c8 coverage reporting. |

## Tech stack

- **Build tooling:** Vite + TypeScript (strict mode enabled)
- **UI:** React 18 with React Router v6, Tailwind CSS 3
- **State:** Zustand with Immer middleware ready for future slices
- **Validation:** Zod (available for schemas and runtime validation)
- **Icons & utilities:** Lucide, class-variance-authority, clsx
- **Label ecosystem:** bwip-js, jsbarcode, qrcode, html2canvas, jspdf, zpl-image
- **Testing:** Vitest, @testing-library/react, @testing-library/jest-dom
- **Linting & formatting:** ESLint, @typescript-eslint, eslint-plugin-jsx-a11y, Prettier

## Project structure

```
src/
├── canvas/          # Canvas-specific features and rendering helpers
├── components/      # Shared UI components
├── elements/        # Label element definitions and utilities
├── layouts/         # Application shells and higher-level layout components
├── pages/           # Routed page-level views
├── state/           # Zustand store slices and hooks
├── test/            # Vitest setup files and testing utilities
└── utils/           # Generic utilities and helpers
```

Aliases are provided through `tsconfig.json` (e.g. `@/` for `src/`, `@state/*` for store modules) and mirrored in `vite.config.ts`.

## Tailwind CSS

Tailwind is configured in `tailwind.config.ts` with additional sizing tokens (`label-2in`, `label-4in`, etc.) to ease Zebra label prototyping. Global styles and shared utilities live in `src/index.css`.

## State store skeleton

`src/state/store.ts` exposes a typed Zustand store using Immer middleware. Placeholder slices are defined for elements, canvas metadata, and undo/redo history. Extend these slices to add real behaviour and bind them to UI components.

## Testing

Vitest is set to use the jsdom environment. A sample test (`src/App.test.tsx`) ensures the root route renders correctly. Additional test utilities can be added to `src/test` as the application grows.

## Continuous integration

A GitHub Actions workflow (`.github/workflows/ci.yml`) is included to run linting, type checking, and tests on pull requests. Adjust the matrix or add deployment steps as needed.
