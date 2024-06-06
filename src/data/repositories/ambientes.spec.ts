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
          images: [],
        },
        {
          slug: 'living-comedor',
          name: 'Living/Comedor',
          productos: [{ slug: 'sillón' }, { slug: 'lámpara' }],
          images: [],
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
        images: [],
      },
      {
        slug: 'living-comedor',
        name: 'Living/Comedor',
        productos: [{ slug: 'sillón' }, { slug: 'lámpara' }],
        images: [],
      },
    ]

    it('returns a ambiente from its slug, without its references', () => {
      const ambienteWithoutReferences = {
        slug: 'cocina',
        name: 'Cocina',
        images: [],
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

    it("returns the ambiente with it's images with their resolved references to the productos", () => {
      const ambientesRepository = createAmbientesRepository({
        ambientes: [
          {
            slug: 'test-ambiente-1',
            name: 'Test ambiente 1',
            productos: [],
            images: [
              {
                src: '0.jpeg',
                width: 800,
                height: 600,
                puntitos: [
                  { productoSlug: 'test-producto-1', coordinates: { x: 0, y: 0 } },
                  { productoSlug: 'test-producto-2', coordinates: { x: 0, y: 0 } },
                ],
              },
              {
                src: '1.jpeg',
                width: 800,
                height: 600,
                puntitos: [
                  { productoSlug: 'test-producto-3', coordinates: { x: 0, y: 0 } },
                  { productoSlug: 'test-producto-4', coordinates: { x: 0, y: 0 } },
                ],
              },
            ],
          },
        ],
        productos: [
          { slug: 'test-producto-1', name: 'Test producto 1', colaborador: null, description: '', link: '' },
          { slug: 'test-producto-2', name: 'Test producto 2', colaborador: null, description: '', link: '' },
          { slug: 'test-producto-3', name: 'Test producto 3', colaborador: null, description: '', link: '' },
          { slug: 'test-producto-4', name: 'Test producto 4', colaborador: null, description: '', link: '' },
        ],
        colaboradores: [],
      })

      const result = ambientesRepository.getAmbiente('test-ambiente-1')
      expect(result).toEqual({
        slug: 'test-ambiente-1',
        name: 'Test ambiente 1',
        images: [
          {
            src: '0.jpeg',
            width: 800,
            height: 600,
            puntitos: [
              {
                producto: { slug: 'test-producto-1', name: 'Test producto 1', colaborador: null },
                coordinates: { x: 0, y: 0 },
              },
              {
                producto: { slug: 'test-producto-2', name: 'Test producto 2', colaborador: null },
                coordinates: { x: 0, y: 0 },
              },
            ],
          },
          {
            src: '1.jpeg',
            width: 800,
            height: 600,
            puntitos: [
              {
                producto: { slug: 'test-producto-3', name: 'Test producto 3', colaborador: null },
                coordinates: { x: 0, y: 0 },
              },
              {
                producto: { slug: 'test-producto-4', name: 'Test producto 4', colaborador: null },
                coordinates: { x: 0, y: 0 },
              },
            ],
          },
        ],
      })
    })
  })
})
