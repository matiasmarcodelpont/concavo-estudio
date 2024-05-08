'use client'

import { MainColaborador as MainColaboradorType, StandardColaborador as StandardColaboradorType } from '@/data/types'
import removeHttps from '@/lib/removeHttps'
import { cn } from '@/lib/utils'
import { Separator } from '@radix-ui/react-separator'
import Image from 'next/image'

interface ColaboradorBaseProps {
  className?: string
}

type StandardColaboradorProps = ColaboradorBaseProps &
  Omit<StandardColaboradorType, 'isMain' | 'description' | 'email' | 'address'>

export const StandardColaborador = ({ slug, name, className }: StandardColaboradorProps) => {
  return (
    <div className={cn(className, 'w-[300px] h-[150px] relative')}>
      <Image
        fill
        sizes='(max-width: 768px) 100vw, 33vw'
        style={{ objectFit: 'contain' }}
        src={`/colaboradores/${slug}.png`}
        alt={name}
        className='max-w-[300px] max-h-[150px] grayscale' // TODO: Remove grayscale when real logos are onboarded?
      />
    </div>
  )
}

type MainColaboradorProps = ColaboradorBaseProps & Omit<MainColaboradorType, 'isMain'>

export const MainColaborador = ({ className, ...colaborador }: MainColaboradorProps) => {
  return (
    <div className={className}>
      <StandardColaborador {...colaborador} className='mb-3' />
      <p className='text-xs text-center text-darkGray mb-3'>{colaborador.description}</p>
      <p className='text-xs text-center font-semibold text-darkGray mb-1'>{colaborador.address}</p>
      <div className='text-center flex justify-center gap-2'>
        <a
          className='text-xs text-center font-semibold text-blue hover:underline'
          href={`mailto:${colaborador.email}`}
          target='_blank'
        >
          {colaborador.email}
        </a>
        <Separator orientation='vertical' className='w-[1px] bg-darkGray' />
        <a
          className='text-xs text-center font-semibold text-blue hover:underline'
          href={colaborador.website}
          target='_blank'
        >
          {removeHttps(colaborador.website)}
        </a>
      </div>
    </div>
  )
}
