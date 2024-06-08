import { DoesNotExistError } from '@/lib/errors'
import { getColaboradorFromProducto, getProductosInAmbiente } from './common'
import { Colaborador } from '../types'

describe('Common functions', () => {
  describe('getProductosByAmbiente', () => {
    const ambientes = [
      {
        slug: 'living-comedor',
        name: 'Living/Comedor',
        productos: [],
        colaboradores: [],
        images: [],
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
        images: [],
      },
    ]

    const productosInAmbiente = [
      {
        slug: 'azulejos-guardados',
        name: 'Azulejos Guardados',
        link: null,
        description: '',
        colaborador: {
          slug: 'cocina-design',
        },
      },
    ]

    const productosInOtherAmbientes = [
      {
        slug: 'sofa-carlos',
        name: 'Sofá Carlos V',
        link: null,
        description: '',
        colaborador: {
          slug: 'muebles-arte',
        },
      },
      {
        slug: 'bacha-8080',
        name: 'Bacha 8080',
        link: null,
        description: '',
        colaborador: null,
      },
    ]

    it('returns the productos of a certain ambiente', () => {
      const result = getProductosInAmbiente([...productosInAmbiente, ...productosInOtherAmbientes], ambientes, 'cocina')
      expect(result).toEqual(productosInAmbiente)
    })

    it("throws an error if the producto ambiente doesn't exist", () => {
      expect(() => {
        getProductosInAmbiente([...productosInAmbiente, ...productosInOtherAmbientes], ambientes, 'baño')
      }).toThrow(DoesNotExistError)
    })
  })

  describe('getColaboradorFromProducto', () => {
    it("returns null if producto doesn't have a colaborador", () => {
      const colaborador = getColaboradorFromProducto([], {
        name: 'Test producto',
        slug: 'test-producto',
        link: null,
        description: '',
        colaborador: null,
      })
      expect(colaborador).toBeNull()
    })

    it('returns the producto colaborador', () => {
      const colaborador = getColaboradorFromProducto(
        [
          { slug: 'another-colaborador', name: 'Another colaborador' } as Colaborador,
          { slug: 'test-colaborador', name: 'Test colaborador' } as Colaborador,
        ],
        {
          name: 'Test producto',
          slug: 'test-producto',
          link: null,
          description: '',
          colaborador: { slug: 'test-colaborador' },
        },
      )
      expect(colaborador).toMatchObject({ slug: 'test-colaborador', name: 'Test colaborador' })
    })
  })
})
