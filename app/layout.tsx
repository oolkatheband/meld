import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import MD3AppBar from '@/components/meld/MD3AppBar'
import MD3Footer from '@/components/meld/MD3Footer'
import type { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Meld | Free Spotify-powered Music Client",
  description: "Meld fuses Spotify’s personalization with the vast catalog of YouTube Music. No premium needed.",
  keywords: ["Meld", "Music streaming", "Spotify", "YouTube Music", "Open source music player"],
  authors: [{ name: "OOLKA" }],
  metadataBase: new URL('https://oolkatheband.github.io/meld/'),
  openGraph: {
    title: "Meld | Free Spotify-powered Music Client",
    description: "Fusing Spotify’s personalization with the vast catalog of YouTube Music.",
    url: "https://oolkatheband.github.io/meld/",
    siteName: "Meld",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export const viewport: Viewport = {
  themeColor: '#08080C',
  colorScheme: 'dark',
}

    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        <MD3AppBar />
        {children}
        <MD3Footer />
      </body>
    </html>
  )
}
