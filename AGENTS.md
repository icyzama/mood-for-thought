<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project rules

- Explain changes and important decisions in clear language so the project owner can learn from the work.
- Follow the approved Figma designs and support both desktop and mobile layouts. Check the relevant design before implementing a screen.
- Keep components and code readable. Avoid adding dependencies unless they are needed for the task.
- For each requested change, create a branch from an up-to-date main branch, make and verify the changes, commit them, push the branch, and open a pull request targeting main. Describe the changes and verification in the pull request. Keep main free of direct work; do not merge the pull request unless the user asks.
- When a bug is found, check for an existing GitHub issue first. If none exists, create an issue in this repository describing the problem, steps to reproduce, expected and actual behavior, and any relevant evidence. Avoid duplicate issues. If GitHub access is unavailable, tell the user and provide the issue details.
