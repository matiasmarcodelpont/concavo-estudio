'use client'

import { Qr } from '@/components/ui/qr'
import { ambientesRepository, productosRepository } from '@/controllers'
import { useHandleQr } from './hooks'
import LogoAndSocialMedia from '@/components/domain/LogoAndSocialMedia'

export const Footer = () => {
  const ambientes = ambientesRepository.getAmbientes()
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
      name: 'Productos',
      links: productos.map(({ name, slug }) => ({ name, slug, href: `/productos/${slug}` })),
    },
  ]

  return (
    <footer className='bg-white text-black flex gap-5 md:gap-10 px-6 sm:px-10 md:px-12 pt-10 pb-6 flex-wrap-reverse'>
      {siteMap.map(({ name, links }, index) => (
        <section key={`sitemap-${index.toString()}-${name}`} className='hidden md:block'>
          <h1 className='text-base lg:text-xl font-tt-norms font-bold uppercase mb-2'>{name}</h1>
          <ul className='text-xs gap-y-2 gap-x-6 flex flex-col flex-wrap max-h-[150px]'>
            {links.map(({ name, slug, href }) => (
              <li key={slug} className='hover:underline'>
                <a href={href}>{name}</a>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className='flex gap-6 xs:gap-10 sm:gap-14 ml-auto mr-auto md:mr-0 flex-wrap'>
        <LogoAndSocialMedia variant='black' className='mx-auto' />
        <div className='mx-auto'>
          <Qr value={currentUrl} onClick={handleClick} />
        </div>
        <div className='absolute left-[-100vw] top-0'>
          <Qr ref={qrRef} value={currentUrl} size={300} />
        </div>
      </section>
    </footer>
  )
}
