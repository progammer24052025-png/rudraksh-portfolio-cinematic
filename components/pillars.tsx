'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PORTFOLIO } from '@/lib/portfolio-data'

export function Pillars() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.2, 1])

  return (
    <section ref={ref} className="relative">
      {/* Sticky cinematic backdrop */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ scale: bgScale }} className="absolute inset-0">
          <Image
            src="/images/builder-desk.png"
            alt="Rudraksh at a dark desk surrounded by floating holographic screens"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/70" />
        </motion.div>
        <div className="relative flex h-full items-end px-5 pb-10 md:px-10">
          <h2 className="font-display text-[14vw] leading-none text-stroke md:text-[11vw]">
            THE BUILDER
          </h2>
        </div>
      </div>

      {/* Pillars revealed one at a time over the backdrop */}
      <div className="relative z-10 -mt-[100vh]">
        <div className="h-[40vh]" aria-hidden="true" />
        {PORTFOLIO.pillars.map(p => (
          <div key={p.num} className="flex min-h-[80vh] items-center px-5 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl border border-border bg-background/85 p-8 backdrop-blur-md md:p-12"
            >
              <span className="font-display text-6xl text-primary md:text-8xl">
                {p.num}
              </span>
              <h3 className="mt-4 font-display text-4xl text-foreground md:text-6xl">
                {p.title.toUpperCase()}
              </h3>
              <p className="mt-4 max-w-xl text-pretty leading-relaxed text-foreground/80">
                {p.desc}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
