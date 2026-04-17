import type { Metadata } from 'next'
import Terminal from './Terminal'

export const metadata: Metadata = {
  title: 'r@jensen-ai:~$',
  description: 'A terminal awaits.',
  robots: { index: false, follow: false },
}

export default function JensenPage() {
  return <Terminal />
}
