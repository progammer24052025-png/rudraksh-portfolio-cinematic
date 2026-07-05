'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { PORTFOLIO } from '@/lib/portfolio-data'

export function Journey() {
  const j = PORTFOLIO.journey
  return (
    <section id="journey" className="border-y border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="text-xs tracking-[0.3em] text-primary">
            EVENT TIMELINE
          </span>
          <h2 className="mt-2 font-display text-6xl text-foreground md:text-8xl">
            JOURNEY ARCHIVE<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-14 w-full max-w-xs"
        >
          <div className="group relative overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/rudraksh.jpeg"
              alt="Portrait of Rudraksh Patel"
              width={640}
              height={853}
              className="h-auto w-full object-cover grayscale transition duration-700 group-hover:grayscale-0"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-primary/15 mix-blend-overlay transition duration-700 group-hover:opacity-0"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent px-4 pb-3 pt-10">
              <span className="text-xs tracking-[0.25em] text-primary">
                RUDRAKSH PATEL — THE PROTAGONIST
              </span>
            </div>
          </div>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-[1fr_auto_2fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="text-left md:text-right"
          >
            <span className="text-xs tracking-[0.25em] text-primary">
              {j.period.toUpperCase()}
            </span>
            <h3 className="mt-1 font-display text-3xl text-foreground">
              {j.org.toUpperCase()}
            </h3>
          </motion.div>

          <div className="hidden flex-col items-center md:flex" aria-hidden="true">
            <span className="size-3 rounded-full bg-primary" />
            <span className="w-px flex-1 bg-border" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h4 className="text-sm tracking-[0.2em] text-foreground/90">
              {j.role.toUpperCase()}
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {j.points.map(pt => (
                <li key={pt} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="text-primary" aria-hidden="true">
                    {'❯'}
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
