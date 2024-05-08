import { OmitReferences, Producto as ProductoType } from '@/data/types'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface ProductoProps extends OmitReferences<ProductoType> {
  className?: string
  concavo?: boolean
}

export const Producto = ({ className, concavo = false, ...producto }: ProductoProps) => {
  return (
    <div className={cn('flex flex-col gap-2 cursor-pointer text-dark-gray group', className)}>
      <div className='h-[450px] relative overflow-hidden'>
        <Image
          fill
          style={{ objectFit: 'cover' }}
          src={`/productos/${producto.slug}.jpg`}
          alt={producto.name}
          className='group-hover:scale-105 transition-transform duration-1000'
        />
      </div>
      <div className='mb-4 group-hover:text-light-gray transition-colors duration-500 space-y-1'>
        <p className='text-md text-center uppercase'>{producto.name}</p>
        {concavo && (
          <p className='text-xs text-center' role='dimensions'>
            AAA x LLL x PPP
          </p>
        )}
      </div>
    </div>
  )
}
