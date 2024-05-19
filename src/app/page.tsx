import { productosRepository } from '@/controllers'
import { Producto } from '@/components/domain/Producto'
import { GridFluid } from '@/components/layouts/Fluid'
import { Video } from '@/components/domain/Video'
import Heading from '@/components/domain/Heading'

export default function Home() {
  const productos = productosRepository.getProductosConcavo()

  return (
    <main className='text-center'>
      <h1 className='hidden'>Cóncavo</h1>

      <section className='mb-12'>
        <Video src='/casa.mp4' title='Casa Cóncavo' href='/casa' />
      </section>

      <section className='mx-6 sm:mx-8 md:mx-12 mb-12'>
        <Heading id='productos-concavo' className='text-xl sm:text-2xl md:text-3xl'>
          Nuestros Productos
        </Heading>

        <GridFluid className='gap-4' aria-labelledby='productos-concavo'>
          {productos.map((producto) => (
            <li key={producto.slug}>
              <Producto {...producto} />
            </li>
          ))}
        </GridFluid>
      </section>
    </main>
  )
}
