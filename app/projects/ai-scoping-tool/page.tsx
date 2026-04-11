import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Implementation Scoping Tool – Case Study | Roman Martins',
  description: 'How I built a two-phase AI tool that turns a business problem into a structured implementation scope – using Claude API, vanilla JS, and a deliberate prompt architecture.',
}

export default function AiScopingToolCaseStudy() {
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
            AI Implementation Scoping Tool
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
              href="https://ai-scoping-tool.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors border border-indigo-500/20 hover:border-indigo-500/40 rounded-lg px-4 py-2"
            >
              Live demo →
            </a>
            <a
              href="https://github.com/sinkrest/ai-scoping-tool"
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
              AI implementation projects fail at a predictable point: the gap between &ldquo;we want to use AI&rdquo;
              and &ldquo;here&apos;s what to actually build.&rdquo; Every AI engagement starts the same way – a business
              problem, a blank page, and a set of discovery questions that determine whether the project gets scoped
              correctly or spends months heading in the wrong direction.
            </p>
            <p className="mt-4">
              The first deliverable of any implementation engagement is a scoping document. The same discovery structure
              applies every time: what&apos;s the current process, what systems and data exist, what does success look like.
              This is repeatable. I wanted to encode it as a tool – and demonstrate it working live.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">What I Built</h2>
            <p>
              A single-page tool that runs a two-phase AI implementation discovery session. No login. No install.
              Open the URL, describe your problem, get a scoping document in under two minutes.
            </p>
            <div className="mt-6 glass-card rounded-xl p-6 space-y-3">
              {[
                { step: '01', text: 'User describes a business problem in a textarea' },
                { step: '02', text: 'Claude generates 3 targeted discovery questions (JSON, single API call)' },
                { step: '03', text: 'User answers each question in a conversational interface' },
                { step: '04', text: 'Full context passed to Claude – generates a structured scoping document in markdown' },
                { step: '05', text: 'Output covers: AI approach, tool stack, process table, effort/impact, phased rollout, risks, metrics, next steps' },
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
              Two prompts, two different jobs. Keeping them separate was a deliberate choice.
            </p>
            <ul className="mt-5 space-y-4">
              {[
                {
                  label: 'Question generation prompt',
                  detail: 'Instructs Claude to return a JSON array of exactly 3 strings – nothing else. The app validates the response shape before displaying anything. If the array doesn\'t have exactly 3 items, it errors and prompts a retry rather than showing a broken state.',
                },
                {
                  label: 'Scoping document prompt',
                  detail: 'Specifies the exact markdown structure – section headers, table formats, phase names. Not to constrain Claude\'s reasoning, but to ensure output is immediately usable. A scoping document where sections move around is harder to act on. The format is opinionated because the use case is.',
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-indigo-400 shrink-0 mt-0.5">–</span>
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
                  label: 'Two prompts, not one',
                  detail: 'Combining question generation and document generation into a single prompt would trade reliability for brevity. Two clean system prompts, each with a single output job, produce more consistent results than one complex multi-purpose prompt.',
                },
                {
                  label: 'Pre-generate all 3 questions at once',
                  detail: 'An adaptive approach – call Claude once per question, adjusting based on prior answers – would be more dynamic but means 3× the API calls and latency. Pre-generating from the initial problem description keeps question balance predictable (process / systems / success criteria) and loads in one round trip.',
                },
                {
                  label: 'Vanilla JS, no framework',
                  detail: 'This tool has one job. Frameworks add build steps and deployment complexity for no real gain here. Vanilla JS is auditable (any developer reads app.js in 5 minutes), instantly deployable via Vercel, and forces clean state management – everything lives in one object.',
                },
                {
                  label: 'Server-side API key',
                  detail: 'The Claude API key lives in a Vercel environment variable, never in the browser. A lightweight serverless function proxies requests. This means anyone can use the tool without needing their own key – and the architecture reflects how production AI tools are actually built.',
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-indigo-400 shrink-0 mt-0.5">–</span>
                  <span className="text-sm"><span className="text-white/80 font-medium">{item.label}:</span> {item.detail}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">What It Demonstrates</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: 'LLM API work', detail: 'Prompt design, structured output handling, two-phase state management, error handling' },
                { label: 'AI product thinking', detail: 'The tool structure encodes how implementation scoping actually works – not just a chat wrapper' },
                { label: 'Delivery judgment', detail: 'Architecture choices reflect opinionated tradeoffs: vanilla JS, pre-generated questions, server-side key' },
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
