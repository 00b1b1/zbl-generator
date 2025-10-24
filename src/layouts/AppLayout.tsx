import { Outlet, NavLink } from 'react-router-dom';
import { Layers, PanelsTopLeft, BookOpen } from 'lucide-react';
import clsx from 'clsx';

const navigation = [
  { to: '/', label: 'Overview', icon: Layers },
  { to: '/canvas', label: 'Canvas', icon: PanelsTopLeft },
  { to: '/library', label: 'Library', icon: BookOpen }
];

export function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-900/70 bg-slate-950/60 text-sm backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-slate-200">
              <PanelsTopLeft className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">ZBL Generator</p>
              <p className="text-base font-medium text-white">Thermal label workspace</p>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            {navigation.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  clsx(
                    'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition',
                    isActive
                      ? 'bg-slate-200 text-slate-900 shadow'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  )
                }
                end={to === '/'}
              >
                <Icon className="h-4 w-4" />
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-6 py-10">
        <Outlet />
      </main>

      <footer className="border-t border-slate-900/70 bg-slate-950/60">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4 text-xs text-slate-500">
          <span>&copy; {new Date().getFullYear()} Zebra Label Generator</span>
          <span>Built with Vite, TypeScript, Zustand, and Tailwind CSS.</span>
        </div>
      </footer>
    </div>
  );
}

export default AppLayout;
