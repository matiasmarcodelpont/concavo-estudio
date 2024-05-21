import { MainColaborador as MainColaboradorType, StandardColaborador as StandardColaboradorType } from '@/data/types'
import Image from 'next/image'

type StandardColaboradorProps = Omit<StandardColaboradorType, 'isMain' | 'description' | 'email' | 'address'>

export const StandardColaborador = ({ slug, name }: StandardColaboradorProps) => {
  return (
    <div className='w-[150px] sm:w-[300px] h-[100px] relative mb-3'>
      <Image
        fill
        src={`/colaboradores/${slug}.png`}
        alt={name}
        className='object-contain max-w-[150px] sm:max-w-[300px] max-h-[150px] grayscale' // TODO: Remove grayscale when real logos are onboarded?
      />
    </div>
  )
}

type MainColaboradorProps = Omit<MainColaboradorType, 'isMain' | 'email' | 'address'>

export const MainColaborador = ({ ...colaborador }: MainColaboradorProps) => {
  return (
    <div className='w-[200px] sm:w-[300px] flex flex-col items-center'>
      <StandardColaborador {...colaborador} />
      <p className='text-xs text-darkGray mb-3 text-left'>{colaborador.description}</p>
    </div>
  )
}
