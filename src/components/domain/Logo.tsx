import { cn } from '@/lib/utils'
import Image from 'next/image'

interface LogoProps {
  variant?: 'black' | 'white'
  className?: string
}

const Logo = ({ variant = 'black', className }: LogoProps) => {
  return (
    <div className={cn('w-[150px] h-[50px] sm:w-[201px] sm:h-[67px] relative', className)}>
      <Image fill src={`/logos/concavo_${variant}.png`} alt='Logo Cóncavo' className='object-contain' />
    </div>
  )
}

export default Logo
