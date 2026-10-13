import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pricingTiers } from '../data/content';

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-emerald-500"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function Price({ tier, yearly }) {
  if (tier.monthly === null) {
    return (
      <div className="mt-6 flex h-[52px] items-center">
        <span className="font-display text-4xl font-extrabold tracking-tight text-ink-900">
          Custom
        </span>
      </div>
    );
  }

  const amount = yearly ? Math.round(tier.yearly / 12) : tier.monthly;

  return (
    <div className="mt-6 flex h-[52px] items-end gap-2">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={amount}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="font-display text-5xl font-extrabold tracking-tight text-ink-900"
        >
          ${amount}
        </motion.span>
      </AnimatePresence>
      <span className="pb-1.5 text-sm text-ink-400">/ month</span>
    </div>
  );
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Pricing</p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            Simple pricing that <span className="text-gradient">scales with you</span>
          </h2>
          <p className="mt-4 text-base text-ink-500 sm:text-lg">
            Start free for 14 days. Upgrade when you are ready — every plan includes unlimited
            viewers.
          </p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center rounded-full border border-ink-200 bg-white p-1.5 shadow-sm">
            {['Monthly', 'Yearly'].map((label) => {
              const isYearly = label === 'Yearly';
              const active = yearly === isYearly;
              return (
                <button
                  key={label}
                  onClick={() => setYearly(isYearly)}
                  className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                    active ? 'text-white' : 'text-ink-500 hover:text-ink-900'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="billing-pill"
                      className="absolute inset-0 rounded-full bg-ink-900"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">
                    {label}
                    {isYearly && (
                      <span
                        className={`ml-1.5 rounded-full px-2 py-0.5 text-[11px] font-bold ${
                          active ? 'bg-emerald-400 text-ink-900' : 'bg-emerald-100 text-emerald-700'
                        }`}
                      >
                        -17%
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-xs text-ink-400">
            Yearly billing = 2 months free, on every paid plan.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative flex flex-col rounded-3xl p-8 transition-shadow ${
                tier.featured
                  ? 'border-2 border-brand-500 bg-white shadow-soft hover:shadow-lift lg:-my-4 lg:py-12'
                  : 'border border-ink-100 bg-white shadow-card hover:shadow-lift'
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-brand-600 to-violet-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-soft">
                  Most popular
                </span>
              )}

              <h3 className="font-display text-xl font-bold text-ink-900">{tier.name}</h3>
              <p className="mt-1.5 min-h-[40px] text-sm text-ink-500">{tier.tagline}</p>

              <Price tier={tier} yearly={yearly} />
              <p className="mt-1 h-5 text-xs text-ink-400">
                {tier.monthly !== null && yearly
                  ? `Billed annually ($${tier.yearly}/yr)`
                  : tier.monthly !== null
                    ? 'Billed monthly'
                    : 'Tailored to your scale'}
              </p>

              <motion.a
                href="#cta"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`mt-6 block rounded-full py-3.5 text-center text-sm font-semibold transition-shadow ${
                  tier.featured
                    ? 'bg-brand-600 text-white shadow-soft hover:shadow-lift'
                    : 'border border-ink-200 bg-white text-ink-900 hover:border-ink-300 hover:shadow-card'
                }`}
              >
                {tier.cta}
              </motion.a>

              <ul className="mt-8 space-y-3.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-ink-600">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-center text-sm text-ink-400"
        >
          All prices in USD. Startups under $5M raised get 50% off Growth for a year.
        </motion.p>
      </div>
    </section>
  );
}
