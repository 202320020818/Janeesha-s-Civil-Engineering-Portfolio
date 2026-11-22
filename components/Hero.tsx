'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MoveUpRight } from 'lucide-react';

export function Hero() {
  const reduce = useReducedMotion();
  const fade = { hidden: { opacity: 0, y: reduce ? 0 : 22 }, show: { opacity: 1, y: 0 } };
  return <section id="home" className="hero section-shell"><div className="container hero-grid">
    <motion.div className="hero-copy" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: .14, delayChildren: .12 } } }}>
      <motion.div className="eyebrow" variants={fade}><span className="eyebrow-line" /> CIVIL ENGINEER <span className="eyebrow-sep">/</span> STRUCTURAL DRAFTSMAN</motion.div>
      <motion.h1 variants={fade}>Designing<br />structures.<br /><span>Shaping spaces.</span></motion.h1>
      <motion.div className="hero-name" variants={fade}>JANEESHA UDESHANI <span>— SRI LANKA</span></motion.div>
      <motion.p className="hero-intro" variants={fade}>A Civil Engineering professional transforming technical concepts into precise drawings, functional spaces, and thoughtfully planned structures.</motion.p>
      <motion.div className="hero-actions" variants={fade}><a href="#projects" className="button button-gold">Explore my work <MoveUpRight size={16} /></a><a href="#contact" className="button button-quiet">Contact me <ArrowUpRight size={15} /></a></motion.div>
      <motion.div className="hero-note" variants={fade}><span className="note-dot" /> DETAIL-DRIVEN BY DESIGN <span className="note-rule" /> BUILT ON PRECISION</motion.div>
    </motion.div>
    <motion.div className="hero-visual" initial={{ opacity: 0, scale: .96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .9, delay: .3, ease: [.22, 1, .36, 1] }}>
      <div className="portrait-wrap"><div className="portrait-glow"/><div className="portrait-placeholder"><div className="portrait-grid"/><div className="portrait-figure"><div className="figure-head"/><div className="figure-neck"/><div className="figure-body"/><span className="figure-label">PORTRAIT<br/>PLACEHOLDER</span></div><img className="portrait-photo" src="/images/janeesha-profile.jpg" alt="Janeesha Udeshani" onError={(event) => { event.currentTarget.style.display = 'none'; }} /><span className="portrait-caption">REPLACE WITH<br/>/images/janeesha-profile.jpg</span></div>
      <svg className="blueprint-lines" viewBox="0 0 560 620" fill="none" aria-hidden="true"><motion.path d="M20 90H130V28H260M430 28H530V180H500M18 440H78V580H220M400 580H532V450" stroke="currentColor" strokeWidth=".7" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: .5 }} /><path d="M34 98h12m-6-6v12M512 174h12m-6-6v12M72 562h12m-6-6v12M512 456h12m-6-6v12" stroke="currentColor" strokeWidth=".7"/><circle cx="130" cy="90" r="3"/><circle cx="78" cy="440" r="3"/></svg>
      <div className="visual-coordinate">06°14&apos;N<br/>80°03&apos;E</div><div className="visual-stamp"><span>DETAILS<br/>DEFINE<br/>DURABILITY</span><i>01 / 03</i></div><div className="visual-corner corner-tl"/><div className="visual-corner corner-br"/>
      </div><div className="hero-scroll"><span>SCROLL TO EXPLORE</span><i><ArrowDown size={14}/></i></div><div className="hero-index">PORTFOLIO <span>—</span> 2026</div>
    </motion.div>
  </div></section>;
}
