import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Nunito, Fraunces } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})
const fraunces = Fraunces({
  variable: '--font-heading',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Bloomsfield Montessori Basic Schools',
  description:
    'Quality education in a safe, nurturing, and stimulating environment. Developing confident, creative, responsible, and lifelong learners through the Montessori approach.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased bg-background">{children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
