# Food Stand Next.js

Web application for managing orders in a food stand/cafeteria.

It includes an order-taking flow by category, an admin panel for products, order management, and Postgres persistence with Prisma.

## Project Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Prisma 7 + adapter `@prisma/adapter-pg`
- Neon/Postgres (via `DATABASE_URL`)
- Zustand (local order state)
- Zod (validation)
- Cloudinary (`next-cloudinary`) for image uploads

## What Has Been Implemented So Far

### 1. Ordering Flow (Customer)

- Order entry route at `/order` with redirect to a default category (`/order/coffee`).
- Category navigation and product listing by category.
- Order sidebar with global state using Zustand:
  - Add products to the order.
  - Increase/decrease quantity.
  - Remove items.
  - Clear order when finished.
- Order creation in the database with `Order -> OrderProducts` relation.

### 2. Product Administration Panel

- Server-side paginated product listing.
- Product search.
- Product creation with validation.
- Editing existing products.
- Image upload with Cloudinary.

### 3. Order Management in Admin

- Pending orders view (`status = false`).
- Marking an order as completed (updates `status` and `orderReadyAt`).
- Route revalidation to refresh data without manually reloading the entire app.

### 4. Public Ready Orders Screen

- `/orders` view with latest ready orders (`status = true`), sorted by preparation time.
- Refresh button to revalidate content.

### 5. Database and Domain Model

- Models implemented in Prisma:
  - `Category`
  - `Product`
  - `Order`
  - `OrderProducts`
- Versioned migrations in `prisma/migrations`.
- Initial seed with sample categories and products.

## Main Structure

- `app/`: routes and layouts (customer, admin, and ready orders)
- `actions/`: server actions to create/update products and create/complete orders
- `components/`: UI and domain components (`admin`, `order`, `products`, `ui`)
- `src/lib/prisma.ts`: shared Prisma client
- `src/store.ts`: global order state with Zustand
- `src/zod/`: validation schemas
- `prisma/`: schema, migrations, and seed

## Environment Variables

Create a `.env` file with at least:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DB_NAME"
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET="your_upload_preset"
```

Note: `DATABASE_URL` is required. If missing, the app will fail when Prisma initializes.

## How to Run the Project

1. Install dependencies:

```bash
npm install
```

2. Run Prisma migrations:

```bash
npx prisma migrate dev
```

3. (Optional) Seed sample data:

```bash
npx tsx prisma/seed.ts
```

Warning: the seed script deletes and recreates categories and products.

4. Start the development environment:

```bash
npm run dev
```

Application available at `http://localhost:3000`.

## Available Scripts

- `npm run dev`: start Next.js in development mode.
- `npm run build`: build for production.
- `npm run start`: run the production build.
- `npm run lint`: run ESLint.

## Current Status

The project already has a functional MVP:

- Category-based order taking.
- Persistent orders and order-item details.
- Back-office for product administration.
- Pending and ready order workflow.

Recommended next phase: authentication/authorization for admin routes, and automated tests for critical flows.

## Deployment

The project is live on **Vercel**:
[Food Stand NextJs](https://food-stand-next-js.vercel.app/)
