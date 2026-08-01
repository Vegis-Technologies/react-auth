# React Auth

Tutorial app for learning React authentication patterns with React Router, Context API, and form validation.

## Stack

- React 19 + TypeScript + Vite
- React Router for pages
- Auth context + `localStorage` persistence
- React Hook Form + Zod for login validation
- Tailwind CSS for UI

## Features

- Public pages: home, about, login
- Protected pages: dashboard, orders (show access denied when logged out)
- Shared `AuthProvider` / `useAuthContext` (see `src/contexts/auth.md`)
- Login form with email + password validation

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About |
| `/auth/login` | Login |
| `/dashboard` | Dashboard (protected) |
| `/orders` | Orders table (protected) |
| `*` | 404 |

## Setup

Requires Node.js 20+.

```bash
pnpm install
```

Or with npm:

```bash
npm install
```

## Run

Dev server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Preview production build:

```bash
pnpm preview
```

Lint:

```bash
pnpm lint
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Project layout

```
src/
  contexts/          # AuthProvider + useAuthContext
  components/        # Shared UI (e.g. AccessDenied)
  pages/
    auth/            # Login
    (protected)/     # Dashboard, orders
  schemas/           # Zod schemas
  App.tsx            # Routes + AuthProvider
```

## Auth flow (demo)

1. Visit `/dashboard` or `/orders` while logged out → access denied.
2. Go to `/auth/login`, submit a valid email + password (min 6 chars).
3. App sets `isAuthenticated` in context and `localStorage`.
4. Protected pages unlock. Logout clears the flag.

This is a front-end learning demo — no real backend auth yet.
