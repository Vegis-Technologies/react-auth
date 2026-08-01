import { Link } from "react-router";

const HomePage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-zinc-50 text-zinc-900">
      <h1 className="text-4xl font-semibold tracking-tight">React Auth</h1>
      <p className="text-zinc-600">Simple auth tutorial starter.</p>
      <nav className="flex gap-4">
        <Link
          to="/about"
          className="rounded-md border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-100"
        >
          About
        </Link>
        <Link
          to="/auth/login"
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800"
        >
          Login
        </Link>
      </nav>
    </main>
  );
};

export default HomePage;
