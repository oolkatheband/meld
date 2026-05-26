'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Download, Github, Package, CheckCircle, ArrowRight, Smartphone, Shield, Zap } from 'lucide-react'

const STEPS = [
  { text: 'Go to GitHub Releases and download the latest Meld.apk', highlight: false },
  { text: 'Open the APK on your Android device', highlight: false },
  { text: 'Allow "Install from unknown sources" if prompted', highlight: false },
  { text: 'Launch Meld and sign in with your Spotify account', highlight: false },
  { text: 'Music that actually understands you. Enjoy.', highlight: true },
]

const DOWNLOAD_OPTIONS = [
  {
    label: 'Meld APK',
    sub: 'v0.7.1 · Standard Release',
    desc: 'Full Meld experience with Spotify + YouTube Music, lyrics, EQ, and offline playback.',
    icon: Download,
    color: '#1DB954',
    href: '/Meld.apk',
    primary: true,
    available: true,
    size: '32.5 MB',
  },
  {
    label: 'Meld Izzy',
    sub: 'Community Build · Extended features',
    desc: 'Custom fork with extended codecs, community patches, and experimental features.',
    icon: Package,
    color: '#A855F7',
    href: '/Meld-izzy.apk',
    primary: false,
    available: true,
    size: '34.2 MB',
  },
  {
    label: 'Meld Cast',
    sub: 'v0.7.1 · Chromecast Edition',
    desc: 'Google Cast support for streaming to smart displays and speakers.',
    icon: Download,
    color: '#F59E0B',
    href: '/Meld-with-Google-Cast.apk',
    primary: false,
    available: true,
    size: '35.8 MB',
  },
  {
    label: 'Open Source',
    sub: 'GitHub Repository · Build from source',
    desc: 'Full source code access. Customize, build, and contribute to the Meld project.',
    icon: Github,
    color: '#4A9EFF',
    href: 'https://github.com/FrancescoGrazioso/Meld',
    primary: false,
    available: true,
    isGithub: true,
  },
]

const REQUIREMENTS = [
  { icon: Smartphone, text: 'Android 8.0 (Oreo) or higher' },
  { icon: Shield, text: 'Allow installation from unknown sources' },
  { icon: Zap, text: 'Spotify account (free tier works)' },
]

export default function DownloadPage() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <main style={{ backgroundColor: 'var(--md-sys-color-surface)' }}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Glow accents */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(29,185,84,0.12) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono md3-label-small mb-4" style={{ color: 'var(--md-sys-color-outline)' }}>
              {'> meld.install --now'}
            </div>
            <h1
              className="md3-display-large font-bold tracking-tight mb-6 text-balance"
              style={{ color: 'var(--md-sys-color-on-surface)' }}
            >
              Download
              <br />
              <span className="text-gradient-spotify">MELD.</span>
            </h1>
            <p className="md3-body-large max-w-xl mx-auto" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              Get Meld v0.7.1 — the open-source music OS. Android only. No subscriptions, no ads, no limits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Download options */}
      <section ref={ref} className="py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {DOWNLOAD_OPTIONS.map((option, i) => (
              <motion.a
                key={option.label}
                href={option.available ? option.href : undefined}
                target={option.available && option.href !== '#' ? '_blank' : undefined}
                rel={option.available && option.href !== '#' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="group relative flex flex-col gap-4 p-6 transition-all duration-300 h-full"
                style={{
                  background: option.primary
                    ? 'linear-gradient(135deg, rgba(29,185,84,0.15), rgba(74,158,255,0.08))'
                    : 'var(--md-sys-color-surface-container)',
                  border: option.primary
                    ? '1px solid rgba(29,185,84,0.4)'
                    : `1px solid ${option.color}22`,
                  borderRadius: 'var(--md-sys-shape-corner-extra-large)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: option.primary ? '0 0 40px rgba(29,185,84,0.12)' : 'none',
                  opacity: option.available ? 1 : 0.5,
                  cursor: option.available ? 'pointer' : 'not-allowed',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${option.color}18` }}
                >
                  <option.icon size={24} style={{ color: option.color }} />
                </div>
                <div className="flex-1">
                  <div className="md3-title-medium font-bold mb-1" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                    {option.label}
                  </div>
                  <div className="font-mono md3-label-small mb-3" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                    {option.sub}
                  </div>
                  <div className="md3-body-small leading-relaxed" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                    {option.desc}
                  </div>
                  {option.size && (
                    <div className="mt-3 font-mono md3-label-small" style={{ color: 'var(--md-sys-color-outline)' }}>
                      {option.size}
                    </div>
                  )}
                </div>
                {option.primary && (
                  <div
                    className="self-start md3-label-medium px-3 py-1 rounded-full animate-glow-pulse"
                    style={{ backgroundColor: 'rgba(29,185,84,0.2)', color: 'var(--meld-spotify)' }}
                  >
                    Recommended
                  </div>
                )}
              </motion.a>
            ))}
          </div>

          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md3-glass-surface p-6 mb-8"
          >
            <h2 className="md3-title-large font-bold mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {REQUIREMENTS.map((req, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl"
                  style={{ backgroundColor: 'var(--md-sys-color-surface-container-high)' }}
                >
                  <req.icon size={20} style={{ color: 'var(--meld-spotify)' }} />
                  <span className="md3-body-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                    {req.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Install steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md3-glass-surface p-8"
          >
            <div className="font-mono md3-label-small mb-6" style={{ color: 'var(--md-sys-color-outline)' }}>
              {'> install --steps'}
            </div>
            <div className="space-y-4">
              {STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: step.highlight ? 'rgba(29,185,84,0.2)' : 'var(--md-sys-color-surface-container-high)',
                      border: `1px solid ${step.highlight ? 'rgba(29,185,84,0.4)' : 'var(--md-sys-color-outline-variant)'}`,
                    }}
                  >
                    {step.highlight ? (
                      <CheckCircle size={16} style={{ color: 'var(--meld-spotify)' }} />
                    ) : (
                      <span className="font-mono md3-label-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                        {i + 1}
                      </span>
                    )}
                  </div>
                  <p
                    className="md3-body-large leading-relaxed pt-1"
                    style={{ color: step.highlight ? 'var(--meld-spotify)' : 'var(--md-sys-color-on-surface-variant)' }}
                  >
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Warning */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-8 text-center"
          >
            <p className="font-mono md3-label-medium" style={{ color: 'var(--md-sys-color-outline)' }}>
              Not affiliated with Spotify or Google. Use at your own discretion. Requires Android 8.0+.
            </p>
          </motion.div>
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
            Want to learn more?
          </h2>
          <p className="md3-body-large mb-8" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
            Explore features, understand the architecture, or contribute to the project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/features" className="md3-filled-button">
              Explore Features
              <ArrowRight size={16} />
            </Link>
            <Link href="/open-source" className="md3-outlined-button">
              Open Source Info
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
