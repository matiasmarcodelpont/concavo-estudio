import { cn } from '@/lib/utils'
import { HTMLAttributes, ReactNode } from 'react'

interface Fluid {
  children: ReactNode
}

export const FlexWrap = ({ children, ...UListProps }: Fluid & HTMLAttributes<HTMLUListElement>) => (
  <ul {...UListProps} className={cn('flex flex-wrap', UListProps.className)}>
    {children}
  </ul>
)

export const GridFluid = ({ children, ...UListProps }: Fluid & HTMLAttributes<HTMLUListElement>) => (
  <ul {...UListProps} className={cn(`grid grid-cols-auto-fill-300`, UListProps.className)}>
    {children}
  </ul>
)
