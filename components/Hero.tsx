'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const roles = [
  'AI Product Manager',
  'Manufacturing × AI',
  'Builder',
  'Product Strategist',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = roles[roleIndex]

    if (!deleting && charIndex < current.length) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1))
        setCharIndex((i) => i + 1)
      }, 60)
      return () => clearTimeout(timeout)
    }

    if (!deleting && charIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), 2200)
      return () => clearTimeout(timeout)
    }

    if (deleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1))
        setCharIndex((i) => i - 1)
      }, 35)
      return () => clearTimeout(timeout)
    }

    if (deleting && charIndex === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }
  }, [charIndex, deleting, roleIndex])

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-grid overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-600/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <div>
            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/8 mb-8"
              style={{ animation: 'fadeUp 0.5s ease forwards', opacity: 0 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span className="text-xs text-indigo-300/80 font-medium tracking-wide">
                Manufacturing × AI · Product Builder
              </span>
            </div>

            {/* Name */}
            <h1
              className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
              style={{ animation: 'fadeUp 0.5s 0.1s ease forwards', opacity: 0 }}
            >
              Roman <span className="gradient-text">Martins</span>
            </h1>

            {/* Typewriter role */}
            <div
              className="h-10 flex items-center mb-6"
              style={{ animation: 'fadeUp 0.5s 0.2s ease forwards', opacity: 0 }}
            >
              <span className="text-xl lg:text-2xl font-medium text-white/50">
                {displayed}
                <span className="animate-blink text-indigo-400 ml-0.5">|</span>
              </span>
            </div>

            {/* Description */}
            <p
              className="text-white/55 text-lg leading-relaxed mb-10 max-w-xl"
              style={{ animation: 'fadeUp 0.5s 0.3s ease forwards', opacity: 0 }}
            >
              10 years inside manufacturing operations – LEGO, industrial equipment,
              global teams. Now I build AI tools in production: Claude agents, prompt
              architectures, shipped products. The rare bridge between factory-floor
              reality and AI implementation.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4"
              style={{ animation: 'fadeUp 0.5s 0.4s ease forwards', opacity: 0 }}
            >
              <a
                href="#work"
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
              >
                View My Work
              </a>
              <a
                href="https://www.linkedin.com/in/romanmartins"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-white/10 hover:border-white/20 text-white/70 hover:text-white font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-white/10 hover:border-white/20 text-white/70 hover:text-white font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                Get in Touch
              </a>
            </div>

            {/* Stats row */}
            <div
              className="flex gap-8 mt-12 pt-8 border-t border-white/[0.06]"
              style={{ animation: 'fadeUp 0.5s 0.5s ease forwards', opacity: 0 }}
            >
              {[
                { value: '10+', label: 'Years engineering' },
                { value: '4+', label: 'Years with AI' },
                { value: '12+', label: 'AI tools built' },
                { value: '1,000+', label: 'Books shipped' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/40 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Profile image */}
          <div
            className="hidden lg:flex justify-center items-center"
            style={{ animation: 'fadeIn 0.8s 0.3s ease forwards', opacity: 0 }}
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20 blur-2xl scale-110" />
              {/* Border gradient */}
              <div className="relative w-72 h-80 rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500/40 via-purple-500/20 to-transparent">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-[#0f0f1a]">
                  <Image
                    src="/roman-martins.jpg"
                    alt="Roman Martins"
                    width={288}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass-card rounded-xl px-4 py-3 shadow-xl">
                <div className="text-xs text-white/50 mb-0.5">Currently building</div>
                <div className="text-sm font-semibold text-white">AI for industry</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: 'fadeIn 1s 1s ease forwards', opacity: 0 }}
      >
        <span className="text-xs text-white/20 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  )
}
