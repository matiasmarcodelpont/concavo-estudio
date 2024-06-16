import '@testing-library/jest-dom'
import { createColaboradoresRepository } from './colaboradores'
import { Colaborador } from '../types'
import { DoesNotExistError } from '@/lib/errors'

describe('colaboradores repository', () => {
  describe('getColaboradores', () => {
    it('returns all colaboradores', () => {
      const colaboradores: Colaborador[] = [
        {
          slug: 'elegance',
          name: 'Elegance',
        },
        {
          slug: 'luz-viva',
          name: 'Luz Viva',
        },
        {
          slug: 'muebles-arte',
          name: 'Muebles de Arte',
        },
        {
          slug: 'cocina-design',
          name: 'Cocina Design',
        },
      ]

      const colaboradoresRepository = createColaboradoresRepository({
        productos: [],
        ambientes: [],
        colaboradores,
      })

      const result = colaboradoresRepository.getColaboradores()
      expect(result).toEqual(colaboradores)
    })
  })

  describe('getColaboradoresByAmbiente', () => {
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
          {
            slug: 'luz-led',
          },
        ],
        colaboradores: [],
        images: [],
      },
    ]

    const productos = [
      {
        slug: 'azulejos-guardados',
        name: 'Azulejos Guardados',
        description: '',
        link: null,
        colaborador: {
          slug: 'cocina-design',
        },
      },
      {
        slug: 'sofa-carlos',
        name: 'Sofá Carlos V',
        description: '',
        link: null,
        colaborador: {
          slug: 'muebles-arte',
        },
      },
      {
        slug: 'luz-led',
        name: 'Luz Led',
        description: '',
        link: null,
        colaborador: {
          slug: 'luz-viva',
        },
      },
      {
        slug: 'bacha-8080',
        name: 'Bacha 8080',
        description: '',
        link: null,
        colaborador: null,
      },
    ]

    const colaboradores: Colaborador[] = [
      {
        slug: 'luz-viva',
        name: 'Luz Viva',
      },
      {
        slug: 'cocina-design',
        name: 'Cocina Design',
      },
      {
        slug: 'elegance',
        name: 'Elegance',
      },
      {
        slug: 'muebles-arte',
        name: 'Muebles de Arte',
      },
    ]

    const colaboradoresInAmbiente: Colaborador[] = [
      {
        slug: 'luz-viva',
        name: 'Luz Viva',
      },
      {
        slug: 'cocina-design',
        name: 'Cocina Design',
      },
    ]

    it('returns colaboradores by a ambiente', () => {
      const colaboradoresRepository = createColaboradoresRepository({
        productos,
        ambientes,
        colaboradores,
      })

      const result = colaboradoresRepository.getColaboradoresByAmbiente('cocina')
      expect(result).toEqual(colaboradoresInAmbiente)
    })

    it("thows an error if the ambiente doesn't exist", () => {
      const colaboradoresRepository = createColaboradoresRepository({
        productos,
        ambientes,
        colaboradores,
      })

      expect(() => {
        colaboradoresRepository.getColaboradoresByAmbiente('baño')
      }).toThrow(DoesNotExistError)
    })
  })
})
