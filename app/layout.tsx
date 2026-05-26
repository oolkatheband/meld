import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import MD3AppBar from '@/components/meld/MD3AppBar'
import MD3Footer from '@/components/meld/MD3Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Meld — Spotify + YouTube Music, fused.',
    template: '%s | Meld',
  },
  description:
    'Meld is an open-source Android music client that combines Spotify\'s recommendation engine with YouTube Music\'s 100M+ catalogue. Zero setup. No Premium required.',
  keywords: [
    'Meld', 'Android music app', 'Spotify integration', 'YouTube Music',
    'open source', 'InnerTune', 'Metrolist', 'music streaming', 'APK',
  ],
  authors: [{ name: 'Francesco Grazioso', url: 'https://github.com/FrancescoGrazioso' }],
  creator: 'Francesco Grazioso',
  openGraph: {
    title: 'Meld — Spotify + YouTube Music, fused.',
    description: 'The open-source Android music client that combines Spotify\'s taste intelligence with YouTube Music\'s catalogue.',
    type: 'website',
    siteName: 'Meld',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meld — Spotify + YouTube Music, fused.',
    description: 'Open-source Android music. Spotify recommendations. YouTube streaming. Zero setup.',
  },
}

export const viewport: Viewport = {
  themeColor: '#08080C',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        <MD3AppBar />
        {children}
        <MD3Footer />
      </body>
    </html>
  )
}
