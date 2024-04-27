import { DataSet, MainContributor, StandardContributor, isMainContributor } from '../types'
import { getProductsInRoom } from './common'

/**
 * Creates and returns the contributors repository
 * @param data The application dataset
 * @returns The contributors repository with the data getters.
 */
export function createContributorsRepository(data: DataSet) {
  return {
    /**
     * The contributors are the different brands of the products in Casa Concavo.
     * @returns The list of the main contributors.
     */
    getMainContributors(): Omit<MainContributor, 'isMain'>[] {
      return data.contributors
        .filter(isMainContributor)
        .map(({ slug, name, website, description, email, address }) => ({
          slug,
          name,
          website,
          description,
          email,
          address,
        }))
    },

    /**
     * The contributors are the different brands of the products in Casa Concavo.
     * @returns The list of the standard contributors.
     */
    getStandardContributors(): Omit<StandardContributor, 'isMain' | 'description' | 'email' | 'address'>[] {
      return data.contributors
        .filter((contributor) => !isMainContributor(contributor))
        .map(({ slug, name, website }) => ({ slug, name, website }))
    },

    /**
     * This function returns the main contributors of the products that are in a certain room.
     * @returns The list of the main contributors of the room.
     */
    getMainContributorsByRoom(roomSlug: string): Omit<MainContributor, 'isMain'>[] {
      const productsInRoom = getProductsInRoom(data.products, data.rooms, roomSlug)

      return data.contributors
        .filter((contributor) =>
          productsInRoom.some((productInRoom) => productInRoom.contributor?.slug === contributor.slug),
        )
        .filter(isMainContributor)
        .map(({ slug, name, website, description, email, address }) => ({
          slug,
          name,
          website,
          description,
          email,
          address,
        }))
    },

    /**
     * This function returns the standard contributors of the products that are in a certain room.
     * @returns The list of the standard contributors of the room.
     */
    getStandardContributorsByRoom(
      roomSlug: string,
    ): Omit<StandardContributor, 'isMain' | 'description' | 'email' | 'address'>[] {
      const productsInRoom = getProductsInRoom(data.products, data.rooms, roomSlug)

      return data.contributors
        .filter(
          (contributor) =>
            productsInRoom.some((productInRoom) => productInRoom.contributor?.slug === contributor.slug) &&
            !isMainContributor(contributor),
        )
        .map(({ slug, name, website }) => ({ slug, name, website }))
    },
  }
}
