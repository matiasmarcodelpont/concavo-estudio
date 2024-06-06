import { productosRepository } from '@/controllers'
import { notFound } from 'next/navigation'
import { Producto as ProductoRelacionado } from '@/components/domain/Producto'
import Image from 'next/image'
import Heading from '@/components/domain/Heading'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { StandardColaborador } from '@/components/domain/Colaborador'
import { Button } from '@/components/ui/button'

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
          <Heading className='text-center mt-0 hidden md:block'>{producto.name}</Heading>
          <p>{producto.description}</p>
          {producto.colaborador && <p className='mt-8'>{producto.colaborador.contact}</p>}

          {producto.link && (
            <Button asChild variant='outline' className='w-full mt-8'>
              <a href={producto.link}>Ver en tienda</a>
            </Button>
          )}

          {producto.colaborador && <StandardColaborador {...producto.colaborador} className='mt-10' />}
        </section>
      </div>

      {relatedProductos.length > 0 && (
        <section>
          <Heading className='text-center'>Más productos</Heading>

          <ul aria-label='Productos relacionados'>
            {relatedProductos.map((producto) => (
              <li key={producto.slug}>
                <ProductoRelacionado {...producto} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  )
}
