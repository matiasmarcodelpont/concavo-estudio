import { DataSet, OmitReferences, Room } from '../types'

/**
 * Creates and returns the rooms repository
 * @param data The application dataset
 * @returns The rooms repository with the data getters.
 */
export function createRoomsRepository(data: DataSet) {
  return {
    /**
     * The rooms are the different spaces of Casa Concavo.
     * @returns The list of all the rooms.
     */
    getRooms(): OmitReferences<Room>[] {
      return data.rooms.map(({ products, ...rest }) => rest)
    },

    /**
     * The rooms are the different spaces of Casa Concavo.
     * @param roomSlug The slug of the room to retrieve its products.
     * @returns A room without references.
     */
    getRoom(roomSlug: string): OmitReferences<Room> | null | undefined {
      const room = data.rooms.find((room) => room.slug === roomSlug)

      if (!room) return null

      const { products, ...rest } = room
      return rest
    },
  }
}
