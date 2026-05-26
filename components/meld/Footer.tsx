'use client'

import { motion } from 'framer-motion'
import { Github, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="relative py-12 px-6 md:px-12 overflow-hidden"
      style={{ backgroundColor: '#08080C', borderTop: '1px solid #2A2A2E' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Logo + tagline */}
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center border-glow-spotify"
              style={{ backgroundColor: 'rgba(29,185,84,0.1)' }}
            >
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="6.5" stroke="#1DB954" strokeWidth="1.5" />
                <path d="M4.5 8C6 6.5 9.5 9.5 11.5 8" stroke="#1DB954" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M4.5 10C6 8.5 9.5 11.5 11.5 10" stroke="#1DB954" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              </svg>
            </div>
            <div>
              <div className="font-mono text-sm font-bold" style={{ color: '#F5F5F5' }}>Meld</div>
              <div className="font-mono" style={{ fontSize: '9px', color: '#555560' }}>The signal between platforms.</div>
            </div>
          </div>

          {/* Center: Links */}
          <div className="flex items-center gap-6">
            {[
              { label: 'About', href: '/about' },
              { label: 'GitHub', href: 'https://github.com/FrancescoGrazioso/Meld' },
              { label: 'Releases', href: 'https://github.com/FrancescoGrazioso/Meld/releases' },
              { label: 'Issues', href: 'https://github.com/FrancescoGrazioso/Meld/issues' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="font-mono text-xs transition-colors duration-200 hover:text-white"
                style={{ color: '#555560' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: Made by */}
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs" style={{ color: '#555560' }}>Made with</span>
              <Heart size={11} style={{ color: '#EC4899' }} />
              <span className="font-mono text-xs" style={{ color: '#555560' }}>by</span>
              <a
                href="https://github.com/FrancescoGrazioso"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs hover:underline"
                style={{ color: '#1DB954' }}
              >
                Francesco Grazioso
              </a>
            </div>
            <p className="font-mono text-xs text-right" style={{ color: '#555560' }}>
              Website by{' '}
              <a href="#" className="hover:underline" style={{ color: '#1DB954' }}>
                Ibn Khalid Khan
              </a>
              {' '}· Inspired by{' '}
              <a
                href="https://oolka.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: '#1DB954' }}
              >
                OOLKA
              </a>
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-3 mt-8 pt-6"
          style={{ borderTop: '1px solid #1a1a1e' }}
        >
          <p className="font-mono text-xs text-center md:text-left" style={{ color: '#555560' }}>
            Not affiliated with Spotify or Google. Use at your own risk. Unofficial API client.
          </p>

          {/* Terminal signal */}
          <div
            className="font-mono text-xs px-3 py-1.5 rounded-lg"
            style={{ backgroundColor: 'rgba(29,185,84,0.08)', color: '#1DB954', border: '1px solid rgba(29,185,84,0.2)' }}
          >
            {'>'} meld.signal.strength=<span style={{ color: '#F5F5F5' }}>100%</span>
            <span className="animate-cursor ml-0.5">|</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
