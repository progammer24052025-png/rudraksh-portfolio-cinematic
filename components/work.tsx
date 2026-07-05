'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { PORTFOLIO } from '@/lib/portfolio-data'

export function Work() {
  return (
    <section id="labs" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/gallery-walk.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs tracking-[0.3em] text-primary">
            EXPERIMENTAL DATA
          </span>
          <h2 className="mt-2 font-display text-6xl text-foreground md:text-8xl">
            PROJECT LABS<span className="text-primary">_</span>
          </h2>
          <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            Explore a collection of digital artifacts born from high-speed
            iteration and AI synergy.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {PORTFOLIO.projects.map((proj, i) => (
            <motion.a
              key={proj.title}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col gap-4 border border-border bg-card/80 p-8 backdrop-blur-sm transition-colors hover:border-primary"
            >
              <div className="flex flex-wrap gap-2">
                {proj.tags.map(t => (
                  <span
                    key={t}
                    className="border border-border px-2 py-1 text-[10px] tracking-[0.2em] text-muted-foreground"
                  >
                    {t.toUpperCase()}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-4xl text-foreground transition-colors group-hover:text-primary md:text-5xl">
                {proj.title.toUpperCase()}
              </h3>
              <p className="text-pretty text-sm italic leading-relaxed text-foreground/75">
                &quot;{proj.pitch}&quot;
              </p>
              <span className="mt-auto flex items-center gap-2 text-xs tracking-[0.25em] text-primary">
                {proj.linkLabel.toUpperCase()}
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
