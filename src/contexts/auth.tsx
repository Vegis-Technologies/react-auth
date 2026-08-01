import { createContext, useContext, useEffect, useState } from "react";

// Shared auth shape for Provider value + consumers
interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

// Default null → useAuthContext can detect missing Provider
export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // Hydrate from localStorage so refresh keeps login state
  const localStorageIsAuthenticated = JSON.parse(
    localStorage.getItem("isAuthenticated") || "false"
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorageIsAuthenticated
  );

  // Persist auth flag whenever it changes
  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated.toString());
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Safe consumer hook — throws if used outside AuthProvider
export const useAuthContext = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext not found");
  }

  return authContext;
};
