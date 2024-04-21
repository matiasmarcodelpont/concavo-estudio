import { DataSet, MainContributors, StandardContributors, isMainContributor } from '../types'

/**
 * Creates and returns the contributors repository
 * @param data The application dataset
 * @returns The contributor repository with the data getters.
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
  }
}
