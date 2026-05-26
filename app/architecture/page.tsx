'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { Download, ArrowRight, Code2, Layers, Cpu } from 'lucide-react'

const MODULES = [
  {
    id: 'app',
    name: 'app',
    desc: 'Main Android application — UI screens, ViewModels, playback service, recommendation engine.',
    color: '#F5F5F5',
    x: 50, y: 10,
    deps: ['innertube', 'spotify', 'kizzy', 'lastfm', 'betterlyrics', 'shazamkit'],
    lang: 'Kotlin 94%',
    lines: '~45,000',
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
    lines: '~8,000',
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
    lines: '~6,500',
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
    lines: '~2,000',
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
    lines: '~3,200',
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
    lines: '~1,800',
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
    lines: '~2,400',
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
    lines: '~1,200',
    isCore: false,
  },
]

const TECH_STACK = [
  { name: 'Kotlin', version: '1.9.x', color: '#A855F7' },
  { name: 'Jetpack Compose', version: 'BOM 2024.x', color: '#4A9EFF' },
  { name: 'ExoPlayer', version: '2.19.x', color: '#1DB954' },
  { name: 'Room DB', version: '2.6.x', color: '#F59E0B' },
  { name: 'Ktor Client', version: '2.3.x', color: '#EC4899' },
  { name: 'Material 3', version: 'Dynamic', color: '#06B6D4' },
]

export default function ArchitecturePage() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [hovered, setHovered] = useState<string | null>(null)

  const activeModule = MODULES.find((m) => m.id === hovered)

  return (
    <main style={{ backgroundColor: 'var(--md-sys-color-surface)' }}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute top-0 right-1/4 w-96 h-96 rounded-full pointer-events-none animate-bass-pulse"
          style={{ background: 'radial-gradient(circle, rgba(74,158,255,0.08) 0%, transparent 70%)' }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono md3-label-small mb-4" style={{ color: 'var(--md-sys-color-outline)' }}>
              {'> gradle.modules.visualized'}
            </div>
            <h1
              className="md3-display-medium font-bold tracking-tight mb-6 text-balance"
              style={{ color: 'var(--md-sys-color-on-surface)' }}
            >
              Open source.
              <br />
              <span className="text-gradient-spotify">Modular. Precise.</span>
            </h1>
            <p className="md3-body-large max-w-xl" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              Built like a production-grade app. Each integration lives in its own Gradle module — independent, testable, swappable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Module diagram section */}
      <section ref={ref} className="py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Node diagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div
                className="relative w-full md3-glass-surface overflow-hidden"
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
                          stroke={isActive ? mod.color : 'var(--md-sys-color-outline-variant)'}
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
                          fill={hovered === mod.id ? mod.color : 'var(--md-sys-color-on-surface-variant)'}
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
            <div className="space-y-4">
              <div className="font-mono md3-label-small mb-4" style={{ color: 'var(--md-sys-color-outline)' }}>
                {'> hover a module to inspect'}
              </div>

              {/* Active module detail */}
              <motion.div
                key={hovered || 'none'}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="md3-glass-surface-bright p-6 min-h-[140px]"
                style={{
                  border: activeModule ? `1px solid ${activeModule.color}33` : '1px solid var(--md-sys-color-outline-variant)',
                }}
              >
                {activeModule ? (
                  <>
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: activeModule.color }}
                        aria-hidden="true"
                      />
                      <span className="font-mono md3-title-medium font-bold" style={{ color: activeModule.color }}>
                        :{activeModule.name}
                      </span>
                      <span className="font-mono md3-label-small" style={{ color: 'var(--md-sys-color-outline)' }}>
                        {activeModule.lang}
                      </span>
                    </div>
                    <p className="md3-body-medium leading-relaxed mb-3" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                      {activeModule.desc}
                    </p>
                    <div className="font-mono md3-label-small" style={{ color: 'var(--md-sys-color-outline)' }}>
                      {activeModule.lines} lines of code
                    </div>
                  </>
                ) : (
                  <p className="font-mono md3-body-small" style={{ color: 'var(--md-sys-color-outline)' }}>
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
                      backgroundColor: hovered === mod.id ? `${mod.color}12` : 'var(--md-sys-color-surface-container)',
                      border: hovered === mod.id ? `1px solid ${mod.color}40` : '1px solid var(--md-sys-color-outline-variant)',
                    }}
                    onMouseEnter={() => setHovered(mod.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: mod.color }} aria-hidden="true" />
                      <span className="font-mono md3-label-medium" style={{ color: hovered === mod.id ? mod.color : 'var(--md-sys-color-on-surface-variant)' }}>
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

      {/* Tech stack */}
      <section
        className="py-20"
        style={{
          backgroundColor: 'var(--md-sys-color-surface-container-low)',
          borderTop: '1px solid var(--md-sys-color-outline-variant)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Stack cards */}
            <div className="lg:col-span-2">
              <h2 className="md3-headline-medium font-bold mb-8" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Built with modern tools
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {TECH_STACK.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                    className="md3-glass-surface p-4"
                    style={{ border: `1px solid ${tech.color}22` }}
                  >
                    <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: tech.color }} />
                    <div className="md3-title-small font-bold mb-1" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                      {tech.name}
                    </div>
                    <div className="font-mono md3-label-small" style={{ color: 'var(--md-sys-color-outline)' }}>
                      {tech.version}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-4">
              <h3 className="md3-title-large font-bold mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Project stats
              </h3>
              {[
                { icon: Code2, label: 'Lines of code', value: '~70,000+' },
                { icon: Layers, label: 'Gradle modules', value: '8' },
                { icon: Cpu, label: 'Dependencies', value: '45+' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{ backgroundColor: 'var(--md-sys-color-surface-container)' }}
                >
                  <stat.icon size={20} style={{ color: 'var(--meld-spotify)' }} />
                  <div className="flex-1">
                    <div className="md3-body-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                      {stat.value}
                    </div>
                    <div className="md3-label-small" style={{ color: 'var(--md-sys-color-outline)' }}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ borderTop: '1px solid var(--md-sys-color-outline-variant)' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="md3-headline-large font-bold mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
            Want to contribute?
          </h2>
          <p className="md3-body-large mb-8" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
            Meld is fully open source. Check out the code, open issues, or submit PRs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/FrancescoGrazioso/Meld"
              target="_blank"
              rel="noopener noreferrer"
              className="md3-filled-button animate-glow-pulse"
            >
              View on GitHub
              <ArrowRight size={16} />
            </a>
            <Link href="/open-source" className="md3-outlined-button">
              Open Source Info
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
