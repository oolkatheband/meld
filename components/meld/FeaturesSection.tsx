'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Wifi, Music2, MessageSquare, Sliders, Users, Scan,
  Palette, Moon, Download, Zap,
} from 'lucide-react'

const FEATURES = [
  {
    icon: Wifi,
    title: 'Offline Playback',
    desc: 'Download anything. Cache it locally. Play it anywhere — no signal, no problem.',
    tags: ['> offline.mode=enabled', '> cache: room-db · ExoPlayer'],
    color: '#F59E0B',
    mood: 'rgba(245,158,11,0.05)',
    flip: false,
  },
  {
    icon: Music2,
    title: 'Live Lyrics, Word by Word',
    desc: 'Time-synced lyrics with word-by-word highlighting. Karaoke-ready, color-synced syllables.',
    tags: ['> betterlyrics · lrclib', '> word-level timestamps · synced'],
    color: '#EC4899',
    mood: 'rgba(236,72,153,0.05)',
    flip: true,
  },
  {
    icon: MessageSquare,
    title: 'Discord Rich Presence',
    desc: 'Show what you\'re listening to on Discord. Album art, track title, artist — live.',
    tags: ['> kizzy module · RPC v2', '> real-time · auto-updates'],
    color: '#A855F7',
    mood: 'rgba(168,85,247,0.05)',
    flip: false,
  },
  {
    icon: Sliders,
    title: 'Parametric EQ & DSP',
    desc: 'Full custom equalizer with 10-band parametric EQ, bass boost, reverb, and more.',
    tags: ['> dsp.engine=custom', '> 10-band · audiophile-grade'],
    color: '#4A9EFF',
    mood: 'rgba(74,158,255,0.05)',
    flip: true,
  },
  {
    icon: Users,
    title: 'Listen Together',
    desc: 'Sync playback with friends in real time. Same song, same position, always.',
    tags: ['> metroproto · protobuf sync', '> real-time · multi-user'],
    color: '#06B6D4',
    mood: 'rgba(6,182,212,0.05)',
    flip: false,
  },
  {
    icon: Scan,
    title: 'Shazam Integration',
    desc: 'Hear something you like? Tap to identify it instantly with ShazamKit.',
    tags: ['> shazamkit · ambient id', '> one-tap · seamless'],
    color: '#F97316',
    mood: 'rgba(249,115,22,0.05)',
    flip: true,
  },
  {
    icon: Palette,
    title: 'Material You Theming',
    desc: 'Dynamic color extraction from album art. Light, Dark, Black, and Dynamic themes.',
    tags: ['> material3 · dynamic-color', '> monet · adaptive-palette'],
    color: '#1DB954',
    mood: 'rgba(29,185,84,0.05)',
    flip: false,
  },
  {
    icon: Download,
    title: 'Smart Queue Generation',
    desc: 'Meld builds infinite radio queues from your Spotify taste profile automatically.',
    tags: ['> recommendation.engine=v2', '> weighted · diversity-capped'],
    color: '#A855F7',
    mood: 'rgba(168,85,247,0.05)',
    flip: true,
  },
  {
    icon: Moon,
    title: 'Spotify-Only Mode',
    desc: 'Hide all YouTube-based home screen content and go pure Spotify for your feed.',
    tags: ['> spotify.mode=exclusive', '> home: spotify-only'],
    color: '#1DB954',
    mood: 'rgba(29,185,84,0.05)',
    flip: false,
  },
  {
    icon: Zap,
    title: 'Last.fm Scrobbling',
    desc: 'Every track you play is scrobbled to Last.fm automatically in the background.',
    tags: ['> lastfm.api · scrobble', '> auto · background-sync'],
    color: '#F59E0B',
    mood: 'rgba(245,158,11,0.05)',
    flip: true,
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
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative glass-card rounded-2xl p-6 group hover:scale-[1.01] transition-transform duration-300"
      style={{
        background: `rgba(18,18,20,0.7)`,
        border: `1px solid ${feature.color}22`,
        boxShadow: `0 0 30px ${feature.color}08`,
      }}
      whileHover={{ boxShadow: `0 0 50px ${feature.color}18`, borderColor: `${feature.color}44` }}
    >
      {/* Mood tint */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ background: feature.mood }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
          style={{ backgroundColor: `${feature.color}18` }}
        >
          <Icon size={20} style={{ color: feature.color }} />
        </div>

        {/* Title + desc */}
        <h3 className="text-base font-bold mb-2" style={{ color: '#F5F5F5' }}>{feature.title}</h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: '#A1A1A6' }}>{feature.desc}</p>

        {/* Tags */}
        <div className="space-y-1">
          {feature.tags.map((tag) => (
            <div key={tag} className="font-mono text-xs" style={{ color: '#555560' }}>{tag}</div>
          ))}
        </div>

        {/* Data tag on hover */}
        <div
          className="absolute top-4 right-4 font-mono text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{
            backgroundColor: `${feature.color}15`,
            color: feature.color,
            border: `1px solid ${feature.color}33`,
          }}
        >
          feature.meld.{feature.title.toLowerCase().replace(/\s+/g, '_').substring(0, 12)}=true
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturesSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section
      id="features"
      className="py-32"
      style={{ backgroundColor: '#08080C' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="font-mono text-xs mb-4" style={{ color: '#555560' }}>{'> features.module.loaded'}</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance" style={{ letterSpacing: '-0.02em', color: '#F5F5F5' }}>
            Everything you&apos;d expect.
            <br />
            <span className="text-gradient-purple">And much more.</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#A1A1A6' }}>
            Built for music lovers who want a premium experience without the premium price.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
