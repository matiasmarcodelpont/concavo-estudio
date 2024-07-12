'use client'

import { Qr } from '@/components/ui/qr'
import { productosRepository } from '@/controllers'
import { Ambiente, OmitReferences } from '@/data/types'
import { useHandleQr } from './hooks'
import LogoAndSocialMedia from '@/components/domain/LogoAndSocialMedia'

interface FooterProps {
  ambientes: OmitReferences<Omit<Ambiente, 'images'>>[]
}

export const Footer = ({ ambientes }: FooterProps) => {
  const productos = productosRepository.getProductosConcavo()

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
      name: 'Casa Concavo',
      links: ambientes.map(({ name, slug }) => ({ name, slug, href: `/casa-concavo/${slug}` })),
    },
    {
      name: 'Productos Concavo',
      links: productos.map(({ name, slug }) => ({ name, slug, href: `/productos/${slug}` })),
    },
  ]

  return (
    <footer className='bg-black text-bone flex gap-10 sm:gap-14 px-6 sm:px-10 md:px-12 pt-10 pb-6 flex-wrap'>
      {siteMap.map(({ name, links }, index) => (
        <section key={`sitemap-${index.toString()}-${name}`}>
          <h1 className='font-tt-norms uppercase text-xl mb-2'>{name}</h1>
          <ul className='text-xs gap-y-2 gap-x-6 flex flex-col flex-wrap max-h-[200px]'>
            {links.map(({ name, slug, href }) => (
              <li key={slug} className='hover:underline'>
                <a href={href}>{name}</a>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className='flex gap-6 sm:gap-10 ml-auto'>
        <LogoAndSocialMedia />
        <Qr value={currentUrl} onClick={handleClick} />
        <div className='absolute left-[-100vw]'>
          <Qr ref={qrRef} value={currentUrl} size={300} />
        </div>
      </section>
    </footer>
  )
}
