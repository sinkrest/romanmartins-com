'use client'

const heroProjects = [
  {
    id: 1,
    status: 'Shipped',
    statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    title: 'Personalised Children\'s Book Platform',
    description:
      'End-to-end AI product. Parents input a child\'s name and theme — the platform generates a personalised story with AI-illustrated pages and routes it through print-on-demand fulfilment for physical delivery.',
    role: 'Founder & Product Lead',
    outcome: '1,000+ books sold in Germany. Full lifecycle: idea → AI pipeline → fulfilment → revenue.',
    tags: ['LLM Integration', 'Product Design', 'Automation', 'Print-on-demand'],
    accentFrom: 'from-emerald-500',
    accentTo: 'to-teal-600',
    icon: '📚',
    link: null,
    sampleLink: 'https://heyzine.com/flip-book/32cd59b407.html',
    sampleLabel: 'Sample Book →',
    caseStudyLink: '/projects/ai-childrens-book',
  },
  {
    id: 2,
    status: 'Live',
    statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    title: 'Ghost PM Signal — PM Intelligence Dashboard',
    description:
      'Live PM intelligence for Ghost product decisions. Aggregates Ghost Forum feature votes (880+ topics), GitHub issues, ActivityPub strategic signals, HN community sentiment, and Kit competitor changelog — synthesised by Claude into a four-part PM decision brief.',
    role: 'Designer & Builder',
    outcome: 'An experiment in automated PM intelligence — turns 7 live data sources into a structured weekly decision brief using Claude.',
    tags: ['Claude API', 'Multi-source Aggregation', 'PM Tooling', 'Vercel'],
    accentFrom: 'from-emerald-500',
    accentTo: 'to-green-600',
    icon: '◉',
    link: 'https://github.com/sinkrest/ghost-pm-signal',
    sampleLink: 'https://ghost-pm-signal.vercel.app',
    sampleLabel: 'Live Demo →',
    caseStudyLink: '/projects/ghost-pm-signal',
  },
  {
    id: 3,
    status: 'Live',
    statusColor: 'text-sky-400 bg-sky-400/10 border-sky-400/20',
    title: 'Stakeholder Lens — AI Roadmap Translator',
    description:
      'Paste your roadmap once. Get four audience-specific views — engineering, sales, exec, and customers — in seconds. Each view uses a distinct prompt architecture tuned to what that audience actually needs to hear.',
    role: 'Designer & Builder',
    outcome: 'Eliminates hours of manual roadmap reformatting. Grounded in product context, not generic AI output.',
    tags: ['Claude API', 'Prompt Architecture', 'PM Tooling', 'Vercel'],
    accentFrom: 'from-indigo-500',
    accentTo: 'to-cyan-500',
    icon: '🔭',
    link: 'https://github.com/sinkrest/stakeholder-lens',
    sampleLink: 'https://stakeholder-lens.vercel.app',
    sampleLabel: 'Live Demo →',
    caseStudyLink: '/projects/stakeholder-lens',
  },
  {
    id: 4,
    status: 'Live',
    statusColor: 'text-sky-400 bg-sky-400/10 border-sky-400/20',
    title: 'Implementation Scoping Tool',
    description:
      'Describe a business problem. Answer 3 AI-generated discovery questions. Get a structured implementation scope: recommended AI approach, process automation table, phased rollout, risks, success metrics.',
    role: 'Designer & Builder',
    outcome: 'Full AI implementation scope generated in under 2 minutes — no login required.',
    tags: ['Claude API', 'Structured Output', 'Vanilla JS', 'Vercel'],
    accentFrom: 'from-indigo-500',
    accentTo: 'to-violet-600',
    icon: '⬡',
    link: 'https://github.com/sinkrest/ai-scoping-tool',
    sampleLink: 'https://ai-scoping-tool.vercel.app',
    sampleLabel: 'Live Demo →',
    caseStudyLink: '/projects/ai-scoping-tool',
  },
]

