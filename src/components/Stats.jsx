import { motion } from 'framer-motion';
import useCountUp from '../hooks/useCountUp';
import { stats } from '../data/content';

function StatItem({ stat, index }) {
  const [ref, display] = useCountUp({
    end: stat.value,
    decimals: stat.decimals,
    prefix: stat.prefix || '',
    suffix: stat.suffix || '',
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="text-center"
    >
      <p className="font-display text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
        {display}
      </p>
      <p className="mx-auto mt-2 max-w-[220px] text-sm text-ink-500">{stat.label}</p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section aria-label="Pulseboard by the numbers" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
