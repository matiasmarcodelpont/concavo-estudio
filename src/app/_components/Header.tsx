'use client'

import Logo from '@/components/domain/Logo'
import Link from 'next/link'
import { NavBarLayout } from './NavBarLayout'
import { Ambiente, OmitReferences } from '@/data/types'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface HeaderProps {
  ambientes: OmitReferences<Omit<Ambiente, 'images'>>[]
}

export const Header = ({ ambientes }: HeaderProps) => {
  const pathname = usePathname()

  return (
    <header className='fixed top-0 w-full bg-bone flex justify-between px-2 sm:px-6 py-4 items-center z-10'>
      <NavBarLayout ambientes={ambientes} />

      <h1 className={cn(pathname == '/' ? 'invisible' : '', 'my-0')}>
        <Link href='/'>
          <Logo />
        </Link>
      </h1>

      <div className='w-[40px]' />
    </header>
  )
}
