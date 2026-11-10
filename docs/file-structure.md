# File structure

This is a planning scaffold for the responsive Next.js app. The folders contain no application code yet. Add files as you implement each slice of the product.

```text
mood-for-thought/
├── docs/                       Product and implementation decisions
├── public/images/              Static images owned by the app
├── src/
│   ├── app/                    Next.js pages, layouts, and server routes
│   ├── components/ui/          Small reusable visual components
│   ├── features/
│   │   ├── auth/                Sign-in and save gate
│   │   ├── briefs/              Idea entry and brief confirmation
│   │   ├── directions/          Direction cards, detail, and refinement
│   │   ├── references/          Asset search and source/license display
│   │   ├── moodboards/          Moodboard editing and presentation
│   │   └── projects/            Saved projects and project navigation
│   ├── lib/
│   │   ├── ai/                  Server-only prompts and response schemas
│   │   └── supabase/            Client/server setup and data access
│   └── types/                  Types shared across features
└── supabase/migrations/         Versioned SQL schema and RLS policies
```

## Suggested routes

Create these routes when you build the corresponding feature. The exact URLs can evolve as the Figma flow is implemented.

| Route | Purpose |
| --- | --- |
| `/` | Landing page and start of a new brief |
| `/create` | Enter and confirm a branding brief |
| `/create/directions` | Compare three generated directions |
| `/create/directions/[directionId]` | Inspect and refine one direction |
| `/create/moodboard` | Collect references and arrange a board |
| `/projects` | List saved projects; requires sign-in |
| `/projects/[projectId]` | Resume a saved project; requires ownership |
| `/auth/callback` | Complete the chosen Supabase sign-in flow |

Keep page files in `src/app` thin. Put the feature's forms, state, validation, and view components under its `src/features` folder. Use `src/components/ui` only for genuinely shared controls. Keep secrets, AI calls, and trusted asset-source requests on the server.

## First files to add when you start coding

1. Project configuration: `package.json`, `tsconfig.json`, Tailwind setup, and `.env.example` with variable names only.
2. `src/app/layout.tsx`, `src/app/page.tsx`, and `src/app/globals.css`.
3. The brief form and its server endpoint, then direction generation and comparison.

The directories are deliberately empty so you can write the app yourself.
