import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * CursorDot — a small accent dot that trails the cursor site-wide.
 * Never mounted on coarse pointers (touch) or when the user prefers
 * reduced motion. The native cursor stays visible; this is an accent,
 * not a replacement.
 */
export default function CursorDot() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 550, damping: 45, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 550, damping: 45, mass: 0.35 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || calm) return;
    setEnabled(true);

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => {
      setHovering(!!e.target.closest?.('a, button, [role="button"]'));
    };
    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', over, { passive: true });
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="cursor-dot"
      style={{ x: sx, y: sy }}
      animate={{ scale: hovering ? 2.1 : 1, opacity: hovering ? 0.55 : 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
    />
  );
}
