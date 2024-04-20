import '@testing-library/jest-dom'
import { createRoomsRepository } from './rooms'
import { createContributorsRepository } from './contributors'
import { Contributors, MainContributors, StandardContributors } from '../types'

describe('contributors repository', () => {
  describe('getMainContributors', () => {
    it('returns main contributors', () => {
      const contributors: Contributors[] = [
        {
          slug: 'elegance',
          name: 'Elegance',
          website: 'www.pisoselegance.es',
          isMain: true,
          description:
            'Líder en revestimientos de suelos elegantes y duraderos para hogares y negocios. Calidad, innovación y compromiso con la sostenibilidad nos distinguen.',
          email: 'info@pisoselegance.com',
          address: 'Avenida del Diseño 123, Ciudad Elegante, España',
        },
        {
          slug: 'luz-viva',
          name: 'Luz Viva',
          website: 'www.luzviva.com',
          isMain: true,
          description:
            'Líder en sistemas de iluminación innovadores y eficientes para hogares y negocios. Calidad, diseño y compromiso con la sostenibilidad nos distinguen.',
          email: 'info@luzviva.com',
          address: 'Calle de la Luz 456, Ciudad Brillante, México',
        },
        {
          slug: 'muebles-arte',
          name: 'Muebles de Arte',
          website: 'www.mueblesdearte.com',
          isMain: false,
          description: null,
          email: null,
          address: 'Calle del Diseño 789, Ciudad Creativa, Argentina',
        },
        {
          slug: 'cocina-design',
          name: 'Cocina Design',
          website: 'www.cocinadesign.com',
          isMain: false,
          description:
            'Especialistas en diseño y equipamiento de cocinas de alta gama. Ofrecemos soluciones personalizadas para crear la cocina de tus sueños, combinando estilo, funcionalidad y calidad.',
          email: null,
          address: null,
        },
      ]

      const mainContributors: Omit<MainContributors, 'isMain'>[] = [
        {
          slug: 'elegance',
          name: 'Elegance',
          website: 'www.pisoselegance.es',
          description:
            'Líder en revestimientos de suelos elegantes y duraderos para hogares y negocios. Calidad, innovación y compromiso con la sostenibilidad nos distinguen.',
          email: 'info@pisoselegance.com',
          address: 'Avenida del Diseño 123, Ciudad Elegante, España',
        },
        {
          slug: 'luz-viva',
          name: 'Luz Viva',
          website: 'www.luzviva.com',
          description:
            'Líder en sistemas de iluminación innovadores y eficientes para hogares y negocios. Calidad, diseño y compromiso con la sostenibilidad nos distinguen.',
          email: 'info@luzviva.com',
          address: 'Calle de la Luz 456, Ciudad Brillante, México',
        },
      ]

      const contributorsRepository = createContributorsRepository({
        products: [],
        rooms: [],
        contributors,
      })

      const result = contributorsRepository.getMainContributors()
      expect(result).toEqual(mainContributors)
    })

    it('returns standard contributors', () => {
      const contributors: Contributors[] = [
        {
          slug: 'elegance',
          name: 'Elegance',
          website: 'www.pisoselegance.es',
          isMain: true,
          description:
            'Líder en revestimientos de suelos elegantes y duraderos para hogares y negocios. Calidad, innovación y compromiso con la sostenibilidad nos distinguen.',
          email: 'info@pisoselegance.com',
          address: 'Avenida del Diseño 123, Ciudad Elegante, España',
        },
        {
          slug: 'luz-viva',
          name: 'Luz Viva',
          website: 'www.luzviva.com',
          isMain: true,
          description:
            'Líder en sistemas de iluminación innovadores y eficientes para hogares y negocios. Calidad, diseño y compromiso con la sostenibilidad nos distinguen.',
          email: 'info@luzviva.com',
          address: 'Calle de la Luz 456, Ciudad Brillante, México',
        },
        {
          slug: 'muebles-arte',
          name: 'Muebles de Arte',
          website: 'www.mueblesdearte.com',
          isMain: false,
          description: null,
          email: null,
          address: 'Calle del Diseño 789, Ciudad Creativa, Argentina',
        },
        {
          slug: 'cocina-design',
          name: 'Cocina Design',
          website: 'www.cocinadesign.com',
          isMain: false,
          description:
            'Especialistas en diseño y equipamiento de cocinas de alta gama. Ofrecemos soluciones personalizadas para crear la cocina de tus sueños, combinando estilo, funcionalidad y calidad.',
          email: null,
          address: null,
        },
      ]

      const standardContributors: Omit<StandardContributors, 'isMain' | 'description' | 'email' | 'address'>[] = [
        {
          slug: 'muebles-arte',
          name: 'Muebles de Arte',
          website: 'www.mueblesdearte.com',
        },
        {
          slug: 'cocina-design',
          name: 'Cocina Design',
          website: 'www.cocinadesign.com',
        },
      ]

      const contributorsRepository = createContributorsRepository({
        products: [],
        rooms: [],
        contributors,
      })

      const result = contributorsRepository.getStandardContributors()
      expect(result).toEqual(standardContributors)
    })
  })
})
