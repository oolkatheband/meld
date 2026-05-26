'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <main style={{ backgroundColor: 'var(--md-sys-color-surface)' }}>
      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 md3-label-large mb-8 hover:underline"
              style={{ color: 'var(--meld-spotify)' }}
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>

            <h1 className="md3-display-small font-bold mb-8" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              Privacy Policy
            </h1>

            <div className="space-y-8">
              <section>
                <h2 className="md3-headline-small font-bold mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Overview
                </h2>
                <p className="md3-body-large leading-relaxed" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  Meld is an open-source Android application. We do not collect, store, or transmit any personal data to our servers because we do not operate any servers.
                </p>
              </section>

              <section>
                <h2 className="md3-headline-small font-bold mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Third-Party Services
                </h2>
                <p className="md3-body-large leading-relaxed mb-4" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  Meld interacts with the following third-party services:
                </p>
                <ul className="space-y-3">
                  {[
                    'Spotify — for recommendations and authentication',
                    'YouTube Music — for streaming music content',
                    'Last.fm — for scrobbling (optional)',
                    'Discord — for Rich Presence (optional)',
                    'Shazam — for song recognition (optional)',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--meld-spotify)' }} />
                      <span className="md3-body-large" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="md3-body-large leading-relaxed mt-4" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  Your interactions with these services are governed by their respective privacy policies.
                </p>
              </section>

              <section>
                <h2 className="md3-headline-small font-bold mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Local Data Storage
                </h2>
                <p className="md3-body-large leading-relaxed" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  All app data (playlists, cached music, preferences) is stored locally on your device. We cannot access this data.
                </p>
              </section>

              <section>
                <h2 className="md3-headline-small font-bold mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Open Source
                </h2>
                <p className="md3-body-large leading-relaxed" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  Meld is fully open source under the GPL-3.0 license. You can audit the entire codebase at{' '}
                  <a
                    href="https://github.com/FrancescoGrazioso/Meld"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    style={{ color: 'var(--meld-spotify)' }}
                  >
                    github.com/FrancescoGrazioso/Meld
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="md3-headline-small font-bold mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Contact
                </h2>
                <p className="md3-body-large leading-relaxed" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  For any privacy concerns, please open an issue on the GitHub repository.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--md-sys-color-outline-variant)' }}>
              <p className="md3-label-medium" style={{ color: 'var(--md-sys-color-outline)' }}>
                Last updated: January 2025
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
