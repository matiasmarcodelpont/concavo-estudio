import type { Metadata } from 'next'

import '../globals.css'

import { cn } from '@/lib/utils'
import { editorialNew, ttNorms } from '@/lib/fonts'
import { Header } from '../_components/Header'
import { ambientesRepository } from '@/controllers'
import { Footer } from '../_components/Footer'

export const metadata: Metadata = {
  title: 'Casa Cóncavo',
  description: 'Una serie de casas co-creadas por Estudio Cóncavo.',
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
        <link rel='icon' href='/manifest/favicon_casa.ico' sizes='any' />
        <link rel='icon' href='/manifest/icon_casa?<generated>' type='image/<generated>' sizes='<generated>' />
        <link
          rel='apple-touch-icon'
          href='/manifest/apple-icon_casa?<generated>'
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
