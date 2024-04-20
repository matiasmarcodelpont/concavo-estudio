import { DataSet, OmitReferences, Room } from '../types'

/**
 * Creates and returns the products repository
 * @param data The application dataset
 * @returns The room repository with the data getters.
 */
export function createRoomsRepository(data: DataSet) {
  return {
    /**
     * The rooms are the different spaces of Casa Concavo.
     * @returns The list of all the rooms.
     */
    getRooms(): OmitReferences<Room>[] {
      return data.rooms.map(({ slug, name }) => ({ slug, name }))
    },
  }
}