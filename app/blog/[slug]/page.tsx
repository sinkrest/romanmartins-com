import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPost, getAllPosts } from '@/lib/posts'

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} – Roman Martins`,
    description: post.excerpt,
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const paragraphs = post.content.split('\n\n')

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080810]/90 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">R</span>
            </div>
            <span className="text-sm text-white/50 group-hover:text-white/70 transition-colors">romanmartins.com</span>
          </Link>
          <Link href="/blog" className="text-sm text-white/40 hover:text-white/70 transition-colors">
            ← Blog
          </Link>
        </div>
      </nav>

      {/* Hero Banner – full width dark, O'Nolan style */}
      <div className="pt-16">
        <div className="max-w-5xl mx-auto px-6 pt-8">
          <div
            className="relative w-full rounded-2xl overflow-hidden"
            style={{ height: '300px' }}
          >
            {/* Dark textured background */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(135deg, #0f0a2e 0%, #1a1145 25%, #120f2a 50%, #0d1a2e 75%, #0a0a18 100%)
                `
              }}
            />
            {/* Accent glow – indigo */}
            <div
              className="absolute"
              style={{
                width: '400px',
                height: '400px',
                top: '-100px',
                right: '10%',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />
            {/* Accent glow – purple */}
            <div
              className="absolute"
              style={{
                width: '300px',
                height: '300px',
                bottom: '-50px',
                left: '20%',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
                filter: 'blur(50px)',
              }}
            />
            {/* Grid overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                `,
                backgroundSize: '48px 48px',
              }}
            />
          </div>
        </div>
      </div>

      {/* Author – circular photo overlapping banner bottom-left */}
      <div className="relative -mt-14 px-6 mb-6">
        <div className="max-w-3xl mx-auto flex items-end gap-4">
          <div className="w-[88px] h-[88px] rounded-full overflow-hidden border-[4px] border-[var(--bg)] flex-shrink-0 shadow-xl">
            <Image
              src="/roman-blog.png"
              alt="Roman Martins"
              width={88}
              height={88}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Author name + meta */}
      <div className="px-6 mb-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-1">Roman Martins</h2>
          <div className="flex items-center gap-2">
            <time className="text-xs font-mono text-white/30">
              {new Date(post.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </time>
            <span className="text-xs text-white/15">·</span>
            <span className="text-xs text-white/30">{post.readingTime}</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article className="px-6 pb-32">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-14">
            {post.title}
          </h1>

          {/* Content */}
          <div className="space-y-6">
            {paragraphs.map((p, i) => {
              const trimmed = p.trim()
              if (trimmed === '---') {
                return (
                  <div key={i} className="py-8 flex justify-center">
                    <div className="w-8 h-px bg-white/10" />
                  </div>
                )
              }
              return (
                <p
                  key={i}
                  className="text-[15px] md:text-base text-white/55 leading-[1.8] max-w-2xl"
                >
                  {trimmed}
                </p>
              )
            })}
          </div>

          {/* Footer */}
          <div className="mt-20 pt-10 border-t border-white/[0.06] flex items-center justify-between">
            <Link
              href="/blog"
              className="text-sm text-white/30 hover:text-white/60 transition-colors"
            >
              ← Back to blog
            </Link>
            <a
              href="https://www.linkedin.com/in/romanmartins"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/20 hover:text-indigo-400/60 transition-colors"
            >
              Follow on LinkedIn
            </a>
          </div>
        </div>
      </article>
    </main>
  )
}
