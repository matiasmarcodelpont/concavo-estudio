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
import { removeAtSign } from '@/lib/removeAtSign'
import { startsWithHttps } from '@/lib/startsWithHttps'
import { removeHttpOrHttps } from '@/lib/removeHttpOrHttps'
import { cn } from '@/lib/utils'

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
          <div className='animate-fade-in'>{producto.description}</div>
          {producto.colaborador && (
            <article className='my-10'>
              {[
                {
                  icon: Globe,
                  value: producto.colaborador.website ? removeHttpOrHttps(producto.colaborador.website) : undefined,
                  href:
                    producto.colaborador.website && startsWithHttps(producto.colaborador.website)
                      ? producto.colaborador.website
                      : '',
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
                },
                {
                  icon: UserCheck,
                  value: producto.colaborador.reference,
                  className: 'capitalize',
                },
              ].map(({ icon, value, href, className }, index) => (
                <ContactInfo
                  key={`contact-info-${index.toString()}`}
                  Icon={icon}
                  value={value}
                  href={href}
                  className={className}
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
  href?: string
  className?: string
}

const ContactInfo = ({ Icon, value, href, className }: ContactInfoProps) => {
  return (
    value && (
      <div className={cn('mb-2 flex gap-2 items-center', className)}>
        <Icon className='w-[16px] h-[16px] text-dark-gray' />
        <p className='animate-fade-in margin-0 -mt-[2px]'>
          {href ? (
            <a href={href} target='_blank' className='hover:underline'>
              {value}
            </a>
          ) : (
            value
          )}
        </p>
      </div>
    )
  )
}
