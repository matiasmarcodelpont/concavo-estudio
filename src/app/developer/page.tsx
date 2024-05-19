import { Ambiente } from '@/components/domain/Ambiente'
import { MainColaborador, StandardColaborador } from '@/components/domain/Colaborador'
import { Producto } from '@/components/domain/Producto'
import { FlexWrap, GridFluid } from '@/components/layouts/Fluid'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { ambientesRepository, colaboradoresRepository, productosRepository } from '@/controllers'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default function Home() {
  if (process.env.ENVIRONMENT !== 'local') redirect('/')

  const mainColaboradores = colaboradoresRepository.getMainColaboradores()
  const standardColaboradores = colaboradoresRepository.getStandardColaboradores()
  const productosConcavo = productosRepository.getProductosConcavo()

  const ambientes = ambientesRepository.getAmbientes()
  const productos = ambientes.flatMap((ambiente) => productosRepository.getProductosInAmbiente(ambiente.slug))

  return (
    <main className='max-w-[1024px] mx-auto mb-8'>
      <h2 className='text-center'>Main Colaboradores</h2>
      <FlexWrap className='gap-12 justify-center mb-16'>
        {mainColaboradores.map((colaborador) => (
          <MainColaborador key={colaborador.slug} {...colaborador} className='w-[300px]' />
        ))}
      </FlexWrap>

      <h2 className='text-center'>Standard Colaboradores</h2>
      <FlexWrap className='gap-12 justify-center mb-16'>
        {standardColaboradores.map((colaborador) => (
          <StandardColaborador key={colaborador.slug} {...colaborador} className='w-[300px]' />
        ))}
      </FlexWrap>

      <h2 className='text-center'>Productos Cóncavo</h2>
      <GridFluid className='gap-4 justify-center mb-16'>
        {productosConcavo.map((producto) => (
          <Producto key={producto.slug} {...producto} concavo />
        ))}
      </GridFluid>

      <h2 className='text-center'>Productos</h2>
      <GridFluid className='gap-4 justify-center mx-auto mb-16'>
        {productos.map((producto) => (
          <Producto key={producto.slug} {...producto} />
        ))}
      </GridFluid>

      <h2 className='text-center'>Ambientes</h2>
      {ambientes.map((ambiente) => (
        <Ambiente key={ambiente.slug} {...ambiente} className='mb-4 mx-auto' />
      ))}

      <h2 className='text-center mt-16'>Carousel</h2>
      <Carousel>
        <CarouselContent>
          <CarouselItem className='relative'>
            <Image src='/ambientes/cocina.jpeg' alt='Cocina' fill className='object-cover' />
          </CarouselItem>

          <CarouselItem className='relative'>
            <Image src='/ambientes/lavadero.jpeg' alt='Lavadero' fill className='object-cover' />
          </CarouselItem>

          <CarouselItem className='relative'>
            <Image src='/ambientes/living-comedor.jpeg' alt='Living/Comedor' fill className='object-cover' />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  )
}
