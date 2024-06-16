import { Colaborador as MainColaboradorType } from '@/data/types'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type ColaboradorProps = MainColaboradorType & {
  className?: string
}

export const Colaborador = ({ slug, name, className }: ColaboradorProps) => {
  return (
    <div className={cn('w-[200px] sm:w-[300px] h-[40px] m-auto relative mb-3', className)}>
      <Image
        fill
        src={`/colaboradores/${slug}.png`}
        alt={name}
        className='object-contain grayscale' // TODO: Remove grayscale when real logos are onboarded?
      />
    </div>
  )
}
