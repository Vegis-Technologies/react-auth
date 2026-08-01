import { Link } from "react-router";

const AccessDenied = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-zinc-50 text-zinc-900 px-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 bg-white text-sm font-semibold text-zinc-500">
        !
      </div>
      <h1 className="text-2xl font-semibold tracking-tight">Access denied</h1>
      <p className="max-w-sm text-center text-zinc-600">
        You need to sign in before viewing the dashboard.
      </p>
      <div className="flex gap-3">
        <Link
          to="/auth/login"
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800"
        >
          Sign in
        </Link>
        <Link
          to="/"
          className="rounded-md border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-100"
        >
          Home
        </Link>
      </div>
    </main>
  );
};

export default AccessDenied;
