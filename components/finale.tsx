'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin } from 'lucide-react'
import { PORTFOLIO } from '@/lib/portfolio-data'

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
            <Linkedin className="size-4" aria-hidden="true" />
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
              <Github className="size-5" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href={PORTFOLIO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="size-5" aria-hidden="true" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>
    </section>
  )
}
