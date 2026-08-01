import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/home";
import LoginPage from "./pages/auth/login";
import DashboardPage from "./pages/(protected)/dashboard";
import OrdersPage from "./pages/(protected)/orders";
import AboutPage from "./pages/about";
import NotFound from "./pages/not-found";
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
