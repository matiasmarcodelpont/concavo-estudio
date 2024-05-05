import { MainColaborador as MainColaboradorType, StandardColaborador as StandardColaboradorType } from '@/data/types'
import removeHttps from '@/lib/removeHttps'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface ColaboradorBaseProps {
  width?: number
  height?: number
}

type StandardColaboradorProps = Omit<StandardColaboradorType, 'isMain' | 'description' | 'email' | 'address'> &
  ColaboradorBaseProps

export const StandardColaborador = ({ width = 300, height = 300, ...colaborador }: StandardColaboradorProps) => {
  return <Image width={width} height={height} src={colaborador.imageUrl} alt={colaborador.name} />
}

type MainColaboradorProps = Omit<MainColaboradorType, 'isMain'> & ColaboradorBaseProps

export const MainColaborador = ({ width = 300, height = 300, ...colaborador }: MainColaboradorProps) => {
  return (
    <div className={cn('flex flex-col gap-2', `w-[${width.toString()}px]`)}>
      <StandardColaborador width={width} height={height} {...colaborador} />
      <p className='text-xs text-center text-gray'>{colaborador.description}</p>
      <p className='text-xs text-center font-semibold text-gray'>{colaborador.address}</p>
      <a className='text-xs text-center font-semibold' href={colaborador.website} target='_blank'>
        {removeHttps(colaborador.website)}
      </a>
    </div>
  )
}
