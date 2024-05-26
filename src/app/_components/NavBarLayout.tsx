'use client'

import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { OmitReferences, Ambiente } from '@/data/types'
import { Equal } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MouseEvent, ReactNode, useCallback, useEffect, useState } from 'react'

export const NavBarLayout = ({
  ambientes,
  opened = false,
}: {
  ambientes: OmitReferences<Ambiente>[]
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
  const pathname = usePathname()
  const [scrollLocation, setScrollLocation] = useState<{ pathname: string; hash: string }>()

  const onFragmentNavigation = (event: MouseEvent<HTMLAnchorElement>) => {
    const { pathname, hash } = new URL(event.currentTarget.href)

    if (hash) {
      setScrollLocation({ pathname, hash })
    }
  }

  useEffect(() => {
    if (scrollLocation === undefined) {
      return
    }
    if (pathname !== scrollLocation.pathname) {
      return
    }

    const element = document.getElementById(scrollLocation.hash.substring(1))
    if (element === null) {
      return
    }

    const { top } = element.getBoundingClientRect()
    scrollTo({ top: top + scrollY - 82 - 36, behavior: 'smooth' })

    setScrollLocation(undefined)
  }, [pathname, scrollLocation])

  const links = [
    {
      text: 'Cóncavo',
      href: '/',
      links: [{ text: 'Productos', href: '/#productos_concavo', scroll: false, onClick: onFragmentNavigation }],
    },
    {
      text: 'Casa Cóncavo',
      href: '/casa',
      links: ambientes.map(({ slug, name }) => ({
        text: name,
        href: `/casa/${slug}`,
        scroll: undefined,
        onClick: undefined,
      })),
    },
    {
      text: 'Nosotros',
      href: '/nosotros',
    },
  ]

  return (
    <Drawer direction='left' open={drawerOpen} onOpenChange={setDrawerOpen}>
      <DrawerTrigger asChild>
        <Button variant='ghost' size='icon' aria-label='Open navigation menu'>
          <Equal className='size-6 sm:size-9' />
        </Button>
      </DrawerTrigger>
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
                    {links.map(({ text, href, onClick, scroll }) => (
                      <li key={href} className='my-2'>
                        <Link
                          href={href}
                          onClick={(event) => {
                            closeDrawer()
                            onClick?.(event)
                          }}
                          scroll={scroll}
                          className='hover:underline'
                        >
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
    </Drawer>
  )
}
