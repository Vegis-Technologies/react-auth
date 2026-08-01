# Task: Orders Context

## Goals

1. Checkout to a new branch with format `username-*`
2. Create a context for orders
3. Wrap `OrdersContext` over the `BrowserRouter`
4. Get the list of orders from the context in the orders page

## Steps

### 1. Branch

```bash
git checkout -b username-orders-context
```

Replace `username` with your GitHub / local username. Example: `chibykes-orders-context`.

### 2. Create Orders context

Add something like `src/contexts/orders.tsx`:

- Define an order type (`id`, `customer`, `date`, `total`, `status`, etc.)
- Create `OrdersContext` with `createContext`
- Build `OrdersProvider` that holds the orders list in state (can start with the sample data currently hardcoded in the orders page)
- Export a `useOrdersContext` hook that throws if used outside the provider

### 3. Wrap the provider

In `src/App.tsx`, wrap `OrdersProvider` **over** `BrowserRouter` (outside or around it — provider must sit above routes so every page can read orders):

```tsx
<AuthProvider>
  <OrdersProvider>
    <BrowserRouter>
      <Routes>{/* ... */}</Routes>
    </BrowserRouter>
  </OrdersProvider>
</AuthProvider>
```

### 4. Use context on the orders page

In `src/pages/(protected)/orders.tsx`:

- Remove the local hardcoded `orders` array
- Call `useOrdersContext()` and read the orders list from context
- Render the table from that list

## Done when

- [ ] Branch named `username-*`
- [ ] `OrdersProvider` + `useOrdersContext` exist
- [ ] Provider wraps `BrowserRouter` in `App.tsx`
- [ ] Orders page reads orders from context (no local sample array)
