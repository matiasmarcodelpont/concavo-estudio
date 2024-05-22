import type { Metadata } from 'next'

import './globals.css'

import { cn } from '@/lib/utils'
import { editorialNew, ttNorms } from '@/lib/fonts'
import { Header } from './_components/Header'
import { Footer } from './_components/Footer'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={cn(editorialNew.variable, ttNorms.variable, 'bg-bone text-black')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
