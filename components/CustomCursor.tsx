'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion } from 'framer-motion';
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const reduce = useReducedMotion();
  const x = useMotionValue(-100), y = useMotionValue(-100);
  useEffect(() => {
    const media = window.matchMedia('(pointer:fine) and (min-width:768px)');
    const set = () => setEnabled(media.matches && !reduce);
    set(); media.addEventListener('change', set);
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e: MouseEvent) => setHover(!!(e.target as HTMLElement).closest('a,button,[data-cursor]'));
    window.addEventListener('mousemove', move); window.addEventListener('mouseover', over);
    return () => { media.removeEventListener('change', set); window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over); };
  }, [reduce, x, y]);
  if (!enabled) return null;
  return <motion.div className={`cursor-dot ${hover ? 'is-hover' : ''}`} style={{ x, y }} />;
}
