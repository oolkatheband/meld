'use client'

import { motion } from 'framer-motion'
import { Github, Download, ChevronDown } from 'lucide-react'
import dynamic from 'next/dynamic'
import PhoneMockup from './PhoneMockup'

const ParticleField = dynamic(() => import('./ParticleField'), { ssr: false })

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#08080C' }}
    >
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

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 py-6 z-10"
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center border-glow-spotify"
            style={{ backgroundColor: 'rgba(29,185,84,0.1)' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="6.5" stroke="#1DB954" strokeWidth="1.5" />
              <path d="M4.5 8C6 6.5 9.5 9.5 11.5 8" stroke="#1DB954" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M4.5 10C6 8.5 9.5 11.5 11.5 10" stroke="#1DB954" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            </svg>
          </div>
          <span className="font-mono text-sm font-semibold" style={{ color: '#F5F5F5' }}>Meld</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Features', 'Signal', 'Architecture', 'Download'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-mono text-xs transition-colors duration-200 hover:text-white"
              style={{ color: '#A1A1A6' }}
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="https://github.com/FrancescoGrazioso/Meld"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card text-xs font-mono transition-all duration-200 hover:border-white/20"
          style={{ color: '#A1A1A6' }}
        >
          <Github size={14} />
          <span>684 stars</span>
        </a>
      </motion.nav>

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-16 pt-24">
        {/* Left: Text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex-1 text-center lg:text-left"
        >
          {/* Label */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 mb-6">
            <span
              className="px-3 py-1.5 rounded-full font-mono text-xs border"
              style={{
                backgroundColor: 'rgba(29,185,84,0.08)',
                borderColor: 'rgba(29,185,84,0.25)',
                color: '#1DB954',
              }}
            >
              v0.7.1 — now available
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight text-balance mb-6"
            style={{ letterSpacing: '-0.03em', color: '#F5F5F5' }}
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
            className="text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10"
            style={{ color: '#A1A1A6' }}
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
            <a
              href="https://github.com/FrancescoGrazioso/Meld/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] animate-glow-pulse"
              style={{
                background: 'linear-gradient(135deg, #1DB954, #4A9EFF)',
                color: '#08080C',
              }}
            >
              <Download size={16} />
              Download APK
            </a>
            <a
              href="https://github.com/FrancescoGrazioso/Meld"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm glass-card transition-all duration-300 hover:border-white/20"
              style={{ color: '#F5F5F5' }}
            >
              <Github size={16} />
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
                <div className="text-2xl font-bold" style={{ color: '#F5F5F5' }}>{stat.value}</div>
                <div className="font-mono text-xs mt-0.5" style={{ color: '#555560' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, type: 'spring', bounce: 0.3 }}
          className="flex-shrink-0 hidden lg:block"
        >
          <PhoneMockup />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="flex gap-1 items-end h-5" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="waveform-bar"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
        <ChevronDown size={14} style={{ color: '#555560' }} />
      </motion.div>
    </section>
  )
}
