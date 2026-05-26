'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download, ArrowRight, Check, Heart } from 'lucide-react'

const PRICING_FEATURES = [
  { icon: Check, text: 'All features unlocked', color: '#1DB954' },
  { icon: Check, text: 'Zero tracking or data selling', color: '#4A9EFF' },
  { icon: Check, text: 'Open source & transparent', color: '#A855F7' },
  { icon: Check, text: 'Spotify recommendation engine', color: '#EC4899' },
  { icon: Check, text: 'YouTube Music 100M+ catalogue', color: '#F59E0B' },
  { icon: Check, text: 'Live synced lyrics', color: '#1DB954' },
  { icon: Check, text: '10-band equalizer', color: '#4A9EFF' },
  { icon: Check, text: 'Offline download support', color: '#A855F7' },
  { icon: Check, text: 'Ad-free listening', color: '#EC4899' },
]

export default function PricingPage() {
  return (
    <main style={{ backgroundColor: 'var(--md-sys-color-surface)' }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
        {/* Background elements */}
        <div
          className="absolute top-1/3 -left-32 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(29,185,84,0.08) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/3 -right-32 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(74,158,255,0.08) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span
              className="px-4 py-2 rounded-full font-mono md3-label-medium inline-flex items-center gap-2"
              style={{
                backgroundColor: 'rgba(29,185,84,0.12)',
                border: '1px solid rgba(29,185,84,0.4)',
                color: 'var(--meld-spotify)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
              Simple Pricing
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md3-display-large font-bold tracking-tight mb-6 text-balance"
            style={{
              background: 'linear-gradient(135deg, var(--meld-spotify) 0%, #4A9EFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: '3.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            100% Free
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md3-headline-small font-semibold mb-4 text-balance"
            style={{ color: 'var(--md-sys-color-on-surface)' }}
          >
            No hidden costs. No subscriptions. No ads. Ever.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md3-body-large max-w-2xl mx-auto mb-12"
            style={{ color: 'var(--md-sys-color-on-surface-variant)' }}
          >
            Built by the community, for the community. Meld is open-source software that respects your privacy and gives you complete control over your music experience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/download"
              className="md3-filled-button animate-glow-pulse"
              style={{ height: 50, padding: '0 40px', fontSize: 16 }}
            >
              <Download size={18} />
              Download Now
            </Link>
            <a
              href="https://github.com/FrancescoGrazioso/Meld"
              target="_blank"
              rel="noopener noreferrer"
              className="md3-outlined-button"
              style={{ height: 50, padding: '0 40px', fontSize: 16 }}
            >
              View Source
              <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Price Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: 'spring', bounce: 0.3 }}
            className="rounded-3xl overflow-hidden border max-w-2xl mx-auto relative"
            style={{
              background: 'linear-gradient(135deg, rgba(29,185,84,0.1) 0%, rgba(74,158,255,0.05) 100%)',
              border: '2px solid rgba(29,185,84,0.4)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 80px rgba(29,185,84,0.2), inset 0 1px 20px rgba(255,255,255,0.08)',
            }}
          >
            {/* Shine effect */}
            <div
              className="absolute inset-0 opacity-50 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                animation: 'shimmer 3s ease-in-out infinite',
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 p-10 md:p-14 text-center">
              {/* Price */}
              <div className="mb-8">
                <p className="md3-body-large mb-3" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  Forever Free Plan
                </p>
                <div
                  className="md3-display-medium font-bold"
                  style={{
                    background: 'linear-gradient(135deg, var(--meld-spotify) 0%, #4A9EFF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontSize: '2.5rem',
                  }}
                >
                  $0
                  <span className="md3-body-large font-normal" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                    {' '}
                    / forever
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div
                className="h-px my-8"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(29,185,84,0.3), transparent)',
                }}
              />

              {/* Feature List */}
              <div className="text-left mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PRICING_FEATURES.map((feature, i) => (
                    <motion.div
                      key={feature.text}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: `${feature.color}22` }}
                      >
                        <Check size={14} style={{ color: feature.color }} />
                      </div>
                      <span className="md3-body-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom note */}
              <p className="md3-body-small text-center" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                No credit card required. Download immediately and start enjoying premium music discovery.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Free Section */}
      <section className="py-24" style={{ backgroundColor: 'var(--md-sys-color-surface-container-low)' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md3-display-small font-bold mb-4"
              style={{ color: 'var(--md-sys-color-on-surface)' }}
            >
              Why is Meld completely free?
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Open Source',
                desc: 'Meld is free and open-source software. Our community funds development through passion, not paywalls.',
                color: '#1DB954',
              },
              {
                title: 'No Middlemen',
                desc: 'We don&apos;t charge you or sell your data to advertisers. Direct APIs eliminate bloated monetization layers.',
                color: '#4A9EFF',
              },
              {
                title: 'Community First',
                desc: 'Built by music lovers for music lovers. Our mission is access to music, not extracting maximum profit.',
                color: '#A855F7',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="md3-glass-surface p-8 rounded-2xl"
                style={{ border: `1px solid ${item.color}22` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${item.color}18` }}
                >
                  <Heart size={24} style={{ color: item.color }} />
                </div>
                <h3 className="md3-title-large font-bold mb-3" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  {item.title}
                </h3>
                <p className="md3-body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* No Compromise Section */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(29,185,84,0.08) 0%, transparent 60%)',
          }}
        />

        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center rounded-3xl border p-12 md:p-16"
            style={{
              background: 'linear-gradient(135deg, rgba(29,185,84,0.06) 0%, rgba(74,158,255,0.03) 100%)',
              border: '1px solid rgba(29,185,84,0.2)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <h2 className="md3-display-small font-bold mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              No compromise on quality
            </h2>
            <p className="md3-body-large max-w-2xl mx-auto mb-8" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              Free doesn&apos;t mean limited. Meld includes every premium feature available: recommendation engine, 100M+ song catalogue, lyrics sync, equalizer, offline support, and more. Everything. Forever free.
            </p>
            <Link
              href="/download"
              className="md3-filled-button animate-glow-pulse"
              style={{ height: 48, padding: '0 32px', fontSize: 15 }}
            >
              <Download size={18} />
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
