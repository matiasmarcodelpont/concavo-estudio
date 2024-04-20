import '@testing-library/jest-dom'

import { createProductsRepository } from './products'

describe('products repository', () => {
  describe('getConcavoProducts', () => {
    it('returns only concavo products', () => {
      const notConcavoProducts = [
        {
          slug: 'azulejos-los-mejores',
          name: 'Azulejos los mejores',
          contributor: {
            slug: 'mati',
          },
        },
        {
          slug: 'azulejos-los-peores',
          name: 'Azulejos los peores',
          contributor: {
            slug: 'facu',
          },
        },
      ]

      const concavoProducts = [
        {
          slug: 'azulejos-verdes',
          name: 'Azulejos verdes',
          contributor: null,
        },
        {
          slug: 'azulejos-azules',
          name: 'Azulejos azules',
          contributor: null,
        },
      ]

      const productsRepository = createProductsRepository({
        products: [...notConcavoProducts, ...concavoProducts],
        rooms: [],
      })

      const result = productsRepository.getConcavoProducts()
      expect(result).toEqual(concavoProducts)
    })
  })
})
