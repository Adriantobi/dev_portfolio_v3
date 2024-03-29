import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import '../css/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Adrian Tobi',
  description: 'I’m Adrian. A freelance web developer and Next.js enthusiast.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
