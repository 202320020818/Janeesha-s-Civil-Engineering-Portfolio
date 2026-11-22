'use client';
import { motion, useReducedMotion } from 'framer-motion';
export function AnimatedBackground() {
  const reduce = useReducedMotion();
  return <div className="ambient" aria-hidden="true"><div className="ambient-grid" />{!reduce && <><motion.div className="orb orb-one" animate={{ x: [0, 24, 0], y: [0, -18, 0] }} transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }} /><motion.div className="orb orb-two" animate={{ x: [0, -20, 0], y: [0, 16, 0] }} transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }} /></>}</div>;
}
