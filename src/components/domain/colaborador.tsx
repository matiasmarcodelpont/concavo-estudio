import { MainColaborador as MainColaboradorType, StandardColaborador as StandardColaboradorType } from '@/data/types'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface ColaboradorBaseProps {
  className?: string
}

type StandardColaboradorProps = ColaboradorBaseProps &
  Omit<StandardColaboradorType, 'isMain' | 'description' | 'email' | 'address'>

export const StandardColaborador = ({ slug, name, className }: StandardColaboradorProps) => {
  return (
    <div className={cn(className, 'w-[300px] h-[100px] relative')}>
      <Image
        fill
        style={{ objectFit: 'contain' }}
        src={`/colaboradores/${slug}.png`}
        alt={name}
        className='max-w-[300px] max-h-[150px] grayscale' // TODO: Remove grayscale when real logos are onboarded?
      />
    </div>
  )
}

type MainColaboradorProps = ColaboradorBaseProps & Omit<MainColaboradorType, 'isMain' | 'email' | 'address'>

export const MainColaborador = ({ className, ...colaborador }: MainColaboradorProps) => {
  return (
    <div className={className}>
      <StandardColaborador {...colaborador} className='mb-3' />
      <p className='text-xs text-darkGray mb-3'>{colaborador.description}</p>
    </div>
  )
}
