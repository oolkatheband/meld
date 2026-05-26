'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const COMMANDS: Record<string, string[]> = {
  'meld --help': [
    'Usage: meld [COMMAND]',
    '',
    'Commands:',
    '  meld --party          Activate party mode',
    '  meld --status         Show system status',
    '  meld --version        Show current version',
    '  meld --signal         Display signal strength',
    '  meld --play <track>   Simulate track play',
    '',
    'Type a command to continue...',
  ],
  'meld --status': [
    '● Spotify connection: ACTIVE',
    '● YouTube InnerTube: ACTIVE',
    '● Recommendation engine: RUNNING',
    '● Fuzzy match cache: 1,247 entries',
    '● Discord RPC: CONNECTED',
    '● Battery optimization: DISABLED (recommended)',
    '',
    'All systems operational. meld v0.7.1',
  ],
  'meld --version': ['meld v0.7.1 (May 3, 2026)', 'Kotlin 2.0.21 · Jetpack Compose 1.8.1', 'Build: foss-release · GPL-3.0'],
  'meld --signal': [
    '▓▓▓▓▓▓▓▓▓▓ Spotify signal: 100%',
    '▓▓▓▓▓▓▓▓▓░ YouTube signal: 98%',
    '▓▓▓▓▓▓▓▓▓▓ Engine signal: 100%',
    '',
    '> meld.signal.strength=100%',
  ],
  'meld --play midnight city': [
    'Resolving: "midnight city" by M83...',
    '> Spotify metadata: found',
    '> Fuzzy match score: 98.3%',
    '> YouTube ID: resolved (dX3k_QDnzs0)',
    '> Streaming: ACTIVE',
    '',
    '♪ Now playing: Midnight City — M83',
  ],
}

const PARTY_EMOJIS = ['🎵', '🎶', '🎸', '🥁', '🎹', '🎺', '🎷', '🎤', '🎧', '✨', '🌈', '🔥']

interface Confetti {
  id: number
  x: number
  y: number
  emoji: string
  vx: number
  vy: number
  rot: number
  rotV: number
}

export default function EasterEgg() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [lines, setLines] = useState<string[]>(['> Type "meld --help" to begin...'])
  const [confetti, setConfetti] = useState<Confetti[]>([])
  const [partyMode, setPartyMode] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const addLines = useCallback((newLines: string[]) => {
    setLines((prev) => [...prev, ...newLines])
    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight
      }
    }, 50)
  }, [])

  const handleCommand = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim().toLowerCase()
      addLines([`> ${trimmed}`])

      if (trimmed === 'meld --party') {
        const burst: Confetti[] = Array.from({ length: 30 }, (_, i) => ({
          id: Date.now() + i,
          x: Math.random() * 100,
          y: -10,
          emoji: PARTY_EMOJIS[Math.floor(Math.random() * PARTY_EMOJIS.length)],
          vx: (Math.random() - 0.5) * 3,
          vy: Math.random() * 4 + 2,
          rot: Math.random() * 360,
          rotV: (Math.random() - 0.5) * 10,
        }))
        setConfetti(burst)
        setPartyMode(true)
        addLines(['', '🎉 PARTY MODE ACTIVATED', '> meld --party executed successfully', '> Good taste detected.', ''])
        setTimeout(() => {
          setConfetti([])
          setPartyMode(false)
        }, 4000)
        return
      }

      if (trimmed === 'clear') {
        setLines([])
        return
      }

      const response = COMMANDS[trimmed]
      if (response) {
        addLines(['', ...response, ''])
      } else if (trimmed) {
        addLines([`command not found: ${trimmed}`, 'Type "meld --help" for available commands.', ''])
      }
    },
    [addLines]
  )

  // Global key listener for "meld" typing
  useEffect(() => {
    let typed = ''
    const handler = (e: KeyboardEvent) => {
      if (open) return
      typed += e.key.toLowerCase()
      if (typed.length > 10) typed = typed.slice(-10)
      if (typed.includes('meld')) {
        setOpen(true)
        typed = ''
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open])

  // Focus input when open
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  return (
    <>
      {/* Confetti overlay */}
      <AnimatePresence>
        {confetti.map((c) => (
          <motion.div
            key={c.id}
            className="fixed pointer-events-none z-[200] text-2xl"
            style={{ left: `${c.x}%`, top: `${c.y}%` }}
            animate={{
              y: ['0%', '120vh'],
              x: [`${c.vx * 0}px`, `${c.vx * 200}px`],
              rotate: [c.rot, c.rot + c.rotV * 360],
            }}
            transition={{ duration: 3.5, ease: 'easeIn' }}
          >
            {c.emoji}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Terminal modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end justify-center pb-8 px-4"
            style={{ backgroundColor: 'rgba(8,8,12,0.85)', backdropFilter: 'blur(8px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
          >
            <motion.div
              className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl"
              style={{
                backgroundColor: '#0d0d10',
                border: '1px solid rgba(29,185,84,0.3)',
                boxShadow: '0 0 60px rgba(29,185,84,0.15)',
              }}
              initial={{ y: 40, scale: 0.97 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 40, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Title bar */}
              <div
                className="flex items-center justify-between px-4 py-3"
                style={{ borderBottom: '1px solid #2A2A2E' }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FF5F57' }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FEBC2E' }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28C840' }} />
                  </div>
                  <span className="font-mono text-xs ml-2" style={{ color: '#555560' }}>meld-terminal — bash</span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="font-mono text-xs hover:text-white transition-colors"
                  style={{ color: '#555560' }}
                  aria-label="Close terminal"
                >
                  ESC
                </button>
              </div>

              {/* Output */}
              <div
                ref={scrollRef}
                className="h-64 overflow-y-auto p-4 space-y-0.5"
                style={{ backgroundColor: '#0d0d10' }}
              >
                {lines.map((line, i) => (
                  <div
                    key={i}
                    className="font-mono text-xs leading-relaxed"
                    style={{
                      color: line.startsWith('●') ? '#1DB954'
                        : line.startsWith('♪') ? '#A855F7'
                        : line.startsWith('🎉') ? '#F59E0B'
                        : line.startsWith('command not found') ? '#EC4899'
                        : line.startsWith('>') ? '#4A9EFF'
                        : '#A1A1A6',
                    }}
                  >
                    {line || '\u00A0'}
                  </div>
                ))}
              </div>

              {/* Input */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ borderTop: '1px solid #2A2A2E', backgroundColor: '#0a0a0e' }}
              >
                <span className="font-mono text-xs" style={{ color: '#1DB954' }}>meld@signal:~$</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleCommand(input)
                      setInput('')
                    }
                    if (e.key === 'Escape') setOpen(false)
                  }}
                  className="flex-1 bg-transparent font-mono text-xs outline-none"
                  style={{ color: '#F5F5F5', caretColor: '#1DB954' }}
                  placeholder="enter command..."
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden trigger hint */}
      <div
        className="fixed bottom-4 right-4 z-50 font-mono text-xs px-3 py-1.5 rounded-lg glass-card opacity-30 hover:opacity-80 transition-opacity cursor-pointer select-none"
        style={{ color: '#555560' }}
        onClick={() => setOpen(true)}
        aria-label="Open hidden terminal"
        title="Type 'meld' anywhere to open terminal"
      >
        {'>'} meld
        <span className="animate-cursor">|</span>
      </div>
    </>
  )
}
