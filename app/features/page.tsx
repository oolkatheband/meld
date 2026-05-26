'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Wifi, Music2, MessageSquare, Sliders, Users, Scan,
  Palette, Moon, Download, Zap, ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

const FEATURES = [
  {
    icon: Wifi,
    title: 'Offline Playback',
    desc: 'Download anything. Cache it locally. Play it anywhere — no signal, no problem.',
    tags: ['> offline.mode=enabled', '> cache: room-db · ExoPlayer'],
    color: '#F59E0B',
    category: 'Playback',
  },
  {
    icon: Music2,
    title: 'Live Lyrics, Word by Word',
    desc: 'Time-synced lyrics with word-by-word highlighting. Karaoke-ready, color-synced syllables.',
    tags: ['> betterlyrics · lrclib', '> word-level timestamps · synced'],
    color: '#EC4899',
    category: 'Experience',
  },
  {
    icon: MessageSquare,
    title: 'Discord Rich Presence',
    desc: 'Show what you\'re listening to on Discord. Album art, track title, artist — live.',
    tags: ['> kizzy module · RPC v2', '> real-time · auto-updates'],
    color: '#A855F7',
    category: 'Social',
  },
  {
    icon: Sliders,
    title: 'Parametric EQ & DSP',
    desc: 'Full custom equalizer with 10-band parametric EQ, bass boost, reverb, and more.',
    tags: ['> dsp.engine=custom', '> 10-band · audiophile-grade'],
    color: '#4A9EFF',
    category: 'Audio',
  },
  {
    icon: Users,
    title: 'Listen Together',
    desc: 'Sync playback with friends in real time. Same song, same position, always.',
    tags: ['> metroproto · protobuf sync', '> real-time · multi-user'],
    color: '#06B6D4',
    category: 'Social',
  },
  {
    icon: Scan,
    title: 'Shazam Integration',
    desc: 'Hear something you like? Tap to identify it instantly with ShazamKit.',
    tags: ['> shazamkit · ambient id', '> one-tap · seamless'],
    color: '#F97316',
    category: 'Discovery',
  },
  {
    icon: Palette,
    title: 'Material You Theming',
    desc: 'Dynamic color extraction from album art. Light, Dark, Black, and Dynamic themes.',
    tags: ['> material3 · dynamic-color', '> monet · adaptive-palette'],
    color: '#1DB954',
    category: 'Design',
  },
  {
    icon: Download,
    title: 'Smart Queue Generation',
    desc: 'Meld builds infinite radio queues from your Spotify taste profile automatically.',
    tags: ['> recommendation.engine=v2', '> weighted · diversity-capped'],
    color: '#A855F7',
    category: 'Intelligence',
  },
  {
    icon: Moon,
    title: 'Spotify-Only Mode',
    desc: 'Hide all YouTube-based home screen content and go pure Spotify for your feed.',
    tags: ['> spotify.mode=exclusive', '> home: spotify-only'],
    color: '#1DB954',
    category: 'Customization',
  },
  {
    icon: Zap,
    title: 'Last.fm Scrobbling',
    desc: 'Every track you play is scrobbled to Last.fm automatically in the background.',
    tags: ['> lastfm.api · scrobble', '> auto · background-sync'],
    color: '#F59E0B',
    category: 'Integration',
  },
]

function FeatureCard({ feature, index }: { feature: (typeof FEATURES)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-5%' })
  const Icon = feature.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="relative group md3-glass-surface p-6 hover:scale-[1.01] transition-all duration-300"
      style={{
        border: `1px solid ${feature.color}22`,
        boxShadow: `0 0 30px ${feature.color}08`,
      }}
    >
      {/* Mood tint */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-30"
        style={{ background: `radial-gradient(circle at top right, ${feature.color}15, transparent 70%)` }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Category tag */}
        <div
          className="inline-block font-mono text-xs px-2 py-1 rounded-full mb-4"
          style={{
            backgroundColor: `${feature.color}15`,
            color: feature.color,
            border: `1px solid ${feature.color}33`,
          }}
        >
          {feature.category}
        </div>

        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
          style={{ backgroundColor: `${feature.color}18` }}
        >
          <Icon size={24} style={{ color: feature.color }} />
        </div>

        {/* Title + desc */}
        <h3 className="md3-title-large font-bold mb-3" style={{ color: 'var(--md-sys-color-on-surface)' }}>
          {feature.title}
        </h3>
        <p className="md3-body-medium leading-relaxed mb-4" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
          {feature.desc}
        </p>

        {/* Tags */}
        <div className="space-y-1">
          {feature.tags.map((tag) => (
            <div key={tag} className="font-mono md3-label-small" style={{ color: 'var(--md-sys-color-outline)' }}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturesPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <main style={{ backgroundColor: 'var(--md-sys-color-surface)' }}>
      {/* Hero header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Glow accent */}
        <div
          className="absolute top-0 left-1/3 w-96 h-96 rounded-full pointer-events-none animate-bass-pulse"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)' }}
        />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono md3-label-small mb-4" style={{ color: 'var(--md-sys-color-outline)' }}>
              {'> features.module.loaded'}
            </div>
            <h1
              className="md3-display-medium font-bold tracking-tight mb-6 text-balance"
              style={{ color: 'var(--md-sys-color-on-surface)' }}
            >
              Everything you&apos;d expect.
              <br />
              <span className="text-gradient-purple">And much more.</span>
            </h1>
            <p className="md3-body-large max-w-xl" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              Built for music lovers who want a premium experience without the premium price.
              Every feature designed with intent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-12 pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {FEATURES.map((feature, i) => (
              <FeatureCard key={feature.title} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{
          backgroundColor: 'var(--md-sys-color-surface-container-low)',
          borderTop: '1px solid var(--md-sys-color-outline-variant)',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="md3-headline-large font-bold mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
            Ready to experience Meld?
          </h2>
          <p className="md3-body-large mb-8" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
            Download now and discover music that actually understands you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/download" className="md3-filled-button animate-glow-pulse">
              <Download size={18} />
              Download Meld
            </Link>
            <Link href="/architecture" className="md3-outlined-button">
              Explore Architecture
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
