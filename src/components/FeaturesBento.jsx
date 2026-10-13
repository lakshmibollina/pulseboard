import { motion } from 'framer-motion';
import { features } from '../data/content';

/* ---------- Tiny CSS visuals per feature cell ---------- */

function RealtimeVisual() {
  const bars = [38, 52, 46, 66, 58, 78, 70, 88, 80, 95];
  return (
    <div className="mt-5 flex h-24 items-end gap-1.5">
      {bars.map((h, i) => (
        <motion.span
          key={i}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, duration: 0.4, ease: 'easeOut' }}
          style={{ height: `${h}%` }}
          className="w-full origin-bottom rounded-t-md bg-gradient-to-t from-brand-500/90 to-brand-300"
        />
      ))}
    </div>
  );
}

function AlertsVisual() {
  return (
    <div className="mt-5 space-y-2.5">
      {[
        { dot: 'bg-amber-400', text: 'Checkout errors +340%', time: '2m' },
        { dot: 'bg-emerald-400', text: 'Signup spike — paid ads', time: '18m' },
      ].map((a, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.4 }}
          className="flex items-center gap-2.5 rounded-xl border border-ink-100 bg-white px-3 py-2.5 shadow-sm"
        >
          <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${a.dot} animate-pulse-dot`} />
          <span className="flex-1 truncate text-xs font-medium text-ink-700">{a.text}</span>
          <span className="text-[11px] text-ink-400">{a.time}</span>
        </motion.div>
      ))}
    </div>
  );
}

function NlqVisual() {
  return (
    <div className="mt-5 rounded-xl border border-ink-100 bg-white p-3 shadow-sm">
      <div className="flex items-center gap-2 rounded-lg bg-ink-50 px-3 py-2.5">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8694ab" strokeWidth="2.4">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <p className="truncate text-xs text-ink-700">
          Churn by plan, last 90 days<span className="animate-pulse">|</span>
        </p>
      </div>
      <div className="mt-2.5 flex items-end gap-1 px-1">
        {[30, 48, 38, 62, 50, 74, 60].map((h, i) => (
          <span
            key={i}
            style={{ height: `${h * 0.5}px` }}
            className="w-full rounded-sm bg-violet-400/80"
          />
        ))}
      </div>
    </div>
  );
}

function IntegrationsVisual() {
  const names = ['Stripe', 'Segment', 'Snowflake', 'Salesforce', 'Postgres', 'Zendesk'];
  return (
    <div className="mt-5 grid grid-cols-3 gap-2">
      {names.map((n, i) => (
        <motion.div
          key={n}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07, duration: 0.35 }}
          whileHover={{ y: -3 }}
          className="rounded-xl border border-ink-100 bg-white px-2 py-2.5 text-center shadow-sm"
        >
          <p className="truncate text-[11px] font-bold text-ink-700">{n}</p>
          <p className="text-[10px] font-medium text-emerald-600">Connected</p>
        </motion.div>
      ))}
    </div>
  );
}

function SecurityVisual() {
  const toggles = [
    { label: 'SSO / SAML', on: true },
    { label: 'Audit logs', on: true },
    { label: 'Data residency', on: false },
  ];
  return (
    <div className="mt-5 space-y-2.5">
      {toggles.map((t) => (
        <div
          key={t.label}
          className="flex items-center justify-between rounded-xl border border-ink-100 bg-white px-3.5 py-2.5 shadow-sm"
        >
          <span className="text-xs font-medium text-ink-700">{t.label}</span>
          <span
            className={`relative h-6 w-11 rounded-full transition-colors ${t.on ? 'bg-emerald-500' : 'bg-ink-200'}`}
          >
            <span
              className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${t.on ? 'left-[22px]' : 'left-0.5'}`}
            />
          </span>
        </div>
      ))}
      <p className="pt-1 text-center text-[11px] font-bold uppercase tracking-widest text-ink-400">
        SOC 2 Type II Certified
      </p>
    </div>
  );
}

function ApiVisual() {
  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2">
      <div className="overflow-hidden rounded-xl border border-ink-800 bg-ink-900 p-3.5 font-mono text-[11px] leading-relaxed shadow-sm">
        <p className="text-violet-300">GET <span className="text-white">/v1/metrics</span></p>
        <p className="text-ink-400">200 OK · 84ms</p>
        <p className="text-emerald-300">{'{'}</p>
        <p className="pl-3 text-ink-300">"mrr": <span className="text-amber-300">184200</span>,</p>
        <p className="pl-3 text-ink-300">"churn": <span className="text-amber-300">0.019</span></p>
        <p className="text-emerald-300">{'}'}</p>
      </div>
      <div className="flex flex-col justify-center gap-2.5">
        {[
          { name: 'metric.updated', time: '12:04:31' },
          { name: 'alert.triggered', time: '12:03:02' },
          { name: 'dashboard.shared', time: '11:58:47' },
        ].map((w) => (
          <div
            key={w.name}
            className="flex items-center justify-between rounded-xl border border-ink-100 bg-white px-3.5 py-2.5 shadow-sm"
          >
            <span className="font-mono text-[11px] font-semibold text-brand-700">{w.name}</span>
            <span className="font-mono text-[10px] text-ink-400">{w.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const visuals = {
  realtime: RealtimeVisual,
  alerts: AlertsVisual,
  nlq: NlqVisual,
  integrations: IntegrationsVisual,
  security: SecurityVisual,
  api: ApiVisual,
};

/* ---------- Bento grid ---------- */

export default function FeaturesBento() {
  return (
    <section id="features" className="scroll-mt-20 bg-gradient-to-b from-white to-brand-50/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Features</p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            Everything you need to <span className="text-gradient">know your numbers</span>
          </h2>
          <p className="mt-4 text-base text-ink-500 sm:text-lg">
            One platform for dashboards, alerts, exploration, and integrations — designed so the
            whole company actually opens it.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Visual = visuals[f.visual];
            return (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.08 }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-3xl border border-ink-100 bg-white p-6 shadow-card transition-shadow hover:shadow-lift sm:p-7 ${f.span}`}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-100/60 blur-3xl transition-opacity opacity-0 group-hover:opacity-100"
                />
                <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-700">
                  {f.tag}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-ink-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{f.description}</p>
                <Visual />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
