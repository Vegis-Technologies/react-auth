import { useState } from "react";
import { Link } from "react-router";
import AccessDenied from "../../components/access-denied";
import { useAuthContext } from "../../contexts/auth";
import { useOrdersContext } from "../../contexts/orders";

const orders = [
  {
    id: "ORD-1001",
    customer: "Ada Lovelace",
    date: "2026-07-28",
    total: "$48.00",
    status: "Delivered",
  },
  {
    id: "ORD-1002",
    customer: "Alan Turing",
    date: "2026-07-30",
    total: "$112.50",
    status: "Shipped",
  },
  {
    id: "ORD-1003",
    customer: "Grace Hopper",
    date: "2026-08-01",
    total: "$29.99",
    status: "Pending",
  },
  {
    id: "ORD-1004",
    customer: "Katherine Johnson",
    date: "2026-08-01",
    total: "$75.20",
    status: "Processing",
  },
];

const statusClass: Record<string, string> = {
  Delivered: "bg-emerald-50 text-emerald-700",
  Shipped: "bg-sky-50 text-sky-700",
  Pending: "bg-amber-50 text-amber-700",
  Processing: "bg-zinc-100 text-zinc-700",
};

const OrdersPage = () => {
  const { isAuthenticated } = useAuthContext();
  const orders = useOrdersContext();

  if (!isAuthenticated) {
    return <AccessDenied />;
  }

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <h1 className="text-lg font-semibold tracking-tight">Orders</h1>
          <nav className="flex items-center gap-4 text-sm">
            <Link to="/dashboard" className="text-zinc-600 hover:text-zinc-900">
              Dashboard
            </Link>
            <Link
              to="/auth/login"
              className="rounded-md border border-zinc-300 px-3 py-1.5 hover:bg-zinc-100"
            >
              Logout
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-2xl font-semibold tracking-tight">Recent orders</h2>
        <p className="mt-2 text-zinc-600">
          Sample order list for the auth tutorial.
        </p>

        <div className="mt-8 overflow-x-auto rounded-lg border border-zinc-200 bg-white">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="border-b border-zinc-200 bg-zinc-50 text-zinc-500">
              <tr>
                <th className="px-4 py-3 font-medium">Order</th>
                <th className="px-4 py-3 font-medium">Customer</th>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Total</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-zinc-100 last:border-0"
                >
                  <td className="px-4 py-3 font-medium">{order.id}</td>
                  <td className="px-4 py-3">{order.customer}</td>
                  <td className="px-4 py-3 text-zinc-600">{order.date}</td>
                  <td className="px-4 py-3">{order.total}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block rounded-md px-2 py-0.5 text-xs font-medium ${
                        statusClass[order.status]
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default OrdersPage;
