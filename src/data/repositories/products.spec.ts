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
        contributors: [],
      })

      const result = productsRepository.getConcavoProducts()
      expect(result).toEqual(concavoProducts)
    })
  })

  describe('getProductsByRoom', () => {
    it('returns the products of a certain room', () => {
      const rooms = [
        {
          slug: 'living-comedor',
          name: 'Living/Comedor',
          products: [],
          contributors: [],
        },
        {
          slug: 'cocina',
          name: 'Cocina',
          products: [
            {
              slug: 'azulejos-guardados',
            },
          ],
          contributors: [],
        },
      ]

      const productsInRoom = [
        {
          slug: 'azulejos-guardados',
          name: 'Azulejos Guardados',
          contributor: {
            slug: 'cocina-design',
          },
        },
      ]

      const productsInOtherRooms = [
        {
          slug: 'sofa-carlos',
          name: 'Sofá Carlos V',
          contributor: {
            slug: 'muebles-arte',
          },
        },
        {
          slug: 'bacha-8080',
          name: 'Bacha 8080',
          contributor: null,
        },
      ]

      const productsRepository = createProductsRepository({
        products: [...productsInRoom, ...productsInOtherRooms],
        rooms,
        contributors: [],
      })

      const result = productsRepository.getProductsByRoom('cocina')
      expect(result).toEqual(productsInRoom)
    })
  })
})
