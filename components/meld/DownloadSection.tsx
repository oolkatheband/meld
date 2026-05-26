'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, Github, Package, CheckCircle } from 'lucide-react'

const STEPS = [
  'Go to GitHub Releases and download the latest Meld.apk',
  'Open the APK on your Android device',
  'Allow "Install from unknown sources" if prompted',
  'Launch Meld and sign in with your Spotify account',
  'Music that actually understands you. Enjoy.',
]

const BADGES = [
  {
    label: 'Download APK',
    sub: 'v0.7.1 · Direct download',
    icon: Download,
    color: '#1DB954',
    href: 'https://github.com/FrancescoGrazioso/Meld/releases/latest',
    primary: true,
  },
  {
    label: 'GitHub Releases',
    sub: '11 releases · Changelog included',
    icon: Github,
    color: '#4A9EFF',
    href: 'https://github.com/FrancescoGrazioso/Meld/releases',
    primary: false,
  },
  {
    label: 'F-Droid / IzzyOnDroid',
    sub: 'FOSS build · Coming soon',
    icon: Package,
    color: '#A855F7',
    href: '#',
    primary: false,
  },
]

export default function DownloadSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section
      id="download"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: '#0a0a0e' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(29,185,84,0.06) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="font-mono text-xs mb-4" style={{ color: '#555560' }}>{'> meld.install --now'}</div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-balance" style={{ letterSpacing: '-0.03em', color: '#F5F5F5' }}>
            Join the
            <br />
            <span className="text-gradient-spotify">underground.</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#A1A1A6' }}>
            Get Meld v0.7.1 — the open-source music OS. Android only. No subscriptions, no ads, no limits.
          </p>
        </motion.div>

        {/* Download cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {BADGES.map((badge, i) => (
            <motion.a
              key={badge.label}
              href={badge.href}
              target={badge.href !== '#' ? '_blank' : undefined}
              rel={badge.href !== '#' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group relative rounded-2xl p-6 transition-all duration-300 flex flex-col gap-4"
              style={{
                background: badge.primary
                  ? `linear-gradient(135deg, rgba(29,185,84,0.15), rgba(74,158,255,0.08))`
                  : 'rgba(18,18,20,0.7)',
                border: badge.primary ? '1px solid rgba(29,185,84,0.4)' : `1px solid ${badge.color}22`,
                backdropFilter: 'blur(20px)',
                boxShadow: badge.primary ? '0 0 40px rgba(29,185,84,0.12)' : 'none',
                opacity: badge.href === '#' ? 0.6 : 1,
                cursor: badge.href === '#' ? 'default' : 'pointer',
              }}
              whileHover={badge.href !== '#' ? {
                y: -2,
                boxShadow: `0 0 50px ${badge.color}20`,
                borderColor: `${badge.color}55`,
              } : {}}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${badge.color}18` }}
              >
                <badge.icon size={22} style={{ color: badge.color }} />
              </div>
              <div>
                <div className="font-bold mb-1" style={{ color: '#F5F5F5' }}>{badge.label}</div>
                <div className="font-mono text-xs" style={{ color: '#A1A1A6' }}>{badge.sub}</div>
              </div>
              {badge.primary && (
                <div
                  className="self-start font-mono text-xs px-3 py-1.5 rounded-lg"
                  style={{ backgroundColor: 'rgba(29,185,84,0.2)', color: '#1DB954' }}
                >
                  Recommended →
                </div>
              )}
            </motion.a>
          ))}
        </div>

        {/* Install steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card rounded-2xl p-8"
        >
          <div className="font-mono text-xs mb-6" style={{ color: '#555560' }}>{'> install --steps'}</div>
          <div className="space-y-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                className="flex items-start gap-4"
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: 'rgba(29,185,84,0.15)', border: '1px solid rgba(29,185,84,0.3)' }}
                >
                  <span className="font-mono text-xs" style={{ color: '#1DB954' }}>{i + 1}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: i === STEPS.length - 1 ? '#1DB954' : '#A1A1A6' }}>
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Warning */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-6 text-center"
        >
          <p className="font-mono text-xs" style={{ color: '#555560' }}>
            Not affiliated with Spotify or Google. Use at your own discretion. Requires Android 8.0+.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
