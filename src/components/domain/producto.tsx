import { Producto as ProductoType } from '@/data/types'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface ProductoProps extends ProductoType {
  className?: string
}

export const Producto = ({ className, ...producto }: ProductoProps) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 cursor-pointer text-dark-gray transition-colors hover:text-light-gray',
        className,
      )}
    >
      <div className='w-[200px] h-[250px] relative '>
        <Image
          fill
          sizes='(max-width: 768px) 100vw, 33vw'
          style={{ objectFit: 'cover' }}
          src={`/productos/${producto.slug}.jpg`}
          alt={producto.name}
        />
      </div>
      <h3 className='text-sm text-center uppercase mb-4'>{producto.name}</h3>
    </div>
  )
}
