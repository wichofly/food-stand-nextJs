# Project Agent

## Stack

This project uses Next.js with App Router, React, TypeScript, Tailwind CSS, Prisma 7, and Neon Postgres.

If a requested change would introduce a dependency or pattern outside the defined stack, flag it explicitly before proceeding and ask the user to confirm.

## Next.js Rules

Before changing Next.js code, read the relevant guide in:

node_modules/next/dist/docs/

Dynamic APIs such as `params` and `searchParams` are Promises and must be unwrapped with `await` or `React.use()`.

Prefer Server Components by default. Use `'use client'` only when the component needs hooks, state, events, or browser APIs.

## Prisma Rules

Use Prisma from:

src/lib/prisma

The seed script deletes and recreates categories/products. Do not run it unless the user understands that existing data will be replaced.

If the user asks to run the seed script, respond with the data-loss warning and require the user to reply with "I understand data will be replaced" before executing the command.

Use `dotenv/config` when running scripts that depend on `.env`.

## UI Rules

Use Tailwind CSS.

Keep styling consistent with existing components:

- `ProductCard`
- `CategoryIcon`
- `OrderSidebar`
- `ProductDetails`

Consistency means: use the same Tailwind spacing scale (for example p-4, gap-2), the same rounded-_ and shadow-_ classes, and the same conditional class pattern (for example clsx or ternary inline) as found in those components. When in doubt, read the file before writing new styles.

For active category links, use `useParams()` in client components.

## Code Review Rules

When the user asks for a review, use a code-review stance.

Prioritize findings in this order:

- Bugs or runtime errors
- Next.js Server Component vs Client Component mistakes
- Incorrect use of async dynamic APIs like `params` or `searchParams`
- Prisma query or seed-data problems, including schema/client/seed/database drift
- State management bugs in order/product flows
- Missing validation, empty states, or error handling
- Styling issues that break layout or usability, including clickable areas, active/disabled states, and responsive layout
- Missing or weak verification steps

Start with findings, ordered by severity. Include the file path and line when possible.

Do not lead with a summary unless there are no findings.

Do not rename, reorganize, or rewrite code outside the files directly involved in the requested change, unless the change is required to fix a confirmed bug in those files.

After findings, include open questions or assumptions if needed, then a short change summary.

If no issues are found, say that clearly and mention any remaining test or verification gaps.

## Verification Rules

Prefer running the narrowest useful verification after changes.

Use:

- `npm run lint` for general TypeScript/ESLint checks
- focused Prisma queries when checking seed/database behavior
- `npm run build` when changing Next.js routing, layouts, or server/client boundaries

When a change touches both TypeScript logic and routing or server/client boundaries, run both `npm run lint` and `npm run build`.

If a command cannot be run, state why and what risk remains.
