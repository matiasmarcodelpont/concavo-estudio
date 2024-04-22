import { DataSet, MainContributors, StandardContributors, isMainContributor } from '../types'

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
    getMainContributors(): Omit<MainContributors, 'isMain'>[] {
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
    getStandardContributors(): Omit<StandardContributors, 'isMain' | 'description' | 'email' | 'address'>[] {
      return data.contributors
        .filter((contributor) => !isMainContributor(contributor))
        .map(({ slug, name, website }) => ({ slug, name, website }))
    },

    /**
     * This function returns the main contributors of the products that are in a certain room.
     * @returns The list of the main contributors of the room.
     */
    getMainContributorsByRoom(roomSlug: string): Omit<MainContributors, 'isMain'>[] {
      const room = data.rooms.find((room) => room.slug === roomSlug)

      const productsInRoom = data.products.filter((product) =>
        room?.products.some((productInRoom) => productInRoom.slug === product.slug),
      )

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
    ): Omit<StandardContributors, 'isMain' | 'description' | 'email' | 'address'>[] {
      const room = data.rooms.find((room) => room.slug === roomSlug)

      const productsInRoom = data.products.filter((product) =>
        room?.products.some((productInRoom) => productInRoom.slug === product.slug),
      )

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
