import '@testing-library/jest-dom'

import { createProductosRepository } from './productos'
import { DoesNotExistError } from '@/lib/errors'
import { Colaborador, DataSet } from '../types'

const exampleProductos = [
  {
    slug: 'azulejos-los-mejores',
    name: 'Azulejos los mejores',
    colaborador: {
      slug: 'mati',
    },
  },
  {
    slug: 'azulejos-los-peores',
    name: 'Azulejos los peores',
    colaborador: {
      slug: 'facu',
    },
  },
]

describe('productos repository', () => {
  describe('getConcavoProductos', () => {
    it('returns only concavo productos', () => {
      const notConcavoProductos = exampleProductos

      const concavoProductos = [
        {
          slug: 'azulejos-verdes',
          name: 'Azulejos verdes',
          colaborador: null,
        },
        {
          slug: 'azulejos-azules',
          name: 'Azulejos azules',
          colaborador: null,
        },
      ]

      const productosRepository = createProductosRepository({
        productos: [...notConcavoProductos, ...concavoProductos],
        ambientes: [],
        colaboradores: [],
      })

      const result = productosRepository.getProductosConcavo()
      expect(result).toEqual(concavoProductos)
    })
  })

  describe('getProductosByAmbiente', () => {
    const ambientes = [
      {
        slug: 'living-comedor',
        name: 'Living/Comedor',
        productos: [
          {
            slug: 'lampara-hierro',
          },
        ],
        colaboradores: [],
      },
      {
        slug: 'cocina',
        name: 'Cocina',
        productos: [
          {
            slug: 'azulejos-guardados',
          },
        ],
        colaboradores: [],
      },
    ]

    const productosInAmbiente = [
      {
        slug: 'azulejos-guardados',
        name: 'Azulejos Guardados',
        colaborador: {
          slug: 'cocina-design',
        },
      },
    ]

    const productosInOtherAmbientes = [
      {
        slug: 'sofa-carlos',
        name: 'Sofá Carlos V',
        colaborador: {
          slug: 'muebles-arte',
        },
      },
      {
        slug: 'bacha-8080',
        name: 'Bacha 8080',
        colaborador: null,
      },
    ]

    it('returns the productos of a certain ambiente', () => {
      const productosRepository = createProductosRepository({
        productos: [...productosInAmbiente, ...productosInOtherAmbientes],
        ambientes,
        colaboradores: [],
      })

      const result = productosRepository.getProductosInAmbiente('cocina')
      expect(result).toEqual(productosInAmbiente)
    })

    it("throws an error if the producto ambiente doesn't exist", () => {
      const productosRepository = createProductosRepository({
        productos: [...productosInAmbiente, ...productosInOtherAmbientes],
        ambientes,
        colaboradores: [],
      })

      expect(() => {
        productosRepository.getProductosInAmbiente('baño')
      }).toThrow(DoesNotExistError)
    })
  })

  describe('getProducto', () => {
    it('returns the producto that matches with the passed slug', () => {
      const productosRepository = createProductosRepository({
        productos: exampleProductos,
        ambientes: [],
        colaboradores: [],
      })

      const producto = productosRepository.getProducto('azulejos-los-mejores')
      expect(producto?.slug).toBe('azulejos-los-mejores')
    })

    it('returns null if no producto matches with the passed slug', () => {
      const productosRepository = createProductosRepository({
        productos: exampleProductos,
        ambientes: [],
        colaboradores: [],
      })

      const producto = productosRepository.getProducto('unexistent-slug')
      expect(producto).toBe(null)
    })

    it('includes colaborador information is producto has one', () => {
      const productosRepository = createProductosRepository({
        productos: exampleProductos,
        ambientes: [],
        colaboradores: [
          { slug: 'other', name: 'Other colaborador' } as Colaborador,
          { slug: 'mati', name: 'Mati colaborador' } as Colaborador,
        ],
      })

      const producto = productosRepository.getProducto('azulejos-los-mejores')
      expect(producto?.colaborador?.name).toBe('Mati colaborador')
    })
  })

  describe('getRelatedProductos', () => {
    const testDataset = {
      productos: [
        { slug: 'producto-1' },
        { slug: 'producto-2' },
        { slug: 'producto-3' },
        { slug: 'producto-4' },
        { slug: 'producto-5' },
      ],
      ambientes: [
        {
          slug: 'ambiente-a',
          name: 'Ambiente A',
          productos: [{ slug: 'producto-1' }, { slug: 'producto-2' }, { slug: 'producto-4' }],
        },
        {
          slug: 'ambiente-b',
          name: 'Ambiente B',
          productos: [{ slug: 'producto-1' }, { slug: 'producto-3' }, { slug: 'producto-4' }],
        },
        {
          slug: 'ambiente-c',
          name: 'Ambiente C',
          productos: [{ slug: 'producto-5' }],
        },
      ],
    }

    it('returns productos that are in the same ambiente as the passed producto', () => {
      const productosRepository = createProductosRepository(testDataset as DataSet)

      const relatedProductos = productosRepository.getRelatedProductos('producto-1')

      expect(relatedProductos).toHaveLength(3)
      expect(relatedProductos).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ slug: 'producto-2' }),
          expect.objectContaining({ slug: 'producto-3' }),
          expect.objectContaining({ slug: 'producto-4' }),
        ]),
      )
    })
  })
})
