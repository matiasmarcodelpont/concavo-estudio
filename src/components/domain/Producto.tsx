import { OmitReferences, Producto as ProductoType } from '@/data/types'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import Heading from './Heading'

interface ProductoProps extends OmitReferences<ProductoType> {
  concavo?: boolean
  className?: string
}

export const Producto = ({ concavo = false, className, ...producto }: ProductoProps) => {
  return (
    <Link
      href={`/productos/${producto.slug}`}
      className={cn('cursor-pointer text-dark-gray group', className)}
      aria-label={producto.name}
    >
      <div className='pt-[100%] relative overflow-hidden'>
        <Image
          fill
          src={`/productos/${producto.slug}.jpg`}
          alt={producto.name}
          className='object-cover group-hover:scale-105 transition-transform duration-1000'
        />
      </div>
      <div className='mb-4 group-hover:text-light-gray transition-colors duration-500'>
        <Heading className='text-lg mt-4 mb-0 sm:mt-6 sm:mb-0 md:mt-8 md:mb-0'>{producto.name}</Heading>
        {concavo && (
          <p className='text-xs text-center mt-0 leading-none' aria-label='dimensions'>
            AAA x LLL x PPP
          </p>
        )}
      </div>
    </Link>
  )
}
