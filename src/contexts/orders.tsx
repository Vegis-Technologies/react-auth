import { createContext, useContext, useState } from "react";
import { ORDERS } from "../constants/data";

interface Order {
  id: string;
  customer: string;
  date: string;
  total: string;
  status: string;
}

interface OrdersContextType {
  orders: Order[];
  setOrders: (orders: Order[]) => void;
}

const OrdersContext = createContext<OrdersContextType | null>(null);

export const OrdersProvider = ({ children }: { children: React.ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>(ORDERS);
  return (
    <OrdersContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrdersContext = () => {
  const ordersContext = useContext(OrdersContext);
  if (!ordersContext) {
    throw new Error("useOrdersContext must be used within an OrdersProvider");
  }
  return ordersContext;
};
