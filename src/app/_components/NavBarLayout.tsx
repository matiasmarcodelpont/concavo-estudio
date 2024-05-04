'use client'

import { Drawer, DrawerContent } from '@/components/ui/drawer'
import { OmitReferences, Room } from '@/data/types'
import Link from 'next/link'
import { ReactNode, useCallback, useEffect, useState } from 'react'

export const NavBarLayout = ({
  rooms,
  children,
  opened = false,
}: {
  rooms: OmitReferences<Room>[]
  children?: ReactNode
  opened?: boolean
}) => {
  const [drawerOpen, setDrawerOpen] = useState(opened)
  useEffect(() => {
    setDrawerOpen(opened)
  }, [opened])

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false)
  }, [])

  const links = [
    {
      text: 'Cóncavo',
      href: '/',
      links: [{ text: 'Productos Cóncavo', href: '/#productos_concavo' }],
    },
    {
      text: 'Casa Cóncavo',
      href: '/casa',
      links: rooms.map(({ slug, name }) => ({ text: name, href: `/casa/${slug}` })),
    },
    {
      text: 'Nosotros',
      href: '/nosotros',
    },
  ]

  return (
    <Drawer direction='left' open={drawerOpen} onOpenChange={setDrawerOpen}>
      <DrawerContent className='pl-6 pr-7 uppercase overflow-y-auto'>
        <header className='border-black border-b mb-4'>
          <h1 className='my-4 font-bold text-xl'>Cóncavo</h1>
        </header>

        <nav>
          <ul>
            {links.map(({ text, href, links }) => (
              <li key={href} className='my-4'>
                <Link href={href} onClick={closeDrawer} className='hover:underline'>
                  {text}
                </Link>

                {links && (
                  <ul className='ml-4'>
                    {links.map(({ text, href }) => (
                      <li key={href} className='my-2'>
                        <Link href={href} onClick={closeDrawer} className='hover:underline'>
                          {text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </DrawerContent>

      {children}
    </Drawer>
  )
}
