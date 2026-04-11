import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Stakeholder Lens – Case Study | Roman Martins',
  description: 'How I built an AI tool that translates a product roadmap into four audience-specific views – engineering, sales, exec, and customers – using parallel Claude API calls and distinct prompt architectures.',
}

export default function StakeholderLensCaseStudy() {
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
            Stakeholder Lens – AI Roadmap Translator
          </h1>

          <div className="flex flex-wrap gap-6 text-sm text-white/40 mb-8">
            <div>
              <span className="text-white/25 text-xs uppercase tracking-wider font-mono block mb-1">Role</span>
              Designer & Builder
            </div>
            <div>
              <span className="text-white/25 text-xs uppercase tracking-wider font-mono block mb-1">Stack</span>
              Claude API · Parallel Prompts · Vanilla JS · Vercel
            </div>
            <div>
              <span className="text-white/25 text-xs uppercase tracking-wider font-mono block mb-1">Built</span>
              March 2026
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://stakeholder-lens.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors border border-indigo-500/20 hover:border-indigo-500/40 rounded-lg px-4 py-2"
            >
              Live demo →
            </a>
            <a
              href="https://github.com/sinkrest/stakeholder-lens"
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
              Every product manager writes the roadmap once and then rewrites it four times. The engineering version needs
              scope, sequencing, and open questions. Sales needs outcomes and objection-handling angles. Exec wants strategic
              alignment and risk flags. Customers want plain-language benefits and rough timing.
            </p>
            <p className="mt-4">
              The underlying roadmap is the same. The translation work is manual, repetitive, and often inconsistent –
              each version drifts from the source in different ways. This is exactly the kind of structured, rule-based
              transformation that AI handles well.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">What I Built</h2>
            <p>
              A single-page tool that takes one roadmap input and generates up to four audience-specific views in parallel.
              No login. No install. Paste your roadmap, add product context, select your audiences, and get tailored
              communication in seconds.
            </p>
            <div className="mt-6 glass-card rounded-xl p-6 space-y-3">
              {[
                { step: '01', text: 'User pastes a roadmap in any format – bullets, tables, free text' },
                { step: '02', text: 'User adds product context: name, target customer, stage, business priorities' },
                { step: '03', text: 'User selects which audiences to generate for (Engineering, Sales, Exec, Customers)' },
                { step: '04', text: 'Tool fires one Claude API call per audience in parallel using Promise.allSettled' },
                { step: '05', text: 'Each view streams into its own card – colour-coded, copyable, immediately usable' },
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
              Each audience gets its own prompt, not a single prompt generating all four. This was a deliberate choice:
              one prompt trying to serve four audiences produces blended, hedged output. Four separate prompts, each with
              a clear audience mandate, produce output that actually sounds right for that reader.
            </p>
            <ul className="mt-5 space-y-4">
              {[
                {
                  label: 'Shared system prompt',
                  detail: 'Sets the overall context: product name, target customer, stage, and business priorities. Also establishes the core rule – never invent features or outcomes not present in the roadmap. Every view must be grounded in what\'s actually there.',
                },
                {
                  label: 'Audience-specific prompt injection',
                  detail: 'Each audience has a dedicated prompt block that defines what that reader cares about, what language to use, and what to include or avoid. Engineering gets scope and sequencing. Sales gets outcomes and talking points. Exec gets strategy and risk. Customers get plain-language benefits.',
                },
                {
                  label: 'Parallel execution',
                  detail: 'All selected audience calls fire simultaneously via Promise.allSettled. Partial failures are handled gracefully – if one view errors, the others still render. This keeps latency low and makes the tool feel responsive even with 4 simultaneous API calls.',
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
                  label: 'One prompt per audience, not one prompt for all',
                  detail: 'A single prompt generating all four views would be shorter to write but would produce generic output. Dedicated prompts allow each audience view to be genuinely tuned – the engineering view reads like engineering communication, not like a slightly modified exec brief.',
                },
                {
                  label: 'Parallel calls, not sequential',
                  detail: 'Sequential API calls would make the tool feel slow – each view waiting for the last. Parallel calls via Promise.allSettled mean all views generate in the time it takes the slowest one. The visual result (all cards loading simultaneously) also feels more satisfying to use.',
                },
                {
                  label: 'Context-first prompt design',
                  detail: 'Product context (name, customer, stage, priorities) is injected into every system prompt, not just the user message. This ensures Claude grounds the translation in actual business context rather than producing generic roadmap reformatting. The output adapts to the product, not just the audience.',
                },
                {
                  label: 'Server-side API key',
                  detail: 'The Claude API key lives in a Vercel environment variable, proxied through a serverless function. Anyone can use the tool without needing their own key. This is how production AI tools are actually architected – the key stays server-side.',
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
                { label: 'PM communication depth', detail: 'The tool encodes how roadmap communication actually differs across audiences – not a generic reformatter, but a reflection of real stakeholder dynamics' },
                { label: 'LLM API work', detail: 'Parallel prompt execution, context injection, structured system/user prompt separation, error handling at the individual call level' },
                { label: 'Delivery judgment', detail: 'Architecture tradeoffs that reflect production thinking: parallel vs. sequential, prompt separation vs. consolidation, server-side key management' },
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
