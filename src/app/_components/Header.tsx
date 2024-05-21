'use client'

import Logo from '@/components/domain/Logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavBarLayout } from './NavBarLayout'
import { ambientesRepository } from '@/controllers'

export const Header = () => {
  const ambientes = ambientesRepository.getAmbientes()

  const pathname = usePathname()

  return (
    <header className='px-4 flex items-center gap-2 sticky top-0 z-40 bg-bone shadow'>
      <NavBarLayout ambientes={ambientes}></NavBarLayout>
      <Link href='/' className='uppercase text-lg text-center flex flex-col items-center m-auto p-4 md:p-6'>
        {/* TODO: "CASA" y "ESTUDIO" deberían ser parte del logo */}
        {pathname.includes('casa') && <p className='mb-[-10px] text-sm md:text-xl'>Casa</p>}
        <Logo />
        {!pathname.includes('casa') && <p className='mb-[-10px] text-sm md:text-xl'>Estudio</p>}
      </Link>
      <div className='flex-shrink-0 w-[40px] h-[10px] bg-mustard sm:size-9 invisible' />
    </header>
  )
}
