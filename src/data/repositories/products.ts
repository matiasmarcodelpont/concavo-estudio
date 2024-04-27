import { ConcavoProduct, DataSet, Product, isConcavoProduct } from '../types'
import { getProductsInRoom } from './common'

/**
 * Creates and returns the products repository
 * @param data The application dataset
 * @returns The products repository with the data getters.
 */
export function createProductsRepository(data: DataSet) {
  function getProductContributor(product: Product) {
    const productContributor = product.contributor
    if (!productContributor) {
      return null
    }

    return data.contributors.find((contributor) => contributor.slug === productContributor.slug) ?? null
  }

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
      const product = data.products.find((product) => product.slug === slug)
      if (product === undefined) {
        return null
      }

      const contributor = getProductContributor(product)

      return {
        ...product,
        contributor,
      }
    },
  }
}
