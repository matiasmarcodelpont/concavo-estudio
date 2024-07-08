import type { Metadata } from 'next'

import './globals.css'

import { cn } from '@/lib/utils'
import { editorialNew, ttNorms } from '@/lib/fonts'
import { Header } from './_components/Header'
import { Footer } from './_components/Footer'
import { ambientesRepository } from '@/controllers'
import Favicons from './_components/Favicons'

export const metadata: Metadata = {
  title: 'Estudio Cóncavo',
  description: 'Piezas de autor elaboradas artesanalmente.',
  icons: {
    icon: '/manifest/favicon_concavo.ico',
    apple: '/manifest/apple_icon_concavo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const ambientes = ambientesRepository.getAmbientes()

  return (
    <html lang='es'>
      <head>
        <Favicons />
      </head>
      <body className={cn(editorialNew.variable, ttNorms.variable, 'bg-bone text-black')}>
        <Header ambientes={ambientes} />
        {children}
        <Footer ambientes={ambientes} />
      </body>
    </html>
  )
}
