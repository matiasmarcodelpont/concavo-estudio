import Link from 'next/link'

import { roomsRepository } from '@/controllers'

export default function CasaConcavo() {
  return (
    <main>
      <h1>Casa Cóncavo</h1>
      <ul>
        {roomsRepository.getRooms().map((room) => (
          <li key={room.slug}>
            <Link href={`/ambientes/${room.slug}`}>{room.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
