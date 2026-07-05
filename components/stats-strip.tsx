'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { PORTFOLIO } from '@/lib/portfolio-data'

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target])

  return (
    <span ref={ref} className="font-display text-5xl text-primary md:text-7xl">
      {value}
      {suffix}
    </span>
  )
}

export function StatsStrip() {
  return (
    <section id="vibe" aria-label="Statistics" className="border-y border-border">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px md:grid-cols-5">
        {PORTFOLIO.stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="flex flex-col items-center gap-2 border-border px-4 py-10 text-center md:border-r last:md:border-r-0"
          >
            <CountUp target={s.value} suffix={s.suffix} />
            <span className="text-xs tracking-[0.25em] text-muted-foreground">
              {s.label.toUpperCase()}
            </span>
          </motion.div>
        ))}
      </div>

      {/* The Core */}
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-border px-5 py-20 md:grid-cols-2 md:px-10">
        <div>
          <h2 className="font-display text-5xl text-foreground md:text-7xl">
            THE CORE<span className="text-primary">_</span>
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-pretty leading-relaxed text-foreground/85">
            {PORTFOLIO.about}
          </p>
          <div className="border-l-2 border-primary pl-5">
            <h3 className="mb-1 text-xs tracking-[0.3em] text-primary">
              ACTIVE RESEARCH
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {PORTFOLIO.research}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
