import '@testing-library/jest-dom'
import { createAmbientesRepository } from './ambientes'

describe('ambientes repository', () => {
  describe('getAmbientes', () => {
    it('returns all ambientes without its references', () => {
      const ambientes = [
        {
          slug: 'cocina',
          name: 'Cocina',
          productos: [{ slug: 'heladera' }, { slug: 'azulejos' }],
        },
        {
          slug: 'living-comedor',
          name: 'Living/Comedor',
          productos: [{ slug: 'sillón' }, { slug: 'lámpara' }],
        },
      ]

      const ambientesWithoutReferences = [
        {
          slug: 'cocina',
          name: 'Cocina',
        },
        {
          slug: 'living-comedor',
          name: 'Living/Comedor',
        },
      ]

      const ambientesRepository = createAmbientesRepository({
        productos: [],
        ambientes,
        colaboradores: [],
      })

      const result = ambientesRepository.getAmbientes()
      expect(result).toEqual(ambientesWithoutReferences)
    })
  })

  describe('getAmbiente', () => {
    const ambientes = [
      {
        slug: 'cocina',
        name: 'Cocina',
        productos: [{ slug: 'heladera' }, { slug: 'azulejos' }],
      },
      {
        slug: 'living-comedor',
        name: 'Living/Comedor',
        productos: [{ slug: 'sillón' }, { slug: 'lámpara' }],
      },
    ]

    it('returns a ambiente from its slug, without its references', () => {
      const ambienteWithoutReferences = {
        slug: 'cocina',
        name: 'Cocina',
      }

      const ambientesRepository = createAmbientesRepository({
        productos: [],
        ambientes,
        colaboradores: [],
      })

      const result = ambientesRepository.getAmbiente('cocina')
      expect(result).toEqual(ambienteWithoutReferences)
    })

    it("returns null if the slug doesn't exist", () => {
      const ambientesRepository = createAmbientesRepository({
        productos: [],
        ambientes,
        colaboradores: [],
      })

      const result = ambientesRepository.getAmbiente('baño')
      expect(result).toBeNull()
    })
  })
})
