import { motion } from 'framer-motion';
import useMagnetic from '../hooks/useMagnetic';

/**
 * Magnetic — wrapper that makes its child drift slightly toward the
 * cursor on hover and spring back on leave. Keeps the child's own
 * hover animations (scale etc.) intact since the pull lives on the
 * outer wrapper.
 */
export default function Magnetic({ children, strength = 14, className = '' }) {
  const { ref, sx, sy, onMouseMove, onMouseLeave } = useMagnetic(strength);

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x: sx, y: sy, display: 'inline-block' }}
      className={className}
    >
      {children}
    </motion.span>
  );
}
