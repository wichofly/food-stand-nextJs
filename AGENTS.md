# Project Agent

## Stack

This project uses Next.js 16 with App Router, React, TypeScript, Tailwind CSS, Prisma 7, and Neon Postgres.

## Next.js Rules

Before changing Next.js code, read the relevant guide in:

node_modules/next/dist/docs/

Dynamic APIs such as `params` and `searchParams` are Promises and must be unwrapped with `await` or `React.use()`.

Prefer Server Components by default. Use `'use client'` only when the component needs hooks, state, events, or browser APIs.

## Prisma Rules

Use Prisma from:

src/lib/prisma

The seed script deletes and recreates categories/products. Do not run it unless the user understands that existing data will be replaced.

Use `dotenv/config` when running scripts that depend on `.env`.

## UI Rules

Use Tailwind CSS.

Keep styling consistent with existing components:

- `ProductCard`
- `CategoryIcon`
- `OrderSidebar`
- `ProductDetails`

For active category links, use `useParams()` in client components.

## Code Review Rules

When the user asks for a review, use a code-review stance.

Prioritize findings in this order:

- Bugs or runtime errors
- Next.js Server Component vs Client Component mistakes
- Incorrect use of async dynamic APIs like `params` or `searchParams`
- Prisma query or seed-data problems
- State management bugs in order/product flows
- Missing validation, empty states, or error handling
- Styling issues that break layout or usability
- Missing or weak verification steps

Start with findings, ordered by severity. Include the file path and line when possible.

Do not lead with a summary unless there are no findings.

Avoid broad refactors unless they directly reduce a real bug risk or match an existing project pattern.

For Prisma changes, check whether the schema, generated client, seed data, and database contents can drift from each other.

For UI changes, check that clickable areas, active states, disabled states, and responsive layout behave correctly.

After findings, include open questions or assumptions if needed, then a short change summary.

If no issues are found, say that clearly and mention any remaining test or verification gaps.

## Verification Rules

Prefer running the narrowest useful verification after changes.

Use:

- `npm run lint` for general TypeScript/ESLint checks
- focused Prisma queries when checking seed/database behavior
- `npm run build` when changing Next.js routing, layouts, or server/client boundaries

If a command cannot be run, state why and what risk remains.
