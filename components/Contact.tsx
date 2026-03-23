'use client'

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <div>
            <p className="text-xs font-mono text-indigo-400/70 tracking-widest uppercase mb-3">Contact</p>
            <h2 className="text-4xl font-bold text-white mb-6">
              Let&apos;s build something<br />
              <span className="gradient-text">worth building</span>
            </h2>
            <p className="text-white/45 text-lg leading-relaxed mb-10">
              Interested in product, collaboration, or just want to connect? I&apos;m always happy
              to talk to people who care about shipping great things.
            </p>

            {/* Links */}
            <div className="space-y-4">
              <a
                href="https://www.linkedin.com/in/romanmartins"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] hover:border-indigo-500/25 hover:bg-indigo-500/5 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0077B5]/20 border border-[#0077B5]/30 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">LinkedIn</div>
                  <div className="text-xs text-white/35">linkedin.com/in/romanmartins</div>
                </div>
                <svg className="w-4 h-4 text-white/20 group-hover:text-white/50 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="https://github.com/sinkrest"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] hover:border-indigo-500/25 hover:bg-indigo-500/5 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">GitHub</div>
                  <div className="text-xs text-white/35">github.com/sinkrest</div>
                </div>
                <svg className="w-4 h-4 text-white/20 group-hover:text-white/50 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Open to card */}
          <div>
            <div className="glass-card rounded-2xl p-8 gradient-border">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="text-sm text-emerald-400 font-medium">Currently active</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-6">What I&apos;m focused on</h3>

              <div className="space-y-4">
                {[
                  { label: 'Domain', value: 'Product Development' },
                  { label: 'Interests', value: 'Product strategy, automation, AI' },
                  { label: 'Building', value: 'Tools & workflow systems' },
                  { label: 'Background', value: 'Engineering + Product' },
                  { label: 'Based', value: 'Denmark · Works globally' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-3 border-b border-white/[0.05] last:border-0">
                    <span className="text-sm text-white/40">{item.label}</span>
                    <span className="text-sm text-white/80 font-medium">{item.value}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://www.linkedin.com/in/romanmartins"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/20"
              >
                View Full Profile
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-white/20">
            © 2026 Roman Martins
          </span>
          <span className="text-xs text-white/20 font-mono">
            Built with Next.js · Deployed on Vercel · Protected by Cloudflare
          </span>
        </div>

      </div>
    </section>
  )
}
