import Link from 'next/link'

import { contributorsRepository, roomsRepository } from '@/controllers'

export default function CasaConcavo() {
  const rooms = roomsRepository.getRooms()
  const mainContributors = contributorsRepository.getMainContributors()
  const standardContributors = contributorsRepository.getStandardContributors()

  return (
    <main>
      <h1>Casa Cóncavo</h1>
      <section>
        <ul aria-label='Lista de Ambientes'>
          {rooms.map((room) => (
            <li key={room.slug}>
              <Link href={`/ambientes/${room.slug}`}>{room.name}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <ul aria-label='Lista de los principales Colaboradores'>
          {mainContributors.map((mainContributor) => (
            <li key={mainContributor.slug}>{mainContributor.name}</li>
          ))}
        </ul>
      </section>
      <section>
        <ul aria-label='Lista del resto de los Colaboradores'>
          {standardContributors.map((standardContributor) => (
            <li key={standardContributor.slug}>{standardContributor.name}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}
