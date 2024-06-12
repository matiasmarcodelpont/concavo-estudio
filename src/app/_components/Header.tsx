'use client'

import Logo from '@/components/domain/Logo'
import Link from 'next/link'
import { NavBarLayout } from './NavBarLayout'
import { Ambiente, OmitReferences } from '@/data/types'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

interface HeaderProps {
  ambientes: OmitReferences<Omit<Ambiente, 'images'>>[]
}

export const Header = ({ ambientes }: HeaderProps) => {
  const pathname = usePathname()

  return (
    <header
      className={cn(
        'px-4 flex items-center gap-2 w-full z-40 bg-bone shadow animate-navbar-fade-in opacity-90',
        pathname === '/' ? 'fixed' : 'sticky top-0',
      )}
    >
      <NavBarLayout ambientes={ambientes}></NavBarLayout>
      <Link href='/' className='uppercase text-lg text-center flex flex-col items-center m-auto p-4 md:p-6'>
        <Logo />
      </Link>
      <div className='flex-shrink-0 w-[40px] h-[10px] bg-mustard sm:size-9 invisible' />
    </header>
  )
}
