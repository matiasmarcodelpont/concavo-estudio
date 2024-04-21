import '@testing-library/jest-dom'
import { createRoomsRepository } from './rooms'

describe('rooms repository', () => {
  describe('getRooms', () => {
    it('returns all rooms without its references', () => {
      const rooms = [
        {
          slug: 'cocina',
          name: 'Cocina',
          products: [{ slug: 'heladera' }, { slug: 'azulejos' }],
        },
        {
          slug: 'living-comedor',
          name: 'Living/Comedor',
          products: [{ slug: 'sillón' }, { slug: 'lámpara' }],
        },
      ]

      const roomsWithoutReferences = [
        {
          slug: 'cocina',
          name: 'Cocina',
        },
        {
          slug: 'living-comedor',
          name: 'Living/Comedor',
        },
      ]

      const roomsRepository = createRoomsRepository({
        products: [],
        rooms,
        contributors: [],
      })

      const result = roomsRepository.getRooms()
      expect(result).toEqual(roomsWithoutReferences)
    })
  })

  describe('getRoom', () => {
    it('returns a room from its slug, without its references', () => {
      const rooms = [
        {
          slug: 'cocina',
          name: 'Cocina',
          products: [{ slug: 'heladera' }, { slug: 'azulejos' }],
        },
        {
          slug: 'living-comedor',
          name: 'Living/Comedor',
          products: [{ slug: 'sillón' }, { slug: 'lámpara' }],
        },
      ]

      const roomWithoutReferences = {
        slug: 'cocina',
        name: 'Cocina',
      }

      const roomsRepository = createRoomsRepository({
        products: [],
        rooms,
        contributors: [],
      })

      const result = roomsRepository.getRoom('cocina')
      expect(result).toEqual(roomWithoutReferences)
    })
  })
})
