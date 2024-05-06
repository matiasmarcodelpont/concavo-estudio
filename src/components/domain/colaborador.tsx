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

export const StandardColaborador = (colaborador: StandardColaboradorProps) => {
  return (
    <div className='w-[300px] h-[150px] relative'>
      <Image
        fill
        sizes='(max-width: 768px) 100vw, 33vw'
        style={{ objectFit: 'contain' }}
        src={`/colaboradores/${colaborador.slug}.png`}
        alt={colaborador.name}
        className='max-w-[300px] max-h-[150px] grayscale' // TODO: Remove grayscale when real logos are onboarded?
      />
    </div>
  )
}

type MainColaboradorProps = ColaboradorBaseProps & Omit<MainColaboradorType, 'isMain'>

export const MainColaborador = ({ className, ...colaborador }: MainColaboradorProps) => {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <StandardColaborador {...colaborador} />
      <p className='text-xs text-center text-dark-gray'>{colaborador.description}</p>
      <div className='flex flex-col gap-1'>
        <p className='text-xs text-center font-semibold text-dark-gray'>{colaborador.address}</p>
        <div className='text-center flex justify-center gap-2'>
          <a
            className='text-xs text-center font-semibold text-blue hover:underline'
            href={`mailto:${colaborador.email}`}
            target='_blank'
          >
            {colaborador.email}
          </a>
          <Separator orientation='vertical' className='w-[1px] bg-dark-gray' />
          <a
            className='text-xs text-center font-semibold text-blue hover:underline'
            href={colaborador.website}
            target='_blank'
          >
            {removeHttps(colaborador.website)}
          </a>
        </div>
      </div>
    </div>
  )
}
