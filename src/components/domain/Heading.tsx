'use client'

import { cn } from '@/lib/utils'
import { ReactNode, useState } from 'react'
import { Waypoint } from 'react-waypoint'

interface HeadingProps {
  children: ReactNode
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
          'font-editorial-new tracking-[0.01em] font-light uppercase mt-12 mb-6 sm:mt-16 sm:mb-9 md:mt-20 md:mb-12',
          secondary ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl',
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
