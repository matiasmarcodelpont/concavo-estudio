'use client'

import Heading from '@/components/domain/Heading'
import { Button } from '@/components/ui/button'
import { DrawerTrigger } from '@/components/ui/drawer'
import { Equal } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Header = () => {
  const pathname = usePathname()

  return (
    <header className='px-4 flex items-center gap-2 sticky top-0 z-40 bg-bone shadow'>
      <DrawerTrigger asChild>
        <Button variant='ghost' size='icon' aria-label='Open navigation menu'>
          <Equal className='size-6 sm:size-9' />
        </Button>
      </DrawerTrigger>
      <Link href='/' className='block grow'>
        <Heading className='text-2xl my-6 text-center sm:text-3xl md:text-4xl'>
          {pathname.includes('casa') ? 'Casa Cóncavo' : 'Concavo Estudio'}
        </Heading>
      </Link>
      <div className='flex-shrink-0 w-[40px] h-[10px] bg-mustard sm:size-9 invisible' />
    </header>
  )
}
