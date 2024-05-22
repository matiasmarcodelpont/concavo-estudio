import { OmitReferences, Producto as ProductoType } from '@/data/types'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface ProductoProps extends OmitReferences<ProductoType> {
  concavo?: boolean
  className?: string
}

export const Producto = ({ concavo = false, className, ...producto }: ProductoProps) => {
  return (
    <Link
      href={`/productos/${producto.slug}`}
      className={cn('flex flex-col gap-2 cursor-pointer text-dark-gray group', className)}
      aria-label={producto.name}
    >
      <div className='h-[450px] relative overflow-hidden'>
        <Image
          fill
          src={`/productos/${producto.slug}.jpg`}
          alt={producto.name}
          className='object-cover group-hover:scale-105 transition-transform duration-1000'
        />
      </div>
      <div className='mb-4 group-hover:text-light-gray transition-colors duration-500 space-y-1'>
        <p className='text-md text-center uppercase'>{producto.name}</p>
        {concavo && (
          <p className='text-xs text-center' aria-label='dimensions'>
            AAA x LLL x PPP
          </p>
        )}
      </div>
    </Link>
  )
}
