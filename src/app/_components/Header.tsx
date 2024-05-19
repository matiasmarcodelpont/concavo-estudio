import { Button } from '@/components/ui/button'
import { DrawerTrigger } from '@/components/ui/drawer'
import { Equal } from 'lucide-react'

export const Header = () => {
  return (
    <header className='px-6 flex items-center justify-center gap-8 sticky top-0 z-40 bg-bone shadow'>
      <DrawerTrigger asChild className='absolute left-6'>
        <Button variant='ghost' size='icon' aria-label='Open navigation menu'>
          <Equal className='size-9' />
        </Button>
      </DrawerTrigger>

      <h1 className='uppercase text-4xl font-bold tracking-widest my-8'>Concavo estudio</h1>
    </header>
  )
}
