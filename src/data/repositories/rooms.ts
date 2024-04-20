import { DataSet, Room } from '../types'

/**
 * Creates and returns the products repository
 * @param data The application dataset
 * @returns The room repository with the data getters.
 */
export function createRoomsRepository(rooms: DataSet['rooms']) {
  return {
    /**
     * The rroms are the different spaces of CasaConcavo.
     * @returns The list of all the rooms.
     */
    getRooms(): Room[] {
      return rooms
    },
  }
}
