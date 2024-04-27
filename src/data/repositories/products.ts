import { ConcavoProduct, DataSet, isConcavoProduct } from '../types'
import { getProductsInRoom } from './common'

/**
 * Creates and returns the products repository
 * @param data The application dataset
 * @returns The products repository with the data getters.
 */
export function createProductsRepository(data: DataSet) {
  return {
    /**
     * Concavo products are products without contributors. This function returns all concavo products.
     * @returns The list of all concavo products.
     */
    getConcavoProducts(): ConcavoProduct[] {
      return data.products.filter(isConcavoProduct)
    },

    /**
     * This function returns all products that are in a certain room.
     * @param roomSlug The slug of the room to retrieve its products.
     * @returns The list of all products in the rooms.
     */
    getProductsInRoom(roomSlug: string) {
      return getProductsInRoom(data.products, data.rooms, roomSlug)
    },

    getProduct(slug: string) {
      return data.products.find((product) => product.slug === slug) ?? null
    },
  }
}
