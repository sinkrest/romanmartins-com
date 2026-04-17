'use client'

import { useEffect, useRef, useState } from 'react'

type LineCls = 'info' | 'system' | 'warn' | 'error' | 'success' | 'highlight' | 'dim'
type Line = { id: number; text: string; cls: LineCls; raw?: boolean }

const COLOR: Record<LineCls, string> = {
  info: '#33ff33',
  system: '#666',
  warn: '#ffaa00',
  error: '#ff3333',
  success: '#00ff88',
  highlight: '#00ccff',
  dim: '#888',
}

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([])
  const [input, setInput] = useState('')
  const [booted, setBooted] = useState(false)
  const [history, setHistory] = useState<string[]>([])
  const [historyIdx, setHistoryIdx] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const lineId = useRef(0)
  const prompt = 'r@jensen-ai:~$'

  const add = (text: string, cls: LineCls = 'info', raw = false) => {
    setLines((prev) => [...prev, { id: lineId.current++, text, cls, raw }])
  }

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

  useEffect(() => {
    let cancelled = false
    const boot = async () => {
      const seq: [string, LineCls, number][] = [
        ['', 'dim', 80],
        ['roman-os // personal terminal v1.0', 'highlight', 120],
        ['━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'dim', 80],
        ['', 'dim', 40],
        ['[BOOT] Hello, JENSEN-GROUP.', 'system', 350],
        ['[BOOT] You puzzled me. I puzzled back.', 'system', 350],
        ['[BOOT] Connection established.', 'system', 300],
        ['', 'dim', 100],
        ['Type "help" to see what I built.', 'dim', 0],
        ['', 'dim', 0],
      ]
      for (const [text, cls, delay] of seq) {
        if (cancelled) return
        add(text, cls)
        await sleep(delay)
      }
      if (!cancelled) setBooted(true)
    }
    boot()
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [lines])

  useEffect(() => {
    if (booted) inputRef.current?.focus()
  }, [booted])

  const run = async (cmd: string) => {
    const raw = cmd.trim()
    if (!raw) return
    add(`${prompt} ${raw}`, 'dim')
    setHistory((h) => [...h, raw])
    setHistoryIdx(null)

    const [command, ...args] = raw.split(/\s+/)
    const c = command.toLowerCase()

    switch (c) {
      case 'help':
      case 'h':
      case '--help':
      case '-h':
        add('', 'dim')
        add('Available commands:', 'highlight')
        add('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'dim')
        add('  whoami        Who is this?', 'info')
        add('  scan          Scan my stack', 'info')
        add('  ship          What I\'ve shipped', 'info')
        add('  why           Why JENSEN, why me', 'info')
        add('  hire          Contact + links', 'info')
        add('  about         About this page', 'info')
        add('  clear         Clear screen', 'dim')
        add('', 'dim')
        add('There are hidden commands. You know the drill.', 'dim')
        break

      case 'whoami':
        add('', 'dim')
        add('You already know who I am.', 'highlight')
        add('', 'dim')
        add('pd_manager. Same building as you.', 'info')
        add('', 'dim')
        add('Here\'s the part that might surprise you.', 'info')
        add('For two years, on nights and weekends, I\'ve been shipping AI.', 'info')
        add('Claude APIs. Agent workflows. 28 live artefacts.', 'info')
        add('None of it on any CV you\'ve seen. Until now.', 'info')
        add('', 'dim')
        add('That\'s why this terminal exists. Type "ship" for the work.', 'success')
        break

      case 'scan':
        add('', 'dim')
        add('[SCAN] Probing roman.stack...', 'system')
        await sleep(600)
        add('', 'dim')
        add('┌─── ROMAN // Operational Stack ──────────────┐', 'highlight')
        add('│                                              │', 'highlight')
        add('│  Role:        AI-native Product Manager      │', 'info')
        add('│  Mode:        Builder, not theorist          │', 'info')
        add('│  Tempo:       Idea → production in hours     │', 'info')
        add('│                                              │', 'highlight')
        add('│  Active Systems:                             │', 'highlight')
        add('│  ├─ romanmartins.com     [LIVE]              │', 'success')
        add('│  ├─ Roman\'s Lab          [13 TOOLS LIVE]     │', 'success')
        add('│  ├─ Ghost Creator Suite  [7 TOOLS / 1 WEEK]  │', 'success')
        add('│  ├─ FF API Probe         [WEEKLY // LIVE]    │', 'success')
        add('│  ├─ The Wire (feed)      [DAILY // LIVE]     │', 'success')
        add('│  └─ Automations          [8 CRON JOBS]       │', 'success')
        add('│                                              │', 'highlight')
        add('│  Philosophy: Physical products should be     │', 'info')
        add('│  developed the way software is.              │', 'info')
        add('│                                              │', 'highlight')
        add('└──────────────────────────────────────────────┘', 'highlight')
        add('', 'dim')
        add('[SCAN] Complete. Try "ship" for details.', 'system')
        break

      case 'ship':
      case 'built':
      case 'portfolio':
        add('', 'dim')
        add('Things I\'ve shipped. Links work.', 'highlight')
        add('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'dim')
        add('', 'dim')
        add('★ Jensen AI Suite — five tools, built for you', 'info')
        add('  AI Horizon · Visual Studio · Global Map · Intel · Flappy.', 'dim')
        add('  All live. All Jensen-specific. One link.', 'dim')
        add('  → <a href="https://romanmartins.com/jensen-ai" target="_blank" rel="noopener" style="color:#66ddff">romanmartins.com/jensen-ai</a>', 'success', true)
        add('', 'dim')
        add('★ FF API Probe — weekly agent-readiness leaderboard', 'info')
        add('  Scores 7 manufacturing APIs (Xometry, Protolabs, Hubs,', 'dim')
        add('  PCBWay, JLCPCB, Shapeways, Fictiv) on 8 dimensions.', 'dim')
        add('  Directly relevant to JENSEN supply-chain agents.', 'dim')
        add('  → <a href="https://romanmartins.com/manufacturing-apis" target="_blank" rel="noopener" style="color:#66ddff">romanmartins.com/manufacturing-apis</a>', 'success', true)
        add('', 'dim')
        add('★ Roman\'s Lab — 15+ live tools for PMs', 'info')
        add('  Stakeholder Lens · AI Scoping · Opportunity Scanner ·', 'dim')
        add('  Discovery Simulator · Ghost Suite (7 tools) · and more.', 'dim')
        add('  → <a href="https://sinkrest.github.io/romans-lab" target="_blank" rel="noopener" style="color:#66ddff">sinkrest.github.io/romans-lab</a>', 'success', true)
        add('', 'dim')
        add('★ The Wire — daily AI × manufacturing radar', 'info')
        add('  Automated feed. Screens dev-tools + industrial-AI daily.', 'dim')
        add('  → <a href="https://romanmartins.com/feed" target="_blank" rel="noopener" style="color:#66ddff">romanmartins.com/feed</a>', 'success', true)
        add('', 'dim')
        add('★ The Forkable Factory — thesis + reference build', 'info')
        add('  "Physical products, developed the way software is."', 'dim')
        add('  → <a href="https://romanmartins.com/blog/the-forkable-factory" target="_blank" rel="noopener" style="color:#66ddff">romanmartins.com/blog/the-forkable-factory</a>', 'success', true)
        break

      case 'why':
        add('', 'dim')
        add('Why me.', 'highlight')
        add('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'dim')
        add('', 'dim')
        add('You know the public half. Product dev.', 'info')
        add('Roadmaps, suppliers, the floor.', 'info')
        add('', 'dim')
        add('Private half: two years at the seam between', 'info')
        add('industrial hardware and AI agents.', 'info')
        add('Nights. Weekends. 28 live artefacts.', 'info')
        add('', 'dim')
        add('LEGO taught me systems.', 'info')
        add('Jensen taught me the floor.', 'info')
        add('Claude taught me to ship both before breakfast.', 'info')
        add('', 'dim')
        add('Manufacturing × agents is a rare seam.', 'success')
        add('You\'re hiring for it. I\'ve been quietly living in it.', 'success')
        break

      case 'hire':
      case 'apply':
      case 'contact':
        add('', 'dim')
        add('┌─── LET\'S TALK ────────────────────────────────┐', 'success')
        add('│                                                │', 'success')
        add('│  Name:      Roman Martins                      │', 'info')
        add('│  Email:     you know how to reach me :)        │', 'info')
        add('│  LinkedIn:  <a href="https://www.linkedin.com/in/romanmartins/" target="_blank" rel="noopener" style="color:#66ddff">linkedin.com/in/romanmartins</a>       │', 'info', true)
        add('│  Site:      <a href="https://romanmartins.com" target="_blank" rel="noopener" style="color:#66ddff">romanmartins.com</a>                   │', 'info', true)
        add('│  Lab:       <a href="https://sinkrest.github.io/romans-lab" target="_blank" rel="noopener" style="color:#66ddff">sinkrest.github.io/romans-lab</a>      │', 'info', true)
        add('│  Location:  sunny island                       │', 'info')
        add('│                                                │', 'success')
        add('└────────────────────────────────────────────────┘', 'success')
        add('', 'dim')
        add('I\'ll be in the Level 1 terminal queue.', 'info')
        add('Say hi there too. Either way works.', 'dim')
        break

      case 'about':
        add('', 'dim')
        add('This page exists because someone at JENSEN hid a puzzle.', 'info')
        add('found. solved. applied.', 'info')
        add('', 'dim')
        add('building prove. check.', 'info')
        add('', 'dim')
        add('Nobody asked for this. You\'re reading it anyway.', 'success')
        break

      case 'clear':
      case 'cls':
        setLines([])
        break

      case 'ls':
        add('README.md  ship.log  .secrets  manifesto.txt  .env', 'info')
        break

      case 'cat': {
        const f = args[0]
        if (f === 'README.md') add('The readme is the commands. Try "ship" or "why".', 'info')
        else if (f === 'manifesto.txt') add('Physical products should be developed the way software is.', 'highlight')
        else if (f === 'ship.log') add('[LOG] 28 live artefacts · 8 automations · 0 slide decks.', 'system')
        else if (f === '.secrets' || f === '.env') add('Permission denied. Nice instinct.', 'warn')
        else add(`cat: ${f || '?'}: No such file`, 'error')
        break
      }

      case 'sudo':
        add('Nice try. No root for recruiters. Yet.', 'warn')
        break

      case 'ping':
        add('PING jensen-group.com: 14ms', 'info')
        add('Pong received. I know you\'re listening.', 'dim')
        break

      case 'pwd':
        add('/opt/roman/applications/jensen-group', 'info')
        break

      case 'echo':
        add(args.join(' '), 'info')
        break

      case 'exit':
      case 'quit':
        add('There is no exit. Only apply.', 'dim')
        break

      case 'prompt':
        add('', 'dim')
        add('[SYSTEM] My prompt configuration:', 'system')
        add('', 'dim')
        add('┌─── SYSTEM PROMPT (roman.v1) ──────────────────────────────┐', 'highlight')
        add('│                                                           │', 'highlight')
        add('│  role: senior_ai_product_manager                          │', 'info')
        add('│  mode: ship > plan                                        │', 'info')
        add('│  bias: builders > theorists                               │', 'info')
        add('│                                                           │', 'highlight')
        add('│  instructions: >                                          │', 'info')
        add('│    Translate business pain → working prototype.            │', 'info')
        add('│    Default to shipping. Validate in production.            │', 'info')
        add('│    Speak human. Respect governance. Stay curious.          │', 'info')
        add('│                                                           │', 'highlight')
        add('│  guardrails:                                              │', 'warn')
        add('│    - never pitch AI that doesn\'t amplify people            │', 'warn')
        add('│    - never hide behind slides                              │', 'warn')
        add('│    - never write "I hope this email finds you well"        │', 'warn')
        add('│                                                           │', 'highlight')
        add('└───────────────────────────────────────────────────────────┘', 'highlight')
        break

      case 'jgai2026':
        add('', 'dim')
        add('We see each other.', 'success')
        add('', 'dim')
        add('The bold letters in the hashtags. "# P W #" as the tell.', 'info')
        add('Eight characters. Clean signal. Good puzzle.', 'info')
        add('', 'dim')
        add('Now you found mine. Type "hire" when you\'re ready.', 'highlight')
        break

      default:
        add(`${c}: command not found. Try "help".`, 'error')
    }
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!booted) return
    if (e.key === 'Enter') {
      e.preventDefault()
      const v = input
      setInput('')
      run(v)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length === 0) return
      const nextIdx = historyIdx === null ? history.length - 1 : Math.max(0, historyIdx - 1)
      setHistoryIdx(nextIdx)
      setInput(history[nextIdx])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIdx === null) return
      const nextIdx = historyIdx + 1
      if (nextIdx >= history.length) {
        setHistoryIdx(null)
        setInput('')
      } else {
        setHistoryIdx(nextIdx)
        setInput(history[nextIdx])
      }
    }
  }

  return (
    <div
      style={{
        background: '#0a0a0a',
        color: '#33ff33',
        fontFamily: "'Courier New', 'Fira Code', monospace",
        fontSize: 14,
        lineHeight: 1.6,
        height: '100vh',
        overflow: 'hidden',
      }}
      onClick={() => inputRef.current?.focus()}
    >
      <div
        ref={scrollRef}
        style={{
          padding: 20,
          height: '100vh',
          overflowY: 'auto',
          position: 'relative',
        }}
      >
        {lines.map((l) => (
          <div
            key={l.id}
            style={{
              color: COLOR[l.cls],
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
            }}
            {...(l.raw
              ? { dangerouslySetInnerHTML: { __html: l.text } }
              : { children: l.text })}
          />
        ))}
        {booted && (
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 4 }}>
            <span style={{ color: '#00ccff', whiteSpace: 'nowrap', marginRight: 8 }}>
              {prompt}
            </span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              autoFocus
              autoComplete="off"
              spellCheck={false}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#33ff33',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                outline: 'none',
                flex: 1,
                caretColor: '#33ff33',
              }}
            />
          </div>
        )}
      </div>
      <div
        aria-hidden
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 3px)',
          pointerEvents: 'none',
          zIndex: 10,
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)',
          pointerEvents: 'none',
          zIndex: 11,
        }}
      />
    </div>
  )
}
