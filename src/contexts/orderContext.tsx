import { createContext, useContext, useState } from "react";
interface Order{
    id: string,
    customer: string,
    date: string,
    total: string,
    status: 'Pending' | 'Delivered' | 'Processing' | 'Shipped'
}
const order: Order[] = [
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
  {
    id: "ORD-1004",
    customer: "Katherine Johnson",
    date: "2026-08-01",
    total: "$75.20",
    status: "Processing",
  },
];

    interface orderContext{
        isOrdered: Order[],
        setIsOrdered: (isOrdered: Order[]) => void,
        order: Order[]
    }

    export const OrderContext = createContext<orderContext | null>(null)

    export const OrderProvider = ({children}: {children: React.ReactNode}) => {
        const [isOrdered, setIsOrdered] = useState<Order[]>(order)
        return(
            <OrderContext.Provider
            value={{
                order,
                isOrdered,
                setIsOrdered,
            }}
            >
                {children}
            </OrderContext.Provider>
        )
    }

    export const useOrderContext = () => {
        const orderContext = useContext(OrderContext)
        if (!orderContext) {
            throw new Error("OrderContext not found")
        }
        return orderContext
    }