import { productosRepository } from '@/controllers'
import { Producto } from '@/components/domain/Producto'
import { Video } from '@/components/domain/Video'
import Heading from '@/components/domain/Heading'
import { GridFluid } from '@/components/layouts/Fluid'

export default function Home() {
  const productos = productosRepository.getProductosConcavo()

  return (
    <main className='text-center'>
      <h1 className='hidden'>Cóncavo</h1>

      <section className='mb-12'>
        <Video
          src='/casa.mp4'
          title='Casa Cóncavo'
          href='/casa'
          copy={
            <p className='text-white text-base sm:text-lg md:text-xl font-extralight max-w-[600px] max-h-[200px] m-auto p-6 sm:p-8 md:p-12'>
              CÓNCAVO nace de la experimentación.
              <br />
              Es un camino de disfrute y creación. De imaginar un espacio relajado, armónico y luminoso. De crear
              sensaciones de calma.
            </p>
          }
        />
      </section>

      <section className='mx-4 sm:mx-6 md:mx-8 mb-12'>
        <Heading id='productos-concavo' className='text-xl sm:text-2xl md:text-3xl'>
          Nuestros Productos
        </Heading>

        <GridFluid className='gap-4' aria-labelledby='productos-concavo'>
          {productos.map((producto) => (
            <li key={producto.slug}>
              <Producto {...producto} concavo />
            </li>
          ))}
        </GridFluid>
      </section>
    </main>
  )
}
