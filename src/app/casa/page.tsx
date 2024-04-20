import Link from 'next/link'

import { createRoomsRepository } from '@/data/repositories/rooms'
import data from '@/data/data.json'

export default function CasaConcavoHome() {
  return (
    <main>
      <ul>
        {createRoomsRepository(data.rooms)
          .getRooms()
          .map((room) => (
            <li key={room.slug}>
              <Link href={`/ambientes/${room.slug}`}>{room.name}</Link>
            </li>
          ))}
      </ul>
    </main>
  )
}
