'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring, type MotionValue } from 'framer-motion'
import { PORTFOLIO } from '@/lib/portfolio-data'

/**
 * Scroll-driven storytelling hero.
 * Five pose keyframes of the suited figure crossfade as the user scrolls,
 * each paired with a kinetic story line — reads like a movie scrubbed by scroll.
 */

const FRAMES = [
  {
    src: '/images/pose-1.png',
    line: 'RUDRAKSH',
    sub: 'PATEL',
    caption: 'SCENE 01 — THE PROTAGONIST',
  },
  {
    src: '/images/pose-2.png',
    line: 'I DREAM',
    sub: 'IN CODE',
    caption: 'SCENE 02 — THE VISION',
  },
  {
    src: '/images/pose-3.png',
    line: 'I BUILD',
    sub: 'WITH AI',
    caption: 'SCENE 03 — THE CRAFT',
  },
  {
    src: '/images/pose-4.png',
    line: 'VIBE',
    sub: 'CODER',
    caption: 'SCENE 04 — THE IDENTITY',
  },
  {
    src: '/images/pose-5.png',
    line: 'WATCH ME',
    sub: 'SHIP IT',
    caption: 'SCENE 05 — THE PROMISE',
  },
]

const N = FRAMES.length

/** Opacity window for frame i across [0,1] scroll progress */
function frameWindow(i: number): number[] {
  const seg = 1 / N
  const start = i * seg
  const end = start + seg
  const fade = seg * 0.28
  if (i === 0) return [start, end - fade, end]
  if (i === N - 1) return [start, start + fade, end]
  return [start, start + fade, end - fade, end]
}

function frameOpacities(i: number): number[] {
  if (i === 0) return [1, 1, 0]
  if (i === N - 1) return [0, 1, 1]
  return [0, 1, 1, 0]
}

function StoryFrame({
  progress,
  index,
}: {
  progress: MotionValue<number>
  index: number
}) {
  const frame = FRAMES[index]
  const opacity = useTransform(progress, frameWindow(index), frameOpacities(index))
  // subtle push-in per frame so each pose feels alive
  const seg = 1 / N
  const scale = useTransform(progress, [index * seg, (index + 1) * seg], [1.02, 1.1])
  const y = useTransform(progress, [index * seg, (index + 1) * seg], ['1.5%', '-1.5%'])

  // Kinetic text slides opposite directions per frame
  const dir = index % 2 === 0 ? 1 : -1
  const lineX = useTransform(progress, [index * seg, (index + 1) * seg], [`${6 * dir}%`, `${-6 * dir}%`])
  const subX = useTransform(progress, [index * seg, (index + 1) * seg], [`${-6 * dir}%`, `${6 * dir}%`])

  return (
    <>
      {/* Giant kinetic story type behind the figure */}
      <motion.div
        style={{ opacity }}
        aria-hidden={index !== 0}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        <h1 className={index === 0 ? 'contents' : 'sr-only'}>
          <span className="sr-only">{PORTFOLIO.name} — {PORTFOLIO.role}</span>
        </h1>
        <motion.span
          style={{ x: lineX }}
          aria-hidden="true"
          className="font-display block text-center text-[17vw] leading-[0.82] text-foreground md:text-[15vw]"
        >
          {frame.line}
        </motion.span>
        <motion.span
          style={{ x: subX }}
          aria-hidden="true"
          className="font-display block text-center text-[17vw] leading-[0.82] text-primary md:text-[15vw]"
        >
          {frame.sub}
        </motion.span>
      </motion.div>

      {/* The figure keyframe */}
      <motion.div
        style={{ opacity, scale, y }}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 mx-auto h-[80vh] w-full max-w-2xl md:h-[92vh]"
      >
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage:
              'radial-gradient(58% 96% at 50% 100%, black 42%, transparent 72%)',
            maskImage:
              'radial-gradient(58% 96% at 50% 100%, black 42%, transparent 72%)',
          }}
        >
          <Image
            src={frame.src || "/placeholder.svg"}
            alt={index === 0 ? 'Rudraksh Patel in a tailored navy suit, emerald rim lighting' : ''}
            fill
            priority={index < 2}
            className="object-contain object-bottom [filter:drop-shadow(0_0_70px_oklch(0.7_0.17_160/0.3))]"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </motion.div>

      {/* Scene caption */}
      <motion.div
        style={{ opacity }}
        aria-hidden="true"
        className="absolute right-5 top-20 z-20 md:right-10 md:top-24"
      >
        <span className="border-l-2 border-primary pl-3 text-[11px] tracking-[0.35em] text-muted-foreground">
          {frame.caption}
        </span>
      </motion.div>
    </>
  )
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 })

  // Progress bar + glow
  const barScale = useTransform(progress, [0, 1], [0, 1])
  const glowOpacity = useTransform(progress, [0, 0.5, 1], [0.3, 0.65, 0.35])
  const introOpacity = useTransform(progress, [0, 0.12], [1, 0])

  return (
    <section id="top" ref={ref} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Ambient emerald glow */}
        <motion.div
          style={{ opacity: glowOpacity }}
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 size-[75vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[130px]"
        />
        {/* Vignette for cinematic depth */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 [background:radial-gradient(120%_90%_at_50%_50%,transparent_60%,oklch(0.13_0.004_160/0.8)_100%)]"
        />

        {FRAMES.map((_, i) => (
          <StoryFrame key={i} progress={progress} index={i} />
        ))}

        {/* Status line */}
        <div className="absolute left-0 top-20 z-30 flex items-center gap-3 px-5 md:top-24 md:px-10">
          <span className="inline-block size-2 animate-pulse rounded-full bg-primary" aria-hidden="true" />
          <span className="text-xs tracking-[0.3em] text-primary">SYSTEM: ONLINE</span>
          <span className="hidden text-xs tracking-[0.3em] text-muted-foreground md:inline">
            # {PORTFOLIO.role.toUpperCase()}
          </span>
        </div>

        {/* Intro copy + CTAs, fade after first chapter */}
        <motion.div
          style={{ opacity: introOpacity }}
          className="absolute inset-x-0 bottom-16 z-30 flex flex-col gap-6 px-5 md:flex-row md:items-end md:justify-between md:px-10"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-xs text-pretty text-sm leading-relaxed text-foreground/85"
          >
            {PORTFOLIO.tagline}
            <span className="mt-1 block text-xs tracking-[0.2em] text-primary">
              SCROLL TO PLAY THE FILM
            </span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#labs"
              className="bg-primary px-6 py-3 text-xs font-medium tracking-[0.25em] text-primary-foreground shadow-[0_0_30px_oklch(0.7_0.17_160/0.35)] transition-transform hover:scale-105"
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

        {/* Film progress bar */}
        <div className="absolute inset-x-0 bottom-12 z-30 px-5 md:px-10" aria-hidden="true">
          <div className="h-px w-full bg-border">
            <motion.div style={{ scaleX: barScale }} className="h-px origin-left bg-primary shadow-[0_0_8px_oklch(0.7_0.17_160/0.8)]" />
          </div>
        </div>

        {/* Skills marquee */}
        <div className="absolute inset-x-0 bottom-0 z-30 overflow-hidden border-t border-border bg-background/80 py-3 backdrop-blur-sm">
          <div className="animate-marquee flex w-max gap-8" aria-hidden="true">
            {[...PORTFOLIO.skills, ...PORTFOLIO.skills].map((s, i) => (
              <span key={i} className="flex items-center gap-8 text-xs tracking-[0.3em] text-muted-foreground">
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
