import { Button } from '@/components/ui/button'
import { DrawerTrigger } from '@/components/ui/drawer'
import { Menu } from 'lucide-react'

export const Header = () => {
  return (
    <header className='p-6 flex items-center gap-8'>
      <DrawerTrigger asChild>
        <Button variant='ghost' size='icon' aria-label='Open navigation menu'>
          <Menu className='h-6 w-6' />
        </Button>
      </DrawerTrigger>

      <h1 className='uppercase text-2xl font-bold -mb-[5px]'>Concavo estudio</h1>
    </header>
  )
}
