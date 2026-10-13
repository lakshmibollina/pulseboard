import { footerColumns, footerBottom } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-50/60">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          {/* Brand column */}
          <div className="col-span-2">
            <a href="#top" className="flex items-center gap-2.5" aria-label="Pulseboard home">
              <span className="flex h-9 w-9 items-center justify-end gap-[3px] rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 px-2">
                <span className="w-1 rounded-full bg-white/90" style={{ height: '40%' }} />
                <span className="w-1 rounded-full bg-white" style={{ height: '80%' }} />
                <span className="w-1 rounded-full bg-white/70" style={{ height: '55%' }} />
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-ink-900">
                Pulseboard
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500">
              The analytics platform your whole team will actually use. Live dashboards, anomaly
              alerts, and SQL-free exploration.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-dot" />
              All systems operational
            </div>
            <div className="mt-6 flex gap-3">
              {['X', 'in', 'Git'].map((label) => (
                <a
                  key={label}
                  href="#top"
                  aria-label={`Pulseboard on ${label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white text-xs font-bold text-ink-500 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-ink-400">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-ink-600 transition-colors hover:text-brand-600"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-100 pt-8 sm:flex-row">
          <p className="text-xs text-ink-400">{footerBottom[0]}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerBottom.slice(1).map((link) => (
              <a
                key={link}
                href="#top"
                className="text-xs text-ink-400 transition-colors hover:text-ink-700"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
