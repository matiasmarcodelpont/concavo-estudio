import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

interface VideoProps {
  src: string
  title: string
  href: string
  copy: React.ReactNode
}

export const Video = ({ src, title, href, copy }: VideoProps) => {
  return (
    <Link href={href} className='block relative w-full h-[80vh] overflow-hidden'>
      <video
        src={src}
        title={title}
        className='absolute top-0 left-0 w-full h-full border-0 pointer-events-none z-10 border-none object-cover'
        height='100%'
        autoPlay
        muted
        loop
      />
      <div className='absolute inset-0 bg-black opacity-50 z-20' />
      <div className='absolute inset-0 flex flex-col z-30 justify-center items-center'>
        {copy}
        <div className='absolute bottom-0 right-1/2 p-2 md:p-4 translate-x-[50%] flex flex-col items-center gap-2 text-white text-base md:text-lg'>
          COMENZAR
          <ChevronDown size='30px' color='white' />
        </div>
      </div>
    </Link>
  )
}
