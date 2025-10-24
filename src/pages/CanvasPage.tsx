import { Ruler } from 'lucide-react';

const labelMeta = [
  ['Width', 'label-4in'],
  ['Height', 'label-6in']
] as const;

export function CanvasPage() {
  return (
    <section className="space-y-6">
      <header className="rounded-2xl border border-slate-800/60 bg-slate-900/70 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-slate-200">
              <Ruler className="h-6 w-6" />
            </span>
            <div>
              <h1 className="text-2xl font-semibold text-white">Canvas workspace</h1>
              <p className="text-sm text-slate-400">Interactive editor preview coming soon.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            {labelMeta.map(([label, token]) => (
              <span key={token} className="rounded-full bg-slate-800 px-3 py-1 font-medium text-slate-200 shadow">
                {label}
                <span className="ml-2 text-slate-400">{token}</span>
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-4 rounded-xl border border-dashed border-slate-700 bg-slate-900/50 p-6 text-sm text-slate-300">
          <div className="mx-auto flex h-label-6in w-full max-w-label-4in items-center justify-center rounded-lg border border-dashed border-slate-800 bg-slate-950/50">
            <span className="text-xs uppercase tracking-[0.3em] text-slate-500">Label preview placeholder</span>
          </div>
          <p>
            The live canvas will power Zebra layouts. Expect guides, rulers, snapping, dynamic data injection, and export pipelines to
            ZPL, PDF, and direct-to-printer flows.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-300">
          This placeholder illustrates Tailwind sizing tokens like <code className="rounded bg-slate-800 px-1">max-w-label-4in</code> for
          consistent thermal label proportions.
        </div>
      </div>
    </section>
  );
}

export default CanvasPage;
