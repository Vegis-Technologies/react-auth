# Zustand State Management

How this project sets up Zustand stores (`src/store/`).

## What is Zustand?

Small React state library. No Provider tree required (unlike Context). You call a hook like `useOrderStore()` from any component.

## Setup steps

### 1. Install

```bash
pnpm add zustand
```

### 2. Create a store file

Add a file under `src/store/` (e.g. `order.ts`, `auth.ts`).

### 3. Define types

- Model type (what one item looks like) — e.g. `Order`
- State type (data + actions) — e.g. `OrderState` with `orders` + `setOrders`

### 4. Create the store with `create`

```ts
export const useOrderStore = create<OrderState>((set) => ({
  orders: [],
  setOrders: (payload) => set({ orders: payload }),
}));
```

- `create` returns a React hook
- `set` merges / replaces pieces of state
- Initial state lives in the object you return

### 5. Use the store in a component

```tsx
const orders = useOrderStore((state) => state.orders);
const setOrders = useOrderStore((state) => state.setOrders);

// or take whole slice
const { orders, setOrders } = useOrderStore();
```

Prefer selectors (`(state) => state.orders`) so the component only re-renders when that slice changes.

### 6. Optional: persist to `localStorage`

See `src/store/auth.ts` — wrap the initializer with `persist` + `createJSONStorage`:

```ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      isAuthenticated: false,
      setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
```

## Stores in this repo

| File | Purpose |
|------|---------|
| `src/store/auth.ts` | Auth flag + persist middleware |
| `src/store/order.ts` | Orders list + `setOrders` |

## Context vs Zustand

| | Context | Zustand |
|--|---------|---------|
| Provider needed? | Yes | No |
| Boilerplate | Higher | Lower |
| Good for | Tree-scoped values | App-wide client state |

Auth currently exists in both Context (`src/contexts/auth.tsx`) and Zustand (`src/store/auth.ts`) — pick one pattern per concern as you refactor.
