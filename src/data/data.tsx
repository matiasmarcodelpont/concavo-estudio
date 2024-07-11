import { DataSet } from './types'

const data: DataSet = {
  ambientes: [
    {
      slug: 'living-comedor',
      name: 'Living/Comedor',
      productos: [{ slug: 'travertino' }, { slug: 'pietra' }, { slug: 'teclas-de-luz' }],
      images: [
        { src: '0.jpeg', width: 1500, height: 1080, puntitos: [] },
        { src: '1.jpeg', width: 1500, height: 2000, puntitos: [] },
        { src: '2.jpeg', width: 1500, height: 1080, puntitos: [] },
      ],
    },
    {
      slug: 'cocina',
      name: 'Cocina',
      productos: [{ slug: 'travertino' }, { slug: 'pietra' }, { slug: 'teclas-de-luz' }],
      images: [
        { src: '0.jpeg', width: 1500, height: 1080, puntitos: [] },
        { src: '1.jpeg', width: 1500, height: 2000, puntitos: [] },
        { src: '2.jpeg', width: 1500, height: 1080, puntitos: [] },
      ],
    },
    {
      slug: 'lavadero',
      name: 'Lavadero',
      productos: [{ slug: 'travertino' }, { slug: 'pietra' }, { slug: 'teclas-de-luz' }],
      images: [
        { src: '0.jpeg', width: 1500, height: 2000, puntitos: [] },
        { src: '1.jpeg', width: 1500, height: 1080, puntitos: [] },
        { src: '2.jpeg', width: 1500, height: 1080, puntitos: [] },
      ],
    },
    {
      slug: 'escritorio',
      name: 'Escritorio',
      productos: [{ slug: 'travertino' }, { slug: 'pietra' }, { slug: 'teclas-de-luz' }],
      images: [
        { src: '0.jpeg', width: 1500, height: 2000, puntitos: [] },
        { src: '1.jpeg', width: 1500, height: 1080, puntitos: [] },
        { src: '2.jpeg', width: 1500, height: 1080, puntitos: [] },
      ],
    },
    {
      slug: 'toilet',
      name: 'Toilet',
      productos: [{ slug: 'travertino' }, { slug: 'inodoro-ap' }, { slug: 'teclas-de-luz' }],
      images: [
        { src: '0.jpeg', width: 1500, height: 2000, puntitos: [] },
        { src: '1.jpeg', width: 1500, height: 1080, puntitos: [] },
        { src: '2.jpeg', width: 1500, height: 1080, puntitos: [] },
      ],
    },
    {
      slug: 'cuarto-alegra',
      name: 'Cuarto Alegra',
      productos: [{ slug: 'travertino' }, { slug: 'pietra' }, { slug: 'teclas-de-luz' }],
      images: [
        { src: '0.jpeg', width: 1500, height: 2000, puntitos: [] },
        { src: '1.jpeg', width: 1500, height: 1080, puntitos: [] },
        { src: '2.jpeg', width: 1500, height: 1080, puntitos: [] },
      ],
    },
    {
      slug: 'baño-alegra',
      name: 'Baño Alegra',
      productos: [{ slug: 'travertino' }, { slug: 'teclas-de-luz' }],
      images: [
        { src: '0.jpeg', width: 1500, height: 2000, puntitos: [] },
        { src: '1.jpeg', width: 1500, height: 1080, puntitos: [] },
        { src: '2.jpeg', width: 1500, height: 1080, puntitos: [] },
      ],
    },
    {
      slug: 'cuarto-principal',
      name: 'Cuarto principal',
      productos: [{ slug: 'travertino' }, { slug: 'pietra' }, { slug: 'teclas-de-luz' }],
      images: [
        { src: '0.jpeg', width: 1500, height: 2000, puntitos: [] },
        { src: '1.jpeg', width: 1500, height: 1080, puntitos: [] },
        { src: '2.jpeg', width: 1500, height: 1080, puntitos: [] },
      ],
    },
    {
      slug: 'baño-principal',
      name: 'Baño principal',
      productos: [{ slug: 'travertino' }, { slug: 'teclas-de-luz' }],
      images: [
        { src: '0.jpeg', width: 1500, height: 2000, puntitos: [] },
        { src: '1.jpeg', width: 1500, height: 1080, puntitos: [] },
        { src: '2.jpeg', width: 1500, height: 1080, puntitos: [] },
      ],
    },
    {
      slug: 'galeria',
      name: 'Galería',
      productos: [{ slug: 'travertino' }, { slug: 'teclas-de-luz' }],
      images: [
        { src: '0.jpeg', width: 1500, height: 2000, puntitos: [] },
        { src: '1.jpeg', width: 1500, height: 1080, puntitos: [] },
        { src: '2.jpeg', width: 1500, height: 1080, puntitos: [] },
      ],
    },
    {
      slug: 'jardin',
      name: 'Jardín',
      productos: [{ slug: 'travertino' }, { slug: 'teclas-de-luz' }],
      images: [
        { src: '0.jpeg', width: 1500, height: 2000, puntitos: [] },
        { src: '1.jpeg', width: 1500, height: 1080, puntitos: [] },
        { src: '2.jpeg', width: 1500, height: 1080, puntitos: [] },
      ],
    },
  ],
  productos: [
    {
      slug: 'travertino',
      name: 'Travertino',
      description: (
        <>
          Travertino clasico al agua.
          <br />
          medida: 40.5 x Largo Libre
          <br />
          apomazado semi taponado
        </>
      ),
      link: 'https://destefano1913.com/tienda/baldosa/travertino-clasico-al-agua-baldosa/',
      colaborador: { slug: 'de-stefano' },
    },
    // {
    //   slug: 'griferia-monocomando-gr',
    //   name: 'Grifería Monocomando - Línea GR',
    //   description: (
    //     <>
    //       Su tecnología SOFT FLOW mantiene las salpicaduras al mínimo
    //       <br />
    //       El disco cerámico, un componente de válvula central, está cubierto con una capa especial de DLC (Carbono de
    //       Diamante). Esto asegura una calidad duradera sobre la grifería convencional.
    //     </>
    //   ),
    //   link: 'https://destefano1913.com/?s=griferia+TOTO+GR&post_type=product&type_aws=true',
    //   colaborador: { slug: 'toto' },
    // },
    {
      slug: 'inodoro-ap',
      name: 'INODORO DE COLGAR AP + WASHLET C5 ELONGATED ',
      description: (
        <>
          Los Washlet de TOTO®️ son asientos con bidet electrónico incorporado, climatización del agua y de la
          tabla,secador automático y desodorizante.
          <br />
          Cuentan con tecnología CEFIONTEC®️, cerámica ultra lisa que no deja lugar para residuos. TORNADO FLUSH®️, el
          sistema de descarga 360°, elimina por completo todos los desechos utilizando menos agua.
        </>
      ),
      link: 'https://destefano1913.com/tienda/sanitario/toto-inodoro-ap-ct426-con-washlet-c5-cisterna-tece-mamposteria/',
      colaborador: { slug: 'toto' },
    },
    {
      slug: 'pietra',
      name: 'PIETRA',
      description: (
        <>
          COLOR: BLANCO MALLORCA
          <br />
          Revestimiento decorativo acrílico, de acabado similar a la piedra natural. Producto elástico y resistente a la
          intemperie que aplicado en alto espesor protege y decora, sustituyendo al sistema tradicional de revoque fino
          más pintura. Indicado para interiores y exteriores tanto en obras nuevas como en refacciones.
        </>
      ),
      link: 'https://www.sinteplast.com.ar/arquitectonica/revestimientos/pietra-sinteplast',
      colaborador: { slug: 'sinteplast' },
    },
    {
      slug: 'teclas-de-luz',
      name: 'TECLAS DE LUZ',
      description: (
        <>
          Interruptor inteligente
          <br />
          Color: Blanco
        </>
      ),
      link: 'https://www.akaienergy.com.ar/ficha.php?id=64',
      colaborador: { slug: 'akai' },
    },
    // {
    //   slug: 'iluminacion',
    //   name: 'ILUMINACION',
    //   description: (
    //     <>
    //       iluminacion profesional/ iluminacion general del hogar
    //       <br />
    //       Aplique: FELTRE color blanco
    //       <br />
    //       Lampara: LED MR16 - 1180
    //       <br />
    //       Tiras LED: NODOT 8400 cob
    //     </>
    //   ),
    //   link: 'https://italighting.com.ar/img/productos/ITAlighting-Catalogo.pdf',
    //   colaborador: { slug: 'akai' },
    // },
    // {
    //   slug: 'instalaciones-sanitarias',
    //   name: 'instalaciones sanitarias',
    //   description: (
    //     <>Elegimos Sigas para tendido de gas, Hidro 3 para tendido de agua fria y caliente y Duratop para cloacal</>
    //   ),
    //   link: '',
    //   colaborador: { slug: 'resta' },
    // },
    // {
    //   slug: 'ladrillo-klimablock',
    //   name: 'ladrillo klimablock',
    //   description: (
    //     <>
    //       Optamos por poner ladrillo hueco Klimablock en todas las paredes exteriores. Un ladrillo de 27cm con óptima
    //       aislación de la humedad, térmica, acústica y al fuego.
    //     </>
    //   ),
    //   link: '',
    //   colaborador: { slug: 'cisilotto' },
    // },
    {
      slug: 'griferia',
      name: 'GRIFERIA',
      description: (
        <>
          Resta distribuye
          <br />
          Marca: Peirano
          <br />
          Modelo: Vera{' '}
        </>
      ),
      link: '',
      colaborador: { slug: 'resta' },
    },
    {
      slug: 'inodoro',
      name: 'INODORO',
      description: (
        <>
          Marca: Roca.
          <br />
          Modelo: The Gap
        </>
      ),
      link: '',
      colaborador: { slug: 'resta' },
    },
    {
      slug: 'inodoro-2',
      name: 'INODORO',
      description: (
        <>
          Marca: Roca
          <br />
          Modelo: Inspira
        </>
      ),
      link: '',
      colaborador: { slug: 'resta' },
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
      website: 'https://www.sinteplast.com.ar/contacto/',
    },
    {
      slug: 'resta',
      name: 'Resta',
      level: 'black',
      whatsapp: '11 3697-7275',
      email: 'axelmontenegro@sanitariosresta.com.ar',
      instagram: '@restadesign.it',
    },
    {
      slug: 'akai',
      name: 'Grupo Akai (Akai + Italighting)',
      level: 'black',
      reference: 'Contacto Comercial: Sebastian Zazzarro',
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
