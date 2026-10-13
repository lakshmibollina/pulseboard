import { useEffect, useRef, useState } from 'react';
import useInView from './useInView';

/**
 * useCountUp — animates a number from `start` to `end` once the element
 * scrolls into view, using requestAnimationFrame with an ease-out curve.
 *
 * Returns [ref, displayValue] where displayValue is a formatted string.
 */
export default function useCountUp({
  end,
  start = 0,
  duration = 1800,
  decimals = 0,
  prefix = '',
  suffix = '',
}) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [value, setValue] = useState(start);
  const rafRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    let startTime = null;
    const tick = (now) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(start + (end - start) * eased);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [inView, end, start, duration]);

  const formatted = `${prefix}${value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}${suffix}`;

  return [ref, formatted];
}
