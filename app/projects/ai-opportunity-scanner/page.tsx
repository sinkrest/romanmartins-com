import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Opportunity Scanner — Case Study | Roman Martins',
  description: 'How I built a two-phase AI tool that maps where a company should use AI — generating a ranked opportunity list and executive brief from a single guided form input.',
}

export default function AiOpportunityScannerCaseStudy() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--bg)', color: 'var(--text-primary)' }}>

      <div className="max-w-3xl mx-auto px-6 pt-10">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back to work
        </Link>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-16">

        <header className="mb-16">
          <p className="text-xs font-mono text-indigo-400/70 tracking-widest uppercase mb-4">Case Study</p>
          <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
            AI Opportunity Scanner
          </h1>

          <div className="flex flex-wrap gap-6 text-sm text-white/40 mb-8">
            <div>
              <span className="text-white/25 text-xs uppercase tracking-wider font-mono block mb-1">Role</span>
              Designer & Builder
            </div>
            <div>
              <span className="text-white/25 text-xs uppercase tracking-wider font-mono block mb-1">Stack</span>
              Claude API · Vanilla JS · Vercel
            </div>
            <div>
              <span className="text-white/25 text-xs uppercase tracking-wider font-mono block mb-1">Built</span>
              March 2026
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://ai-opportunity-scanner.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors border border-indigo-500/20 hover:border-indigo-500/40 rounded-lg px-4 py-2"
            >
              Live demo →
            </a>
            <a
              href="https://github.com/sinkrest/ai-opportunity-scanner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors border border-white/[0.08] hover:border-white/20 rounded-lg px-4 py-2"
            >
              GitHub →
            </a>
          </div>
        </header>

        <div className="space-y-12 text-white/60 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">The Problem</h2>
            <p>
              &ldquo;We want to use AI&rdquo; is where most AI conversations begin — and stall. Companies know they should
              be doing something with AI. They don&apos;t know where to start, what to prioritise, or how to separate
              quick wins from longer bets. The result is either analysis paralysis or a scatter-shot approach that
              produces no meaningful results.
            </p>
            <p className="mt-4">
              Before you can scope an AI implementation (what to build), you need an opportunity map (where to play).
              This is the strategic layer that precedes the technical one — and it&apos;s the deliverable that&apos;s
              traditionally produced after expensive consultant workshops. I wanted to build a tool that produces it
              in under three minutes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">What I Built</h2>
            <p>
              A two-phase tool that takes a guided form input — company description, time-consuming tasks, current tools,
              primary goal, AI maturity — and produces a ranked opportunity map plus a full executive brief.
            </p>
            <div className="mt-6 glass-card rounded-xl p-6 space-y-3">
              {[
                { step: '01', text: 'User fills a structured 5-field form (company, tasks, tools, goal, AI maturity)' },
                { step: '02', text: 'Phase 1: Claude returns a JSON array of 5–8 opportunities, each with title, category, tier, impact, effort, time-to-value, AI type, and tool recommendations' },
                { step: '03', text: 'Opportunities rendered as cards split into Quick Wins (≤4 weeks) and Strategic Bets' },
                { step: '04', text: 'Phase 2: Claude generates a full executive brief — summary, where to start, deep-dives on top 3, risks, 90-day roadmap' },
                { step: '05', text: 'Output is copyable and cross-links to the AI Scoping Tool for deep-diving on specific opportunities' },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3">
                  <span className="text-xs font-mono text-indigo-400/60 mt-0.5 shrink-0">{item.step}</span>
                  <span className="text-sm text-white/60">{item.text}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Prompt Architecture</h2>
            <p>
              Two calls with opposite output styles — structured first, narrative second.
            </p>
            <ul className="mt-5 space-y-4">
              {[
                {
                  label: 'Opportunity list prompt (Phase 1)',
                  detail: 'Returns a strict JSON array with a defined schema per object. Strong schema instruction — specific field names, allowed values for tier/impact/effort, tool specificity requirements. The UI parses this to render interactive cards with colour-coded ratings before the full brief is ready. Structured output enables a richer visual result.',
                },
                {
                  label: 'Executive brief prompt (Phase 2)',
                  detail: 'Takes the form context plus a summary of the JSON opportunities as input. System prompt acts as a senior AI strategy consultant producing an executive brief — with explicit structure: summary, where to start, opportunity deep-dives, risks, 90-day roadmap. Runs in parallel with the card render.',
                },
                {
                  label: 'JSON parsing resilience',
                  detail: 'Claude occasionally wraps JSON in markdown code fences or includes control characters in description strings. The app strips code fences, extracts the outermost array by bracket position, and falls back to stripping control characters if the first parse fails. Defensive handling that makes the tool reliable in production.',
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-indigo-400 shrink-0 mt-0.5">—</span>
                  <span className="text-sm"><span className="text-white/80 font-medium">{item.label}:</span> {item.detail}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Design Decisions</h2>
            <ul className="space-y-4">
              {[
                {
                  label: 'Structured JSON first, narrative second',
                  detail: 'Generating cards and the full brief in two separate calls means the cards appear immediately while the brief loads. More importantly, it keeps each prompt focused: structured data extraction is a different job from strategic narrative writing. One monolithic prompt would trade quality for convenience.',
                },
                {
                  label: 'Quick Wins vs. Strategic Bets framework',
                  detail: 'The tier split is encoded in the prompt schema — not left to Claude to decide ad hoc. Quick Win = Low/Medium effort + visible value within 4 weeks. Strategic Bet = transformational but longer runway. This forces a concrete, actionable output rather than a list of generic recommendations. The framework maps directly to how leadership teams prioritise AI investment.',
                },
                {
                  label: 'Guided form, not a freetext prompt',
                  detail: 'A single textarea asking "describe your company" produces weaker results than structured fields for company description, tasks, tools, goal, and AI maturity. Each field targets a different part of the analysis. The form is a constraint that improves output quality by ensuring the model gets the context it needs.',
                },
                {
                  label: 'Cross-link to Scoping Tool',
                  detail: 'The output footer links to the AI Scoping Tool — the natural next step for any opportunity worth pursuing. The two tools are designed as a workflow: Scanner identifies where to play, Scoping Tool plans how to win. This creates a coherent demonstration of the full AI implementation engagement process.',
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-indigo-400 shrink-0 mt-0.5">—</span>
                  <span className="text-sm"><span className="text-white/80 font-medium">{item.label}:</span> {item.detail}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">The Tool Suite</h2>
            <p>
              The Opportunity Scanner is the third tool in an interconnected suite, each representing a stage of the
              AI implementation engagement process:
            </p>
            <div className="mt-6 space-y-3">
              {[
                { tool: 'AI Opportunity Scanner', role: 'Identify — where should we use AI?', href: '/projects/ai-opportunity-scanner', current: true },
                { tool: 'AI Implementation Scoping Tool', role: 'Scope — how do we implement the best opportunity?', href: '/projects/ai-scoping-tool', current: false },
                { tool: 'AI Discovery Simulator', role: 'Validate — do real users need what we\'re building?', href: '/projects/ai-discovery-simulator', current: false },
              ].map((item, i) => (
                <div key={i} className={`glass-card rounded-xl p-4 border flex items-center justify-between gap-4 ${item.current ? 'border-indigo-500/20' : 'border-white/[0.04]'}`}>
                  <div>
                    <div className={`text-sm font-medium mb-0.5 ${item.current ? 'text-indigo-300' : 'text-white/70'}`}>{item.tool}</div>
                    <div className="text-xs text-white/35">{item.role}</div>
                  </div>
                  {!item.current && (
                    <Link href={item.href} className="text-xs text-white/30 hover:text-white/60 transition-colors whitespace-nowrap">
                      Case study →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">What It Demonstrates</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: 'Strategic AI thinking', detail: 'The Quick Wins / Strategic Bets framework and 90-day roadmap reflect real consulting methodology, not generic output' },
                { label: 'Output design', detail: 'Two-phase rendering, structured cards, badge system, and cross-linking show deliberate thinking about how results are consumed' },
                { label: 'Prompt engineering depth', detail: 'Schema-constrained JSON prompts, resilient parsing, and narrative synthesis across two coordinated calls' },
              ].map((item, i) => (
                <div key={i} className="glass-card rounded-xl p-5 border border-white/[0.04]">
                  <div className="text-sm font-medium text-white mb-2">{item.label}</div>
                  <div className="text-xs text-white/40 leading-relaxed">{item.detail}</div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </article>
    </main>
  )
}
