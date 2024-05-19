import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const Ambiente = ({ className, slug, name }: { className?: string; slug: string; name: string }) => {
  return (
    <Link
      href={`/casa/${slug}`}
      className={cn(className, 'relative w-full h-[61.8dvw] max-h-[494px] pl-4 flex justify-center items-center')}
      aria-label={name}
    >
      <Image
        src={`/ambientes/${slug}/0.jpeg`}
        alt={name}
        fill
        className='absolute inset-0 w-full h-full object-cover'
      />
      <div className='absolute inset-0 bg-black opacity-30 z-20' />
      <div className='relative max-w-[1600px] flex justify-between grow z-30'>
        <p className='text-xl sm:text-2xl md:text-3xl text-white'>{name}</p>
        <ChevronRight color='white' className='size-[30px] sm:size-[40px] md:size-[40px]' />
      </div>
    </Link>
  )
}
