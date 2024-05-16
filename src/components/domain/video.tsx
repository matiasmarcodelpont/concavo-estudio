import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface VideoProps {
  src: string
  title: string
  href?: string
}

export const Video = ({ src, title, href }: VideoProps) => {
  return (
    <div className='relative w-full pb-[56.25%] overflow-hidden'>
      <iframe
        src={src}
        title={title}
        allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
        className='absolute top-0 left-0 w-full h-full border-0 pointer-events-none z-10 border-none'
        height='100%'
      />
      <div className='absolute inset-0 bg-black opacity-50 z-20' />
      <div className='absolute inset-0 flex flex-col z-30'>
        <h2 className='text-white text-6xl uppercase m-auto cursor-default'>{title}</h2>
        {href && (
          // TODO: Add the link to the whole component?
          <Link href={href}>
            <ChevronRight className='absolute bottom-2 right-2 p-4 rounded-full' size='76px' color='white' />{' '}
          </Link>
        )}
      </div>
    </div>
  )
}
