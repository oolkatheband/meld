'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function PhoneMockup() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative animate-float"
      style={{ perspective: '1000px', width: '385px', height: 'auto' }}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative"
      >
        {/* Galaxy S26 Ultra Frame */}
        <div
          className="relative rounded-[48px] overflow-hidden shadow-2xl"
          style={{
            width: '385px',
            background: 'linear-gradient(135deg, #1a1a1e, #0d0d10)',
            border: '10px solid #0a0a0d',
            boxShadow: '0 40px 80px rgba(0,0,0,0.95), 0 0 60px rgba(29,185,84,0.2), inset 0 1px 0 rgba(255,255,255,0.08)',
          }}
        >
          {/* Screen Display Area */}
          <div 
            className="relative w-full overflow-hidden"
            style={{ backgroundColor: '#0f0f12' }}
          >
            {/* Punch Hole Camera - Small circle at top center */}
            <div
              className="absolute left-1/2 -translate-x-1/2 z-50 rounded-full"
              style={{
                top: '12px',
                width: '28px',
                height: '28px',
                backgroundColor: '#000000',
                border: '2px solid #1a1a1e',
                boxShadow: '0 0 12px rgba(0,0,0,0.8)',
              }}
            />

            {/* App Screenshot Image Container */}
            <div
              className="w-full"
              style={{
                paddingTop: '14px',
                paddingLeft: '0px',
                paddingRight: '0px',
                paddingBottom: '0px',
              }}
            >
              <Image
                src="/meld-app-screenshot.jpg"
                alt="Meld App Screenshot"
                width={385}
                height={770}
                className="w-full h-auto block rounded-b-[40px]"
                priority
              />
            </div>
          </div>
        </div>

        {/* Frame edge highlight */}
        <div
          className="absolute inset-0 rounded-[48px] pointer-events-none"
          style={{
            boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.1)',
          }}
          aria-hidden="true"
        />

        {/* Glow reflection */}
        <div
          className="absolute rounded-[56px] -z-10"
          style={{
            inset: '-12px',
            background: 'radial-gradient(ellipse 90% 50% at 50% 20%, rgba(29,185,84,0.25) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
      </motion.div>
    </div>
  )
}
