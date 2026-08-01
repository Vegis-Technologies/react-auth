
import { createContext, useContext, useState } from "react";
export type Order = {
  id: string;
  customer: string;
  date: string;
  total: string;
  status: string;
};

const sampleOrders: Order[] = [
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

type OrdersContextType = {
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
};

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export const OrdersProvider = ({ children }: { children: React.ReactNode }) => {
  const [orders, setOrders] = useState(sampleOrders);

  return (
    <OrdersContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrdersContext = () => {
  const context = useContext(OrdersContext);

  if (!context) {
    throw new Error("useOrdersContext must be used within OrdersProvider");
  }

  return context;
};