'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const MODULES = [
  {
    id: 'app',
    name: 'app',
    desc: 'Main Android application — UI screens, ViewModels, playback service, recommendation engine.',
    color: '#F5F5F5',
    x: 50, y: 10,
    deps: ['innertube', 'spotify', 'kizzy', 'lastfm', 'betterlyrics', 'shazamkit'],
    lang: 'Kotlin 94%',
    isCore: true,
  },
  {
    id: 'innertube',
    name: 'innertube',
    desc: 'YouTube Music API client. Handles streaming URL resolution, search, and playback.',
    color: '#4A9EFF',
    x: 15, y: 45,
    deps: [],
    lang: 'Kotlin',
    isCore: false,
  },
  {
    id: 'spotify',
    name: 'spotify',
    desc: 'Spotify GraphQL + REST client. Token management, taste profile, playlists.',
    color: '#1DB954',
    x: 85, y: 45,
    deps: [],
    lang: 'Kotlin',
    isCore: false,
  },
  {
    id: 'kizzy',
    name: 'kizzy',
    desc: 'Discord Rich Presence module. Shows current track on Discord profile.',
    color: '#A855F7',
    x: 5, y: 80,
    deps: [],
    lang: 'Kotlin',
    isCore: false,
  },
  {
    id: 'betterlyrics',
    name: 'betterlyrics',
    desc: 'Time-synced lyrics with word-level highlighting. Powered by BetterLyrics + LRCLib.',
    color: '#EC4899',
    x: 30, y: 82,
    deps: [],
    lang: 'Kotlin',
    isCore: false,
  },
  {
    id: 'lastfm',
    name: 'lastfm',
    desc: 'Last.fm scrobbling integration. Tracks listening history automatically.',
    color: '#F59E0B',
    x: 55, y: 80,
    deps: [],
    lang: 'Kotlin',
    isCore: false,
  },
  {
    id: 'shazamkit',
    name: 'shazamkit',
    desc: 'Shazam music recognition. Identify songs playing around you with one tap.',
    color: '#F97316',
    x: 78, y: 82,
    deps: [],
    lang: 'Kotlin',
    isCore: false,
  },
  {
    id: 'lrclib',
    name: 'lrclib',
    desc: 'LRC lyrics library providing a fallback lyrics source.',
    color: '#06B6D4',
    x: 95, y: 65,
    deps: [],
    lang: 'Kotlin',
    isCore: false,
  },
]

export default function ArchitectureSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [hovered, setHovered] = useState<string | null>(null)

  const activeModule = MODULES.find((m) => m.id === hovered)

  return (
    <section
      id="architecture"
      ref={ref}
      className="py-32 overflow-hidden"
      style={{ backgroundColor: '#0a0a0e' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="font-mono text-xs mb-4" style={{ color: '#555560' }}>{'> gradle.modules.visualized'}</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance" style={{ letterSpacing: '-0.02em', color: '#F5F5F5' }}>
            Open source.
            <br />
            <span className="text-gradient-spotify">Modular. Precise.</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#A1A1A6' }}>
            Built like a production-grade app. Each integration lives in its own Gradle module — independent, testable, swappable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Node diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div
              className="relative w-full rounded-2xl glass-card overflow-hidden"
              style={{ paddingTop: '85%' }}
            >
              <div className="absolute inset-0 p-6">
                <svg className="w-full h-full" viewBox="0 0 100 100" aria-label="Module dependency graph">
                  {/* Connection lines from app to deps */}
                  {MODULES.filter((m) => m.id !== 'app').map((mod) => {
                    const app = MODULES[0]
                    const isActive = hovered === mod.id || hovered === 'app'
                    return (
                      <motion.line
                        key={mod.id}
                        x1={app.x}
                        y1={app.y + 6}
                        x2={mod.x}
                        y2={mod.y - 4}
                        stroke={isActive ? mod.color : '#2A2A2E'}
                        strokeWidth={isActive ? '0.8' : '0.4'}
                        strokeDasharray="2 2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={inView ? { pathLength: 1, opacity: isActive ? 0.8 : 0.3 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 + MODULES.indexOf(mod) * 0.05 }}
                      />
                    )
                  })}

                  {/* Nodes */}
                  {MODULES.map((mod, i) => (
                    <motion.g
                      key={mod.id}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={() => setHovered(mod.id)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {/* Glow ring on hover */}
                      {hovered === mod.id && (
                        <circle
                          cx={mod.x}
                          cy={mod.y}
                          r={mod.isCore ? 9 : 6.5}
                          fill="none"
                          stroke={mod.color}
                          strokeWidth="0.5"
                          opacity="0.4"
                        />
                      )}
                      <circle
                        cx={mod.x}
                        cy={mod.y}
                        r={mod.isCore ? 7 : 5}
                        fill={hovered === mod.id ? `${mod.color}30` : `${mod.color}15`}
                        stroke={mod.color}
                        strokeWidth={hovered === mod.id ? '1.2' : '0.8'}
                      />
                      <text
                        x={mod.x}
                        y={mod.y + (mod.isCore ? 12 : 10)}
                        textAnchor="middle"
                        fill={hovered === mod.id ? mod.color : '#A1A1A6'}
                        fontSize={mod.isCore ? '3.5' : '2.8'}
                        fontFamily="JetBrains Mono, monospace"
                      >
                        {mod.name}
                      </text>
                    </motion.g>
                  ))}
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Module details */}
          <div className="space-y-3">
            <div className="font-mono text-xs mb-6" style={{ color: '#555560' }}>
              {'> hover a module to inspect'}
            </div>

            {/* Active module detail */}
            <motion.div
              key={hovered || 'none'}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="glass-card-bright rounded-2xl p-5 mb-4 min-h-[100px]"
              style={{
                border: activeModule ? `1px solid ${activeModule.color}33` : '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {activeModule ? (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: activeModule.color }}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-sm font-bold" style={{ color: activeModule.color }}>
                      :{activeModule.name}
                    </span>
                    <span className="font-mono text-xs" style={{ color: '#555560' }}>{activeModule.lang}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#A1A1A6' }}>{activeModule.desc}</p>
                </>
              ) : (
                <p className="font-mono text-xs" style={{ color: '#555560' }}>
                  {'> select a module to inspect its role in the signal chain…'}
                </p>
              )}
            </motion.div>

            {/* Module list */}
            <div className="grid grid-cols-2 gap-2">
              {MODULES.map((mod) => (
                <motion.div
                  key={mod.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: MODULES.indexOf(mod) * 0.05 + 0.3 }}
                  className="rounded-xl p-3 cursor-default transition-all duration-200"
                  style={{
                    backgroundColor: hovered === mod.id ? `${mod.color}12` : 'rgba(27,27,31,0.5)',
                    border: hovered === mod.id ? `1px solid ${mod.color}40` : '1px solid rgba(42,42,46,0.6)',
                  }}
                  onMouseEnter={() => setHovered(mod.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: mod.color }} aria-hidden="true" />
                    <span className="font-mono text-xs" style={{ color: hovered === mod.id ? mod.color : '#A1A1A6' }}>
                      :{mod.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
