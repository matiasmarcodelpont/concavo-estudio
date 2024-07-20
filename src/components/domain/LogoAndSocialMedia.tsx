import React from 'react'
import Logo from './Logo'
import { Instagram, MailIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LogoAndSocialMediaProps {
  variant?: 'black' | 'white'
  className?: string
}

const LogoAndSocialMedia = ({ variant = 'white', className }: LogoAndSocialMediaProps) => {
  return (
    <div className={cn('flex flex-col items-center gap-2', className)}>
      <Logo variant={variant} className='w-[150px] h-[50px] sm:w-[150px] sm:h-[50px]' />
      <div className='flex gap-2'>
        {[
          {
            name: 'instagram',
            Icon: Instagram,
            href: 'https://www.instagram.com/concavoestudio/',
          },
          {
            name: 'email',
            Icon: MailIcon,
            href: 'mailto:ventas@concavoestudio.com',
          },
        ].map(({ name, Icon, href }, index) => (
          <a
            key={`${index.toString()}-${name}`}
            href={href}
            target='_blank'
            className={cn(
              'rounded-full transition-all border-[1px] border-[transparent] p-2',
              variant === 'white' ? 'hover:border-bone' : 'hover:border-black',
            )}
            aria-label={name}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default LogoAndSocialMedia
