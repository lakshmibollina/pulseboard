import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { trustedBy } from '../data/content';

const wordmarkStyles = [
  'font-display font-extrabold tracking-tight',
  'font-display font-bold italic',
  'font-body font-bold tracking-[0.22em] uppercase text-[15px]',
  'font-display font-semibold tracking-wide',
  'font-body font-extrabold lowercase',
  'font-display font-bold tracking-tight',
  'font-body font-semibold tracking-[0.18em] uppercase text-[15px]',
  'font-display font-extrabold italic tracking-tight',
];

export default function LogoMarquee() {
  const doubled = [...trustedBy, ...trustedBy];

  // Scroll parallax: the band drifts slightly slower than the page.
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [36, -36]);

  return (
    <section ref={ref} aria-label="Trusted by" className="border-y border-ink-100 bg-white/60 py-10 sm:py-12">
      <motion.div style={{ y }}>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-400"
      >
        Trusted by data teams at
      </motion.p>

      <div
        className="marquee-mask relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        }}
      >
        <div className="animate-marquee flex w-max items-center gap-14 pr-14 sm:gap-20 sm:pr-20">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              aria-hidden={i >= trustedBy.length}
              className={`whitespace-nowrap text-lg text-ink-400 transition-colors hover:text-ink-700 sm:text-xl ${wordmarkStyles[i % wordmarkStyles.length]}`}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      </motion.div>
    </section>
  );
}
