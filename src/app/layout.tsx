import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

import { ambientesRepository } from '@/controllers'
import { NavBarLayout } from './_components/NavBarLayout'
import { DrawerTrigger } from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const ambientes = ambientesRepository.getAmbientes()

  return (
    <html lang='es'>
      <body className={cn(inter.className, 'bg-hueso')}>
        <NavBarLayout ambientes={ambientes}>
          <header className='p-6'>
            <DrawerTrigger asChild>
              <Button variant='ghost' size='icon' aria-label='Open navigation menu'>
                <Menu className='h-6 w-6' />
              </Button>
            </DrawerTrigger>
          </header>

          {children}
        </NavBarLayout>
      </body>
    </html>
  )
}
