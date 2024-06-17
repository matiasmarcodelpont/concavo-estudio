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
      images: [
        {
          src: '0.jpeg',
          width: 1500,
          height: 1080,
          puntitos: [{ productoSlug: 'azulejos-guardados', coordinates: { x: 760, y: 430 } }],
        },
        { src: '1.jpeg', width: 1500, height: 2000, puntitos: [] },
        { src: '2.jpeg', width: 1500, height: 1080, puntitos: [] },
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
      images: [
        { src: '0.jpeg', width: 1500, height: 1080, puntitos: [] },
        { src: '1.jpeg', width: 1500, height: 2000, puntitos: [] },
        { src: '2.jpeg', width: 1500, height: 1080, puntitos: [] },
      ],
    },
    {
      slug: 'lavadero',
      name: 'Lavadero',
      productos: [],
      images: [
        { src: '0.jpeg', width: 1500, height: 2000, puntitos: [] },
        { src: '1.jpeg', width: 1500, height: 1080, puntitos: [] },
        { src: '2.jpeg', width: 1500, height: 1080, puntitos: [] },
      ],
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
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas explicabo aliquam tenetur. Eligendi deleniti ratione doloribus dolores dolorum, reprehenderit maiores odit itaque quos tenetur, architecto earum est, iste accusantium.',
      link: 'https://example.com',
      colaborador: {
        slug: 'elegance',
      },
    },
    {
      slug: 'lampara-hierro',
      name: 'Lámpara de Hierro',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas explicabo aliquam tenetur. Eligendi deleniti ratione doloribus dolores dolorum, reprehenderit maiores odit itaque quos tenetur, architecto earum est, iste accusantium.',
      link: 'https://example.com',
      colaborador: {
        slug: 'luz-viva',
      },
    },
    {
      slug: 'sofa-carlos',
      name: 'Sofá Carlos V',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas explicabo aliquam tenetur. Eligendi deleniti ratione doloribus dolores dolorum, reprehenderit maiores odit itaque quos tenetur, architecto earum est, iste accusantium.',
      link: 'https://example.com',
      colaborador: {
        slug: 'muebles-arte',
      },
    },
    {
      slug: 'azulejos-guardados',
      name: 'Azulejos Guardados',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas explicabo aliquam tenetur. Eligendi deleniti ratione doloribus dolores dolorum, reprehenderit maiores odit itaque quos tenetur, architecto earum est, iste accusantium.',

      colaborador: {
        slug: 'cocina-design',
      },
    },
    {
      slug: 'bacha-costa',
      name: 'Bacha Costa',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas explicabo aliquam tenetur. Eligendi deleniti ratione doloribus dolores dolorum, reprehenderit maiores odit itaque quos tenetur, architecto earum est, iste accusantium.',
      colaborador: null,
    },
    {
      slug: 'bañadera-kahlo',
      name: 'Bañadera Kahlo',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas explicabo aliquam tenetur. Eligendi deleniti ratione doloribus dolores dolorum, reprehenderit maiores odit itaque quos tenetur, architecto earum est, iste accusantium.',
      colaborador: null,
    },
    {
      slug: 'bañadera-kahlo',
      name: 'Bañadera Kahlo',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas explicabo aliquam tenetur. Eligendi deleniti ratione doloribus dolores dolorum, reprehenderit maiores odit itaque quos tenetur, architecto earum est, iste accusantium.',
      colaborador: null,
    },
    {
      slug: 'bañadera-kahlo',
      name: 'Bañadera Kahlo',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas explicabo aliquam tenetur. Eligendi deleniti ratione doloribus dolores dolorum, reprehenderit maiores odit itaque quos tenetur, architecto earum est, iste accusantium.',
      colaborador: null,
    },
  ],
  colaboradores: [
    {
      slug: 'elegance',
      name: 'Elegance',
      contact: 'Contacto: 5473-1862',
    },
    {
      slug: 'luz-viva',
      name: 'Luz Viva',
      contact: 'Contacto: 5473-1862',
    },
    {
      slug: 'muebles-arte',
      name: 'Muebles de Arte',
      contact: 'Contacto: 5473-1862',
    },
    {
      slug: 'cocina-design',
      name: 'Cocina Design',
      contact: 'Contacto: 5473-1862',
    },
  ],
}

export default data
