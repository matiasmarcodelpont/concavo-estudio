import { cn } from '@/lib/utils'

interface HeadingProps {
  children: string
}

const Heading = ({ children, ...headingProps }: HeadingProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      {...headingProps}
      className={cn('uppercase text-3xl mt-12 mb-6 sm:mt-16 sm:mb-9 md:mt-20 md:mb-12 italic', headingProps.className)}
    >
      {children}
    </h1>
  )
}

export default Heading
