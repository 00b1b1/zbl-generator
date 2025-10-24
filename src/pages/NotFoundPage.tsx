import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center gap-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-10 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-3xl font-semibold text-slate-200">
        404
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-white">Page not found</h1>
        <p className="text-sm text-slate-400">The requested view is still on the roadmap. Navigate back to continue designing.</p>
      </div>
      <Link
        to="/"
        className="inline-flex items-center rounded-full bg-slate-200 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-white"
      >
        Return home
      </Link>
    </div>
  );
}

export default NotFoundPage;
