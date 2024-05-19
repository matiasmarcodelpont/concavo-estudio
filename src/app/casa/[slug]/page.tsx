import { notFound } from 'next/navigation'

import { colaboradoresRepository, productosRepository, ambientesRepository } from '@/controllers'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import { FlexWrap, GridFluid } from '@/components/layouts/Fluidd'
import { Producto } from '@/components/domain/Productoo'
import { MainColaborador, StandardColaborador } from '@/components/domain/Colaboradorr'
import Heading from '@/components/domain/Headingg'

export default function Ambiente({ params }: { params: { slug: string } }) {
  const ambiente = ambientesRepository.getAmbiente(decodeURIComponent(params.slug))
  if (!ambiente) {
    notFound()
  }

  const productos = productosRepository.getProductosInAmbiente(ambiente.slug)
  const mainColaboradores = colaboradoresRepository.getMainColaboradoresByAmbiente(ambiente.slug)
  const standardColaboradores = colaboradoresRepository.getStandardColaboradoresByAmbiente(ambiente.slug)

  return (
    <main className='mx-auto text-center'>
      <Heading className='text-xl sm:text-2xl md:text-3xl mx-12 text-left'>{ambiente.name}</Heading>

      <section className='mb-12'>
        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {[0, 1, 2].map((i) => (
              <CarouselItem className='relative' key={i}>
                <Image
                  src={`/ambientes/${ambiente.slug}/${i.toString()}.jpeg`}
                  alt={ambiente.name}
                  fill
                  className='object-cover'
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section aria-labelledby='productos-heading' className='mx-12 mb-12'>
        <Heading className='text-xl sm:text-2xl md:text-3xl' id='productos-heading'>
          Productos
        </Heading>

        <GridFluid className='gap-4' aria-label='Productos'>
          {productos.map((producto) => (
            <li key={producto.slug}>
              <Producto {...producto} />
            </li>
          ))}
        </GridFluid>
      </section>

      <section aria-labelledby='colaboradores-heading' className='mx-12 mb-12'>
        <Heading className='text-xl sm:text-2xl md:text-3xl' id='colaboradores-heading'>
          Colaboradores
        </Heading>

        <FlexWrap
          aria-label='Colaboradores principales'
          className='gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12'
        >
          {mainColaboradores.map((colaborador) => (
            <li key={colaborador.slug} className='list-none'>
              <MainColaborador {...colaborador} />
            </li>
          ))}
        </FlexWrap>

        <FlexWrap aria-label='Colaboradores secundarios' className='gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-center'>
          {standardColaboradores.map((colaborador) => (
            <li key={colaborador.slug} className='list-none'>
              <StandardColaborador {...colaborador} />
            </li>
          ))}
        </FlexWrap>
      </section>
    </main>
  )
}
