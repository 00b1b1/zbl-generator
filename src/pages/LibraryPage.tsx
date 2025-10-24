import { Bookmark } from 'lucide-react';

export function LibraryPage() {
  return (
    <section className="space-y-6">
      <header className="flex items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-slate-200">
            <Bookmark className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-2xl font-semibold text-white">Element library</h1>
            <p className="text-sm text-slate-400">Catalog of reusable building blocks.</p>
          </div>
        </div>
        <span className="hidden rounded-full border border-slate-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-slate-400 md:inline-flex">
          Coming soon
        </span>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 text-sm text-slate-300">
          Store frequently used assets such as logos, shipping templates, and dynamic data placeholders. Sync across your team for
          collaborative label generation.
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 text-sm text-slate-300">
          Use Zustand slices to hydrate this module with persisted elements, printer profiles, and datasources. The store skeleton is
          ready for integration.
        </div>
      </div>
    </section>
  );
}

export default LibraryPage;
