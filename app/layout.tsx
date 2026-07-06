import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Anton, Space_Grotesk, Great_Vibes } from 'next/font/google'
import './globals.css'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
})

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cursive',
})

export const metadata: Metadata = {
  title: 'Rudraksh Patel — Vibe. Code. Ascend.',
  description:
    'Cinematic portfolio of Rudraksh Patel, BTech CSE student at GSFC University. Vibecoding digital companions and seamless shopping experiences through AI.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#101210',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${anton.variable} ${spaceGrotesk.variable} ${greatVibes.variable}`}
    >
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
