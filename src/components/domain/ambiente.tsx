import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export const Ambiente = ({ className, slug, name }: { className?: string; slug: string; name: string }) => {
  return (
    <Link
      href={`/casa/${slug}`}
      style={{
        backgroundImage: `rgba(0, 0, 0, 0.1), url(/ambientes/${slug}.jpeg)`,
      }}
      className={cn(
        className,
        'bg-center flex flex-column justify-between items-center relative w-full h-[61.8dvw] max-h-[494px] max-w-[800px] pl-4',
      )}
    >
      <p className='text-xl text-white'>{name}</p>

      <ChevronRight size='50px' color='white' />
    </Link>
  )
}
