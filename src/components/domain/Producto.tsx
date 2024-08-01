'use client'

import { OmitReferences, Producto as ProductoType } from '@/data/types'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import Heading from './Heading'
import { Waypoint } from 'react-waypoint'
import { useState } from 'react'

interface ProductoProps extends OmitReferences<ProductoType> {
  concavo?: boolean
  className?: string
}

export const Producto = ({ concavo = false, className, ...producto }: ProductoProps) => {
  const [animate, setAnimate] = useState(false)

  return (
    <>
      <Link
        href={`/productos/${producto.slug}`}
        className={cn(className, 'cursor-pointer text-dark-gray group')}
        aria-label={producto.name}
      >
        <Waypoint
          onEnter={() => {
            setAnimate(true)
          }}
        />
        <div className='pt-[100%] relative overflow-hidden '>
          <Image
            fill
            src={`/productos/${concavo ? 'concavo/' : ''}${producto.slug}.jpg`}
            alt={producto.name}
            className={cn(
              'object-cover group-hover:scale-105 transition-all duration-1000',
              animate ? 'opacity-100' : 'opacity-0',
            )}
          />
        </div>
        <div className='group-hover:text-light-gray transition-colors'>
          <Heading
            className='text-sm xs:text-base sm:text-lg md:text-xl mt-3 sm:mt-3 md:mt-5 mb-0 sm:mb-0 md:mb-0'
            animated={false}
            as='p'
          >
            {producto.name}
          </Heading>
          {concavo && (
            <p className='text-xs text-center mt-0 leading-none' aria-label='dimensions'>
              AAA x LLL x PPP
            </p>
          )}
        </div>
      </Link>
    </>
  )
}
