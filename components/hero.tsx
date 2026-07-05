'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PORTFOLIO } from '@/lib/portfolio-data'

const NAME = 'RUDRAKSH'
const SURNAME = 'PATEL'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Figure: rises slightly, scales up and drifts as you scroll
  const figureY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const figureScale = useTransform(scrollYProgress, [0, 1], [1, 1.25])
  const figureOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.85, 0.25])

  // Name letters: split apart in opposite directions behind the figure
  const nameX = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])
  const surnameX = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const nameOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.15])

  // Foreground copy fades early
  const subOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0])

  // Ambient glow intensifies mid-scroll
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 0.7, 0.1])

  return (
    <section id="top" ref={ref} className="relative h-[240vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-end overflow-hidden">
        {/* Emerald ambient glow */}
        <motion.div
          style={{ opacity: glowOpacity }}
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-0 size-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[120px]"
        />

        {/* Giant name behind the figure */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="font-display leading-[0.82] text-foreground">
            <span className="sr-only">{PORTFOLIO.name}</span>
            <motion.span
              aria-hidden="true"
              style={{ x: nameX, opacity: nameOpacity }}
              className="block text-center text-[20vw] md:text-[18vw]"
            >
              {NAME.split('').map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ delay: 0.08 * i, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {ch}
                </motion.span>
              ))}
            </motion.span>
            <motion.span
              aria-hidden="true"
              style={{ x: surnameX, opacity: nameOpacity }}
              className="block text-center text-[20vw] text-primary md:text-[18vw]"
            >
              {SURNAME.split('').map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ delay: 0.6 + 0.08 * i, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {ch}
                </motion.span>
              ))}
            </motion.span>
          </h1>
        </div>

        {/* Suited figure in front of the type, moving on scroll */}
        <motion.div
          style={{ y: figureY, scale: figureScale, opacity: figureOpacity }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 mx-auto h-[78vh] w-full max-w-2xl md:h-[88vh]"
        >
          <div
            className="absolute inset-0"
            style={{
              maskImage:
                'linear-gradient(to right, transparent, black 22%, black 78%, transparent), linear-gradient(to bottom, transparent, black 18%)',
              maskComposite: 'intersect',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 22%, black 78%, transparent), linear-gradient(to bottom, transparent, black 18%)',
              WebkitMaskComposite: 'source-in',
            }}
          >
            <Image
              src="/images/rudraksh-suit.png"
              alt="Rudraksh Patel standing in a tailored navy suit with emerald rim lighting"
              fill
              priority
              className="object-contain object-bottom [filter:drop-shadow(0_0_60px_oklch(0.7_0.17_160/0.25))]"
            />
          </div>
          {/* Ground fade so the figure melts into the page */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </motion.div>

        {/* Status line */}
        <motion.div
          style={{ opacity: subOpacity }}
          className="absolute left-0 top-20 z-20 flex items-center gap-3 px-5 md:top-24 md:px-10"
        >
          <span className="inline-block size-2 animate-pulse rounded-full bg-primary" aria-hidden="true" />
          <span className="text-xs tracking-[0.3em] text-primary">SYSTEM: ONLINE</span>
          <span className="hidden text-xs tracking-[0.3em] text-muted-foreground md:inline">
            # {PORTFOLIO.role.toUpperCase()}
          </span>
        </motion.div>

        {/* Tagline + CTAs pinned to corners */}
        <motion.div
          style={{ opacity: subOpacity }}
          className="relative z-20 flex flex-col gap-6 px-5 pb-16 md:flex-row md:items-end md:justify-between md:px-10"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="max-w-xs text-pretty text-sm leading-relaxed text-foreground/85"
          >
            {PORTFOLIO.tagline}
            <span className="mt-1 block text-xs tracking-[0.2em] text-primary">
              INITIATING CREATIVE PROTOCOL 01...
            </span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#labs"
              className="bg-primary px-6 py-3 text-xs font-medium tracking-[0.25em] text-primary-foreground transition-transform hover:scale-105"
            >
              ACCESS LABS
            </a>
            <a
              href="#signal"
              className="border border-foreground/30 bg-background/40 px-6 py-3 text-xs tracking-[0.25em] text-foreground backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
            >
              PING CREATOR
            </a>
          </motion.div>
        </motion.div>

        {/* Skills marquee */}
        <div className="relative z-20 overflow-hidden border-t border-border bg-background/80 py-3 backdrop-blur-sm">
          <div className="animate-marquee flex w-max gap-8" aria-hidden="true">
            {[...PORTFOLIO.skills, ...PORTFOLIO.skills].map((s, i) => (
              <span
                key={i}
                className="flex items-center gap-8 text-xs tracking-[0.3em] text-muted-foreground"
              >
                <span className="text-primary">/</span>
                {s.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
