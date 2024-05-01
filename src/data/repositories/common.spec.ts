import { DoesNotExistError } from '@/lib/errors'
import { getProductContributor, getProductsInRoom } from './common'
import { Contributor } from '../types'

describe('Common functions', () => {
  describe('getProductsByRoom', () => {
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

    it('returns the products of a certain room', () => {
      const result = getProductsInRoom([...productsInRoom, ...productsInOtherRooms], rooms, 'cocina')
      expect(result).toEqual(productsInRoom)
    })

    it("throws an error if the product room doesn't exist", () => {
      expect(() => {
        getProductsInRoom([...productsInRoom, ...productsInOtherRooms], rooms, 'baño')
      }).toThrow(DoesNotExistError)
    })
  })

  describe('getProductContributor', () => {
    it("returns null if product doesn't have a contributor", () => {
      const contributor = getProductContributor([], { name: 'Test product', slug: 'test-product', contributor: null })
      expect(contributor).toBeNull()
    })

    it('returns the product contributor', () => {
      const contributor = getProductContributor(
        [
          { slug: 'another-contributor', name: 'Another contributor' } as Contributor,
          { slug: 'test-contributor', name: 'Test contributor' } as Contributor,
        ],
        {
          name: 'Test product',
          slug: 'test-product',
          contributor: { slug: 'test-contributor' },
        },
      )
      expect(contributor).toMatchObject({ slug: 'test-contributor', name: 'Test contributor' })
    })
  })
})
