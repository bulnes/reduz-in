<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Project Structure & Learnings

- **Core Stack**: Next.js `16.2.4`, React `19.2.5`, TypeScript, Jest `30.3.0`, Supabase JS `2.104.1`, Supabase SSR `0.10.2`, Nanoid `5.1.9`, Husky `9.1.7`, Commitlint `20.5.2`, Lint-Staged `16.4.0`, Prettier `3.8.3`, Playwright `1.59.1`, Standard Version `9.5.0`, Stylelint `16.26.1`, Zod `4.3.6`, Next Bundle Analyzer `16.2.4`.
- **Router**: Using **App Router** located in `src/app`.
- **Styling**: **Bootstrap 5** for primary layout and components. Vanilla CSS with **CSS Modules** (`*.module.css`) for specific overrides. Global styles in `src/app/globals.css`.
- **CSS Naming Convention**: All CSS rules must follow the **BEM** (Block Element Modifier) pattern (e.g., `.block__element--modifier`). Avoid camelCase in CSS classes.
- **Component Structure**: Each component must have its own folder within `src/components/`. All related files (CSS Modules, tests, sub-components, types) must reside within that folder. The main component file should be named `index.tsx` or be exported via an `index.ts`.
- **Fonts**: Uses `next/font` with **Geist** and **Geist Mono**.
- **Documentation**: Local version-matched docs are available in `node_modules/next/dist/docs/`.
- **Key Discovery**: For fixing slow client-side navigations, `Suspense` alone is not enough; `unstable_instant` must be exported from the route (see `node_modules/next/dist/docs/01-app/02-guides/instant-navigation.md`).
- **Proxy Convention**: The `middleware` file convention is deprecated in Next.js 16.2.4+. Use `proxy.ts` instead and export a `proxy` function (see `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md`).
- **AI Agent Guidance**: Specific instructions for agents are in `node_modules/next/dist/docs/01-app/02-guides/ai-agents.md`.
- **MCP Support**: Next.js 16+ has built-in MCP support via `next-devtools-mcp` for real-time app state access (see `node_modules/next/dist/docs/01-app/02-guides/mcp.md`).
- **Dependency Management**: Always use **absolute versions** in `package.json` (no `^` or `~`). When installing or updating, ensure versions are fixed to the specific version number.
- **Quality Gates**: Husky is configured with `commit-msg` (commitlint), `pre-commit` (lint-staged + type-check), and `pre-push` (full tests with 80% coverage + build check). GitHub Actions CI runs on every PR to main.
- **Linting & Formatting**: ESLint (Next.js config) + Prettier for code consistency. Stylelint for CSS (enforcing BEM). Automatically applied on changed files via `lint-staged`.
- **Testing Strategy**: Jest for unit tests (80% coverage threshold). Playwright for E2E tests in `src/e2e`.
- **Versioning**: Using `standard-version` for automated CHANGELOG and semantic versioning based on commits.

## Agent Maintenance Rules

- **Dependency Updates**: Every time a dependency is added, removed, or updated in `package.json`, you MUST update the **Core Stack** section in `AGENTS.md` to reflect the current versions and add any relevant learnings or breaking changes discovered.
- **Bootstrap Usage**: Always try to use native Bootstrap resources and styles, avoiding overriding the solutions it offers.
- **Documentation Language**: Even if the user communicates in another language, all documentation (AGENTS.md, code comments, technical docs) must be written in English.
- **Testing Coverage**: All new code must maintain a minimum of 80% unit test coverage. This is enforced globally in `jest.config.ts`.
