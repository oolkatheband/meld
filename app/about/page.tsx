'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Heart, ArrowRight, ExternalLink } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden" style={{ backgroundColor: 'var(--md-sys-color-surface)' }}>
      {/* Hero section */}
      <section className="relative min-h-[60vh] flex items-center justify-center py-20 overflow-hidden pt-32">
        {/* Radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(29,185,84,0.08) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <motion.div variants={fadeUp}>
              <span
                className="px-4 py-2 rounded-full font-mono md3-label-medium inline-block"
                style={{
                  backgroundColor: 'rgba(29,185,84,0.08)',
                  border: '1px solid rgba(29,185,84,0.25)',
                  color: 'var(--meld-spotify)',
                }}
              >
                Our Story
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="md3-display-large font-bold tracking-tight"
              style={{ color: 'var(--md-sys-color-on-surface)' }}
            >
              The signal between
              <br />
              <span className="text-gradient-spotify">platforms and creators</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="md3-body-large max-w-2xl mx-auto"
              style={{ color: 'var(--md-sys-color-on-surface-variant)' }}
            >
              Meld was built to bridge the gap between the world&apos;s best music services. This website showcases the project and connects developers, users, and music lovers.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20" style={{ backgroundColor: 'var(--md-sys-color-surface)' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-20">
          {/* Meld - The App */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="md3-headline-large font-bold mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Meld · The Open-Source App
              </h2>
              <div className="w-12 h-1 rounded-full" style={{ backgroundColor: 'var(--meld-spotify)' }} />
            </div>

            <div className="space-y-4">
              <p
                className="md3-body-large leading-relaxed"
                style={{ color: 'var(--md-sys-color-on-surface-variant)' }}
              >
                Meld is an open-source Android music client created by{' '}
                <a
                  href="https://github.com/FrancescoGrazioso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                  style={{ color: 'var(--meld-spotify)' }}
                >
                  Francesco Grazioso
                </a>
                . It uniquely combines Spotify&apos;s intelligent recommendation engine with YouTube Music&apos;s vast catalogue of 100M+ songs.
              </p>

              <p
                className="md3-body-large leading-relaxed"
                style={{ color: 'var(--md-sys-color-on-surface-variant)' }}
              >
                The app includes advanced features like word-by-word synced lyrics, offline playback, 10-band equalizer with DSP, and support for high-fidelity audio formats. All of this without requiring a Premium subscription.
              </p>

              <p
                className="md3-body-large leading-relaxed"
                style={{ color: 'var(--md-sys-color-on-surface-variant)' }}
              >
                Built on Material Design 3 principles, Meld offers a dark, modern interface with glass surfaces and subtle motion that feels premium yet accessible. It&apos;s completely free, open-source, and respects user privacy.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/FrancescoGrazioso/Meld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md3-filled-button inline-flex items-center justify-center"
                  style={{ height: 44, padding: '0 24px', fontSize: 14 }}
                >
                  <Github size={16} />
                  View on GitHub
                </a>
                <Link
                  href="/download"
                  className="md3-tonal-button inline-flex items-center justify-center"
                  style={{ height: 44, padding: '0 24px', fontSize: 14 }}
                >
                  Download Now
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Francesco Grazioso */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 p-8 rounded-3xl"
            style={{
              backgroundColor: 'var(--md-sys-color-surface-container-low)',
              border: '1px solid rgba(29,185,84,0.15)',
            }}
          >
            <div>
              <h3 className="md3-headline-medium font-bold mb-2" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Francesco Grazioso · Creator & Developer
              </h3>
              <p className="md3-label-medium" style={{ color: 'var(--meld-spotify)' }}>
                Open-source enthusiast & Android developer
              </p>
            </div>

            <p
              className="md3-body-medium leading-relaxed"
              style={{ color: 'var(--md-sys-color-on-surface-variant)' }}
            >
              Francesco built Meld from scratch with a vision to break down silos between music services. He&apos;s passionate about open-source development, user privacy, and creating tools that empower people to control their digital experience. His work demonstrates that great apps don&apos;t require corporate backing—just dedication and community support.
            </p>

            <a
              href="https://github.com/FrancescoGrazioso"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 md3-label-large font-semibold hover:underline"
              style={{ color: 'var(--meld-spotify)' }}
            >
              Visit GitHub Profile
              <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Ibn Khalid Khan */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 p-8 rounded-3xl"
            style={{
              backgroundColor: 'var(--md-sys-color-surface-container-low)',
              border: '1px solid rgba(74,158,255,0.15)',
            }}
          >
            <div>
              <h3 className="md3-headline-medium font-bold mb-2" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Ibn Khalid Khan · Website Designer
              </h3>
              <p className="md3-label-medium" style={{ color: '#4A9EFF' }}>
                Creative developer & design strategist
              </p>
            </div>

            <p
              className="md3-body-medium leading-relaxed"
              style={{ color: 'var(--md-sys-color-on-surface-variant)' }}
            >
              Ibn Khalid Khan designed and built this website to showcase the Meld project with a modern, Material Design 3-compliant interface. He blended technical excellence with creative direction, creating an experience that reflects the premium quality of the Meld app itself. His work bridges design and development, ensuring every interaction feels intentional.
            </p>

            <p
              className="md3-body-medium leading-relaxed"
              style={{ color: 'var(--md-sys-color-on-surface-variant)' }}
            >
              The website combines dark mode aesthetics, glass surfaces, subtle animations, and a responsive layout that works seamlessly across all devices. Every element was carefully crafted to represent the Meld brand identity.
            </p>
          </motion.div>

          {/* OOLKA - Design Inspiration */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 p-8 rounded-3xl"
            style={{
              backgroundColor: 'var(--md-sys-color-surface-container-low)',
              border: '1px solid rgba(168,85,247,0.15)',
            }}
          >
            <div>
              <h3 className="md3-headline-medium font-bold mb-2" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                OOLKA · Design Inspiration
              </h3>
              <p className="md3-label-medium" style={{ color: '#A855F7' }}>
                Creative studio & design collective
              </p>
            </div>

            <p
              className="md3-body-medium leading-relaxed"
              style={{ color: 'var(--md-sys-color-on-surface-variant)' }}
            >
              <a
                href="https://oolka.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline"
                style={{ color: '#A855F7' }}
              >
                OOLKA
              </a>
              {' '}provided crucial design inspiration and direction for this website. Their innovative approach to digital design, premium aesthetics, and attention to micro-interactions influenced the overall visual language and user experience.
            </p>

            <p
              className="md3-body-medium leading-relaxed"
              style={{ color: 'var(--md-sys-color-on-surface-variant)' }}
            >
              The design philosophy combines Material Design 3 principles with modern web aesthetics, creating a cohesive identity that feels both premium and accessible. From typography to color systems to animation, OOLKA&apos;s creative direction shaped the final result.
            </p>

            <a
              href="https://oolka.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 md3-label-large font-semibold hover:underline"
              style={{ color: '#A855F7' }}
            >
              Explore OOLKA
              <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Collaboration */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 p-8 rounded-3xl"
            style={{
              backgroundColor: 'linear-gradient(135deg, rgba(29,185,84,0.08), rgba(74,158,255,0.08))',
              border: '1px solid rgba(29,185,84,0.2)',
            }}
          >
            <div>
              <h2 className="md3-headline-large font-bold" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Collaboration & Community
              </h2>
            </div>

            <p
              className="md3-body-large leading-relaxed"
              style={{ color: 'var(--md-sys-color-on-surface-variant)' }}
            >
              This project is built on the power of collaboration. Francesco&apos;s vision created Meld, Ibn Khalid Khan&apos;s design brought it to the web, and OOLKA&apos;s aesthetic direction elevated the entire experience. Together, we&apos;re proving that great things happen when talented people work toward a shared vision.
            </p>

            <p
              className="md3-body-large leading-relaxed"
              style={{ color: 'var(--md-sys-color-on-surface-variant)' }}
            >
              Meld is open-source and community-driven. Everyone is welcome to contribute, provide feedback, or build upon the project. Whether you&apos;re a developer, designer, or music lover, there&apos;s a place for you in the Meld community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://github.com/FrancescoGrazioso/Meld"
                target="_blank"
                rel="noopener noreferrer"
                className="md3-filled-button inline-flex items-center justify-center"
                style={{ height: 44, padding: '0 24px', fontSize: 14 }}
              >
                <Github size={16} />
                Contribute to Meld
              </a>
              <Link
                href="/"
                className="md3-outlined-button inline-flex items-center justify-center"
                style={{ height: 44, padding: '0 24px', fontSize: 14 }}
              >
                Back to Home
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
