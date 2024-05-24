import '@testing-library/jest-dom'
import { createColaboradoresRepository } from './colaboradores'
import { Colaborador, MainColaborador, StandardColaborador } from '../types'
import { DoesNotExistError } from '@/lib/errors'

describe('colaboradores repository', () => {
  describe('getMainColaboradores', () => {
    it('returns main colaboradores', () => {
      const colaboradores: Colaborador[] = [
        {
          slug: 'elegance',
          name: 'Elegance',
          contact: '',
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
          contact: '',
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
          contact: '',
          website: 'www.mueblesdearte.com',
          isMain: false,
          description: null,
          email: null,
          address: 'Calle del Diseño 789, Ciudad Creativa, Argentina',
        },
        {
          slug: 'cocina-design',
          name: 'Cocina Design',
          contact: '',
          website: 'www.cocinadesign.com',
          isMain: false,
          description:
            'Especialistas en diseño y equipamiento de cocinas de alta gama. Ofrecemos soluciones personalizadas para crear la cocina de tus sueños, combinando estilo, funcionalidad y calidad.',
          email: null,
          address: null,
        },
      ]

      const mainColaboradores: Omit<MainColaborador, 'isMain' | 'email' | 'address'>[] = [
        {
          slug: 'elegance',
          name: 'Elegance',
          contact: '',
          website: 'www.pisoselegance.es',
          description:
            'Líder en revestimientos de suelos elegantes y duraderos para hogares y negocios. Calidad, innovación y compromiso con la sostenibilidad nos distinguen.',
        },
        {
          slug: 'luz-viva',
          name: 'Luz Viva',
          contact: '',
          website: 'www.luzviva.com',
          description:
            'Líder en sistemas de iluminación innovadores y eficientes para hogares y negocios. Calidad, diseño y compromiso con la sostenibilidad nos distinguen.',
        },
      ]

      const colaboradoresRepository = createColaboradoresRepository({
        productos: [],
        ambientes: [],
        colaboradores,
      })

      const result = colaboradoresRepository.getMainColaboradores()
      expect(result).toEqual(mainColaboradores)
    })
  })

  describe('getStandardColaboradores', () => {
    it('returns standard colaboradores', () => {
      const colaboradores: Colaborador[] = [
        {
          slug: 'elegance',
          name: 'Elegance',
          contact: '',
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
          contact: '',
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
          contact: '',
          website: 'www.mueblesdearte.com',
          isMain: false,
          description: null,
          email: null,
          address: 'Calle del Diseño 789, Ciudad Creativa, Argentina',
        },
        {
          slug: 'cocina-design',
          name: 'Cocina Design',
          contact: '',
          website: 'www.cocinadesign.com',
          isMain: false,
          description:
            'Especialistas en diseño y equipamiento de cocinas de alta gama. Ofrecemos soluciones personalizadas para crear la cocina de tus sueños, combinando estilo, funcionalidad y calidad.',
          email: null,
          address: null,
        },
      ]

      const standardColaboradores: Omit<StandardColaborador, 'isMain' | 'description' | 'email' | 'address'>[] = [
        {
          slug: 'muebles-arte',
          name: 'Muebles de Arte',
          contact: '',
          website: 'www.mueblesdearte.com',
        },
        {
          slug: 'cocina-design',
          name: 'Cocina Design',
          contact: '',
          website: 'www.cocinadesign.com',
        },
      ]

      const colaboradoresRepository = createColaboradoresRepository({
        productos: [],
        ambientes: [],
        colaboradores,
      })

      const result = colaboradoresRepository.getStandardColaboradores()
      expect(result).toEqual(standardColaboradores)
    })
  })

  describe('getMainColaboradoresByAmbiente', () => {
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
          {
            slug: 'luz-led',
          },
        ],
        colaboradores: [],
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
        contact: '',
        website: 'www.luzviva.com',
        isMain: true,
        description:
          'Líder en sistemas de iluminación innovadores y eficientes para hogares y negocios. Calidad, diseño y compromiso con la sostenibilidad nos distinguen.',
        email: 'info@luzviva.com',
        address: 'Calle de la Luz 456, Ciudad Brillante, México',
      },
      {
        slug: 'cocina-design',
        name: 'Cocina Design',
        contact: '',
        website: 'www.cocinadesign.com',
        isMain: false,
        description:
          'Especialistas en diseño y equipamiento de cocinas de alta gama. Ofrecemos soluciones personalizadas para crear la cocina de tus sueños, combinando estilo, funcionalidad y calidad.',
        email: null,
        address: null,
      },
      {
        slug: 'elegance',
        name: 'Elegance',
        contact: '',
        website: 'www.pisoselegance.es',
        isMain: true,
        description:
          'Líder en revestimientos de suelos elegantes y duraderos para hogares y negocios. Calidad, innovación y compromiso con la sostenibilidad nos distinguen.',
        email: 'info@pisoselegance.com',
        address: 'Avenida del Diseño 123, Ciudad Elegante, España',
      },
      {
        slug: 'muebles-arte',
        name: 'Muebles de Arte',
        contact: '',
        website: 'www.mueblesdearte.com',
        isMain: false,
        description: null,
        email: null,
        address: 'Calle del Diseño 789, Ciudad Creativa, Argentina',
      },
    ]

    const mainColaboradoresInAmbiente: Omit<MainColaborador, 'isMain' | 'email' | 'address'>[] = [
      {
        slug: 'luz-viva',
        name: 'Luz Viva',
        contact: '',
        website: 'www.luzviva.com',
        description:
          'Líder en sistemas de iluminación innovadores y eficientes para hogares y negocios. Calidad, diseño y compromiso con la sostenibilidad nos distinguen.',
      },
    ]

    it('returns main colaboradores by a ambiente', () => {
      const colaboradoresRepository = createColaboradoresRepository({
        productos,
        ambientes,
        colaboradores,
      })

      const result = colaboradoresRepository.getMainColaboradoresByAmbiente('cocina')
      expect(result).toEqual(mainColaboradoresInAmbiente)
    })

    it("thows an error if the ambiente doesn't exist", () => {
      const colaboradoresRepository = createColaboradoresRepository({
        productos,
        ambientes,
        colaboradores,
      })

      expect(() => {
        colaboradoresRepository.getMainColaboradoresByAmbiente('baño')
      }).toThrow(DoesNotExistError)
    })
  })

  describe('getStandardColaboradoresByAmbiente', () => {
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
          {
            slug: 'luz-led',
          },
        ],
        colaboradores: [],
      },
    ]

    const productos = [
      {
        slug: 'azulejos-guardados',
        name: 'Azulejos Guardados',
        link: null,
        description: '',
        colaborador: {
          slug: 'cocina-design',
        },
      },
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
        slug: 'luz-led',
        name: 'Luz Led',
        link: null,
        description: '',
        colaborador: {
          slug: 'luz-viva',
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

    const colaboradores: Colaborador[] = [
      {
        slug: 'luz-viva',
        name: 'Luz Viva',
        contact: '',
        website: 'www.luzviva.com',
        isMain: true,
        description:
          'Líder en sistemas de iluminación innovadores y eficientes para hogares y negocios. Calidad, diseño y compromiso con la sostenibilidad nos distinguen.',
        email: 'info@luzviva.com',
        address: 'Calle de la Luz 456, Ciudad Brillante, México',
      },
      {
        slug: 'cocina-design',
        name: 'Cocina Design',
        contact: '',
        website: 'www.cocinadesign.com',
        isMain: false,
        description:
          'Especialistas en diseño y equipamiento de cocinas de alta gama. Ofrecemos soluciones personalizadas para crear la cocina de tus sueños, combinando estilo, funcionalidad y calidad.',
        email: null,
        address: null,
      },
      {
        slug: 'elegance',
        name: 'Elegance',
        contact: '',
        website: 'www.pisoselegance.es',
        isMain: true,
        description:
          'Líder en revestimientos de suelos elegantes y duraderos para hogares y negocios. Calidad, innovación y compromiso con la sostenibilidad nos distinguen.',
        email: 'info@pisoselegance.com',
        address: 'Avenida del Diseño 123, Ciudad Elegante, España',
      },
      {
        slug: 'muebles-arte',
        name: 'Muebles de Arte',
        contact: '',
        website: 'www.mueblesdearte.com',
        isMain: false,
        description: null,
        email: null,
        address: 'Calle del Diseño 789, Ciudad Creativa, Argentina',
      },
    ]

    const standardColaboradoresInAmbiente: Omit<StandardColaborador, 'isMain' | 'description' | 'email' | 'address'>[] =
      [
        {
          slug: 'cocina-design',
          name: 'Cocina Design',
          contact: '',
          website: 'www.cocinadesign.com',
        },
      ]

    it('returns standard colaboradores by a ambiente', () => {
      const colaboradoresRepository = createColaboradoresRepository({
        productos,
        ambientes,
        colaboradores,
      })

      const result = colaboradoresRepository.getStandardColaboradoresByAmbiente('cocina')
      expect(result).toEqual(standardColaboradoresInAmbiente)
    })

    it("thows an error if the ambiente doesn't exist", () => {
      const colaboradoresRepository = createColaboradoresRepository({
        productos,
        ambientes,
        colaboradores,
      })

      expect(() => {
        colaboradoresRepository.getStandardColaboradoresByAmbiente('baño')
      }).toThrow(DoesNotExistError)
    })
  })
})
