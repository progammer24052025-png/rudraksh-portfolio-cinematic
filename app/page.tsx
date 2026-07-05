import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { StatsStrip } from '@/components/stats-strip'
import { Pillars } from '@/components/pillars'
import { Work } from '@/components/work'
import { Journey } from '@/components/journey'
import { Finale } from '@/components/finale'
import { JarvisChat } from '@/components/jarvis-chat'

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <StatsStrip />
        <Pillars />
        <Work />
        <Journey />
        <Finale />
      </main>
      <JarvisChat />
    </>
  )
}
