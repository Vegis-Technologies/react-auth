import { createContext, useContext, useEffect, useState } from "react";

export interface Orders {
  id: string;
  customer: string;
  date: string;
  total: string;
  status: string;
}

export const OrdersContext = createContext<Orders[] | null>(null)

export const OrdersProvide = ({ children }: { children: React.ReactNode}) => {
  
   const [orders] = useState<Orders[]>([


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
    
   ]
    );
    return (
        <OrdersContext.Provider
          value={
            orders }
        >
          {children}
        </OrdersContext.Provider>
      );
    };
    
   
    export const useOrdersContext = () => {
      const ordersContext = useContext(OrdersContext);
      if (!ordersContext) {
        throw new Error("Invalid");
      }
    
      return ordersContext;
    };