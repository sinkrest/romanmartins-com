import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Product Discovery Simulator — Case Study | Roman Martins',
  description: 'How I built a 4-phase AI tool that simulates product discovery interviews — generating user personas, conducting interviews, and synthesising an opportunity brief using the Claude API.',
}

export default function AiDiscoverySimulatorCaseStudy() {
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
            AI Product Discovery Simulator
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
              href="https://ai-discovery-simulator.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors border border-indigo-500/20 hover:border-indigo-500/40 rounded-lg px-4 py-2"
            >
              Live demo →
            </a>
            <a
              href="https://github.com/sinkrest/ai-discovery-simulator"
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
              User discovery is the most consistently skipped step in product development. It&apos;s expensive, time-consuming,
              and requires recruiting the right participants. Most product teams either skip it entirely or do it once
              at the start and never again. The result: products built on assumptions that were never tested.
            </p>
            <p className="mt-4">
              The insight: LLMs can simulate the early stages of discovery well enough to be genuinely useful.
              Not as a replacement for real users — but as a way to stress-test assumptions before investing in
              real research. Think of it as a structured thought experiment, conducted by AI, that surfaces the
              questions worth actually going out and answering.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">What I Built</h2>
            <p>
              A 4-phase discovery simulation that takes a product idea from assumption to structured opportunity brief —
              entirely through AI-simulated interviews.
            </p>
            <div className="mt-6 glass-card rounded-xl p-6 space-y-3">
              {[
                { step: '01', text: 'User describes a product idea or problem they want to explore' },
                { step: '02', text: 'Claude generates 3 distinct user personas as structured JSON — each with role, pain points, goals, and context' },
                { step: '03', text: 'User interviews each persona: asks a question, the persona responds in character with nuanced, realistic answers' },
                { step: '04', text: 'Follow-up questions supported — each persona maintains its perspective across the conversation thread' },
                { step: '05', text: 'All interview data synthesised into an opportunity brief: validated insights, unresolved tensions, PM recommendation, confidence score' },
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
              Four distinct Claude calls, each with a single, clear job.
            </p>
            <ul className="mt-5 space-y-4">
              {[
                {
                  label: 'Persona generation',
                  detail: 'Returns a JSON array of 3 persona objects — each with name, role, age, context, goals, and pain points. Structured output means the UI can render rich persona cards immediately, not parse free-form text.',
                },
                {
                  label: 'Interview response',
                  detail: 'System prompt instructs Claude to fully embody the persona: speak in first person, draw on their specific context, be realistic about concerns and enthusiasm. The persona\'s JSON object is injected into the system prompt so Claude has the full character in context.',
                },
                {
                  label: 'Follow-up handling',
                  detail: 'Maintains the persona\'s voice across follow-up questions by carrying the prior exchange. Each follow-up call includes the previous question and answer, so personas can build on or contradict themselves naturally.',
                },
                {
                  label: 'Opportunity brief synthesis',
                  detail: 'All interview transcripts passed to Claude as a single context block. System prompt instructs it to act as a senior PM synthesising research — identifying validated insights, tensions between personas, open questions, and a clear recommendation with a confidence score.',
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
                  label: 'Separate call per interview response',
                  detail: 'An alternative: generate all interview responses upfront. More efficient — but it removes the user from the loop. Making the user formulate their own questions is part of the tool\'s value: it forces PM thinking, not just AI consumption.',
                },
                {
                  label: 'Free-form questions, not preset ones',
                  detail: 'The tool doesn\'t suggest questions to ask. This was a deliberate choice. The quality of questions you ask in discovery reveals your assumptions. A tool that asks for you would hide the most valuable part of the exercise.',
                },
                {
                  label: '3 personas, not more',
                  detail: 'Three is enough to surface meaningful tension without creating artificial diversity. More personas would dilute each one\'s perspective. The constraint forces Claude to make each persona genuinely distinct rather than slight variations on the same user.',
                },
                {
                  label: 'Confidence score in the brief',
                  detail: 'The opportunity brief includes an explicit confidence score (High / Medium / Low) from the AI. This frames the output correctly: it\'s a hypothesis sharpening tool, not a research substitute. A PM who mistakes simulated confidence for real validation is using it wrong — the score makes that explicit.',
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
            <h2 className="text-xl font-semibold text-white mb-4">What It Demonstrates</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: 'Multi-agent design', detail: 'Four coordinated Claude calls, each with a distinct role — persona designer, interviewee, follow-up responder, PM synthesiser' },
                { label: 'PM methodology encoded', detail: 'The tool structure reflects how discovery actually works: generate hypotheses → test with users → synthesise → decide' },
                { label: 'State management', detail: 'Persona context, interview history, and follow-up threads all managed in a single state object across 4+ API calls' },
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
