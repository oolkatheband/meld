'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Github, Star, GitFork, GitCommit, Package } from 'lucide-react'

const LINEAGE = [
  { name: 'InnerTune', desc: 'Original YouTube Music client', color: '#F59E0B', level: 0 },
  { name: 'OuterTune', desc: 'Local media + extra features', color: '#4A9EFF', level: 1 },
  { name: 'Metrolist', desc: 'Community features + polish', color: '#A855F7', level: 2 },
  { name: 'Meld', desc: 'Spotify integration + engine', color: '#1DB954', level: 3 },
]

const STATS = [
  { icon: Star, label: 'GitHub Stars', value: '684', color: '#F59E0B' },
  { icon: GitFork, label: 'Forks', value: '30', color: '#4A9EFF' },
  { icon: GitCommit, label: 'Commits', value: '2,580+', color: '#1DB954' },
  { icon: Package, label: 'Releases', value: '11', color: '#A855F7' },
]

function CommitGraph() {
  const weeks = 26
  const days = 7
  // Simulate a commit graph with random intensities
  const grid = Array.from({ length: weeks }, (_, w) =>
    Array.from({ length: days }, (_, d) => {
      const base = Math.random()
      // Higher activity toward recent weeks
      const recencyBoost = w / weeks
      const val = base * 0.6 + recencyBoost * 0.4
      return val > 0.7 ? 3 : val > 0.5 ? 2 : val > 0.3 ? 1 : 0
    })
  )

  const intensityColors: Record<number, string> = {
    0: '#1a1a1e',
    1: 'rgba(29,185,84,0.25)',
    2: 'rgba(29,185,84,0.55)',
    3: 'rgba(29,185,84,0.9)',
  }

  return (
    <div className="flex gap-1 overflow-x-auto pb-2" aria-label="Simulated commit activity graph">
      {grid.map((week, w) => (
        <div key={w} className="flex flex-col gap-1">
          {week.map((intensity, d) => (
            <div
              key={d}
              className="w-2.5 h-2.5 rounded-sm"
              style={{ backgroundColor: intensityColors[intensity] }}
              aria-hidden="true"
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default function OpenSourceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section
      id="opensource"
      ref={ref}
      className="py-32"
      style={{ backgroundColor: '#08080C' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="font-mono text-xs mb-4" style={{ color: '#555560' }}>{'> git.log --oneline --all'}</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance" style={{ letterSpacing: '-0.02em', color: '#F5F5F5' }}>
            Open source.
            <br />
            <span className="text-gradient-spotify">No secrets.</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#A1A1A6' }}>
            Every line of code is public. Audit it, fork it, contribute to it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Stats + commit graph */}
          <div className="space-y-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="glass-card rounded-2xl p-5"
                  style={{ border: `1px solid ${stat.color}22` }}
                >
                  <stat.icon size={16} style={{ color: stat.color }} className="mb-3" />
                  <div className="text-3xl font-bold mb-1" style={{ color: '#F5F5F5' }}>{stat.value}</div>
                  <div className="font-mono text-xs" style={{ color: '#555560' }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Commit graph */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card rounded-2xl p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs" style={{ color: '#A1A1A6' }}>Commit activity</span>
                <span className="font-mono text-xs" style={{ color: '#1DB954' }}>2,580+ commits</span>
              </div>
              <CommitGraph />
              <div className="flex items-center justify-end gap-2 mt-3">
                <span className="font-mono" style={{ fontSize: '9px', color: '#555560' }}>Less</span>
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-2.5 h-2.5 rounded-sm"
                    style={{
                      backgroundColor: ['#1a1a1e', 'rgba(29,185,84,0.25)', 'rgba(29,185,84,0.55)', 'rgba(29,185,84,0.9)'][i],
                    }}
                    aria-hidden="true"
                  />
                ))}
                <span className="font-mono" style={{ fontSize: '9px', color: '#555560' }}>More</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Fork lineage + author */}
          <div className="space-y-6">
            {/* Lineage */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="font-mono text-xs mb-6" style={{ color: '#555560' }}>{'> fork.lineage'}</div>
              <div className="space-y-0">
                {LINEAGE.map((item, i) => (
                  <div key={item.name} className="flex items-start gap-3">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-3 h-3 rounded-full border-2 flex-shrink-0 mt-0.5"
                        style={{ borderColor: item.color, backgroundColor: `${item.color}20` }}
                        aria-hidden="true"
                      />
                      {i < LINEAGE.length - 1 && (
                        <div className="w-0.5 h-8 mt-1" style={{ backgroundColor: '#2A2A2E' }} aria-hidden="true" />
                      )}
                    </div>
                    <div className="pb-6">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm" style={{ color: item.name === 'Meld' ? item.color : '#F5F5F5' }}>
                          {item.name}
                        </span>
                        {item.name === 'Meld' && (
                          <span
                            className="font-mono text-xs px-1.5 py-0.5 rounded"
                            style={{ backgroundColor: 'rgba(29,185,84,0.15)', color: '#1DB954' }}
                          >
                            current
                          </span>
                        )}
                      </div>
                      <div className="font-mono text-xs mt-0.5" style={{ color: '#555560' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Author card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="glass-card rounded-2xl p-6 border-glow-spotify"
            >
              <div className="font-mono text-xs mb-4" style={{ color: '#555560' }}>{'> git.blame --show-author'}</div>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #1DB954, #4A9EFF)', color: '#08080C' }}
                  aria-label="Author avatar"
                >
                  FG
                </div>
                <div>
                  <div className="font-bold" style={{ color: '#F5F5F5' }}>Francesco Grazioso</div>
                  <div className="font-mono text-xs mt-0.5" style={{ color: '#A1A1A6' }}>Sole developer · Kotlin · Android · API Reverse-Engineer</div>
                  <a
                    href="https://github.com/FrancescoGrazioso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 font-mono text-xs hover:underline"
                    style={{ color: '#1DB954' }}
                  >
                    <Github size={11} />
                    @FrancescoGrazioso
                  </a>
                </div>
              </div>
              <div className="mt-4 pt-4" style={{ borderTop: '1px solid #2A2A2E' }}>
                <p className="text-xs leading-relaxed" style={{ color: '#A1A1A6' }}>
                  Senior-level Android developer specializing in reverse-engineering undocumented APIs.
                  Meticulous commit discipline, professional architecture, and one genuinely innovative idea.
                </p>
              </div>
            </motion.div>

            {/* GitHub CTA */}
            <motion.a
              href="https://github.com/FrancescoGrazioso/Meld"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-between p-5 rounded-2xl group transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(29,185,84,0.1), rgba(74,158,255,0.05))',
                border: '1px solid rgba(29,185,84,0.25)',
              }}
              whileHover={{ borderColor: 'rgba(29,185,84,0.5)' }}
            >
              <div className="flex items-center gap-3">
                <Github size={20} style={{ color: '#F5F5F5' }} />
                <div>
                  <div className="font-bold text-sm" style={{ color: '#F5F5F5' }}>FrancescoGrazioso/Meld</div>
                  <div className="font-mono text-xs" style={{ color: '#A1A1A6' }}>GPL-3.0 · Active development</div>
                </div>
              </div>
              <div
                className="font-mono text-xs px-3 py-1.5 rounded-lg transition-colors"
                style={{ backgroundColor: 'rgba(29,185,84,0.15)', color: '#1DB954' }}
              >
                Star →
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
