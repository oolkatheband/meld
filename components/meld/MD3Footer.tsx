'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Heart, ExternalLink } from 'lucide-react'

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Architecture', href: '/architecture' },
      { label: 'Download', href: '/download' },
      { label: 'About', href: '/about' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'GitHub', href: 'https://github.com/FrancescoGrazioso/Meld', external: true },
      { label: 'Releases', href: 'https://github.com/FrancescoGrazioso/Meld/releases', external: true },
      { label: 'Issues', href: 'https://github.com/FrancescoGrazioso/Meld/issues', external: true },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'MIT License', href: 'https://github.com/FrancescoGrazioso/Meld/blob/main/LICENSE', external: true },
      { label: 'Privacy', href: '/privacy' },
    ],
  },
]

export default function MD3Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        backgroundColor: 'var(--md-sys-color-surface-container-low)',
        borderTop: '1px solid var(--md-sys-color-outline-variant)',
      }}
    >
      {/* Glow accents */}
      <div
        className="absolute -top-40 left-1/4 w-80 h-80 rounded-full pointer-events-none animate-bass-pulse"
        style={{ background: 'radial-gradient(circle, rgba(29,185,84,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 border-glow-spotify"
                style={{ backgroundColor: 'rgba(29,185,84,0.12)' }}
              >
                <svg width="24" height="24" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="6.5" stroke="#1DB954" strokeWidth="1.5" />
                  <path d="M4.5 8C6 6.5 9.5 9.5 11.5 8" stroke="#1DB954" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M4.5 10C6 8.5 9.5 11.5 11.5 10" stroke="#1DB954" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                </svg>
              </div>
              <div>
                <div className="md3-title-large font-bold" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Meld
                </div>
                <div className="md3-label-medium" style={{ color: 'var(--md-sys-color-outline)' }}>
                  The signal between platforms
                </div>
              </div>
            </Link>

            <p
              className="md3-body-medium max-w-xs mb-8"
              style={{ color: 'var(--md-sys-color-on-surface-variant)' }}
            >
              An open-source Android music client combining Spotify&apos;s intelligence with YouTube Music&apos;s catalogue.
            </p>

            {/* Terminal signal */}
            <div
              className="inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-xl"
              style={{
                backgroundColor: 'rgba(29,185,84,0.08)',
                border: '1px solid rgba(29,185,84,0.2)',
                color: 'var(--meld-spotify)',
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--meld-spotify)' }} />
              <span>meld.signal.active</span>
              <span className="animate-cursor">|</span>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4
                className="md3-label-large mb-4"
                style={{ color: 'var(--md-sys-color-on-surface)' }}
              >
                {column.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md3-body-medium inline-flex items-center gap-1.5 transition-colors hover:text-white"
                        style={{ color: 'var(--md-sys-color-on-surface-variant)' }}
                      >
                        {link.label}
                        <ExternalLink size={12} style={{ opacity: 0.5 }} />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="md3-body-medium transition-colors hover:text-white"
                        style={{ color: 'var(--md-sys-color-on-surface-variant)' }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16 pt-8"
          style={{ borderTop: '1px solid var(--md-sys-color-outline-variant)' }}
        >
          <p
            className="md3-body-small text-center md:text-left"
            style={{ color: 'var(--md-sys-color-outline)' }}
          >
            Not affiliated with Spotify or Google. Unofficial API client. Use at your own risk.
          </p>

          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="md3-label-small" style={{ color: 'var(--md-sys-color-outline)' }}>
                Made with
              </span>
              <Heart size={12} style={{ color: 'var(--meld-pink)' }} />
              <span className="md3-label-small" style={{ color: 'var(--md-sys-color-outline)' }}>
                by
              </span>
              <a
                href="https://github.com/FrancescoGrazioso"
                target="_blank"
                rel="noopener noreferrer"
                className="md3-label-small font-medium hover:underline"
                style={{ color: 'var(--meld-spotify)' }}
              >
                Francesco Grazioso
              </a>
            </div>
            <p className="md3-label-small text-center" style={{ color: 'var(--md-sys-color-outline)' }}>
              Website designed by{' '}
              <a
                href="#"
                className="font-medium hover:underline"
                style={{ color: 'var(--meld-spotify)' }}
              >
                Ibn Khalid Khan
              </a>
              {' '}· Inspired by{' '}
              <a
                href="https://oolka.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
                style={{ color: 'var(--meld-spotify)' }}
              >
                OOLKA
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
