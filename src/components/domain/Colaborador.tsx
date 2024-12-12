'use client'

import { Colaborador as MainColaboradorType } from '@/data/types'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'
import { Waypoint } from 'react-waypoint'

type ColaboradorProps = MainColaboradorType & {
  className?: string
}

export const Colaborador = ({ slug, name, className }: ColaboradorProps) => {
  const [animate, setAnimate] = useState(false)

  return (
    <>
      <Waypoint
        onEnter={() => {
          setAnimate(true)
        }}
        bottomOffset='20%'
      />
      <div
        className={cn(
          'w-[200px] sm:w-[300px] h-[40px] m-auto relative transition-all duration-1000',
          animate ? 'opacity-100' : 'opacity-0',
          className,
        )}
      >
        <Image fill src={`/colaboradores/${slug}.png`} alt={name} className='object-contain' />
      </div>
    </>
  )
}
