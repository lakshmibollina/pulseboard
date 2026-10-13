import { motion } from 'framer-motion';
import { hero } from '../data/content';

/* ---------- Pure-CSS product mockup ---------- */

const kpis = [
  { label: 'Active users', value: '48,291', delta: '+12.4%', up: true },
  { label: 'MRR', value: '$184.2k', delta: '+8.1%', up: true },
  { label: 'Churn', value: '1.9%', delta: '-0.3%', up: false },
];

const bars = [42, 58, 50, 70, 64, 82, 76, 94, 88, 100, 92, 110];

const sidebarItems = ['Overview', 'Reports', 'Funnels', 'Alerts', 'Audiences', 'Settings'];

function DashboardMockup() {
  return (
    <div className="relative">
      {/* Browser chrome frame */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-[0_40px_80px_-24px_rgba(40,87,229,0.28)]"
      >
        {/* Chrome bar */}
        <div className="flex items-center gap-2 border-b border-ink-100 bg-ink-50/70 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <div className="ml-3 flex flex-1 items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-xs text-ink-400 shadow-sm">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <rect x="5" y="11" width="14" height="9" rx="2" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
            app.pulseboard.io/overview
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="hidden w-44 shrink-0 border-r border-ink-100 bg-ink-50/40 p-3 sm:block">
            <div className="mb-3 flex items-center gap-2 px-2 pt-1">
              <span className="h-7 w-7 rounded-lg bg-gradient-to-br from-brand-500 to-violet-500" />
              <div>
                <div className="h-2 w-16 rounded bg-ink-200" />
                <div className="mt-1 h-1.5 w-10 rounded bg-ink-100" />
              </div>
            </div>
            {sidebarItems.map((item, i) => (
              <div
                key={item}
                className={`mb-1 flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium ${
                  i === 0 ? 'bg-white text-ink-900 shadow-sm' : 'text-ink-400'
                }`}
              >
                <span
                  className={`h-3.5 w-3.5 rounded ${i === 0 ? 'bg-brand-500' : 'bg-ink-200'}`}
                />
                {item}
              </div>
            ))}
          </div>

          {/* Main panel */}
          <div className="min-w-0 flex-1 p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="font-display text-sm font-bold text-ink-900 sm:text-base">
                  Growth overview
                </p>
                <p className="flex items-center gap-1.5 text-[11px] text-ink-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
                  Live · updated 4s ago
                </p>
              </div>
              <div className="rounded-full bg-brand-50 px-3 py-1.5 text-[11px] font-semibold text-brand-600">
                Last 30 days
              </div>
            </div>

            {/* KPI row */}
            <div className="mb-4 grid grid-cols-3 gap-2.5 sm:gap-3">
              {kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-xl border border-ink-100 bg-white p-2.5 shadow-sm sm:p-3"
                >
                  <p className="truncate text-[10px] font-medium text-ink-400 sm:text-[11px]">
                    {kpi.label}
                  </p>
                  <p className="font-display text-sm font-bold text-ink-900 sm:text-lg">
                    {kpi.value}
                  </p>
                  <p
                    className={`text-[10px] font-semibold sm:text-[11px] ${
                      kpi.up ? 'text-emerald-600' : 'text-rose-500'
                    }`}
                  >
                    {kpi.delta}
                  </p>
                </div>
              ))}
            </div>

            {/* Bar + line chart (pure CSS/SVG) */}
            <div className="rounded-xl border border-ink-100 bg-gradient-to-b from-brand-50/60 to-white p-3 sm:p-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[11px] font-semibold text-ink-700">Signups</p>
                <p className="text-[10px] text-ink-400">vs. previous period</p>
              </div>
              <div className="relative">
                <svg
                  viewBox="0 0 300 90"
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#2857e5" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2857e5" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#2857e5" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,70 C25,66 40,58 60,60 C80,62 95,44 120,46 C145,48 160,30 185,32 C210,34 225,20 250,22 C270,24 285,12 300,14 L300,90 L0,90 Z"
                    fill="url(#heroArea)"
                  />
                  <path
                    d="M0,70 C25,66 40,58 60,60 C80,62 95,44 120,46 C145,48 160,30 185,32 C210,34 225,20 250,22 C270,24 285,12 300,14"
                    fill="none"
                    stroke="url(#heroLine)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="250" cy="22" r="5" fill="#2857e5" stroke="#fff" strokeWidth="2.5" />
                </svg>
                <div className="flex h-24 items-end justify-between gap-1 sm:h-28">
                  {bars.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 0.7 + i * 0.05, duration: 0.5, ease: 'easeOut' }}
                      style={{ height: `${(h / 110) * 100}%` }}
                      className={`w-full origin-bottom rounded-sm ${
                        i === bars.length - 1
                          ? 'bg-gradient-to-t from-brand-600 to-violet-400'
                          : 'bg-brand-200/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating glass cards */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.15, duration: 0.6 }}
        className="absolute -left-4 top-16 hidden sm:block lg:-left-10"
      >
        <div className="animate-float-soft rounded-2xl border border-white/60 bg-white/70 p-4 shadow-lift backdrop-blur-xl">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-base">
              ⚡
            </span>
            <div>
              <p className="text-xs font-bold text-ink-900">Anomaly detected</p>
              <p className="text-[11px] text-ink-500">Checkout errors +340% · 2m ago</p>
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            <span className="rounded-full bg-ink-900 px-3 py-1 text-[11px] font-semibold text-white">
              View alert
            </span>
            <span className="rounded-full bg-ink-100 px-3 py-1 text-[11px] font-semibold text-ink-600">
              Dismiss
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.35, duration: 0.6 }}
        className="absolute -right-3 bottom-10 hidden sm:block lg:-right-8"
      >
        <div className="animate-float-soft-slow rounded-2xl border border-white/60 bg-white/70 p-4 shadow-lift backdrop-blur-xl">
          <p className="text-[11px] font-medium text-ink-500">Ask Pulseboard</p>
          <p className="mt-1 max-w-[200px] text-xs font-semibold text-ink-900">
            “Churn by plan, last 90 days”
          </p>
          <div className="mt-2.5 flex items-end gap-1">
            {[35, 55, 40, 70, 52, 85, 64].map((h, i) => (
              <span
                key={i}
                style={{ height: `${h * 0.45}px` }}
                className="w-3 rounded-sm bg-gradient-to-t from-brand-500 to-violet-400"
              />
            ))}
          </div>
          <p className="mt-2 text-[11px] font-semibold text-emerald-600">Chart ready in 1.2s ✓</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ---------- Hero section ---------- */

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
      {/* Background flourishes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60rem 30rem at 50% -8rem, rgba(97,147,246,0.16), transparent 70%), radial-gradient(40rem 24rem at 85% 30%, rgba(139,92,246,0.10), transparent 70%), radial-gradient(36rem 22rem at 10% 40%, rgba(61,113,241,0.08), transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(30,36,48,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,36,48,0.05) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 70% 55% at 50% 0%, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 55% at 50% 0%, black 30%, transparent 75%)',
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#features"
              className="group inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/70 py-1.5 pl-2 pr-4 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur transition-shadow hover:shadow-card"
            >
              <span className="rounded-full bg-brand-600 px-2.5 py-0.5 text-[11px] font-bold text-white">
                NEW
              </span>
              {hero.badge.replace('New · ', '')}
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl"
          >
            {hero.headlineA}{' '}
            <span className="text-gradient">{hero.headlineGradient}</span>{' '}
            {hero.headlineB}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-500 sm:text-lg"
          >
            {hero.subcopy}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <motion.a
              href="#cta"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 380, damping: 18 }}
              className="w-full rounded-full bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-soft sm:w-auto"
            >
              {hero.primaryCta} →
            </motion.a>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 380, damping: 18 }}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-ink-200 bg-white/70 px-8 py-4 text-base font-semibold text-ink-900 shadow-sm backdrop-blur transition-shadow hover:shadow-card sm:w-auto"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              {hero.secondaryCta}
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-5 text-xs text-ink-400 sm:text-sm"
          >
            {hero.note}
          </motion.p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl sm:mt-20">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
