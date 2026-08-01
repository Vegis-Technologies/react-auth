import { create } from "zustand";

// Shape of a single order row
interface Order {
  id: string;
  customer: string;
  date: string;
  total: string;
  status: string;
}

// Store data + actions exposed by the hook
interface OrderState {
  orders: Order[];
  setOrders: (orders: Order[]) => void;
}

// create() → hook; set() updates state (start empty, fill from page/API later)
export const useOrderStore = create<OrderState>((set) => ({
  orders: [],
  setOrders: (payload: Order[]) => set({ orders: payload }),
}));
