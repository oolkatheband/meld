'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BOOT_LINES = [
  '> initializing meld.signal…',
  '> fetching Spotify taste profile…',
  '> connecting to YouTube Music catalog…',
  '> loading modules: [innertube] [spotify]…',
  '> loading modules: [betterlyrics] [kizzy] [shazamkit]…',
  '> compiling recommendation engine…',
  '> resolving artist affinity weights…',
  '> SYSTEM READY.',
]

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i++
      setVisibleLines(i)
      if (i >= BOOT_LINES.length) {
        clearInterval(interval)
        setTimeout(() => {
          setDone(true)
          setTimeout(onComplete, 600)
        }, 500)
      }
    }, 260)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: '#08080C' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="w-full max-w-lg px-6">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg border-glow-spotify flex items-center justify-center" style={{ backgroundColor: 'rgba(29,185,84,0.1)' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="#1DB954" strokeWidth="1.5" />
                  <path d="M4 8.5 C6 6.5 10 9.5 12 7.5" stroke="#1DB954" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-mono text-sm" style={{ color: '#1DB954' }}>meld v0.7.1</span>
            </motion.div>

            {/* Terminal lines */}
            <div className="space-y-2">
              {BOOT_LINES.map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: idx < visibleLines ? 1 : 0, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="font-mono text-sm leading-relaxed"
                  style={{
                    color: idx === BOOT_LINES.length - 1 && idx < visibleLines
                      ? '#1DB954'
                      : idx < visibleLines
                      ? '#A1A1A6'
                      : 'transparent',
                  }}
                >
                  {line}
                  {idx === visibleLines - 1 && idx < BOOT_LINES.length - 1 && (
                    <span className="animate-cursor ml-0.5" style={{ color: '#4A9EFF' }}>|</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-8 h-px w-full" style={{ backgroundColor: '#2A2A2E' }}>
              <motion.div
                className="h-full"
                style={{ backgroundColor: '#1DB954' }}
                initial={{ width: '0%' }}
                animate={{ width: `${(visibleLines / BOOT_LINES.length) * 100}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
