import { cn } from '@/lib/utils'
import { HTMLAttributes, ReactNode } from 'react'

interface Fluid {
  children: ReactNode
}

export const FlexWrap = ({ children, ...ulistProps }: Fluid & HTMLAttributes<HTMLUListElement>) => (
  <ul {...ulistProps} className={cn('flex flex-wrap', ulistProps.className)}>
    {children}
  </ul>
)

export const GridFluid = ({ children, ...ulistProps }: Fluid & HTMLAttributes<HTMLUListElement>) => (
  <ul {...ulistProps} className={cn(`grid grid-cols-auto-fill-200 sm:grid-cols-auto-fill-300`, ulistProps.className)}>
    {children}
  </ul>
)
