import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface VideoProps {
  src: string
  title: string
  href: string
}

export const Video = ({ src, title, href }: VideoProps) => {
  return (
    <Link href={href} className='block relative w-full h-[80vh] overflow-hidden'>
      <video
        src={src}
        title={title}
        className='absolute top-0 left-0 w-full border-0 pointer-events-none z-10 border-none'
        height='100%'
        autoPlay
        muted
        loop
      />
      <div className='absolute inset-0 bg-black opacity-50 z-20' />
      <div className='absolute inset-0 flex flex-col z-30'>
        <h2 className='text-white text-6xl uppercase m-auto'>{title}</h2>
        {href && (
          <ChevronRight
            className='absolute top-1/2 right-2 p-4 rounded-full translate-y-[-60%]'
            size='84px'
            color='white'
          />
        )}
      </div>
    </Link>
  )
}
