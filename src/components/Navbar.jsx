import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/content';

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Pulseboard home">
      <span className="flex h-9 w-9 items-center justify-end gap-[3px] rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 px-2 shadow-soft">
        <span className="w-1 rounded-full bg-white/90" style={{ height: '40%' }} />
        <span className="w-1 rounded-full bg-white" style={{ height: '80%' }} />
        <span className="w-1 rounded-full bg-white/70" style={{ height: '55%' }} />
      </span>
      <span className="font-display text-xl font-bold tracking-tight text-ink-900">
        Pulseboard
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-100 bg-white/80 shadow-[0_8px_30px_-18px_rgba(30,36,48,0.25)] backdrop-blur-xl'
          : 'border-b border-transparent bg-white/0 backdrop-blur-none'
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-ink-50 hover:text-ink-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#pricing"
            className="rounded-full px-4 py-2 text-sm font-medium text-ink-600 transition-colors hover:text-ink-900"
          >
            Sign in
          </a>
          <motion.a
            href="#cta"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-shadow hover:shadow-lift"
          >
            Get started
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-xl text-ink-900 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className="relative block h-5 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 rounded bg-current transition-all duration-300 ${
                open ? 'top-1/2 -translate-y-1/2 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 rounded bg-current transition-all duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-6 rounded bg-current transition-all duration-300 ${
                open ? 'bottom-1/2 translate-y-1/2 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-ink-100 bg-white/95 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-1 px-5 pb-6 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-ink-700 transition-colors hover:bg-ink-50"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-ink-900 px-5 py-3 text-center text-base font-semibold text-white"
              >
                Get started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
