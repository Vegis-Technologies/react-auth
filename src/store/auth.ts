import { create, type StateCreator } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const initializer: StateCreator<AuthState, [], [], AuthState> = (set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
});

const persistedInitializer = persist(initializer, {
  name: "auth-store",
  storage: createJSONStorage(() => localStorage),
});

export const useAuthStore = create(persistedInitializer);
