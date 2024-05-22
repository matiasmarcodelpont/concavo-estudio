import { DataSet } from './types'

const data: DataSet = {
  ambientes: [
    {
      slug: 'living-comedor',
      name: 'Living/Comedor',
      productos: [
        {
          slug: 'lampara-hierro',
        },
        {
          slug: 'piso-madera',
        },
      ],
    },
    {
      slug: 'cocina',
      name: 'Cocina',
      productos: [
        {
          slug: 'azulejos-guardados',
        },
      ],
    },
    {
      slug: 'lavadero',
      name: 'Lavadero',
      productos: [],
    },
    // {
    //   slug: 'escritorio',
    //   name: 'Escritorio',
    //   productos: [
    //     {
    //       slug: 'lampara-hierro',
    //     },
    //     {
    //       slug: 'piso-madera',
    //     },
    //   ],
    // },
    // {
    //   slug: 'toilet',
    //   name: 'Toilet',
    //   productos: [],
    // },
    // {
    //   slug: 'cuarto-alegra',
    //   name: 'Cuarto Alegra',
    //   productos: [],
    // },
    // {
    //   slug: 'baño-alegra',
    //   name: 'Baño Alegra',
    //   productos: [],
    // },
    // {
    //   slug: 'cuarto-principal',
    //   name: 'Cuarto principal',
    //   productos: [],
    // },
    // {
    //   slug: 'baño-principal',
    //   name: 'Baño principal',
    //   productos: [],
    // },
    // {
    //   slug: 'galeria',
    //   name: 'Galería',
    //   productos: [],
    // },
    // {
    //   slug: 'jardin',
    //   name: 'Jardín',
    //   productos: [],
    // },
  ],
  productos: [
    {
      slug: 'piso-madera',
      name: 'Piso simil Madera',
      colaborador: {
        slug: 'elegance',
      },
    },
    {
      slug: 'lampara-hierro',
      name: 'Lámpara de Hierro',
      colaborador: {
        slug: 'luz-viva',
      },
    },
    {
      slug: 'sofa-carlos',
      name: 'Sofá Carlos V',
      colaborador: {
        slug: 'muebles-arte',
      },
    },
    {
      slug: 'azulejos-guardados',
      name: 'Azulejos Guardados',
      colaborador: {
        slug: 'cocina-design',
      },
    },
    {
      slug: 'bacha-costa',
      name: 'Bacha Costa',
      colaborador: null,
    },
    {
      slug: 'bañadera-kahlo',
      name: 'Bañadera Kahlo',
      colaborador: null,
    },
  ],
  colaboradores: [
    {
      slug: 'elegance',
      name: 'Elegance',
      website: 'https://www.pisoselegance.es',
      isMain: true,
      description:
        'Líder en revestimientos de suelos elegantes y duraderos para hogares y negocios. Calidad, innovación y compromiso con la sostenibilidad nos distinguen.',
      email: 'info@pisoselegance.com',
      address: 'Avenida del Diseño 123, Ciudad Elegante, España',
    },
    {
      slug: 'luz-viva',
      name: 'Luz Viva',
      website: 'https://www.luzviva.com',
      isMain: true,
      description:
        'Líder en sistemas de iluminación innovadores y eficientes para hogares y negocios. Calidad, diseño y compromiso con la sostenibilidad nos distinguen.',
      email: 'info@luzviva.com',
      address: 'Calle de la Luz 456, Ciudad Brillante, México',
    },
    {
      slug: 'muebles-arte',
      name: 'Muebles de Arte',
      website: 'https://www.mueblesdearte.com',
      isMain: false,
      description: null,
      email: null,
      address: 'Calle del Diseño 789, Ciudad Creativa, Argentina',
    },
    {
      slug: 'cocina-design',
      name: 'Cocina Design',
      website: 'https://www.cocinadesign.com',
      isMain: false,
      description:
        'Especialistas en diseño y equipamiento de cocinas de alta gama. Ofrecemos soluciones personalizadas para crear la cocina de tus sueños, combinando estilo, funcionalidad y calidad.',
      email: null,
      address: null,
    },
  ],
}

export default data
