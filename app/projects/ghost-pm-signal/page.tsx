import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ghost PM Signal – Case Study | Roman Martins',
  description: 'How I built a live PM intelligence dashboard that aggregates Ghost Forum votes, GitHub signals, HN sentiment, and Kit competitor activity – synthesised by Claude into a weekly PM decision brief.',
}

export default function GhostPMSignalCaseStudy() {
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
          <p className="text-xs font-mono text-emerald-400/70 tracking-widest uppercase mb-4">Case Study</p>
          <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
            Ghost PM Signal – PM Intelligence Dashboard
          </h1>

          <div className="flex flex-wrap gap-6 text-sm text-white/40 mb-8">
            <div>
              <span className="text-white/25 text-xs uppercase tracking-wider font-mono block mb-1">Role</span>
              Designer & Builder
            </div>
            <div>
              <span className="text-white/25 text-xs uppercase tracking-wider font-mono block mb-1">Stack</span>
              Claude API · Multi-source Aggregation · Vanilla JS · Vercel
            </div>
            <div>
              <span className="text-white/25 text-xs uppercase tracking-wider font-mono block mb-1">Built</span>
              March 2026
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://ghost-pm-signal.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors border border-emerald-500/20 hover:border-emerald-500/40 rounded-lg px-4 py-2"
            >
              Live demo →
            </a>
            <a
              href="https://github.com/sinkrest/ghost-pm-signal"
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
              PMs at independent platforms face a recurring challenge: they&apos;re surrounded by signal but lack a fast way to turn it into decisions. User feedback lives on a forum. Competitor moves land in a changelog. Community sentiment is scattered across Hacker News. Strategic bets are buried in GitHub.
            </p>
            <p className="mt-4">
              A good PM synthesises all of it. But doing it manually takes time most PMs don&apos;t have – and it&apos;s easy to miss things. I wanted to build a tool that does this work automatically: aggregate every relevant signal source for a platform, run it through a PM-grade decision framework, and produce a brief that&apos;s actually useful.
            </p>
            <p className="mt-4">
              I chose Ghost as the subject because independent publishing is a genuinely interesting product space – creator monetisation, the open social web, and the tension between platform growth and editorial independence are all live problems. Building the tool around a real platform with real public data made the output meaningful rather than hypothetical.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">What I Built</h2>
            <p className="mb-6">
              A live PM intelligence dashboard that aggregates six data sources into one interface and uses Claude to synthesise them into a weekly decision brief.
            </p>

            <div className="glass-card rounded-xl p-6 mb-6">
              <p className="text-xs font-mono text-white/30 uppercase tracking-wider mb-4">Six signal sources, all live</p>
              <div className="space-y-3">
                {[
                  { source: 'Ghost Forum Ideas', detail: 'Top-voted feature requests – 880+ topics, live vote counts' },
                  { source: 'GitHub (TryGhost/Ghost)', detail: 'Feature requests by reaction count' },
                  { source: 'GitHub (TryGhost/ActivityPub)', detail: "Ghost's Fediverse strategic bet – open issues" },
                  { source: 'Hacker News', detail: 'How the technical community talks about Ghost – stories and comment sentiment' },
                  { source: 'Kit (ConvertKit) Changelog', detail: "What Ghost's closest competitor is shipping" },
                  { source: 'Ghost Changelog + Blog RSS', detail: 'What Ghost has shipped and how they position it' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-emerald-400/60 shrink-0 mt-0.5">–</span>
                    <span className="text-sm"><span className="text-white/80 font-medium">{item.source}:</span> {item.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <p>
              Six tabs in the dashboard – PM Brief, Feature Votes, GitHub, HN Pulse, Competitor Watch, and Ghost Releases – each surfacing a different layer of the signal stack.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Design Decisions</h2>
            <ul className="space-y-5">
              {[
                {
                  label: 'Data loading and synthesis are separate',
                  detail: 'The dashboard loads all six sources on page open – fast, zero AI cost. Synthesis is on-demand: clicking "Generate PM Brief" triggers Claude. This makes the raw data immediately useful and keeps the synthesis moment feel deliberate. The tool works as a data viewer even if the API were unavailable.',
                },
                {
                  label: 'ActivityPub as a strategic signal, not a bug tracker',
                  detail: "Ghost is making a long-term bet on the Fediverse – federation with Mastodon and decentralised social publishing. Surfacing the TryGhost/ActivityPub repo separately, labelled 'Ghost's Fediverse Bet', frames it correctly for a PM: this is direction-setting work, not feature work.",
                },
                {
                  label: 'Kit over Beehiiv or Substack',
                  detail: "I tried all three. Beehiiv's changelog is JavaScript-rendered – inaccessible from a serverless function. Substack has no public product changelog. Kit publishes a parseable HTML changelog. Beyond accessibility, Kit is Ghost's most direct competitor in creator monetisation – what Kit ships is what Ghost users will start expecting.",
                },
                {
                  label: 'Seven sources is the minimum viable intelligence layer',
                  detail: "Each source alone is a partial picture. Ghost Forum without competitor context gives you a wishlist. Kit's changelog without Forum data gives you competitor moves without urgency. The synthesis only becomes useful when sources can be connected – a 174-vote Forum request becomes urgent when a competitor shipped the same feature last quarter.",
                },
                {
                  label: 'Promise.allSettled, not sequential fetches',
                  detail: 'All six sources fetch in parallel. Individual failures are handled gracefully – one source going down doesn\'t break the page. This is how production data aggregation tools are built: resilient by default, not by accident.',
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-emerald-400 shrink-0 mt-0.5">–</span>
                  <span className="text-sm"><span className="text-white/80 font-medium">{item.label}:</span> {item.detail}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">The Synthesis Layer</h2>
            <p className="mb-5">
              The Claude synthesis prompt is built around a four-section PM decision framework – not a summary of what happened, but a brief on what to do about it.
            </p>
            <div className="glass-card rounded-xl p-6 space-y-4">
              {[
                { label: '🔥 Top 3 Opportunities', detail: 'What to build, with evidence (vote counts, sources), why now, and a recommended action' },
                { label: '⚔️ Competitive Gap Alert', detail: "What Kit shipped that Ghost doesn't have, mapped to Forum requests with urgency score" },
                { label: '🛰️ Strategic Signal: ActivityPub', detail: "Is Ghost's Fediverse bet accelerating or stalling? What does the community think?" },
                { label: '🚫 What to Deprioritise', detail: '1–2 items that look urgent but aren\'t – and why' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-white/30 text-sm shrink-0 font-mono">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-sm"><span className="text-white/80 font-medium">{item.label}:</span> {item.detail}</span>
                </div>
              ))}
            </div>
            <p className="mt-5">
              The system prompt explicitly prohibits hedging and requires evidence citations from the actual data. The framing – act as a senior PM preparing for a product strategy session – changes the output. Summary tells you what happened. A PM brief tells you what to do.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">What the Data Revealed</h2>
            <p>
              Running the tool for the first time surfaced an immediate finding: <span className="text-white/80">the top Ghost Forum feature request has 174 votes – third-party SSO</span>. In the same period, Kit shipped comparable authentication features.
            </p>
            <p className="mt-4">
              That pattern – high-vote Forum request mapped to a competitor ship – is exactly the kind of gap the synthesis layer is designed to surface. Ghost users are asking for features that Kit already has. The urgency isn&apos;t theoretical; it&apos;s evidenced.
            </p>
            <p className="mt-4">
              Other patterns: custom email sequences (50 votes) are Kit&apos;s core product strength. Ghost users are asking for Kit&apos;s product inside Ghost. Email provider alternatives (56 votes) point to creator frustration with Mailgun lock-in – an infrastructure pain point with real churn implications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">What It Demonstrates</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  label: 'Agentic data orchestration',
                  detail: 'Seven sources fetched in parallel, error-handled individually, synthesised by a model using a structured decision prompt – the same pattern as any PM intelligence or research agent',
                },
                {
                  label: 'Product judgment in architecture',
                  detail: 'Every design decision reflects PM thinking, not engineering defaults. The tool structure is an opinion about how product intelligence should work',
                },
                {
                  label: 'AI as a thinking tool',
                  detail: "The Claude synthesis isn't summarisation – it's a PM framework applied to live data. The difference between 'here's what users want' and 'here's what to build next' is the value a senior PM adds",
                },
              ].map((item, i) => (
                <div key={i} className="glass-card rounded-xl p-5 border border-white/[0.04]">
                  <div className="text-sm font-medium text-white mb-2">{item.label}</div>
                  <div className="text-xs text-white/40 leading-relaxed">{item.detail}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Ghost Creator Suite</h2>
            <p className="mb-5">
              Ghost PM Signal is part of a six-tool suite built to understand Ghost&apos;s product ecosystem end-to-end.
            </p>
            <div className="space-y-2">
              {[
                { name: 'Ghost PM Signal', url: 'https://ghost-pm-signal.vercel.app', desc: 'Live PM intelligence – Forum votes, GitHub, HN, competitor moves synthesised by Claude' },
                { name: 'Ghost Strategy Radar', url: 'https://ghost-strategy-radar.vercel.app', desc: 'Hexagonal radar – 6 strategic pillars scored on maturity, momentum, demand, competitive parity' },
                { name: 'Ghost Intel', url: 'https://ghost-intel-five.vercel.app', desc: 'Live platform dashboard – releases, changelog, blog posts, dev activity, AI digest' },
                { name: 'Ghost Repurpose', url: 'https://ghost-repurpose.vercel.app', desc: 'Newsletter → 5 formats in your voice via Claude' },
                { name: 'Ghost Creator Advisor', url: 'https://ghost-creator-advisor.vercel.app', desc: 'Enter metrics → business diagnosis + recommendations' },
                { name: 'Ghost Creator Journey', url: 'https://ghost-creator-journey.vercel.app', desc: 'PM lens on the creator lifecycle – where Ghost helps, where it creates friction' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <span className="text-emerald-400/50">◉</span>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors font-medium">{item.name}</a>
                  <span className="text-white/30">–</span>
                  <span className="text-white/40">{item.desc}</span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </article>
    </main>
  )
}
