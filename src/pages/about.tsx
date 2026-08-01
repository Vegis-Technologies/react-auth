import { Link } from "react-router";

const AboutPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-zinc-50 text-zinc-900">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>
      <p className="text-zinc-600 max-w-md text-center">
        Demo app for learning React auth with protected routes.
      </p>
      <Link to="/" className="text-sm text-zinc-900 underline underline-offset-4">
        Back home
      </Link>
    </main>
  );
};

export default AboutPage;
