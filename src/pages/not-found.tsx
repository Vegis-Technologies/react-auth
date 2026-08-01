import { Link } from "react-router";

const NotFound = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-zinc-50 text-zinc-900 px-4">
      <p className="text-8xl font-semibold tracking-tighter text-zinc-400">404</p>
      <h1 className="text-2xl font-semibold tracking-tight -mt-4">Page not found</h1>
      <p className="text-zinc-600 text-center max-w-sm">
        Route missing or mistyped. Head home and try again.
      </p>
      <Link
        to="/"
        className="rounded-md bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800"
      >
        Back home
      </Link>
    </main>
  );
};

export default NotFound;
