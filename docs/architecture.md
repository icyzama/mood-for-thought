# Architecture

## Product flow

1. **Idea:** A visitor enters a rough branding idea, audience, goals, and any constraints. The app may ask for a missing detail when it would change the result.
2. **Brief confirmation:** AI turns the input into a short structured brief. The visitor can edit it before generating directions.
3. **Explore:** AI returns three distinct creative directions. Each has a name, rationale, mood keywords, palette, typography guidance, and visual approach. The designer chooses; AI does not silently select a winner.
4. **Refine:** The designer requests changes to a chosen direction. Keep the earlier version available so a revision can be compared or undone.
5. **Find references:** Search real asset sources using the direction as context. Show source, creator, link, and license information supplied by the source. Never let the AI invent an asset URL or a license.
6. **Moodboard:** The designer selects references, adds notes, and arranges the board.
7. **Save:** Browsing and generation work as a guest. Prompt for sign-in when the visitor saves or opens Projects. After sign-in, persist the current draft and return to it.

This is the intended full product flow. The current Figma prototype covers the main brief-to-save path, but the reference finder, editing interactions, and all alternative branches still need design and implementation.

## System boundaries

```text
Browser (responsive Next.js UI)
  ├─ guest draft state and editor interactions
  ├─ authenticated project reads/writes ── Supabase Auth + Postgres (RLS)
  └─ server requests ── Next.js Route Handlers
       ├─ brief interpretation + direction generation/refinement ── OpenAI
       └─ reference search ── real asset source APIs

Supabase Storage holds user-uploaded board images when that feature is added.
```

- **Client:** Owns temporary guest drafts, input editing, direction selection, and moodboard interactions. A guest draft is local and may be lost if the browser state is cleared; explain this in the UI before relying on it for long work.
- **Next.js server:** Validates request input, calls OpenAI, normalizes asset-source results, and returns only data needed by the UI. API keys and provider credentials stay server-side. Put these endpoints under `src/app/api` as each feature is built.
- **Supabase:** Handles sign-in and stores user-owned projects and related records. Use row level security for every user-owned table and storage policy. The server still checks authorization for any privileged operation.

## Data model, first pass

These are conceptual entities, not SQL migrations yet. Decide columns and constraints while implementing each feature.

| Entity | Main responsibility |
| --- | --- |
| `projects` | Owner, title, timestamps, and current workflow stage |
| `briefs` | User input and confirmed structured brief for a project |
| `directions` | The three generated options and the selected option |
| `direction_revisions` | Previous and current refinements, with feedback and order |
| `references` | Source URL, creator, license metadata, attribution, and saved snapshot |
| `moodboards` | Board metadata and project relationship |
| `moodboard_items` | Ordered positions, reference or upload link, and designer notes |

Use the Supabase Auth user ID as `projects.owner_id`; child records inherit access through their project. Guests have no database project until they sign in and save. Treat third-party reference metadata as a snapshot and provide a link back to its source, since availability and terms can change.

## AI contract

Return structured data rather than free-form page copy. A direction should include an ID, title, concept, rationale, mood keywords, palette colors with roles, typography characteristics, image/style guidance, and a short list of search terms. Validate the response on the server before sending it to the UI. A refinement request should include the confirmed brief, selected direction, latest revision, and the designer's feedback; it should create a new revision rather than overwrite the old one.

Keep prompts focused on branding strategy and visual direction. Do not present generated references as real assets. Asset discovery is a separate search step against actual sources.

## Suggested implementation order

1. Set up Next.js, TypeScript, Tailwind, environment variable example, and responsive shell.
2. Build brief entry and confirmation with local guest state.
3. Add the server AI endpoints and render three directions.
4. Add direction detail and revision history.
5. Add real reference search and license/attribution display.
6. Add moodboard editing.
7. Add Supabase sign-in, project persistence, storage for uploads, and row level security.
8. Test the desktop/mobile flow, guest-to-signed-in save, ownership rules, and invalid AI/source responses.

Ship a vertical slice after each step. The first useful slice is idea → confirmed brief → three directions; it needs no account or database.
