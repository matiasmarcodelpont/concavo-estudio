'use client'

import Logo from '@/components/domain/Logo'
import { Qr } from '@/components/ui/qr'
import { productosRepository } from '@/controllers'
import { Ambiente, OmitReferences } from '@/data/types'
import { Instagram, MailIcon } from 'lucide-react'
import { useHandleQr } from './hooks'

const getAllProducts = (ambientes: OmitReferences<Omit<Ambiente, 'images'>>[]) => {
  return ambientes.flatMap(({ slug }) => productosRepository.getProductosInAmbiente(slug))
}

interface FooterProps {
  ambientes: OmitReferences<Omit<Ambiente, 'images'>>[]
}

export const Footer = ({ ambientes }: FooterProps) => {
  const productos = getAllProducts(ambientes)

  const { currentUrl, handleClick, qrRef } = useHandleQr()

  const siteMap = [
    {
      name: 'Home',
      links: [
        {
          name: 'Cóncavo',
          slug: 'concavo',
          href: '/',
        },
        {
          name: 'Productos Cóncavo',
          slug: 'productos-concavo',
          href: '/#productos-concavo',
        },
        {
          name: 'Casa Cóncavo',
          slug: 'casa-concavo',
          href: '/casa-concavo',
        },
      ],
    },
    {
      name: 'Ambientes',
      links: ambientes.map(({ name, slug }) => ({ name, slug, href: `/casa-concavo/${slug}` })),
    },
    {
      name: 'Productos',
      links: productos.map(({ name, slug }) => ({ name, slug, href: `/productos/${slug}` })),
    },
  ]

  return (
    <footer className='bg-black text-bone flex gap-12 sm:gap-16 px-6 sm:px-10 md:px-12 pt-10 pb-6 flex-wrap'>
      {siteMap.map(({ name, links }, index) => (
        <section key={`sitemap-${index.toString()}-${name}`}>
          <h1 className='font-tt-norms uppercase text-xl mb-2'>{name}</h1>
          <ul className='text-xs space-y-2'>
            {links.map(({ name, slug, href }) => (
              <li key={slug} className='hover:underline'>
                <a href={href}>{name}</a>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className='flex gap-6 sm:gap-10 ml-auto'>
        <div className='flex flex-col items-center gap-2'>
          <Logo variant='white' className='w-[150px] h-[50px] sm:w-[150px] sm:h-[50px]' />
          <div className='flex gap-2'>
            {[
              {
                name: 'instagram',
                Icon: Instagram,
                href: 'https://www.instagram.com/concavoestudio/',
              },
              {
                name: 'email',
                Icon: MailIcon,
                href: 'mailto:ventas@concavoestudio.com',
              },
            ].map(({ name, Icon, href }, index) => (
              <a
                key={`${index.toString()}-${name}`}
                href={href}
                target='_blank'
                className='rounded-full transition-all border-black hover:border-bone border-[1px] p-2'
                aria-label={name}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
        <Qr value={currentUrl} onClick={handleClick} />
        <div className='absolute left-[-100vw]'>
          <Qr ref={qrRef} value={currentUrl} size={300} />
        </div>
      </section>
    </footer>
  )
}
