import Link from 'next/link'

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
        <GridFluid className='gap-4' role='list' aria-labelledby='productos-concavo'>
          {productos.map((producto) => (
            <li key={producto.slug}>
              <Link href={`/productos/${producto.slug}`}>
                <Producto {...producto} />
              </Link>
            </li>
          ))}
        </GridFluid>
      </section>
    </main>
  )
}
