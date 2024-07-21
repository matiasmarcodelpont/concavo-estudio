import { cn } from '@/lib/utils'

interface VideoProps {
  src: string
  title: string
  className?: string
  children: React.ReactNode
}

export const VideoBackgroundSection = ({ src, title, className, children }: VideoProps) => {
  return (
    <section className={cn('relative', className)}>
      <video
        src={src}
        title={title}
        className='absolute top-0 left-0 w-full h-full pointer-events-none -z-10 border-none object-cover'
        height='100%'
        autoPlay
        muted
        loop
      />
      {children}
    </section>
  )
}
