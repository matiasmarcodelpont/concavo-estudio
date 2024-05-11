import { productosRepository } from '@/controllers'
import { Producto } from '@/components/domain/producto'
import { GridFluid } from '@/components/layouts/fluid'

export default function Home() {
  const productos = productosRepository.getProductosConcavo()

  return (
    <main className='text-center'>
      <h1>Cóncavo</h1>

      <section className='mx-12'>
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
