'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
const links = [['About', '#about'], ['Expertise', '#expertise'], ['Experience', '#experience'], ['Work', '#projects'], ['Education', '#education']];
export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="nav-wrap"><nav className="navbar container" aria-label="Main navigation"><a className="brand" href="#home" aria-label="Janeesha Udeshani home"><span className="brand-mark">J<span>.</span></span><span className="brand-name">JANEESHA UDESHANI<small>ENGINEERING · DESIGN</small></span></a><div className="nav-links">{links.map(([name, href]) => <a key={href} href={href}>{name}</a>)}</div><a href="#contact" className="nav-cta">Let&apos;s talk <ArrowUpRight size={14} /></a><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button></nav><AnimatePresence>{open && <motion.div className="mobile-menu" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}><div className="container mobile-menu-inner">{links.map(([name, href], i) => <motion.a key={href} href={href} onClick={() => setOpen(false)} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .04 }}>{name}</motion.a>)}<a href="#contact" onClick={() => setOpen(false)} className="mobile-contact">Get in touch <ArrowUpRight size={15} /></a></div></motion.div>}</AnimatePresence></header>;
}
