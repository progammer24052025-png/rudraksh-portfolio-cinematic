'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring, type MotionValue } from 'framer-motion'
import { PORTFOLIO } from '@/lib/portfolio-data'

/**
 * Scroll-driven storytelling hero.
 * Five pose keyframes crossfade as the user scrolls. The figure blends
 * seamlessly into the ink background via mix-blend-lighten (pure black
 * pixels vanish), and story text sits beside the figure — never over
 * the face — with a cursive chapter accent per scene.
 */

const FRAMES = [
  {
    src: '/images/pose-1.png',
    line: 'RUDRAKSH',
    sub: 'PATEL',
    accent: 'the protagonist',
    side: 'left' as const,
  },
  {
    src: '/images/pose-2.png',
    line: 'I DREAM',
    sub: 'IN CODE',
    accent: 'the vision',
    side: 'right' as const,
  },
  {
    src: '/images/pose-3.png',
    line: 'AI ASSISTS.',
    sub: 'I ARCHITECT.',
    accent: 'the craft',
    side: 'left' as const,
  },
  {
    src: '/images/pose-4.png',
    line: 'VIBE',
    sub: 'CODER',
    accent: 'the identity',
    side: 'left' as const, // pose-4 palm presents toward viewer's left
  },
  {
    src: '/images/pose-5.png',
    line: 'WATCH ME',
    sub: 'SHIP IT',
    accent: 'the promise',
    side: 'right' as const,
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

/** Typewriter that loops through the tagline */
function Typewriter({ text }: { text: string }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (count >= text.length) return
    const t = setTimeout(() => setCount((c) => c + 1), 45)
    return () => clearTimeout(t)
  }, [count, text.length])

  return (
    <span aria-label={text}>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      <span aria-hidden="true" className="animate-caret text-primary">
        _
      </span>
    </span>
  )
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
  const scale = useTransform(progress, [index * seg, (index + 1) * seg], [1.01, 1.07])
  const y = useTransform(progress, [index * seg, (index + 1) * seg], ['1%', '-1%'])

  // Kinetic text drifts gently, direction based on its side
  const dir = frame.side === 'left' ? 1 : -1
  const textY = useTransform(progress, [index * seg, (index + 1) * seg], ['10%', '-10%'])
  const textX = useTransform(progress, [index * seg, (index + 1) * seg], [`${3 * dir}%`, `${-3 * dir}%`])

  const sideClasses =
    frame.side === 'left'
      ? 'left-5 items-start text-left md:left-14'
      : 'right-5 items-end text-right md:right-14'

  return (
    <>
      {/* The figure keyframe — mix-blend-lighten melts pure black into the site bg */}
      <motion.div
        style={{ opacity, scale, y }}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 mx-auto h-[78vh] w-full max-w-xl md:h-[88vh]"
      >
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
            maskImage:
              'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          }}
        >
          <Image
            src={frame.src || "/placeholder.svg"}
            alt={index === 0 ? 'Rudraksh Patel in a tailored navy suit, emerald rim lighting' : ''}
            fill
            priority={index < 2}
            className="mix-blend-lighten object-contain object-bottom [filter:brightness(0.96)_contrast(1.08)]"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </motion.div>

      {/* Story type beside the figure — clear of face and hands */}
      <motion.div
        style={{ opacity, y: textY, x: textX }}
        aria-hidden={index !== 0}
        className={`absolute top-1/2 z-20 flex max-w-[46vw] -translate-y-1/2 flex-col gap-3 md:gap-4 ${sideClasses}`}
      >
        <h1 className={index === 0 ? 'contents' : 'sr-only'}>
          <span className="sr-only">
            {PORTFOLIO.name} — {PORTFOLIO.role}
          </span>
        </h1>
        <span
          aria-hidden="true"
          className="font-cursive text-2xl leading-none text-primary md:text-4xl"
        >
          {frame.accent}
        </span>
        <span
          aria-hidden="true"
          className="font-display block text-[9vw] leading-[1.08] tracking-wide text-foreground md:text-[6.5vw]"
        >
          {frame.line}
        </span>
        <span
          aria-hidden="true"
          className="font-display block text-[9vw] leading-[1.08] tracking-wide text-primary [text-shadow:0_0_40px_oklch(0.7_0.17_160/0.4)] md:text-[6.5vw]"
        >
          {frame.sub}
        </span>
        <span
          aria-hidden="true"
          className="mt-1 border-l-2 border-primary pl-3 text-[10px] tracking-[0.4em] text-muted-foreground"
        >
          SCENE 0{index + 1} / 0{N}
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
  const glowOpacity = useTransform(progress, [0, 0.5, 1], [0.25, 0.5, 0.3])
  const introOpacity = useTransform(progress, [0, 0.12], [1, 0])

  return (
    <section id="top" ref={ref} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Ambient emerald glow — sits behind the blended figure */}
        <motion.div
          style={{ opacity: glowOpacity }}
          aria-hidden="true"
          className="absolute left-1/2 top-[58%] size-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[140px]"
        />
        {/* Vignette for cinematic depth */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 [background:radial-gradient(120%_90%_at_50%_50%,transparent_65%,oklch(0.13_0.004_160/0.7)_100%)]"
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
            className="max-w-sm text-pretty text-sm leading-relaxed text-foreground/85"
          >
            <Typewriter text={PORTFOLIO.tagline} />
            <span className="mt-2 block text-xs tracking-[0.2em] text-primary">
              SCROLL TO KNOW MY JOURNEY
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
            <motion.div
              style={{ scaleX: barScale }}
              className="h-px origin-left bg-primary shadow-[0_0_8px_oklch(0.7_0.17_160/0.8)]"
            />
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