const alsoBuilt = [
  {
    title: 'Opportunity Scanner',
    description: 'Ranked map of opportunities — Quick Wins vs Strategic Bets, with effort, impact, and tool recommendations.',
    link: 'https://ai-opportunity-scanner.vercel.app',
    github: 'https://github.com/sinkrest/ai-opportunity-scanner',
  },
  {
    title: 'Product Discovery Simulator',
    description: 'Generate user personas, run simulated interviews, receive a synthesised discovery brief — multi-agent, 4-phase flow.',
    link: 'https://ai-discovery-simulator.vercel.app',
    github: 'https://github.com/sinkrest/ai-discovery-simulator',
  },
]

export default function Portfolio() {
  return (
    <section id="work" className="py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="mb-20">
          <p className="text-xs font-mono text-indigo-400/70 tracking-widest uppercase mb-3">Work</p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Products I&apos;ve built
          </h2>
          <p className="text-white/45 text-lg max-w-xl">
            Shipped products, not slide decks. Each project started with a real problem and ended with something working.
          </p>
        </div>

        {/* Hero projects */}
        <div className="space-y-6">
          {heroProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden hover:border-indigo-500/15 transition-all duration-300 group"
            >
              <div className="grid lg:grid-cols-5">

                {/* Left: Accent + icon */}
                <div className={`lg:col-span-1 bg-gradient-to-br ${project.accentFrom} ${project.accentTo} p-8 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity`}>
                  <span className="text-5xl">{project.icon}</span>
                </div>

                {/* Right: Content */}
                <div className="lg:col-span-4 p-8">
                  <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                    <div>
                      <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${project.statusColor} mb-3`}>
                        <span className={`w-1 h-1 rounded-full ${project.status === 'Shipped' ? 'bg-emerald-400' : 'bg-sky-400'}`} />
                        {project.status}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex gap-3">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/80 transition-colors border border-white/[0.08] hover:border-white/20 rounded-lg px-3 py-1.5"
                        >
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </a>
                      )}
                      {project.sampleLink && (
                        <a
                          href={project.sampleLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/80 transition-colors border border-white/[0.08] hover:border-white/20 rounded-lg px-3 py-1.5"
                        >
                          {project.sampleLabel}
                        </a>
                      )}
                      {project.caseStudyLink && (
                        <a
                          href={project.caseStudyLink}
                          className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors border border-indigo-500/20 hover:border-indigo-500/40 rounded-lg px-3 py-1.5"
                        >
                          Case Study →
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed mb-5">{project.description}</p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-5">
                    <div className="bg-white/[0.02] rounded-lg p-3 border border-white/[0.04]">
                      <div className="text-xs text-white/30 mb-1">My Role</div>
                      <div className="text-sm text-white/70">{project.role}</div>
                    </div>
                    <div className="bg-white/[0.02] rounded-lg p-3 border border-white/[0.04]">
                      <div className="text-xs text-white/30 mb-1">Outcome</div>
                      <div className="text-sm text-white/70">{project.outcome}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Roman's Lab — prominent CTA */}
        <div className="mt-16">
          <a
            href="https://sinkrest.github.io/romans-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="block glass-card rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">&#x2697;&#xFE0F;</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors">
                    Roman&apos;s Lab
                  </h3>
                  <span className="text-xs font-mono text-indigo-400/70 bg-indigo-400/10 border border-indigo-400/20 rounded-full px-2.5 py-0.5">
                    13+ tools
                  </span>
                </div>
                <p className="text-white/40 text-sm max-w-lg">
                  The full collection — PM toolkit, Ghost Creator Suite, and everything else I&apos;ve shipped.
                </p>
              </div>
              <span className="text-white/20 group-hover:text-indigo-400 transition-colors text-2xl shrink-0 ml-6">
                &rarr;
              </span>
            </div>
          </a>
        </div>

      </div>
    </section>
  )
}
