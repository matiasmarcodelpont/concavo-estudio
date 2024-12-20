import type { Metadata } from 'next'

import './globals.css'

import { cn } from '@/lib/utils'
import { editorialNew, ttNorms } from '@/lib/fonts'
import { Header } from './_components/Header'
import { Footer } from './_components/Footer'
import { ambientesRepository } from '@/controllers'
import WhatsappBubble from './_components/WhatsappBubble'

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
      <body className={cn(editorialNew.variable, ttNorms.variable, 'bg-bone text-black relative')}>
        <Header ambientes={ambientes} />

        <div className='pt-[72px] sm:pt-[83.01px]'>{children}</div>
        <WhatsappBubble />

        <Footer />
      </body>
    </html>
  )
}
