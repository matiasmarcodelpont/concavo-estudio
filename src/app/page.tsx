import { useMemo } from 'react'
import Link from 'next/link'

import { createProductsRepository } from '@/data/repositories/products'
import data from '@/data/data.json'

function useConcavoProducts() {
  const productsRepository = useMemo(() => {
    return createProductsRepository(data.products)
  }, [])

  const concavoProducts = useMemo(() => {
    return productsRepository.getConcavoProducts()
  }, [productsRepository])

  return concavoProducts
}

export default function Home() {
  const concavoProducts = useConcavoProducts()

  return (
    <main>
      <ul>
        {concavoProducts.map((product) => (
          <li key={product.slug}>
            <Link href={`/products/${product.slug}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
