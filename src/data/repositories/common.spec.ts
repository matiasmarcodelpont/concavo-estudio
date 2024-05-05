import { DoesNotExistError } from '@/lib/errors'
import { getProductoColaborador, getProductosInAmbiente } from './common'
import { Colaborador } from '../types'

describe('Common functions', () => {
  describe('getProductosByAmbiente', () => {
    const ambientes = [
      {
        slug: 'living-comedor',
        name: 'Living/Comedor',
        productos: [],
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
      const result = getProductosInAmbiente([...productosInAmbiente, ...productosInOtherAmbientes], ambientes, 'cocina')
      expect(result).toEqual(productosInAmbiente)
    })

    it("throws an error if the producto ambiente doesn't exist", () => {
      expect(() => {
        getProductosInAmbiente([...productosInAmbiente, ...productosInOtherAmbientes], ambientes, 'baño')
      }).toThrow(DoesNotExistError)
    })
  })

  describe('getProductoColaborador', () => {
    it("returns null if producto doesn't have a colaborador", () => {
      const colaborador = getProductoColaborador([], {
        name: 'Test producto',
        slug: 'test-producto',
        colaborador: null,
      })
      expect(colaborador).toBeNull()
    })

    it('returns the producto colaborador', () => {
      const colaborador = getProductoColaborador(
        [
          { slug: 'another-colaborador', name: 'Another colaborador' } as Colaborador,
          { slug: 'test-colaborador', name: 'Test colaborador' } as Colaborador,
        ],
        {
          name: 'Test producto',
          slug: 'test-producto',
          colaborador: { slug: 'test-colaborador' },
        },
      )
      expect(colaborador).toMatchObject({ slug: 'test-colaborador', name: 'Test colaborador' })
    })
  })
})
