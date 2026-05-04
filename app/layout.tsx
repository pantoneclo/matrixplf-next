import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Matrixplatform | Excellence in Design-Led Apparel Manufacturing',
  description: 'Design-led, vertically integrated apparel manufacturing platform delivering fabric, development, and global production under one system.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.jpg',
        type: 'image/jpg',
      },
    ],
    apple: '/icon.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
