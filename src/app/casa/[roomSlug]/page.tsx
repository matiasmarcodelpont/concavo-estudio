import Link from 'next/link'
import { notFound } from 'next/navigation'

import { contributorsRepository, productsRepository, roomsRepository } from '@/controllers'

export default function Room({ params }: { params: { roomSlug: string } }) {
  const room = roomsRepository.getRoom(decodeURIComponent(params.roomSlug))
  if (!room) {
    notFound()
  }

  const products = productsRepository.getProductsInRoom(room.slug)
  const mainContributors = contributorsRepository.getMainContributorsByRoom(room.slug)
  const standardContributors = contributorsRepository.getStandardContributorsByRoom(room.slug)

  return (
    <main>
      <h1>{room.name}</h1>
      <section>
        <ul aria-label='Lista de Productos'>
          {products.map((product) => (
            <li key={product.slug}>
              <Link href={`/productos/${product.slug}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <ul aria-label='Lista de los principales Colaboradores del Ambiente'>
          {mainContributors.map((mainContributor) => (
            <li key={mainContributor.slug}>{mainContributor.name}</li>
          ))}
        </ul>
      </section>
      <section>
        <ul aria-label='Lista del resto de los Colaboradores  del Ambiente'>
          {standardContributors.map((standardContributor) => (
            <li key={standardContributor.slug}>{standardContributor.name}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}
