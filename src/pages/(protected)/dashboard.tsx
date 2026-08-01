import { Link } from "react-router";
import AccessDenied from "../../components/access-denied";
import { useAuthContext } from "../../contexts/auth";
import { useAuthStore } from "../../store/auth";

const DashboardPage = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <AccessDenied />;
  }

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <h1 className="text-lg font-semibold tracking-tight">Dashboard</h1>
          <nav className="flex items-center gap-4 text-sm">
            <Link to="/" className="text-zinc-600 hover:text-zinc-900">
              Home
            </Link>
            <Link to="/orders" className="text-zinc-600 hover:text-zinc-900">
              Orders
            </Link>
            <Link
              to="/auth/login"
              className="rounded-md border border-zinc-300 px-3 py-1.5 hover:bg-zinc-100"
              onClick={() => {
                setIsAuthenticated(false);
                // localStorage.removeItem("isAuthenticated");
              }}
            >
              Logout
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-2xl font-semibold tracking-tight">Welcome back</h2>
        <p className="mt-2 text-zinc-600">
          Protected area. Auth guard comes later.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-zinc-200 bg-white p-5">
            <p className="text-sm text-zinc-500">Sessions</p>
            <p className="mt-1 text-2xl font-semibold">1</p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-5">
            <p className="text-sm text-zinc-500">Status</p>
            <p className="mt-1 text-2xl font-semibold">Active</p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-5">
            <p className="text-sm text-zinc-500">Role</p>
            <p className="mt-1 text-2xl font-semibold">User</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DashboardPage;
