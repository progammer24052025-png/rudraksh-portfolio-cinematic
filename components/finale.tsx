'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'
import { PORTFOLIO } from '@/lib/portfolio-data'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18a11 11 0 0 1 2.88-.39c.98 0 1.96.13 2.88.39 2.19-1.49 3.15-1.18 3.15-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.39-5.26 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  )
}

export function Finale() {
  return (
    <section id="signal" className="relative">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs tracking-[0.3em] text-primary">
            TRANSMISSION NODE
          </span>
          <h2 className="mt-2 font-display text-[13vw] leading-[0.9] text-foreground md:text-8xl">
            LET&apos;S DESIGN
            <br />
            THE FUTURE<span className="text-primary">_</span>
          </h2>
          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-foreground/80">
            Seeking elite collaborations and innovative challenges. Whether
            you&apos;re building the next great AI or just want to discuss the
            future of frontend architecture.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a
            href={`mailto:${PORTFOLIO.email}`}
            className="flex items-center gap-3 bg-primary px-6 py-4 text-xs font-medium tracking-[0.25em] text-primary-foreground transition-transform hover:scale-105"
          >
            <Mail className="size-4" aria-hidden="true" />
            BROADCAST SIGNAL
          </a>
          <a
            href={PORTFOLIO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-foreground/30 px-6 py-4 text-xs tracking-[0.25em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <LinkedinIcon className="size-4" />
            CONNECT ON LINKEDIN
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:gap-12"
        >
          <div className="flex items-center gap-3">
            <Mail className="size-4 text-primary" aria-hidden="true" />
            <div>
              <span className="block text-[10px] tracking-[0.3em] text-muted-foreground">
                SECURE CHANNEL
              </span>
              <a
                href={`mailto:${PORTFOLIO.email}`}
                className="text-sm text-foreground transition-colors hover:text-primary"
              >
                {PORTFOLIO.email}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            <div>
              <span className="block text-[10px] tracking-[0.3em] text-muted-foreground">
                LOCAL ORIGIN
              </span>
              <span className="text-sm text-foreground">{PORTFOLIO.location}</span>
            </div>
          </div>
        </motion.div>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 md:flex-row md:px-10">
          <span className="font-display text-lg text-foreground">
            RUDRAKSH<span className="text-primary">.</span>
          </span>
          <p className="text-xs text-muted-foreground">
            © 2026 Rudraksh Patel. Built with Vibe &amp; AI.
          </p>
          <div className="flex gap-6">
            <a
              href={PORTFOLIO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <GithubIcon className="size-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href={PORTFOLIO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <LinkedinIcon className="size-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>
    </section>
  )
}
