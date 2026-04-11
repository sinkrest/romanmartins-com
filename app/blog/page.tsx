import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/posts'

export const metadata = {
  title: 'Blog – Roman Martins',
  description: 'Thinking out loud about building things in a time when the tools are changing faster than anyone can document.',
}

export default function BlogPage() {
  const posts = getAllPosts()

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
          <Link href="/" className="text-sm text-white/40 hover:text-white/70 transition-colors">
            ← Back
          </Link>
        </div>
      </nav>

      {/* Header with author */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/[0.08] flex-shrink-0">
              <Image
                src="/roman-blog.png"
                alt="Roman Martins"
                width={56}
                height={56}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-white">Roman Martins</h1>
              <p className="text-sm text-white/35">Builder, maker, thinker</p>
            </div>
          </div>
          <p className="text-white/40 text-base leading-relaxed max-w-lg">
            Thinking out loud about building things when the tools change faster than anyone can document.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto">
          <div className="border-t border-white/[0.06]">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block py-10 border-b border-white/[0.06] group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <time className="text-xs font-mono text-white/30">
                    {new Date(post.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </time>
                  <span className="text-xs text-white/20">·</span>
                  <span className="text-xs text-white/30">{post.readingTime}</span>
                </div>
                <h2 className="text-xl font-medium text-white/80 group-hover:text-white transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-white/40 leading-relaxed max-w-lg">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
