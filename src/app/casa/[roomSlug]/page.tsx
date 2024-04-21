import Link from 'next/link'
import { useMemo } from 'react'

import { productsRepository, roomsRepository } from '@/controllers'

export default function Room({ params }: { params: { roomSlug: string } }) {
  const room = useMemo(() => roomsRepository.getRoom(params.roomSlug), [params.roomSlug])
  const products = useMemo(() => productsRepository.getProductsByRoom(params.roomSlug), [params.roomSlug])

  return (
    <main>
      <h1>{room?.name}</h1>
      <section>
        <ul aria-label='Lista de Ambientes'>
          {products.map((product) => (
            <li key={product.slug}>
              <Link href={`/productos/${product.slug}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
