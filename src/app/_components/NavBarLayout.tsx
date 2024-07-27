'use client'

import LogoAndSocialMedia from '@/components/domain/LogoAndSocialMedia'
import IsologoCasa from '@/components/icons/IsologoCasa'
import IsologoConcavo from '@/components/icons/IsologoConcavo'
import AnimatedX from '@/components/ui/animatedX'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { OmitReferences, Ambiente } from '@/data/types'
import { Equal } from 'lucide-react'
import Link from 'next/link'
import { ReactNode, useCallback, useEffect, useState } from 'react'

export const NavBarLayout = ({
  ambientes,
  opened = false,
}: {
  ambientes: OmitReferences<Omit<Ambiente, 'images'>>[]
  children?: ReactNode
  opened?: boolean
}) => {
  const [drawerOpen, setDrawerOpen] = useState(opened)

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false)
  }, [])

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { hash } = new URL(e.currentTarget.href)

    if (hash) {
      setTimeout(() => {
        const targetElement = document.querySelector(hash)

        if (targetElement) {
          const { top } = targetElement.getBoundingClientRect()

          const NAVBAR_HEIGHT = 82
          const SECTION_MARGIN = 36
          const CUSTOM_OFFSET = 10

          scrollTo({ top: top + scrollY - NAVBAR_HEIGHT - SECTION_MARGIN - CUSTOM_OFFSET, behavior: 'smooth' })
        }
      }, 400)
    }

    closeDrawer()
  }

  useEffect(() => {
    setDrawerOpen(opened)
  }, [opened])

  const links = [
    {
      text: 'Cóncavo',
      href: '/',
      links: [{ text: 'Productos', href: '/#productos-concavo', links: undefined }],
      icon: IsologoConcavo,
    },
    {
      text: 'Casa Cóncavo',
      links: [
        {
          href: '/casa-concavo/white-haven',
          text: 'CC1 - Whitehaven',
          links: ambientes.map(({ slug, name }) => ({ text: name, href: `/casa-concavo/white-haven/${slug}` })),
        },
      ],
      icon: IsologoCasa,
    },
    {
      text: 'Colaboradores',
      href: '/colaboradores',
    },
    {
      text: 'Nosotros',
      href: '/nosotros',
    },
  ]

  return (
    <>
      <Drawer direction='left' open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerTrigger asChild>
          <Button variant='ghost' size='icon' aria-label='Open navigation menu'>
            <Equal className='size-6 sm:size-9' />
          </Button>
        </DrawerTrigger>
        <DrawerContent className='pl-6 pr-7 uppercase overflow-y-auto min-w-[30%] max-w-[600px] flex flex-col'>
          <header className='border-black border-b mb-4 pl-2 py-10 sm:py-12 cursor-pointer' onClick={closeDrawer}>
            <AnimatedX />
          </header>

          <nav>
            <ul>
              {links.map(({ text, href, links, icon: Icon }) => (
                <li key={text} className='my-6'>
                  {Icon && <Icon className='inline mr-3 mb-1' />}

                  {href ? (
                    <Link href={href} onClick={handleNavigation} className='hover:underline' scroll={false}>
                      {text}
                    </Link>
                  ) : (
                    <span>{text}</span>
                  )}

                  {links && (
                    <ul className='font-light'>
                      {links.map(({ text, href, links }) => (
                        <li key={href} className='my-2'>
                          <Icon className='inline mr-3 mb-1 opacity-0' /> {/* Placeholder */}
                          <Link href={href} onClick={handleNavigation} className='hover:underline' scroll={false}>
                            {text}
                          </Link>
                          {links && (
                            <ul className='ml-6 text-sm'>
                              {links.map(({ text, href }) => (
                                <li key={href} className='my-1'>
                                  <Icon className='inline mr-3 mb-1 opacity-0' /> {/* Placeholder */}
                                  <Link
                                    href={href}
                                    onClick={handleNavigation}
                                    className='hover:underline'
                                    scroll={false}
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
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <LogoAndSocialMedia variant='black' className='mt-auto p-7' />
        </DrawerContent>
      </Drawer>
    </>
  )
}
