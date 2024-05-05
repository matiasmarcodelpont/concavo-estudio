import Link from 'next/link'

import { productosRepository } from '@/controllers'

export default function Home() {
  const productos = productosRepository.getProductosConcavo()

  return (
    <main>
      <h1>Cóncavo</h1>

      <section>
        <h1 id='productos-concavo'>Productos Cóncavo</h1>
        <ul aria-labelledby='productos-concavo'>
          {productos.map((producto) => (
            <li key={producto.slug}>
              <Link href={`/productos/${producto.slug}`}>{producto.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
