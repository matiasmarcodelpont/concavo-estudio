import Link from 'next/link'

import { contributorsRepository, roomsRepository } from '@/controllers'

export default function CasaConcavo() {
  return (
    <main>
      <h1>Casa Cóncavo</h1>
      <section>
        <ul aria-label='Lista de Ambientes'>
          {roomsRepository.getRooms().map((room) => (
            <li key={room.slug}>
              <Link href={`/ambientes/${room.slug}`}>{room.name}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <ul aria-label='Lista de los principales Colaboradores'>
          {contributorsRepository.getMainContributors().map((mainContributor) => (
            <li key={mainContributor.slug}>{mainContributor.name}</li>
          ))}
        </ul>
      </section>
      <section>
        <ul aria-label='Lista del resto de los Colaboradores'>
          {contributorsRepository.getStandardContributors().map((standardContributor) => (
            <li key={standardContributor.slug}>{standardContributor.name}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}
