import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { CrispProvider } from '@/components/CrispProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Software Engineer',
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode,
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <CrispProvider />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
