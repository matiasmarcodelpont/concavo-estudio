import { ConcavoProduct, DataSet, isConcavoProduct } from '../types'

/**
 * Creates and returns the products repository
 * @param data The application dataset
 * @returns The product repository with the data getters.
 */
export function createProductsRepository(data: DataSet) {
  return {
    /**
     * Concavo products are products without sponsors. This function returns all concavo products.
     * @returns The list of all concavo products.
     */
    getConcavoProducts(): ConcavoProduct[] {
      return data.products.filter(isConcavoProduct)
    },
  }
}
