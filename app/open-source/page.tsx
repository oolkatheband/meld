'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Github, Star, GitFork, GitCommit, Package, Heart, ArrowRight, Download, ExternalLink } from 'lucide-react'

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

const CONTRIBUTORS = [
  { name: 'Francesco Grazioso', role: 'Creator & Lead', avatar: 'FG', commits: '2,400+' },
  { name: 'Community', role: 'Bug reports & testing', avatar: 'CO', commits: '180+' },
]

function CommitGraph() {
  const weeks = 26
  const days = 7
  const grid = Array.from({ length: weeks }, (_, w) =>
    Array.from({ length: days }, (_, d) => {
      const base = Math.random()
      const recencyBoost = w / weeks
      const val = base * 0.6 + recencyBoost * 0.4
      return val > 0.7 ? 3 : val > 0.5 ? 2 : val > 0.3 ? 1 : 0
    })
  )

  const intensityColors: Record<number, string> = {
    0: 'var(--md-sys-color-surface-container)',
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

export default function OpenSourcePage() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <main style={{ backgroundColor: 'var(--md-sys-color-surface)' }}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none animate-bass-pulse"
          style={{ background: 'radial-gradient(circle, rgba(29,185,84,0.08) 0%, transparent 70%)' }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono md3-label-small mb-4" style={{ color: 'var(--md-sys-color-outline)' }}>
              {'> git.log --oneline --all'}
            </div>
            <h1
              className="md3-display-medium font-bold tracking-tight mb-6 text-balance"
              style={{ color: 'var(--md-sys-color-on-surface)' }}
            >
              Open source.
              <br />
              <span className="text-gradient-spotify">No secrets.</span>
            </h1>
            <p className="md3-body-large max-w-xl" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              Every line of code is public. Audit it, fork it, contribute to it.
              Built in the open, for the community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats + Content */}
      <section ref={ref} className="py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
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
                    className="md3-glass-surface p-5"
                    style={{ border: `1px solid ${stat.color}22` }}
                  >
                    <stat.icon size={18} style={{ color: stat.color }} className="mb-3" />
                    <div className="md3-display-small font-bold mb-1" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                      {stat.value}
                    </div>
                    <div className="font-mono md3-label-small" style={{ color: 'var(--md-sys-color-outline)' }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Commit graph */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="md3-glass-surface p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono md3-label-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                    Commit activity
                  </span>
                  <span className="font-mono md3-label-small" style={{ color: 'var(--meld-spotify)' }}>
                    2,580+ commits
                  </span>
                </div>
                <CommitGraph />
                <div className="flex items-center justify-end gap-2 mt-3">
                  <span className="font-mono md3-label-small" style={{ color: 'var(--md-sys-color-outline)' }}>Less</span>
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-2.5 h-2.5 rounded-sm"
                      style={{
                        backgroundColor: [
                          'var(--md-sys-color-surface-container)',
                          'rgba(29,185,84,0.25)',
                          'rgba(29,185,84,0.55)',
                          'rgba(29,185,84,0.9)',
                        ][i],
                      }}
                      aria-hidden="true"
                    />
                  ))}
                  <span className="font-mono md3-label-small" style={{ color: 'var(--md-sys-color-outline)' }}>More</span>
                </div>
              </motion.div>

              {/* License */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="md3-glass-surface p-6"
              >
                <h3 className="md3-title-medium font-bold mb-3" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  License
                </h3>
                <p className="md3-body-medium mb-4" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  Meld is released under the GPL-3.0 license. You&apos;re free to use, modify, and distribute the code.
                </p>
                <a
                  href="https://github.com/FrancescoGrazioso/Meld/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 md3-label-large hover:underline"
                  style={{ color: 'var(--meld-spotify)' }}
                >
                  View full license
                  <ExternalLink size={14} />
                </a>
              </motion.div>
            </div>

            {/* Right: Fork lineage + author */}
            <div className="space-y-6">
              {/* Lineage */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md3-glass-surface p-6"
              >
                <div className="font-mono md3-label-small mb-6" style={{ color: 'var(--md-sys-color-outline)' }}>
                  {'> fork.lineage'}
                </div>
                <div className="space-y-0">
                  {LINEAGE.map((item, i) => (
                    <div key={item.name} className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-4 h-4 rounded-full border-2 flex-shrink-0 mt-0.5"
                          style={{ borderColor: item.color, backgroundColor: `${item.color}20` }}
                          aria-hidden="true"
                        />
                        {i < LINEAGE.length - 1 && (
                          <div className="w-0.5 h-10 mt-1" style={{ backgroundColor: 'var(--md-sys-color-outline-variant)' }} aria-hidden="true" />
                        )}
                      </div>
                      <div className="pb-6">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="md3-title-small font-bold"
                            style={{ color: item.name === 'Meld' ? item.color : 'var(--md-sys-color-on-surface)' }}
                          >
                            {item.name}
                          </span>
                          {item.name === 'Meld' && (
                            <span
                              className="font-mono md3-label-small px-2 py-0.5 rounded-full"
                              style={{ backgroundColor: 'rgba(29,185,84,0.15)', color: 'var(--meld-spotify)' }}
                            >
                              current
                            </span>
                          )}
                        </div>
                        <div className="font-mono md3-label-small" style={{ color: 'var(--md-sys-color-outline)' }}>
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Contributors */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="md3-glass-surface p-6 border-glow-spotify"
              >
                <div className="font-mono md3-label-small mb-4" style={{ color: 'var(--md-sys-color-outline)' }}>
                  {'> git.blame --show-author'}
                </div>
                <div className="space-y-4">
                  {CONTRIBUTORS.map((contrib, i) => (
                    <div key={contrib.name} className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center md3-title-medium font-bold flex-shrink-0"
                        style={{
                          background: i === 0 ? 'linear-gradient(135deg, #1DB954, #4A9EFF)' : 'var(--md-sys-color-surface-container-high)',
                          color: i === 0 ? 'var(--md-sys-color-surface)' : 'var(--md-sys-color-on-surface-variant)',
                        }}
                      >
                        {contrib.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="md3-title-small font-bold" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                          {contrib.name}
                        </div>
                        <div className="md3-label-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                          {contrib.role}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="md3-title-small font-bold" style={{ color: 'var(--meld-spotify)' }}>
                          {contrib.commits}
                        </div>
                        <div className="md3-label-small" style={{ color: 'var(--md-sys-color-outline)' }}>
                          commits
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Author link */}
                <div className="mt-6 pt-4" style={{ borderTop: '1px solid var(--md-sys-color-outline-variant)' }}>
                  <a
                    href="https://github.com/FrancescoGrazioso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 md3-label-large hover:underline"
                    style={{ color: 'var(--meld-spotify)' }}
                  >
                    <Github size={14} />
                    @FrancescoGrazioso
                  </a>
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
                  borderRadius: 'var(--md-sys-shape-corner-large)',
                }}
              >
                <div className="flex items-center gap-3">
                  <Github size={24} style={{ color: 'var(--md-sys-color-on-surface)' }} />
                  <div>
                    <div className="md3-title-small font-bold" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                      FrancescoGrazioso/Meld
                    </div>
                    <div className="font-mono md3-label-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                      GPL-3.0 · Active development
                    </div>
                  </div>
                </div>
                <div
                  className="md3-label-large px-4 py-2 rounded-full transition-colors"
                  style={{ backgroundColor: 'rgba(29,185,84,0.15)', color: 'var(--meld-spotify)' }}
                >
                  Star
                </div>
              </motion.a>
            </div>
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
            Ready to try Meld?
          </h2>
          <p className="md3-body-large mb-8" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
            Download now and experience music that actually understands you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/download" className="md3-filled-button animate-glow-pulse">
              <Download size={18} />
              Download Meld
            </Link>
            <Link href="/features" className="md3-outlined-button">
              Explore Features
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
