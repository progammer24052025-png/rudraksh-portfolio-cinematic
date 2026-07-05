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

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.35])
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 4])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.6, 0.2])
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-40%'])
  const subOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

  return (
    <section id="top" ref={ref} className="relative h-[220vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-end overflow-hidden">
        {/* Cinematic backdrop */}
        <motion.div
          style={{ scale: imageScale, rotate: imageRotate, opacity: imageOpacity }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero-orbit.png"
            alt="Rudraksh Patel standing in a black studio with emerald rim lighting"
            fill
            priority
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/60" />
        </motion.div>

        {/* Status line */}
        <motion.div
          style={{ opacity: subOpacity }}
          className="relative z-10 flex items-center gap-3 px-5 pb-4 md:px-10"
        >
          <span className="inline-block size-2 animate-pulse rounded-full bg-primary" aria-hidden="true" />
          <span className="text-xs tracking-[0.3em] text-primary">SYSTEM: ONLINE</span>
          <span className="text-xs tracking-[0.3em] text-muted-foreground">
            # {PORTFOLIO.role.toUpperCase()}
          </span>
        </motion.div>

        {/* Kinetic name */}
        <motion.div style={{ y: titleY }} className="relative z-10 px-4 md:px-8">
          <h1 className="font-display leading-[0.85] text-foreground">
            <span className="sr-only">{PORTFOLIO.name}</span>
            <span aria-hidden="true" className="block text-[19vw] md:text-[17vw]">
              {NAME.split('').map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{
                    delay: 0.08 * i,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block"
                >
                  {ch}
                </motion.span>
              ))}
            </span>
            <span aria-hidden="true" className="block text-[19vw] text-primary md:text-[17vw]">
              {SURNAME.split('').map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{
                    delay: 0.6 + 0.08 * i,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block"
                >
                  {ch}
                </motion.span>
              ))}
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-foreground/80 md:text-base"
          >
            {PORTFOLIO.tagline}
            <span className="mt-1 block text-xs tracking-[0.2em] text-primary">
              INITIATING CREATIVE PROTOCOL 01...
            </span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-6 flex flex-wrap gap-4 pb-10"
          >
            <a
              href="#labs"
              className="bg-primary px-6 py-3 text-xs font-medium tracking-[0.25em] text-primary-foreground transition-transform hover:scale-105"
            >
              ACCESS LABS
            </a>
            <a
              href="#signal"
              className="border border-foreground/30 px-6 py-3 text-xs tracking-[0.25em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              PING CREATOR
            </a>
          </motion.div>
        </motion.div>

        {/* Skills marquee */}
        <div className="relative z-10 overflow-hidden border-t border-border bg-background/80 py-3 backdrop-blur-sm">
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
