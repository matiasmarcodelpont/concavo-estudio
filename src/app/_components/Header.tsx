import Logo from '@/components/domain/Logo'
import Link from 'next/link'
import { NavBarLayout } from './NavBarLayout'
import { Ambiente, OmitReferences } from '@/data/types'

interface HeaderProps {
  ambientes: OmitReferences<Ambiente>[]
}

export const Header = ({ ambientes }: HeaderProps) => {
  return (
    <header className='px-4 flex items-center gap-2 sticky top-0 z-40 bg-bone shadow'>
      <NavBarLayout ambientes={ambientes}></NavBarLayout>
      <Link href='/' className='uppercase text-lg text-center flex flex-col items-center m-auto p-4 md:p-6'>
        <Logo />
      </Link>
      <div className='flex-shrink-0 w-[40px] h-[10px] bg-mustard sm:size-9 invisible' />
    </header>
  )
}
