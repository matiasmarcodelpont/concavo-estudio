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
            <p className='text-bone text-sm sm:text-base md:text-lg font-extralight md:leading-tight sm:leading-tight leading-tight max-w-[600px] max-h-[200px] m-auto p-6 sm:p-8 md:p-12'>
              CÓNCAVO nace de la experimentación.
              <br />
              Es un camino de disfrute y creación. De imaginar un espacio relajado, armónico y luminoso.
            </p>
          }
        />
      </section>

      <section className='mx-6 sm:mx-10 md:mx-12 mb-12'>
        <Heading id='productos-concavo' className='text-xl sm:text-2xl md:text-3xl'>
          Nuestros Productos
        </Heading>

        <GridFluid className='gap-12' aria-labelledby='productos-concavo'>
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
