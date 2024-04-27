import Link from 'next/link'

import { productsRepository } from '@/controllers'
import { notFound } from 'next/navigation'

export default function Product({ params }: { params: { productSlug: string } }) {
  const product = productsRepository.getProduct(decodeURI(params.productSlug))
  if (!product) {
    notFound()
  }

  const relatedProducts = productsRepository.getRelatedProducts(product.slug)

  return (
    <main>
      <h1>{product.name}</h1>

      <section>
        <ul aria-label='Lista de productos relacionados'>
          {relatedProducts.map((product) => (
            <li key={product.slug}>
              <Link href={`/productos/${product.slug}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
