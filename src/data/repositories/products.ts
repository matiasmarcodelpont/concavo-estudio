import { ConcavoProduct, Contributor, DataSet, OmitReferences, Product, Reference, isConcavoProduct } from '../types'
import { getProductContributor, getProductsInRoom } from './common'

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

    getProduct(slug: string): (OmitReferences<Product> & { contributor: Contributor | null }) | null {
      const product = data.products.find((product) => product.slug === slug)
      if (product === undefined) {
        return null
      }

      const contributor = getProductContributor(data.contributors, product)

      return {
        ...product,
        contributor,
      }
    },

    getRelatedProducts(productSlug: string): OmitReferences<Product>[] {
      const roomsWithProduct = data.rooms.filter((room) =>
        room.products.some((product) => product.slug === productSlug),
      )

      const relatedProductsReferences = roomsWithProduct.flatMap((room) =>
        room.products.filter((product) => product.slug !== productSlug),
      )

      const uniqueRelatedProductsReferences = relatedProductsReferences.reduce<Reference[]>(
        (uniqueProducts, product) =>
          uniqueProducts.some((uniqueProduct) => uniqueProduct.slug === product.slug)
            ? uniqueProducts
            : [...uniqueProducts, product],
        [],
      )

      const relatedProducts = uniqueRelatedProductsReferences.map((productReference) =>
        data.products.find((product) => product.slug === productReference.slug),
      )

      return (
        relatedProducts
          .filter((product): product is Exclude<typeof product, undefined> => product !== undefined)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .map(({ contributor, ...rest }) => rest)
      )
    },
  }
}
