'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface FeedItem {
  title: string
  source: string
  url: string
  date: string
  type: 'gap' | 'pain' | 'shift' | 'emerging'
  snippet: string
}

interface FeedStream {
  summary: string
  items: FeedItem[]
}

interface FeedData {
  lastUpdated: string
  claudeCode: FeedStream
  openClaw: FeedStream
}

const typeStyles: Record<string, { label: string; bg: string; text: string; border: string }> = {
  gap: { label: 'Gap', bg: 'bg-amber-400/10', text: 'text-amber-400', border: 'border-amber-400/20' },
  pain: { label: 'Pain', bg: 'bg-red-400/10', text: 'text-red-400', border: 'border-red-400/20' },
  shift: { label: 'Shift', bg: 'bg-sky-400/10', text: 'text-sky-400', border: 'border-sky-400/20' },
  emerging: { label: 'Emerging', bg: 'bg-purple-400/10', text: 'text-purple-400', border: 'border-purple-400/20' },
}

function TypeBadge({ type }: { type: string }) {
  const s = typeStyles[type] || typeStyles.emerging
  return (
    <span className={`inline-flex items-center text-[10px] font-mono font-medium px-2 py-0.5 rounded ${s.bg} ${s.text} ${s.border} border uppercase tracking-wider`}>
      {s.label}
    </span>
  )
}

function StreamCard({ stream, label, accent }: { stream: FeedStream; label: string; accent: string }) {
  const accentMap: Record<string, { border: string; dot: string }> = {
    indigo: {
      border: 'border-indigo-500/20 hover:border-indigo-500/40',
      dot: 'bg-indigo-400',
    },
    emerald: {
      border: 'border-emerald-500/20 hover:border-emerald-500/40',
      dot: 'bg-emerald-400',
    },
  }

  const c = accentMap[accent]

  return (
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-3 mb-4">
        <span className={`w-2 h-2 rounded-full ${c.dot}`} />
        <h2 className="text-lg font-bold text-white">{label}</h2>
      </div>

      {/* Summary */}
      <div className={`glass-card rounded-xl p-5 mb-4 ${c.border} transition-all duration-300`}>
        <p className="text-xs font-mono text-white/30 tracking-widest uppercase mb-2">Opportunity Summary</p>
        <p className="text-sm text-white/60 leading-relaxed">{stream.summary}</p>
      </div>

      {/* Items */}
      <div className="space-y-3">
        {stream.items.length === 0 ? (
          <div className="glass-card rounded-xl p-5 border border-white/[0.04]">
            <p className="text-sm text-white/30 italic">No opportunity signals this week.</p>
          </div>
        ) : (
          stream.items.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block glass-card rounded-xl p-5 ${c.border} transition-all duration-300 group`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-sm font-semibold text-white group-hover:text-indigo-200 transition-colors leading-snug">
                  {item.title}
                </h3>
                <span className="text-white/20 group-hover:text-indigo-400 transition-colors shrink-0 text-sm">
                  &rarr;
                </span>
              </div>
              <p className="text-xs text-white/40 leading-relaxed mb-3">{item.snippet}</p>
              <div className="flex items-center gap-3">
                {item.type && <TypeBadge type={item.type} />}
                <span className="tag">{item.source}</span>
                <span className="text-xs text-white/20">{item.date}</span>
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  )
}

export default function FeedPage() {
  const [data, setData] = useState<FeedData | null>(null)

  useEffect(() => {
    fetch('/feed-data.json')
      .then((r) => r.json())
      .then(setData)
      .catch(() => {})
  }, [])

  const lastUpdated = data?.lastUpdated
    ? new Date(data.lastUpdated).toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : '...'

  return (
    <main className="relative min-h-screen">
      {/* Nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080810]/90 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">R</span>
            </div>
            <span className="text-sm text-white/50 group-hover:text-white/70 transition-colors">romanmartins.com</span>
          </Link>
          <Link href="/" className="text-sm text-white/40 hover:text-white/70 transition-colors">
            ← Back
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 pb-20 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-mono text-indigo-400/70 tracking-widest uppercase mb-3">Product Opportunity Radar</p>
          <h1 className="text-4xl font-bold text-white mb-3">The Wire</h1>
          <p className="text-white/45 text-lg max-w-2xl mb-4">
            Where are the product opportunities in AI coding tools? This feed screens
            Claude Code and OpenClaw daily — surfacing gaps, pain points, and emerging
            patterns a PM would act on.
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {Object.entries(typeStyles).map(([key, s]) => (
              <span key={key} className={`inline-flex items-center text-[10px] font-mono px-2 py-0.5 rounded ${s.bg} ${s.text} ${s.border} border uppercase tracking-wider`}>
                {s.label}
              </span>
            ))}
          </div>
          <p className="text-xs text-white/20 font-mono">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Two-column feed */}
        {data ? (
          <div className="grid lg:grid-cols-2 gap-8">
            <StreamCard stream={data.claudeCode} label="Claude Code" accent="indigo" />
            <StreamCard stream={data.openClaw} label="OpenClaw" accent="emerald" />
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-block w-6 h-6 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
          </div>
        )}

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <p className="text-xs text-white/20 text-center">
            Automated daily at 6:00 AM CET. Screened through a PM lens from changelogs, GitHub, Hacker News, Reddit, and dev blogs.
          </p>
        </div>
      </div>
    </main>
  )
}
