'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import Heading from './Heading'

export const Ambiente = ({ className, slug, name }: { className?: string; slug: string; name: string }) => {
  const [animate, setAnimate] = useState(false)

  return (
    <Link
      href={`/casa-concavo/${slug}`}
      className={cn(className, 'relative block w-full h-[40vw] min-h-[300px]')}
      aria-label={name}
    >
      <Image src={`/ambientes/${slug}/0.jpeg`} alt={name} fill objectFit='cover' className='-z-10' />
      <div className='w-full h-full bg-[#0003] p-10'>
        <Heading
          as='h2'
          className={cn(
            'text-2xl sm:text-3xl md:text-4xl text-bone text-left font-extralight',
            animate ? 'animate-fade-in' : '',
          )}
        >
          {name}
        </Heading>
      </div>
      <Waypoint
        onEnter={() => {
          setAnimate(true)
        }}
      />
    </Link>
  )
}
