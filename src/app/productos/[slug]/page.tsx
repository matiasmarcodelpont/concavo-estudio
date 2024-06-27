import { productosRepository } from '@/controllers'
import { notFound } from 'next/navigation'
import { Producto as ProductoRelacionado } from '@/components/domain/Producto'
import Image from 'next/image'
import Heading from '@/components/domain/Heading'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Colaborador } from '@/components/domain/Colaborador'
import { Button } from '@/components/ui/button'
import { GridFluid } from '@/components/layouts/Fluid'
import { Globe, InstagramIcon, MailIcon, UserCheck } from 'lucide-react'
import WhatsappIcon from '@/components/icons/WhatsappIcon'
import { useMemo } from 'react'
import removeHttps from '@/lib/removeHttps'
import { addHttpsIfMissing } from '@/lib/addHttpsIfMissing'
import { removeAtSign } from '@/lib/removeAtSign'
import { capitalizeWords } from '@/lib/capitalizeWords'

export default function Producto({ params }: { params: { slug: string } }) {
  const producto = productosRepository.getProducto(decodeURIComponent(params.slug))
  if (!producto) {
    notFound()
  }

  const relatedProductos = productosRepository.getRelatedProductos(producto.slug)

  return (
    <main>
      <Heading className='text-center md:hidden'>{producto.name}</Heading>

      <div className='mb-16 flex flex-wrap'>
        <Carousel
          opts={{
            loop: true,
          }}
          className='w-full md:w-1/2'
        >
          <CarouselContent>
            {[0, 1, 2].map((i) => (
              <CarouselItem className='relative' key={i}>
                <Image src={`/productos/${producto.slug}.jpg`} alt={producto.name} fill className='object-cover' />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <section className='px-4 sm:px-6 md:px-8 mt-10 md:w-1/2'>
          <Heading className='text-center mt-0 sm:mt-0 md:mt-0 hidden md:block'>{producto.name}</Heading>
          <p className='animate-fade-in'>{producto.description}</p>
          {producto.colaborador && (
            <article className='my-10'>
              {[
                {
                  icon: Globe,
                  value: producto.colaborador.website,
                  href: producto.colaborador.website ? addHttpsIfMissing(producto.colaborador.website) : '',
                  callback: removeHttps,
                },
                {
                  icon: InstagramIcon,
                  value: producto.colaborador.instagram,
                  href: `https://instagram.com/${removeAtSign(producto.colaborador.instagram ?? '')}`,
                },
                {
                  icon: MailIcon,
                  value: producto.colaborador.email,
                  href: `mailto:${producto.colaborador.email ?? ''}`,
                },
                {
                  icon: WhatsappIcon,
                  value: producto.colaborador.whatsapp,
                  // TODO: Format phone number
                },
                { icon: UserCheck, value: producto.colaborador.reference, callback: capitalizeWords },
              ].map(({ icon, value, href, callback }, index) => (
                <ContactInfo
                  key={`contact-info-${index.toString()}`}
                  Icon={icon}
                  value={value}
                  callback={callback}
                  href={href}
                />
              ))}
            </article>
          )}

          {producto.link && (
            <Button asChild variant='outline' className='w-full mt-8'>
              <a href={producto.link}>Ver en tienda</a>
            </Button>
          )}

          {producto.colaborador && <Colaborador {...producto.colaborador} className='mt-16' />}
        </section>
      </div>

      {relatedProductos.length > 0 && (
        <section className='mx-6 sm:mx-10 md:mx-12 mb-12 text-center'>
          <Heading secondary>Más productos</Heading>

          <GridFluid aria-label='Productos relacionados'>
            {relatedProductos.map((producto) => (
              <li key={producto.slug}>
                <ProductoRelacionado {...producto} />
              </li>
            ))}
          </GridFluid>
        </section>
      )}
    </main>
  )
}

interface ContactInfoProps {
  Icon: React.ElementType
  value?: string
  callback?: (value: string) => string
  href?: string
}

const ContactInfo = ({ Icon, value, callback, href }: ContactInfoProps) => {
  const parsedValue = useMemo(() => (callback && value ? callback(value) : value), [callback, value])

  return (
    value && (
      <div className='mb-2'>
        <Icon className='inline w-4 h-4 mr-2 text-dark-gray' />
        <p className='mt-8 animate-fade-in inline margin-0'>
          {href ? (
            <a href={href} target='_blank' className='hover:underline'>
              {parsedValue}
            </a>
          ) : (
            parsedValue
          )}
        </p>
      </div>
    )
  )
}
