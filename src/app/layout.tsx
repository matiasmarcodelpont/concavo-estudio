import type { Metadata } from 'next'

import './globals.css'

import { cn } from '@/lib/utils'
import { editorialNew, ttNorms } from '@/lib/fonts'
import { Header } from './_components/Header'
import { Footer } from './_components/Footer'
import { ambientesRepository } from '@/controllers'

export const metadata: Metadata = {
  title: 'Estudio Cóncavo',
  description: 'Piezas de autor elaboradas artesanalmente.',
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
        <link rel='icon' href='/manifest/favicon_concavo.ico' sizes='any' />
        <link rel='icon' href='/manifest/icon_concavo?<generated>' type='image/<generated>' sizes='<generated>' />
        <link
          rel='apple-touch-icon'
          href='/manifest/apple-icon_concavo?<generated>'
          type='image/<generated>'
          sizes='<generated>'
        />
      </head>
      <body className={cn(editorialNew.variable, ttNorms.variable, 'bg-bone text-black')}>
        <Header ambientes={ambientes} />
        {children}
        <Footer ambientes={ambientes} />
      </body>
    </html>
  )
}
