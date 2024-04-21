import Link from 'next/link'

import { contributorsRepository, productsRepository, roomsRepository } from '@/controllers'

export default function Room({ params }: { params: { roomSlug: string } }) {
  const room = roomsRepository.getRoom(params.roomSlug)
  const products = productsRepository.getProductsByRoom(params.roomSlug)
  const mainContributors = contributorsRepository.getMainContributorsByRoom(params.roomSlug)
  const standardContributors = contributorsRepository.getStandardContributorsByRoom(params.roomSlug)

  return (
    <main>
      <h1>{room?.name}</h1>
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
