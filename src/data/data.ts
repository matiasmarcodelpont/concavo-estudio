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
        slug: 'de-stefano',
      },
    },
    {
      slug: 'lampara-hierro',
      name: 'Lámpara de Hierro',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas explicabo aliquam tenetur. Eligendi deleniti ratione doloribus dolores dolorum, reprehenderit maiores odit itaque quos tenetur, architecto earum est, iste accusantium.',
      link: 'https://example.com',
      colaborador: {
        slug: 'de-stefano',
      },
    },
    {
      slug: 'sofa-carlos',
      name: 'Sofá Carlos V',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas explicabo aliquam tenetur. Eligendi deleniti ratione doloribus dolores dolorum, reprehenderit maiores odit itaque quos tenetur, architecto earum est, iste accusantium.',
      link: 'https://example.com',
      colaborador: {
        slug: 'de-stefano',
      },
    },
    {
      slug: 'azulejos-guardados',
      name: 'Azulejos Guardados',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas explicabo aliquam tenetur. Eligendi deleniti ratione doloribus dolores dolorum, reprehenderit maiores odit itaque quos tenetur, architecto earum est, iste accusantium.',

      colaborador: {
        slug: 'de-stefano',
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
      slug: 'de-stefano',
      name: 'De Stefano',
      level: 'black',
      whatsapp: '11 4991-8163',
      instagram: '@destefano1913',
      email: 'marketing@destefano.com.ar',
    },
    {
      slug: 'toto',
      name: 'Toto',
      level: 'black',
      whatsapp: '11 4991-8163',
      instagram: '@toto.argentina',
      email: 'marketing@destefano.com.ar',
    },
    {
      slug: 'sinteplast',
      name: 'Sinteplast',
      level: 'black',
      website: 'https://www.sinteplast.com.ar/contacto',
    },
    {
      slug: 'resta',
      name: 'Resta',
      level: 'black',
      whatsapp: '11 3697-7275',
      reference: 'axelmontenegro@sanitariosresta.com.ar',
      website: 'restadesign.it',
    },
    {
      slug: 'akai',
      name: 'Grupo Akai (Akai + Italighting)',
      level: 'black',
      reference: 'Contacto Comercial: Sebastian Zazzarro / sebastian@italighting.com.ar',
      email: 'sebastian@italighting.com.ar',
    },
    {
      slug: 'cristalizando',
      name: 'Cristalizando',
      level: 'gold',
      whatsapp: '(0387) 443-643',
      instagram: '@cristalizandosa',
      email: 'ventas@cristalizando.com',
    },
    {
      slug: 'muchtek',
      name: 'Muchtek Tecnoperfiles Group',
      level: 'silver',
      email: 'perfiles@muchtek.com',
      instagram: '@muchtek.tecnoperfilesgroup',
    },
    {
      slug: 'topcret',
      name: 'Topcret',
      level: 'silver',
      whatsapp: '11 6688-8128',
      instagram: '@topcretargentina',
      email: 'argentina@topcret.com',
    },
    {
      slug: 'cisilotto',
      name: 'Cisilotto',
      level: 'standard',
      whatsapp: '11 3857-1212',
      instagram: '@cisilotto.hnos',
      email: 'ventas@cisilotto.com.ar',
    },
    {
      slug: 'ecoaislacion',
      name: 'Ecoaislacion',
      level: 'standard',
      whatsapp: '11 2696-6442',
      instagram: '@ecoaislacion.oeste',
    },
    {
      slug: 'diclimatizacion',
      name: 'Diclimatizacion',
      level: 'standard',
      whatsapp: '11 3216-7203',
      instagram: '@diclimatizacion',
      reference: 'Luciano Marchi',
    },
  ],
}

export default data
