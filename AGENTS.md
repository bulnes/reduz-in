<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project Structure & Learnings

- **Core Stack**: Next.js `16.2.4`, React `19.2.4`, TypeScript.
- **Router**: Using **App Router** located in `src/app`.
- **Styling**: Vanilla CSS with **CSS Modules** (`*.module.css`) and global styles in `src/app/globals.css`.
- **Fonts**: Uses `next/font` with **Geist** and **Geist Mono**.
- **Documentation**: Local version-matched docs are available in `node_modules/next/dist/docs/`.
- **Key Discovery**: For fixing slow client-side navigations, `Suspense` alone is not enough; `unstable_instant` must be exported from the route (see `node_modules/next/dist/docs/01-app/02-guides/instant-navigation.md`).
- **AI Agent Guidance**: Specific instructions for agents are in `node_modules/next/dist/docs/01-app/02-guides/ai-agents.md`.
- **MCP Support**: Next.js 16+ has built-in MCP support via `next-devtools-mcp` for real-time app state access (see `node_modules/next/dist/docs/01-app/02-guides/mcp.md`).
