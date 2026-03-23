import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Roman Martins — Product Manager & Builder',
  description: 'Product Manager and engineer. 10+ years building complex systems at LEGO, founding startups, and leading product teams. Ships working software, not slide decks.',
  keywords: ['Product Manager', 'PM', 'Engineer', 'Builder', 'AI', 'remote', 'Roman Martins'],
  authors: [{ name: 'Roman Martins' }],
  openGraph: {
    title: 'Roman Martins — Product Manager & Builder',
    description: 'Product Manager. Engineer. Builder.',
    url: 'https://romanmartins.com',
    siteName: 'Roman Martins',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roman Martins — Product Manager & Builder',
    description: 'Product Manager. Engineer. Builder.',
  },
  metadataBase: new URL('https://romanmartins.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
        <style>{`.rm-dot{position:fixed;bottom:18px;right:22px;font-size:28px;line-height:1;color:rgba(255,255,255,0.12);text-decoration:none;z-index:9999;transition:color 0.2s}.rm-dot:hover{color:rgba(255,255,255,0.35)}`}</style>
        <a
          href="https://dashboard-lime-one-61.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="rm-dot"
          aria-label="Dashboard"
        >·</a>
      </body>
    </html>
  )
}
