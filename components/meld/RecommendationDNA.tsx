'use client'

import { motion, useInView, useAnimationFrame } from 'framer-motion'
import { useRef, useState, useCallback } from 'react'

interface Node {
  id: string
  label: string
  type: 'artist' | 'genre' | 'track'
  color: string
  x: number
  y: number
  radius: number
  vx: number
  vy: number
}

const INITIAL_NODES: Node[] = [
  { id: 'a1', label: 'M83', type: 'artist', color: '#1DB954', x: 50, y: 50, radius: 5, vx: 0.04, vy: 0.03 },
  { id: 'a2', label: 'Alt-J', type: 'artist', color: '#1DB954', x: 30, y: 30, radius: 4.5, vx: -0.03, vy: 0.04 },
  { id: 'a3', label: 'Tame Impala', type: 'artist', color: '#1DB954', x: 70, y: 35, radius: 4, vx: 0.05, vy: -0.02 },
  { id: 'a4', label: 'The xx', type: 'artist', color: '#1DB954', x: 20, y: 65, radius: 3.5, vx: -0.04, vy: -0.03 },
  { id: 'a5', label: 'Billie Eilish', type: 'artist', color: '#1DB954', x: 80, y: 65, radius: 3.5, vx: 0.03, vy: 0.05 },

  { id: 'g1', label: 'Synthwave', type: 'genre', color: '#A855F7', x: 40, y: 20, radius: 3.5, vx: 0.02, vy: -0.04 },
  { id: 'g2', label: 'Indie Electronic', type: 'genre', color: '#4A9EFF', x: 60, y: 75, radius: 3, vx: -0.05, vy: 0.02 },
  { id: 'g3', label: 'Dream Pop', type: 'genre', color: '#EC4899', x: 15, y: 45, radius: 3, vx: 0.04, vy: 0.03 },
  { id: 'g4', label: 'Lo-fi', type: 'genre', color: '#F59E0B', x: 85, y: 45, radius: 2.5, vx: -0.03, vy: -0.04 },
  { id: 'g5', label: 'Ambient', type: 'genre', color: '#06B6D4', x: 50, y: 85, radius: 2.5, vx: 0.02, vy: 0.05 },

  { id: 't1', label: 'Midnight City', type: 'track', color: '#A855F7', x: 35, y: 55, radius: 2, vx: -0.05, vy: 0.04 },
  { id: 't2', label: 'Tessellate', type: 'track', color: '#4A9EFF', x: 65, y: 25, radius: 2, vx: 0.04, vy: -0.05 },
  { id: 't3', label: 'The Less I Know', type: 'track', color: '#A855F7', x: 25, y: 78, radius: 2, vx: 0.05, vy: 0.03 },
]

const CONNECTIONS = [
  ['a1', 'g1'], ['a1', 'g2'], ['a2', 'g1'], ['a2', 'g3'],
  ['a3', 'g1'], ['a3', 'g2'], ['a4', 'g3'], ['a4', 'g5'],
  ['a5', 'g3'], ['a5', 'g4'],
  ['a1', 't1'], ['a2', 't2'], ['a3', 't3'],
  ['t1', 'g1'], ['t2', 'g2'], ['t3', 'g5'],
]

const FACTORS = [
  { label: 'Artist Affinity', value: 30, color: '#1DB954' },
  { label: 'Source Relevance', value: 25, color: '#4A9EFF' },
  { label: 'Genre Overlap', value: 20, color: '#A855F7' },
  { label: 'Recency', value: 15, color: '#EC4899' },
  { label: 'Popularity Similarity', value: 10, color: '#F59E0B' },
]

