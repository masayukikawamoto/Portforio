# AGENTS.md

## Cursor Cloud specific instructions

This is a Next.js 15 portfolio site (single project, not a monorepo). No external services, databases, or environment variables are required.

### Key commands

See `package.json` scripts for the standard commands:
- **Dev server**: `npm run dev` (starts Turbopack dev server on port 3000)
- **Lint**: `npm run lint`
- **Build**: `npm run build`

### Notes

- Tailwind CSS v4 is used; configuration is done via CSS imports in `src/styles/globals.css`, not `tailwind.config.ts` (which exists but is commented out).
- The dev server uses Turbopack (`next dev --turbopack`) for fast HMR.
- No automated test framework is configured in this project; there are no unit or integration tests.
- Navigation links in the header component (`src/components/Navigation.tsx`) are currently commented out; the two available routes are `/` and `/portfolio`.
