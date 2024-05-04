import { DataSet } from './types'

const data: DataSet = {
  rooms: [
    {
      slug: 'living-comedor',
      name: 'Living/Comedor',
      products: [
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
      products: [
        {
          slug: 'azulejos-guardados',
        },
      ],
    },
    {
      slug: 'lavadero',
      name: 'Lavadero',
      products: [],
    },
    {
      slug: 'escritorio',
      name: 'Escritorio',
      products: [
        {
          slug: 'lampara-hierro',
        },
        {
          slug: 'piso-madera',
        },
      ],
    },
    {
      slug: 'toilet',
      name: 'Toilet',
      products: [],
    },
    {
      slug: 'cuarto-alegra',
      name: 'Cuarto Alegra',
      products: [],
    },
    {
      slug: 'baño-alegra',
      name: 'Baño Alegra',
      products: [],
    },
    {
      slug: 'cuarto-principal',
      name: 'Cuarto principal',
      products: [],
    },
    {
      slug: 'baño-principal',
      name: 'Baño principal',
      products: [],
    },
    {
      slug: 'galeria',
      name: 'Galería',
      products: [],
    },
    {
      slug: 'jardin',
      name: 'Jardín',
      products: [],
    },
  ],
  products: [
    {
      slug: 'piso-madera',
      name: 'Piso simil Madera',
      contributor: {
        slug: 'elegance',
      },
    },
    {
      slug: 'lampara-hierro',
      name: 'Lámpara de diseño con detalles de Hierro',
      contributor: {
        slug: 'luz-viva',
      },
    },
    {
      slug: 'sofa-carlos',
      name: 'Sofá Carlos V',
      contributor: {
        slug: 'muebles-arte',
      },
    },
    {
      slug: 'azulejos-guardados',
      name: 'Azulejos Guardados',
      contributor: {
        slug: 'cocina-design',
      },
    },
    {
      slug: 'bacha-8080',
      name: 'Bacha 8080',
      contributor: null,
    },
    {
      slug: 'bañadera-10001',
      name: 'Bañadera 10001',
      contributor: null,
    },
  ],
  contributors: [
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
  ],
}

export default data
