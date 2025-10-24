import { Link } from 'react-router-dom';
import { LayoutTemplate } from 'lucide-react';

export function HomePage() {
  return ( 
    <div className="space-y-8">
      <header className="rounded-3xl bg-slate-900/70 p-10 shadow-xl shadow-slate-950/70">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex items-center gap-4 text-balance">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 text-slate-200">
              <LayoutTemplate className="h-7 w-7" />
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Welcome to</p>
              <h1 className="text-3xl font-semibold text-white sm:text-4xl">Zebra Label Generator</h1>
            </div>
          </div>
          <p className="max-w-xl text-sm text-slate-300">
            Quickly orchestrate barcode, QR, and thermal label assets with a canvas-first workflow.
            Start designing with drag-and-drop precision, or jump into the element library to reuse saved templates.
          </p>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800/60 bg-slate-900/60 p-6 backdrop-blur">
          <h2 className="text-lg font-medium text-white">Canvas workspace</h2>
          <p className="mt-2 text-sm text-slate-300">
            Compose layouts with snapping guides, measurement overlays, and Zebra-ready dimensions. Preview your output instantly.
          </p>
          <Link
            to="/canvas"
            className="mt-4 inline-flex w-fit items-center rounded-full bg-slate-200 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-white"
          >
            Open canvas
          </Link>
        </div>

        <div className="rounded-2xl border border-slate-800/60 bg-slate-900/60 p-6 backdrop-blur">
          <h2 className="text-lg font-medium text-white">Element library</h2>
          <p className="mt-2 text-sm text-slate-300">
            Store reusable components, variable data bindings, and printer profiles. Everything syncs with a single source of truth.
          </p>
          <Link
            to="/library"
            className="mt-4 inline-flex w-fit items-center rounded-full border border-slate-500/40 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-300 hover:text-white"
          >
            View library
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
