'use client'

import Logo from '@/components/domain/Logo'
import { Button } from '@/components/ui/button'
import { DrawerTrigger } from '@/components/ui/drawer'
import { Dialog } from '@radix-ui/react-dialog'
import { Equal } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Header = () => {
  const pathname = usePathname()

  return (
    <header className='px-4 flex items-center gap-2 sticky top-0 z-40 bg-bone shadow'>
      <Dialog>
        <DrawerTrigger asChild>
          <Button variant='ghost' size='icon' aria-label='Open navigation menu'>
            <Equal className='size-6 sm:size-9' />
          </Button>
        </DrawerTrigger>
      </Dialog>
      <Link href='/' className='grow uppercase text-lg my-6 text-center flex flex-col items-center'>
        {/* TODO: "CASA" y "ESTUDIO" deberían ser parte del logo */}
        <p className='mb-[-10px]'>{pathname.includes('casa') && 'Casa'}</p>
        <Logo />
        <p>{!pathname.includes('casa') && 'Estudio'}</p>
      </Link>
      <div className='flex-shrink-0 w-[40px] h-[10px] bg-mustard sm:size-9 invisible' />
    </header>
  )
}
