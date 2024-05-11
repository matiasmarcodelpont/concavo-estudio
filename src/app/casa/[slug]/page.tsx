import { notFound } from 'next/navigation'

import { colaboradoresRepository, productosRepository, ambientesRepository } from '@/controllers'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import { FlexWrap, GridFluid } from '@/components/layouts/fluid'
import { Producto } from '@/components/domain/producto'
import { MainColaborador, StandardColaborador } from '@/components/domain/colaborador'

export default function Ambiente({ params }: { params: { slug: string } }) {
  const ambiente = ambientesRepository.getAmbiente(decodeURIComponent(params.slug))
  if (!ambiente) {
    notFound()
  }

  const productos = productosRepository.getProductosInAmbiente(ambiente.slug)
  const mainColaboradores = colaboradoresRepository.getMainColaboradoresByAmbiente(ambiente.slug)
  const standardColaboradores = colaboradoresRepository.getStandardColaboradoresByAmbiente(ambiente.slug)

  return (
    <main className='max-w-[1024px] mx-auto'>
      <h1 className='mx-4 mb-4 text-xl font-bold underline'>{ambiente.name}</h1>

      <Carousel>
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

      <section aria-labelledby='productos-heading'>
        <h1 id='productos-heading' className='mx-4 mt-12 mb-4 text-xl font-bold underline'>
          Productos
        </h1>

        <GridFluid className='gap-4  mx-4' aria-label='Productos'>
          {productos.map((producto) => (
            <li key={producto.slug}>
              <Producto {...producto} />
            </li>
          ))}
        </GridFluid>
      </section>

      <section aria-labelledby='colaboradores-heading'>
        <h1 id='colaboradores-heading' className='mx-4 mt-12  mt-12 mb-4 text-xl font-bold underline'>
          Colaboradores
        </h1>

        <FlexWrap aria-label='Colaboradores principales' className='gap-12 justify-center mx-4'>
          {mainColaboradores.map((colaborador) => (
            <li key={colaborador.slug}>
              <MainColaborador {...colaborador} />
            </li>
          ))}
        </FlexWrap>

        <FlexWrap aria-label='Colaboradores secundarios' className='gap-12 justify-center mx-4'>
          {standardColaboradores.map((colaborador) => (
            <li key={colaborador.slug}>
              <StandardColaborador {...colaborador} />
            </li>
          ))}
        </FlexWrap>
      </section>
    </main>
  )
}
