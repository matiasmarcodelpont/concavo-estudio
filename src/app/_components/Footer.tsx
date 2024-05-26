import Logo from '@/components/domain/Logo'
import { productosRepository } from '@/controllers'
import { Ambiente, OmitReferences } from '@/data/types'
import { Instagram, MailIcon } from 'lucide-react'

const getAllProducts = (ambientes: OmitReferences<Ambiente>[]) => {
  return ambientes.flatMap(({ slug }) => productosRepository.getProductosInAmbiente(slug))
}

interface FooterProps {
  ambientes: OmitReferences<Ambiente>[]
}

export const Footer = ({ ambientes }: FooterProps) => {
  const productos = getAllProducts(ambientes)

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
          href: '/casa',
        },
      ],
    },
    {
      name: 'Ambientes',
      links: ambientes.map(({ name, slug }) => ({ name, slug, href: `/casa/${slug}` })),
    },
    {
      name: 'Productos',
      links: productos.map(({ name, slug }) => ({ name, slug, href: `/productos/${slug}` })),
    },
  ]

  return (
    <footer className='bg-black text-bone flex gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 py-6 justify-evenly sm:justify-normal flex-wrap'>
      {siteMap.map(({ name, links }, index) => (
        <section key={`sitemap-${index.toString()}-${name}`}>
          <h1 className='font-tt-norms uppercase text-2xl mb-2'>{name}</h1>
          <ul className='text-sm space-y-2'>
            {links.map(({ name, slug, href }) => (
              <li key={slug}>
                <a href={href}>{name}</a>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className='flex gap-6 sm:gap-12 m-auto'>
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
        <div className='h-24 w-24 bg-bone text-black mt-2 flex-shrink-0 grid place-content-center'>QR</div>
      </section>
    </footer>
  )
}
