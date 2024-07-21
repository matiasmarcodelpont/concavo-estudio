'use client'

import Logo from '@/components/domain/Logo'
import Link from 'next/link'
import { NavBarLayout } from './NavBarLayout'
import { Ambiente, OmitReferences } from '@/data/types'
import { usePathname } from 'next/navigation'

interface HeaderProps {
  ambientes: OmitReferences<Omit<Ambiente, 'images'>>[]
}

export const Header = ({ ambientes }: HeaderProps) => {
  const pathname = usePathname()

  return (
    <header className='fixed top-0 w-full bg-bone z-10 flex justify-between px-2 sm:px-6 py-4 items-center'>
      <NavBarLayout ambientes={ambientes} />

      <h1 className={pathname == '/' ? 'invisible' : ''}>
        <Link href='/'>
          <Logo />
        </Link>
      </h1>

      <div className='w-[40px]' />
    </header>
  )
}
