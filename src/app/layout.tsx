import type { Metadata } from 'next'
import './globals.css'
import Chatbot from '@/components/Chatbot'

export const metadata: Metadata = {
  title: 'RLJ Enterprise - Building Conscious Communities',
  description: 'RLJ Enterprise is a mission-driven real estate and investment firm committed to building conscious communities where people, neighborhoods, and ecosystems thrive.',
  keywords: 'real estate, investment, community development, Connecticut, commercial real estate, residential real estate',
  authors: [{ name: 'RLJ Enterprise' }],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'RLJ Enterprise - Building Conscious Communities',
    description: 'Building conscious communities where people, neighborhoods, and ecosystems thrive—not just survive.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Chatbot />
      </body>
    </html>
  )
}
