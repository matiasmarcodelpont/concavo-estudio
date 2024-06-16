'use client'

import { notFound } from 'next/navigation'

import Autoplay from 'embla-carousel-autoplay'
import { colaboradoresRepository, productosRepository, ambientesRepository } from '@/controllers'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { FlexWrap, GridFluid } from '@/components/layouts/Fluid'
import { Producto } from '@/components/domain/Producto'
import { Colaborador } from '@/components/domain/Colaborador'
import Heading from '@/components/domain/Heading'
import { AmbienteImageWithPuntitos } from './_components/AmbienteImageWithPuntitos'

export default function Ambiente({ params }: { params: { slug: string } }) {
  const ambiente = ambientesRepository.getAmbiente(decodeURIComponent(params.slug))
  if (!ambiente) {
    notFound()
  }

  const productos = productosRepository.getProductosInAmbiente(ambiente.slug)
  const colaboradores = colaboradoresRepository.getColaboradoresByAmbiente(ambiente.slug)

  return (
    <main className='mx-auto text-center'>
      <Heading className='text-center'>{ambiente.name}</Heading>

      <section className='mb-12'>
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[Autoplay({ delay: 4000 })]}
        >
          <CarouselContent>
            {ambiente.images.map((image) => (
              <CarouselItem className='relative' key={image.src}>
                <AmbienteImageWithPuntitos ambiente={ambiente} image={image} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      <section aria-labelledby='productos-heading' className='mx-6 sm:mx-10 md:mx-12 mb-12'>
        <Heading secondary id='productos-heading'>
          Productos
        </Heading>

        <GridFluid aria-label='Productos'>
          {productos.map((producto) => (
            <li key={producto.slug}>
              <Producto {...producto} />
            </li>
          ))}
        </GridFluid>
      </section>

      <section aria-labelledby='colaboradores-heading' className='mx-6 sm:mx-10 md:mx-12 mb-12'>
        <Heading secondary id='colaboradores-heading'>
          Colaboradores
        </Heading>

        {colaboradores.length > 0 && (
          <FlexWrap
            aria-label='Colaboradores'
            className='gap-10 sm:gap-12 md:gap-14 lg:gap-16 mb-10 sm:mb-12 md:mb-14 lg:mb-16'
          >
            {colaboradores.map((colaborador) => (
              <li key={colaborador.slug} className='list-none'>
                <Colaborador {...colaborador} />
              </li>
            ))}
          </FlexWrap>
        )}
      </section>
    </main>
  )
}
