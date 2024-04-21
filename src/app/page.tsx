import Link from 'next/link'

import { productsRepository } from '@/controllers'

export default function Home() {
  const products = productsRepository.getConcavoProducts()

  return (
    <main>
      <h1>Cóncavo</h1>
      <ul>
        {products.map((product) => (
          <li key={product.slug}>
            <Link href={`/productos/${product.slug}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