export default function RecommendationDNA() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const nodesRef = useRef<Node[]>(INITIAL_NODES.map((n) => ({ ...n })))
  const [, forceUpdate] = useState(0)
  const [hovered, setHovered] = useState<string | null>(null)

  useAnimationFrame(() => {
    const nodes = nodesRef.current
    for (const n of nodes) {
      n.x += n.vx
      n.y += n.vy
      if (n.x < n.radius || n.x > 100 - n.radius) n.vx *= -1
      if (n.y < n.radius || n.y > 100 - n.radius) n.vy *= -1
    }
    forceUpdate((c) => c + 1)
  })

  const getNode = useCallback((id: string) => nodesRef.current.find((n) => n.id === id), [])

  return (
    <section
      id="dna"
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
          <div className="font-mono text-xs mb-4" style={{ color: '#555560' }}>{'> spotify.taste.profile.visualized'}</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance" style={{ letterSpacing: '-0.02em', color: '#F5F5F5' }}>
            Your recommendation
            <br />
            <span className="text-gradient-purple">DNA.</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#A1A1A6' }}>
            Meld maps your taste as a neural network of artists, genres, and tracks — then builds a queue from it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Graph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div
              className="relative w-full rounded-2xl glass-card overflow-hidden"
              style={{
                paddingTop: '100%',
                background: 'radial-gradient(ellipse at 50% 50%, rgba(168,85,247,0.05) 0%, rgba(8,8,12,0.95) 70%)',
                border: '1px solid rgba(168,85,247,0.15)',
              }}
            >
              <div className="absolute inset-0 p-2">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  aria-label="Taste recommendation graph"
                >
                  {/* Connection lines */}
                  {CONNECTIONS.map(([srcId, tgtId]) => {
                    const src = getNode(srcId)
                    const tgt = getNode(tgtId)
                    if (!src || !tgt) return null
                    const isActive = hovered === srcId || hovered === tgtId
                    return (
                      <line
                        key={`${srcId}-${tgtId}`}
                        x1={src.x} y1={src.y}
                        x2={tgt.x} y2={tgt.y}
                        stroke={isActive ? src.color : '#2A2A2E'}
                        strokeWidth={isActive ? '0.6' : '0.3'}
                        opacity={isActive ? 0.7 : 0.3}
                      />
                    )
                  })}

                  {/* Nodes */}
                  {nodesRef.current.map((node) => (
                    <g
                      key={node.id}
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={() => setHovered(node.id)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {hovered === node.id && (
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={node.radius + 3}
                          fill="none"
                          stroke={node.color}
                          strokeWidth="0.4"
                          opacity="0.4"
                        />
                      )}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={hovered === node.id ? node.radius + 0.8 : node.radius}
                        fill={hovered === node.id ? `${node.color}40` : `${node.color}20`}
                        stroke={node.color}
                        strokeWidth={node.type === 'artist' ? '0.8' : '0.5'}
                      />
                      {(hovered === node.id || node.type === 'artist') && (
                        <text
                          x={node.x}
                          y={node.y + node.radius + 3}
                          textAnchor="middle"
                          fill={node.color}
                          fontSize="2.5"
                          fontFamily="JetBrains Mono, monospace"
                        >
                          {node.label}
                        </text>
                      )}
                    </g>
                  ))}
                </svg>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mt-4">
              {([
                { color: '#1DB954', label: 'Artists' },
                { color: '#A855F7', label: 'Genres' },
                { color: '#4A9EFF', label: 'Tracks' },
              ] as const).map((item) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} aria-hidden="true" />
                  <span className="font-mono text-xs" style={{ color: '#555560' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Scoring breakdown */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="font-mono text-xs mb-6" style={{ color: '#555560' }}>{'> recommendation.scoring.weights'}</div>
              <div className="space-y-4">
                {FACTORS.map((factor, i) => (
                  <motion.div
                    key={factor.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm" style={{ color: '#A1A1A6' }}>{factor.label}</span>
                      <span className="font-mono text-sm font-bold" style={{ color: factor.color }}>{factor.value}%</span>
                    </div>
                    <div className="h-1.5 rounded-full" style={{ backgroundColor: '#1B1B1F' }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: factor.color }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${factor.value * 3.33}%` } : {}}
                        transition={{ duration: 0.8, delay: 0.5 + i * 0.08, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card rounded-2xl p-6"
              style={{ border: '1px solid rgba(29,185,84,0.2)' }}
            >
              <div className="font-mono text-xs mb-3" style={{ color: '#555560' }}>{'> diversity.constraint'}</div>
              <p className="text-sm leading-relaxed" style={{ color: '#A1A1A6' }}>
                Maximum <span className="font-bold" style={{ color: '#1DB954' }}>3 tracks per artist</span> in any generated queue. Ensures variety and exploration — not just your top 5 on repeat.
              </p>
              <div className="mt-4 font-mono text-xs" style={{ color: '#555560' }}>
                {'> max_per_artist=3 · weighted_shuffle=true · fuzzy_cache=local_db'}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
