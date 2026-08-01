# Auth Context

How `src/contexts/auth.tsx` is built and used.

## Pieces

1. **`AuthContextType`** — shape of shared auth state: `isAuthenticated` + `setIsAuthenticated`.
2. **`AuthContext`** — React context created with `createContext`. Default is `null` so missing Provider is detectable.
3. **`AuthProvider`** — wraps the app, holds state, writes it into the context `value`.
4. **`useAuthContext`** — custom hook. Reads context via `useContext`. Throws if used outside `AuthProvider`.

## Persistence

- On load: read `isAuthenticated` from `localStorage` (JSON parse, default `false`).
- On change: `useEffect` writes the boolean back to `localStorage` as a string.

## Wire-up

1. Wrap the tree with `<AuthProvider>` (usually in `App` or `main`).
2. In any child: `const { isAuthenticated, setIsAuthenticated } = useAuthContext()`.
3. Login sets `true`. Logout / guard check uses `isAuthenticated`.

## Why context

Avoid prop-drilling auth flags through every page. One Provider, many consumers (dashboard, orders, login).
