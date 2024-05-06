import { Producto as ProductoType } from '@/data/types'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface ProductoProps extends ProductoType {
  className: string
}

export const Producto = ({ className, ...producto }: ProductoProps) => {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <div className='w-[300px] h-[150px] relative'>
        <Image
          fill
          sizes='(max-width: 768px) 100vw, 33vw'
          style={{ objectFit: 'contain' }}
          src={`/productos/${producto.slug}.jpg`}
          alt={producto.name}
          className='max-w-[300px] max-h-[150px]'
        />
      </div>
      <h3 className='text-xs text-center text-darkGray'>{producto.name}</h3>
    </div>
  )
}
