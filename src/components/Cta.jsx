import { motion } from 'framer-motion';
import { cta } from '../data/content';

export default function Cta() {
  return (
    <section id="cta" className="scroll-mt-20 px-5 pb-24 sm:px-8 sm:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-600 via-brand-500 to-violet-600 px-6 py-16 text-center shadow-soft sm:px-12 sm:py-24"
      >
        {/* Decorative light flourishes */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(36rem 18rem at 50% -6rem, rgba(255,255,255,0.28), transparent 70%), radial-gradient(24rem 16rem at 90% 110%, rgba(255,255,255,0.14), transparent 70%)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 60% 80% at 50% 50%, black, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 80% at 50% 50%, black, transparent 75%)',
          }}
        />

        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            {cta.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {cta.subcopy}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <motion.a
              href="#top"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 380, damping: 18 }}
              className="w-full rounded-full bg-white px-8 py-4 text-base font-bold text-brand-700 shadow-lift sm:w-auto"
            >
              {cta.primaryCta} →
            </motion.a>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 380, damping: 18 }}
              className="w-full rounded-full border-2 border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              {cta.secondaryCta}
            </motion.a>
          </div>
          <p className="mt-6 text-xs text-white/70 sm:text-sm">
            Free 14-day trial · No credit card required · Set up in 30 minutes
          </p>
        </div>
      </motion.div>
    </section>
  );
}
