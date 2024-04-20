import Link from 'next/link'

import { productsRepository } from '@/controllers'

export default function Home() {
  return (
    <main>
      <ul>
        {productsRepository.getConcavoProducts().map((product) => (
          <li key={product.slug}>
            <Link href={`/productos/${product.slug}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
