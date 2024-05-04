import Link from 'next/link'

import { productosRepository } from '@/controllers'

export default function Home() {
  const productos = productosRepository.getConcavoProductos()

  return (
    <main>
      <h1>Cóncavo</h1>

      <section>
        <h1 id='productoos-concavo'>Productoos Cóncavo</h1>
        <ul aria-labelledby='productoos-concavo'>
          {productos.map((producto) => (
            <li key={producto.slug}>
              <Link href={`/productoos/${producto.slug}`}>{producto.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
