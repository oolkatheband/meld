'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Github, Menu, X, Download } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Download', href: '/download' },
]

export default function MD3AppBar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'md3-glass-surface-bright' : ''
        }`}
        style={{
          height: 64,
          backgroundColor: scrolled ? undefined : 'transparent',
        }}
      >
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 border-glow-spotify"
              style={{ backgroundColor: 'rgba(29,185,84,0.12)' }}
            >
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="6.5" stroke="#1DB954" strokeWidth="1.5" />
                <path d="M4.5 8C6 6.5 9.5 9.5 11.5 8" stroke="#1DB954" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M4.5 10C6 8.5 9.5 11.5 11.5 10" stroke="#1DB954" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <div className="md3-title-medium font-semibold" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Meld
              </div>
              <div className="md3-label-small" style={{ color: 'var(--md-sys-color-outline)' }}>
                Spotify + YouTube, fused
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`md3-nav-item ${isActive ? 'md3-nav-item-active' : ''}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/FrancescoGrazioso/Meld"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex md3-outlined-button"
              style={{ height: 36, padding: '0 16px', fontSize: 13 }}
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            
            <Link
              href="/download"
              className="hidden sm:flex md3-filled-button animate-glow-pulse"
              style={{ height: 36, padding: '0 16px', fontSize: 13 }}
            >
              <Download size={16} />
              <span>Download</span>
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
              style={{
                backgroundColor: mobileMenuOpen ? 'var(--md-sys-color-surface-container-highest)' : 'transparent',
                color: 'var(--md-sys-color-on-surface)',
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ backgroundColor: 'var(--md-sys-color-scrim)' }}
            />

            {/* Drawer */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-72 z-50 lg:hidden md3-glass-surface-bright"
              style={{
                borderTopLeftRadius: 'var(--md-sys-shape-corner-extra-large)',
                borderBottomLeftRadius: 'var(--md-sys-shape-corner-extra-large)',
              }}
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-4">
                <div className="flex-1 flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`md3-nav-item text-base ${isActive ? 'md3-nav-item-active' : ''}`}
                        style={{ borderRadius: 'var(--md-sys-shape-corner-large)' }}
                      >
                        {link.label}
                      </Link>
                    )
                  })}
                </div>

                {/* Mobile actions */}
                <div className="flex flex-col gap-3 pt-4" style={{ borderTop: '1px solid var(--md-sys-color-outline-variant)' }}>
                  <a
                    href="https://github.com/FrancescoGrazioso/Meld"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md3-outlined-button w-full"
                  >
                    <Github size={18} />
                    <span>View on GitHub</span>
                  </a>
                  <Link href="/download" className="md3-filled-button w-full animate-glow-pulse">
                    <Download size={18} />
                    <span>Download APK</span>
                  </Link>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
