import { productosRepository } from '@/controllers'
import { Producto } from '@/components/domain/producto'
import { GridFluid } from '@/components/layouts/fluid'
import { Video } from '@/components/domain/video'

export default function Home() {
  const productos = productosRepository.getProductosConcavo()

  return (
    <main className='text-center'>
      <h1>Cóncavo</h1>

      <section className='mx-12'>
        <Video
          src='https://player.vimeo.com/video/941087021?muted=1&amp;autoplay=1&amp;loop=1&amp;background=1&amp;app_id=122963'
          title='Casa Cóncavo'
          href='/casa'
        />

        <h1 className='text-center' id='productos-concavo'>
          Productos Cóncavo
        </h1>
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
