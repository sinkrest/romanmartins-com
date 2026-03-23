import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Children\'s Book Platform — Case Study | Roman Martins',
  description: 'How I built an AI-powered personalised children\'s book platform that sold 1,000+ books in Germany — using ChatGPT, DALL-E, and Midjourney with D2C print-on-demand fulfilment.',
}

export default function AiChildrensBookCaseStudy() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--bg)', color: 'var(--text-primary)' }}>

      {/* Back nav */}
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

        {/* Header */}
        <header className="mb-16">
          <p className="text-xs font-mono text-indigo-400/70 tracking-widest uppercase mb-4">Case Study</p>
          <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
            AI Children&apos;s Book Platform
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap gap-6 text-sm text-white/40 mb-8">
            <div>
              <span className="text-white/25 text-xs uppercase tracking-wider font-mono block mb-1">Role</span>
              AI Product Owner
            </div>
            <div>
              <span className="text-white/25 text-xs uppercase tracking-wider font-mono block mb-1">Outcome</span>
              1,000+ books sold in Germany
            </div>
            <div>
              <span className="text-white/25 text-xs uppercase tracking-wider font-mono block mb-1">Stack</span>
              ChatGPT · DALL-E · Midjourney · Print-on-demand
            </div>
          </div>

          <a
            href="https://heyzine.com/flip-book/32cd59b407.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors border border-indigo-500/20 hover:border-indigo-500/40 rounded-lg px-4 py-2"
          >
            View sample book →
          </a>
        </header>

        {/* Body */}
        <div className="space-y-12 text-white/60 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">The Problem</h2>
            <p>
              Every child deserves to be the hero of their own story — not just a name swapped into a generic template,
              but a book built around <em className="text-white/80">them</em>: their look, their personality, the challenges they&apos;re navigating.
              Yet truly personalised children&apos;s books didn&apos;t exist at scale. Custom illustration was expensive and slow.
              Generic personalisation was shallow and kids saw through it.
            </p>
            <p className="mt-4">
              The core insight was pedagogical: children process difficult situations more effectively when they can observe
              themselves navigating the same challenge from a safe, story-based distance. The book becomes a tool — not just entertainment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">What We Built</h2>
            <p>
              A direct-to-consumer platform where parents submitted a personalised request through a web app — details about
              their child, their appearance, personality traits, and situations they were working through. The platform then
              generated a complete illustrated book featuring the child as the protagonist, facing and overcoming a relevant challenge.
            </p>
            <div className="mt-6 glass-card rounded-xl p-6 space-y-3">
              {[
                'Parent completes a detailed customisation request via web app',
                'AI generates story text and full illustration set',
                'Digital proof sent to parent for approval',
                'Upon approval: printed and shipped directly to the customer',
                'Customer receives a professionally printed personalised book',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-xs font-mono text-indigo-400/60 mt-0.5 shrink-0">0{i + 1}</span>
                  <span className="text-sm text-white/60">{step}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">My Role: AI Product Owner</h2>
            <p>
              I owned the product end to end — not as an engineer, but as the person responsible for making the AI system
              produce a consistent, high-quality product at scale.
            </p>
            <ul className="mt-5 space-y-3">
              {[
                { label: 'Prompt architecture', detail: 'Designed the story generation system (ChatGPT) — structured to accept variable child inputs and produce narratively coherent, age-appropriate stories' },
                { label: 'Visual consistency system', detail: 'Engineered the character generation pipeline using DALL-E, establishing a method for producing a consistent child character across multiple scenes' },
                { label: 'Scenery and composition', detail: 'Used Midjourney for high-quality backgrounds, then composited character into scene' },
                { label: 'Quality curation', detail: 'Reviewed and selected outputs, building judgement on what made a book feel premium vs. generic' },
                { label: 'Product flow design', detail: 'Defined the approval workflow and digital-to-print handoff process' },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-indigo-400 shrink-0 mt-0.5">—</span>
                  <span className="text-sm"><span className="text-white/80 font-medium">{item.label}:</span> {item.detail}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">The Hard Problem: Character Consistency</h2>
            <p>
              Generating a story is straightforward. Generating beautiful scenery is straightforward. The bottleneck
              was making the <em className="text-white/80">same child character</em> appear consistently across 15–20 illustrations in a single book.
            </p>
            <p className="mt-4">
              Early AI image models weren&apos;t built for this. Each generation produced a slightly different version of the
              character — different face shape, hair tone, proportions. At volume, this broke the sense of a coherent narrative.
            </p>
            <p className="mt-4">
              <span className="text-white/80 font-medium">How we solved it:</span> Developed a character archetype strategy —
              identifying refined character descriptions that could be consistently reproduced across generations. Children with
              similar characteristics were mapped to a calibrated archetype prompt, maintaining visual consistency without
              generating entirely unique characters for every book.
            </p>
            <p className="mt-4">
              The trade-off was depth of customisation vs. production consistency. We leaned toward consistency — a coherent
              book beats a maximally unique but visually inconsistent one.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Results</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { metric: '1,000+', label: 'individual books sold in Germany' },
                { metric: 'D2C', label: 'fully automated fulfilment pipeline' },
              ].map((item, i) => (
                <div key={i} className="glass-card rounded-xl p-5 border border-white/[0.04]">
                  <div className="text-3xl font-bold text-white mb-1">{item.metric}</div>
                  <div className="text-sm text-white/40">{item.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">What I&apos;d Build Differently Today</h2>
            <p>
              The biggest friction was the two-step pipeline: generate character separately, generate scenery separately,
              composite manually. This was the main production bottleneck.
            </p>
            <p className="mt-4">
              Today I&apos;d design the pipeline to generate character <em className="text-white/80">within</em> the scene in a single pass —
              using fine-tuned character models to embed the child directly into the environment. This would cut manual layout
              time significantly and improve compositional quality.
            </p>
            <p className="mt-4">
              The story generation I&apos;d also rebuild as a structured multi-agent pipeline — one agent for narrative structure,
              one for age-appropriate language, one for scene-by-scene illustration briefs — rather than a single monolithic prompt.
            </p>
          </section>

        </div>
      </article>
    </main>
  )
}
