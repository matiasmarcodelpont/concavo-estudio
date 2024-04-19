import '@testing-library/jest-dom'

import { createProductsRepository } from './products'

describe('products repository', () => {
  describe('getConcavoProducts', () => {
    it('returns only concavo products', () => {
      const notConcavoProducts = [
        {
          slug: "azulejos-los-mejores",
          name: "Azulejos los mejores",
          sponsor: {
            slug: "mati"
          }
        },
        {
          slug: "azulejos-los-peores",
          name: "Azulejos los peores",
          sponsor: {
            slug: "facu"
          }
        }
      ]

      const concavoProducts = [
        {
          slug: "azulejos-verdes",
          name: "Azulejos verdes",
          sponsor: null
        },
        {
          slug: "azulejos-azules",
          name: "Azulejos azules",
          sponsor: null
        }
      ]

      const productsRepository = createProductsRepository({ products: [...notConcavoProducts, ...concavoProducts] })

      const result = productsRepository.getConcavoProducts()
      expect(result).toEqual(concavoProducts)
    })
  })
})
