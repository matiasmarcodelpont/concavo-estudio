import { cn } from '@/lib/utils'
import Image from 'next/image'

interface LogoProps {
  variant?: 'black' | 'white'
  className?: string
}

const Logo = ({ variant = 'black', className }: LogoProps) => {
  const size = variant === 'black' ? { width: 690, height: 176 } : { width: 12773, height: 3715 }

  return (
    <Image
      src={`/logos/concavo_${variant}.png`}
      alt='Cóncavo'
      className={cn('object-contain w-[150px] sm:w-[200px]', className)}
      {...size}
    />
  )
}

export default Logo
