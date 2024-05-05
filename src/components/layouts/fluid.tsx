import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface GridFluidColumnsProps {
  children: ReactNode
  className?: string
}

export const Fluid = ({ children, className }: GridFluidColumnsProps) => (
  <div className={cn('flex flex-wrap', className)}>{children}</div>
)
