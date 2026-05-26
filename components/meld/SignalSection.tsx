'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const NODES = [
  {
    id: 'spotify',
    label: 'SPOTIFY TASTE PROFILE',
    color: '#1DB954',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="13" stroke="#1DB954" strokeWidth="1.5" />
        <path d="M7 14.5C10 11.5 17 16.5 21 13.5" stroke="#1DB954" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 17.5C10 14.5 17 19.5 21 16.5" stroke="#1DB954" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <path d="M7 11.5C10 8.5 17 13.5 21 10.5" stroke="#1DB954" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    detail: 'Zero-setup login. No Client ID needed. Just sign in with your free account. Meld reads your top tracks, artists, and playlists — never writes, never modifies.',
    tag: '> auth: read-only · GraphQL endpoint · zero-write safety',
  },
  {
    id: 'engine',
    label: 'RECOMMENDATION ENGINE',
    color: '#A855F7',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="4" fill="#A855F7" opacity="0.3" />
        <circle cx="14" cy="14" r="2" fill="#A855F7" />
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <line
            key={i}
            x1="14" y1="14"
            x2={14 + 10 * Math.cos((angle * Math.PI) / 180)}
            y2={14 + 10 * Math.sin((angle * Math.PI) / 180)}
            stroke="#A855F7"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity={0.4 + i * 0.1}
          />
        ))}
      </svg>
    ),
    detail: 'Multi-factor AI scoring: artist affinity 30%, genre overlap 20%, source relevance 25%, recency 15%, popularity similarity 10%. Diversity constraint: max 3 tracks per artist.',
    tag: '> weighted multi-factor · diversity cap 3 per artist · fuzzy-match cache',
  },
  {
    id: 'youtube',
    label: 'YOUTUBE MUSIC STREAMING',
    color: '#4A9EFF',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="7" width="22" height="14" rx="3" stroke="#4A9EFF" strokeWidth="1.5" />
        <path d="M12 10.5L19 14L12 17.5V10.5Z" fill="#4A9EFF" opacity="0.8" />
      </svg>
    ),
    detail: 'Streams from YouTube Music&apos;s 100M+ catalogue. No ads. Background playback. Audio-only mode. Offline downloads. All matched from your Spotify queue.',
    tag: '> InnerTube API · ExoPlayer · offline-first cache · 3-tier fallback',
  },
]

function DataFlow({ color, delay }: { color: string; delay: number }) {
  return (
    <div className="flex flex-col items-center my-2">
      <div className="flex flex-col items-center gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-0.5 h-3 rounded-full"
            style={{ backgroundColor: color }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: [0, 0.8, 0], scaleY: [0, 1, 0] }}
            transition={{
              duration: 1.2,
              delay: delay + i * 0.15,
              repeat: Infinity,
              repeatDelay: 0.8,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function SignalSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section
      id="signal"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: '#08080C' }}
    >
      {/* Section bg tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(168,85,247,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="font-mono text-xs mb-4" style={{ color: '#555560' }}>{'> signal.architecture'}</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance" style={{ letterSpacing: '-0.02em', color: '#F5F5F5' }}>
            Spotify thinks.
            <br />
            <span className="text-gradient-spotify">YouTube streams.</span>
            <br />
            Meld connects.
          </h2>
        </motion.div>

        {/* Flow */}
        <div className="flex flex-col items-center">
          {NODES.map((node, i) => (
            <div key={node.id} className="flex flex-col items-center w-full max-w-2xl">
              {/* Node card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.2 }}
                className="w-full glass-card rounded-2xl p-6 group cursor-default"
                style={{
                  border: `1px solid ${node.color}33`,
                  boxShadow: `0 0 30px ${node.color}10`,
                }}
                whileHover={{
                  boxShadow: `0 0 50px ${node.color}25`,
                  borderColor: `${node.color}66`,
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${node.color}15` }}
                  >
                    {node.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="font-mono text-xs font-bold tracking-widest"
                        style={{ color: node.color }}
                      >
                        {node.label}
                      </span>
                      <span
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: node.color }}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: '#A1A1A6' }}>
                      {node.detail}
                    </p>
                    <div className="font-mono text-xs" style={{ color: '#555560' }}>{node.tag}</div>
                  </div>
                </div>
              </motion.div>

              {/* Arrow flow between nodes */}
              {i < NODES.length - 1 && (
                <DataFlow
                  color={NODES[i + 1].color}
                  delay={0.6 + i * 0.2}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
