'use client'

const timeline = [
  {
    period: 'Feb 2025 – Present',
    role: 'Product Development Manager',
    company: 'JENSEN Group',
    description:
      'Leading a 10-person cross-functional product development department. Responsible for new product development and lifecycle upgrades of complex industrial equipment across Europe and China.',
    tags: ['Product Strategy', 'Team Leadership', 'Roadmapping'],
  },
  {
    period: 'Jun 2021 – Feb 2025',
    role: 'AI Product Lead & Founder',
    company: 'Dasbinjaich.de / Unlimited Art Agency',
    description:
      'Led product strategy for a personalised AI-powered publishing platform. Built end-to-end AI workflows, prompt architectures, and QA systems – scaling to 1,000+ books produced. Also ran an AI automation agency building custom GPT-based systems for business clients.',
    tags: ['AI Products', 'Entrepreneurship', 'LLM Integration'],
  },
  {
    period: 'Dec 2016 – Mar 2021',
    role: 'Senior Engineer & Team Lead',
    company: 'DIS / CREADIS',
    description:
      'Led cross-functional engineering teams delivering complex industrial and manufacturing solutions for global clients. Drove advanced manufacturing initiatives including additive manufacturing, aligning engineering execution with business strategy.',
    tags: ['Engineering Leadership', 'Advanced Manufacturing', 'Cross-functional Teams'],
  },
  {
    period: '2009 – 2015',
    role: 'Engineer → Lead Professional',
    company: 'LEGO Group',
    description:
      'Grew from injection molding technician to Lead Professional in LEGO\'s Concept Factory. Led manufacturing innovation initiatives, established new technological test environments, and coordinated global engineering teams.',
    tags: ['Engineering', 'Manufacturing', 'Innovation'],
  },
]

const tools = [
  { name: 'Claude', category: 'AI' },
  { name: 'OpenAI API', category: 'AI' },
  { name: 'Claude Code', category: 'Dev' },
  { name: 'AI Agents', category: 'AI' },
  { name: 'Prompt Engineering', category: 'AI' },
  { name: 'Python', category: 'Dev' },
  { name: 'Figma', category: 'Product' },
  { name: 'Linear', category: 'Product' },
  { name: 'Notion', category: 'Product' },
  { name: 'n8n', category: 'Automation' },
  { name: 'Vercel', category: 'Dev' },
  { name: 'GitHub', category: 'Dev' },
]

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="mb-20">
          <p className="text-xs font-mono text-indigo-400/70 tracking-widest uppercase mb-3">About</p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Manufacturing roots. AI hands.<br />
            <span className="gradient-text">The bridge most AI PMs can&apos;t build.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            Most AI PMs come from software. I came from factories. 10 years engineering complex
            industrial products, then 4 years building AI in production. That intersection is rare –
            and it&apos;s where the hardest AI problems actually live.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">

          {/* Timeline – 3 cols */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-10">Career Arc</h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/40 via-white/[0.06] to-transparent" />

              <div className="space-y-10">
                {timeline.map((item, i) => (
                  <div key={i} className="pl-8 relative">
                    {/* Dot */}
                    <div className={`absolute left-[-4px] top-1.5 w-2 h-2 rounded-full border ${i === 0 ? 'bg-indigo-500 border-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.6)]' : 'bg-[#080810] border-white/20'}`} />

                    <div className="glass-card rounded-xl p-5 hover:border-indigo-500/20 transition-all duration-300 group">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <div className="text-white font-semibold text-sm group-hover:text-indigo-200 transition-colors">
                            {item.role}
                          </div>
                          <div className="text-indigo-400/70 text-xs mt-0.5">{item.company}</div>
                        </div>
                        <span className="text-xs text-white/30 font-mono whitespace-nowrap">{item.period}</span>
                      </div>
                      <p className="text-white/45 text-sm leading-relaxed mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools + differentiators – 2 cols */}
          <div className="lg:col-span-2 space-y-10">

            {/* What makes me different */}
            <div>
              <h3 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-6">How I Work</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: '🏭',
                    title: 'Industrial credibility',
                    desc: "I've shipped products that run on factory floors. I know what AI has to survive in the real world – not just demos.",
                  },
                  {
                    icon: '🤖',
                    title: 'Hands-on with AI',
                    desc: 'Built agents, automated workflows, and shipped products using LLMs in production.',
                  },
                  {
                    icon: '🎯',
                    title: 'Product instinct',
                    desc: 'From discovery to delivery. I know how to find the right problem before solving it.',
                  },
                  {
                    icon: '📐',
                    title: 'Small team mentality',
                    desc: "Most effective when everyone ships. No committees, no handoffs – just people who own things end to end.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 p-4 rounded-xl border border-white/[0.05] hover:border-white/[0.1] bg-white/[0.02] transition-all duration-200">
                    <span className="text-lg mt-0.5">{item.icon}</span>
                    <div>
                      <div className="text-sm font-medium text-white/80 mb-0.5">{item.title}</div>
                      <div className="text-xs text-white/40 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-6">Tools & Stack</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool.name} className="tag">{tool.name}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
