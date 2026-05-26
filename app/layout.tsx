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
  metadataBase: new URL('https://oolkatheband.github.io/meld/'),
  title: {
    default: 'Meld | Free Spotify-powered Music Client',
    template: '%s | Meld',
  },
  description: 'Meld fuses Spotify’s personalization with the vast catalog of YouTube Music. No premium needed.',
  keywords: [
    'Meld', 'Music streaming', 'Spotify', 'YouTube Music', 
    'Open source music player', 'Android', 'APK'
  ],
  authors: [{ name: 'OOLKA' }],
  creator: 'OOLKA',
  openGraph: {
    title: 'Meld | Free Spotify-powered Music Client',
    description: 'Fusing Spotify’s personalization with the vast catalog of YouTube Music.',
    url: 'https://oolkatheband.github.io/meld/',
    siteName: 'Meld',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meld | Free Spotify-powered Music Client',
    description: 'Open-source Android music. Spotify recommendations. YouTube streaming. Zero setup.',
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
