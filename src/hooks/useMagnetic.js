import { useCallback, useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

/**
 * useMagnetic — makes an element drift slightly toward the cursor on hover
 * and spring back to rest on leave. Disabled on coarse (touch) pointers.
 *
 * @param {number} strength max pull in px (default 14)
 * @returns {{ ref, sx, sy, onMouseMove, onMouseLeave }} — attach ref +
 *   handlers to a motion wrapper and pass sx/sy as style x/y.
 */
export default function useMagnetic(strength = 14) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 17, mass: 0.45 });
  const sy = useSpring(y, { stiffness: 260, damping: 17, mass: 0.45 });

  const isFinePointer = () =>
    typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

  const onMouseMove = useCallback(
    (e) => {
      if (!isFinePointer()) return;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      // Pull is a fraction of the offset, clamped so it stays subtle.
      x.set(Math.max(-strength, Math.min(strength, dx * 0.28)));
      y.set(Math.max(-strength, Math.min(strength, dy * 0.28)));
    },
    [x, y, strength]
  );

  const onMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return { ref, sx, sy, onMouseMove, onMouseLeave };
}
