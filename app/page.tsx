'use client'

import { useState, useCallback, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download, Github, ChevronDown, ArrowRight, Music2, Wifi, Sliders } from 'lucide-react'
import PhoneMockup from '@/components/meld/PhoneMockup'
import AlbumMarquee from '@/components/meld/AlbumMarquee'
import EasterEgg from '@/components/meld/EasterEgg'

const ParticleField = dynamic(() => import('@/components/meld/ParticleField'), { ssr: false })
const Preloader = dynamic(() => import('@/components/meld/Preloader'), { ssr: false })

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

const HIGHLIGHTS = [
  {
    icon: Music2,
    title: 'Live Lyrics',
    desc: 'Word-by-word synced lyrics',
    color: '#EC4899',
  },
  {
    icon: Wifi,
    title: 'Offline Mode',
    desc: 'Download & play anywhere',
    color: '#F59E0B',
  },
  {
    icon: Sliders,
    title: '10-Band EQ',
    desc: 'Audiophile-grade DSP',
    color: '#4A9EFF',
  },
]

export default function HomePage() {
  const [ready, setReady] = useState(false)
  const [showPreloader, setShowPreloader] = useState(true)

  const handlePreloaderComplete = useCallback(() => {
    setReady(true)
    setTimeout(() => setShowPreloader(false), 500)
  }, [])

  // Skip preloader on subsequent visits (session storage)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const visited = sessionStorage.getItem('meld-visited')
      if (visited) {
        setReady(true)
        setShowPreloader(false)
      } else {
        sessionStorage.setItem('meld-visited', 'true')
      }
    }
  }, [])

  return (
    <>
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      <main
        className="transition-opacity duration-700"
        style={{ opacity: ready ? 1 : 0, backgroundColor: 'var(--md-sys-color-surface)' }}
      >
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
          {/* Particle background */}
          <ParticleField />

          {/* Radial glow spots */}
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none animate-bass-pulse"
            style={{ background: 'radial-gradient(circle, rgba(29,185,84,0.06) 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none animate-bass-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(74,158,255,0.06) 0%, transparent 70%)',
              animationDelay: '1s',
            }}
          />

          {/* Hero content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-16 py-20">
            {/* Left: Text */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={ready ? 'show' : 'hidden'}
              className="flex-1 text-center lg:text-left"
            >
              {/* Label */}
              <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 mb-6">
                <span
                  className="px-4 py-2 rounded-full font-mono md3-label-medium"
                  style={{
                    backgroundColor: 'rgba(29,185,84,0.08)',
                    border: '1px solid rgba(29,185,84,0.25)',
                    color: 'var(--meld-spotify)',
                  }}
                >
                  v0.7.1 — now available
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="md3-display-large font-bold leading-none tracking-tight text-balance mb-6"
                style={{ letterSpacing: '-0.03em', color: 'var(--md-sys-color-on-surface)' }}
              >
                Your taste
                <br />
                <span className="text-gradient-spotify">already exists.</span>
                <br />
                Meld finds
                <br />
                the music.
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="md3-body-large leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10"
                style={{ color: 'var(--md-sys-color-on-surface-variant)' }}
              >
                Spotify&apos;s recommendation engine. YouTube Music&apos;s 100M+ catalogue.
                One open-source Android client. No Premium required.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
              >
                <Link
                  href="/download"
                  className="md3-filled-button animate-glow-pulse"
                  style={{ height: 48, padding: '0 32px', fontSize: 15 }}
                >
                  <Download size={18} />
                  Download APK
                </Link>
                <a
                  href="https://github.com/FrancescoGrazioso/Meld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md3-outlined-button"
                  style={{ height: 48, padding: '0 32px', fontSize: 15 }}
                >
                  <Github size={18} />
                  View on GitHub
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div variants={fadeUp} transition={{ duration: 0.7, delay: 0.5 }} className="flex items-center justify-center lg:justify-start gap-8 mt-12">
                {[
                  { label: 'GitHub Stars', value: '684' },
                  { label: 'Commits', value: '2,580+' },
                  { label: 'Release', value: 'v0.7.1' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="md3-headline-small font-bold" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                      {stat.value}
                    </div>
                    <div className="font-mono md3-label-small mt-0.5" style={{ color: 'var(--md-sys-color-outline)' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={ready ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.4, type: 'spring', bounce: 0.3 }}
              className="flex-shrink-0 hidden lg:block"
            >
              <PhoneMockup />
            </motion.div>
          </div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <div className="flex gap-1 items-end h-5" aria-hidden="true">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="waveform-bar" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
            <ChevronDown size={14} style={{ color: 'var(--md-sys-color-outline)' }} />
          </motion.div>
        </section>

        {/* Album Marquee */}
        <AlbumMarquee />

        {/* Feature Highlights */}
        <section className="py-20" style={{ backgroundColor: 'var(--md-sys-color-surface-container-low)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="md3-headline-large font-bold mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Built for music lovers
              </h2>
              <p className="md3-body-large" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                Premium features without the premium price
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {HIGHLIGHTS.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="md3-glass-surface p-6 text-center"
                  style={{ border: `1px solid ${item.color}22` }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${item.color}18` }}
                  >
                    <item.icon size={28} style={{ color: item.color }} />
                  </div>
                  <h3 className="md3-title-large font-bold mb-2" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                    {item.title}
                  </h3>
                  <p className="md3-body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/features" className="md3-tonal-button">
                Explore all features
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-24 relative overflow-hidden"
          style={{ backgroundColor: 'var(--md-sys-color-surface)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 100%, rgba(29,185,84,0.08) 0%, transparent 60%)',
            }}
          />
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
            <h2
              className="md3-display-small font-bold tracking-tight mb-6 text-balance"
              style={{ color: 'var(--md-sys-color-on-surface)' }}
            >
              Ready to experience
              <br />
              <span className="text-gradient-spotify">music your way?</span>
            </h2>
            <p className="md3-body-large mb-10 max-w-lg mx-auto" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              Download Meld now and discover what happens when Spotify&apos;s taste intelligence meets YouTube&apos;s catalogue.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/download"
                className="md3-filled-button animate-glow-pulse"
                style={{ height: 48, padding: '0 32px', fontSize: 15 }}
              >
                <Download size={18} />
                Download Meld
              </Link>
              <Link href="/architecture" className="md3-outlined-button" style={{ height: 48, padding: '0 32px', fontSize: 15 }}>
                How it works
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <EasterEgg />
    </>
  )
}
