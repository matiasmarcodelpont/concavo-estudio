import '@testing-library/jest-dom'

import { createProductsRepository } from './products'
import { DoesNotExistError } from '@/lib/errors'
import { Contributor, DataSet } from '../types'

const exampleProducts = [
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

describe('products repository', () => {
  describe('getConcavoProducts', () => {
    it('returns only concavo products', () => {
      const notConcavoProducts = exampleProducts

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
    const rooms = [
      {
        slug: 'living-comedor',
        name: 'Living/Comedor',
        products: [
          {
            slug: 'lampara-hierro',
          },
        ],
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

    it('returns the products of a certain room', () => {
      const productsRepository = createProductsRepository({
        products: [...productsInRoom, ...productsInOtherRooms],
        rooms,
        contributors: [],
      })

      const result = productsRepository.getProductsInRoom('cocina')
      expect(result).toEqual(productsInRoom)
    })

    it("throws an error if the product room doesn't exist", () => {
      const productsRepository = createProductsRepository({
        products: [...productsInRoom, ...productsInOtherRooms],
        rooms,
        contributors: [],
      })

      expect(() => {
        productsRepository.getProductsInRoom('baño')
      }).toThrow(DoesNotExistError)
    })
  })

  describe('getProduct', () => {
    it('returns the product that matches with the passed slug', () => {
      const productsRepository = createProductsRepository({ products: exampleProducts, rooms: [], contributors: [] })

      const product = productsRepository.getProduct('azulejos-los-mejores')
      expect(product?.slug).toBe('azulejos-los-mejores')
    })

    it('returns null if no product matches with the passed slug', () => {
      const productsRepository = createProductsRepository({ products: exampleProducts, rooms: [], contributors: [] })

      const product = productsRepository.getProduct('unexistent-slug')
      expect(product).toBe(null)
    })

    it('includes contributor information is product has one', () => {
      const productsRepository = createProductsRepository({
        products: exampleProducts,
        rooms: [],
        contributors: [
          { slug: 'other', name: 'Other contributor' } as Contributor,
          { slug: 'mati', name: 'Mati contributor' } as Contributor,
        ],
      })

      const product = productsRepository.getProduct('azulejos-los-mejores')
      expect(product?.contributor?.name).toBe('Mati contributor')
    })
  })

  describe('getRelatedProducts', () => {
    const testDataset = {
      products: [
        { slug: 'product-1' },
        { slug: 'product-2' },
        { slug: 'product-3' },
        { slug: 'product-4' },
        { slug: 'product-5' },
      ],
      rooms: [
        {
          slug: 'room-a',
          name: 'Room A',
          products: [{ slug: 'product-1' }, { slug: 'product-2' }, { slug: 'product-4' }],
        },
        {
          slug: 'room-b',
          name: 'Room B',
          products: [{ slug: 'product-1' }, { slug: 'product-3' }, { slug: 'product-4' }],
        },
        {
          slug: 'room-c',
          name: 'Room C',
          products: [{ slug: 'product-5' }],
        },
      ],
    }

    it('returns products that are in the same room as the passed product', () => {
      const productsRepository = createProductsRepository(testDataset as DataSet)

      const relatedProducts = productsRepository.getRelatedProducts('product-1')

      expect(relatedProducts).toHaveLength(3)
      expect(relatedProducts).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ slug: 'product-2' }),
          expect.objectContaining({ slug: 'product-3' }),
          expect.objectContaining({ slug: 'product-4' }),
        ]),
      )
    })
  })
})
