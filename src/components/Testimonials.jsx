import { motion } from 'framer-motion';
import { testimonials } from '../data/content';

function Stars({ rating }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true">
          <path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 7L12 17.3 5.8 21l1.6-7L2 9.3l7.1-.7L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function initials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('');
}

const avatarHues = [
  'from-brand-400 to-brand-600',
  'from-violet-400 to-violet-600',
  'from-emerald-400 to-emerald-600',
  'from-amber-400 to-orange-500',
  'from-sky-400 to-sky-600',
  'from-rose-400 to-rose-600',
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-20 bg-gradient-to-b from-brand-50/50 to-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            Testimonials
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            Loved by teams who <span className="text-gradient">live in their data</span>
          </h2>
          <p className="mt-4 text-base text-ink-500 sm:text-lg">
            4.9 out of 5 across 2,300+ verified reviews. Here is why teams stick around.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="flex flex-col rounded-3xl border border-ink-100 bg-white p-7 shadow-card transition-shadow hover:shadow-lift"
            >
              <Stars rating={t.rating} />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br font-display text-sm font-bold text-white ${avatarHues[i % avatarHues.length]}`}
                  aria-hidden="true"
                >
                  {initials(t.name)}
                </span>
                <div>
                  <p className="text-sm font-bold text-ink-900">{t.name}</p>
                  <p className="text-xs text-ink-500">
                    {t.title} · {t.company}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
