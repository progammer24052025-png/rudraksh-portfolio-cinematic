'use client'

import { motion } from 'framer-motion'

const links = [
  { label: 'VIBE', href: '#vibe' },
  { label: 'LABS', href: '#labs' },
  { label: 'JOURNEY', href: '#journey' },
  { label: 'SIGNAL', href: '#signal' },
]

export function SiteNav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
    >
      <nav
        aria-label="Main navigation"
        className="flex items-center justify-between px-5 py-4 md:px-10"
      >
        <a
          href="#top"
          className="font-display text-xl tracking-wide text-foreground"
        >
          RUDRAKSH<span className="text-primary">.</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs tracking-[0.25em] text-foreground/70 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#signal"
          className="border border-foreground/30 px-4 py-2 text-xs tracking-[0.25em] text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          INITIALIZE_
        </a>
      </nav>
    </motion.header>
  )
}
