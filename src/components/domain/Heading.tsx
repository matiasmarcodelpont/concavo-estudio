'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Waypoint } from 'react-waypoint'

interface HeadingProps {
  children: string
  animated?: boolean
}

const Heading = ({
  children,
  animated = true,
  ...headingProps
}: HeadingProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  const [animate, setAnimate] = useState(false)

  return (
    <>
      <Waypoint
        onEnter={() => {
          setAnimate(true)
        }}
      />
      <h1
        {...headingProps}
        className={cn(
          'uppercase text-3xl mt-12 mb-6 sm:mt-16 sm:mb-9 md:mt-20 md:mb-12 italic',
          animated ? (animate ? 'animate-slide-up' : 'opacity-0') : 'opacity-100',
          headingProps.className,
        )}
      >
        {children}
      </h1>
    </>
  )
}

export default Heading
