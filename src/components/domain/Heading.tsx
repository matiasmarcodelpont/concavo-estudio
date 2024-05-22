import { cn } from '@/lib/utils'

interface HeadingProps {
  children: string
}

const Heading = ({ children, ...headingProps }: HeadingProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      {...headingProps}
      className={cn('uppercase text-4xl font-bold tracking-widest mt-12 mb-6', headingProps.className)}
    >
      {children}
    </h1>
  )
}

export default Heading
