import Link from 'next/link'

import { productosRepository } from '@/controllers'
import { notFound } from 'next/navigation'

export default function Producto({ params }: { params: { productoSlug: string } }) {
  const producto = productosRepository.getProducto(decodeURIComponent(params.productoSlug))
  if (!producto) {
    notFound()
  }

  const relatedProductos = productosRepository.getRelatedProductos(producto.slug)

  return (
    <main>
      <h1>{producto.name}</h1>

      <section>
        <ul aria-label='Lista de productos relacionados'>
          {relatedProductos.map((producto) => (
            <li key={producto.slug}>
              <Link href={`/productos/${producto.slug}`}>{producto.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
