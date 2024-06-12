'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Waypoint } from 'react-waypoint'

interface HeadingProps {
  children: string
  animated?: boolean
  secondary?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
}

const Heading = ({
  children,
  animated = true,
  secondary = false,
  as: Component = 'h1',
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
      <Component
        {...headingProps}
        className={cn(
          'font-editorial-new font-extralight tracking-[0.01em] uppercase mt-12 mb-6 sm:mt-16 sm:mb-9 md:mt-20 md:mb-12 italic',
          secondary ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl',
          animated ? (animate ? 'animate-slide-up' : 'opacity-0') : 'opacity-100',
          headingProps.className,
        )}
      >
        {children}
      </Component>
    </>
  )
}

export default Heading
