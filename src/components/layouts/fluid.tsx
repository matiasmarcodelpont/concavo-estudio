import { cn } from '@/lib/utils'
import { ClassValue } from 'clsx'
import { ReactNode } from 'react'

interface Fluid {
  children: ReactNode
  className?: ClassValue
}

const Fluid = ({ children, className }: Fluid) => <div className={cn('flex flex-wrap m-12', className)}>{children}</div>

export default Fluid
