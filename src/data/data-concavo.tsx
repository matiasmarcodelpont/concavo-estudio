import ConcavoColors from '@/components/domain/ConcavoColors'

const piezaDiseño = (
  <ol>
    <li>• Pieza de diseño realizada artesanalmente</li>
    <li>• Por ser un producto hecho a mano puede tener variaciones en sus medidas de +/- 2cm</li>
  </ol>
)

const garantias = (
  <article className='text-[10px]'>
    <p>
      Cuidados y garantías:
      <br />
      Los productos Cóncavo han sido fabricados con materiales de calidad superior y aseguran al consumidor una
      prolongada duración. Con el objetivo de conservar esta calidad le aconsejamos:
    </p>
    <ol>
      <li>
        - No usar productos de limpieza abrasivos como esponjas, polvos, etc. Es conveniente utilizar jabones o
        detergentes neutros
      </li>
      <li>- Los productos Cóncavo tienen una garantía de 5 años contra todo defecto de fabricación.</li>
      <li>
        - Excluye daños ocasionados por el uso inadecuado, instalaciones deficientes o el uso de limpiadores abrasivos.
      </li>
      <li>- Es requisito inexcusable para realizar cualquier reclamo, la presentación de esta garantía.</li>
    </ol>
  </article>
)

export const productosConcavo = [
  {
    slug: 'bacha-kahlo',
    name: 'Bacha Kahlo',
    description: (
      <>
        Bacha de apoyo | exenta
        <br />
        Medidas: 620 x 320 x 110 mm (h)
        <br />
        Material: concreto
        <br />
        Diámetro desagüe: 40mm
        <br />
        Color: a elección (10 colores)
        <br />
        <br />
        <ConcavoColors />
        <br />
        {piezaDiseño}
        <br />
        {garantias}
      </>
    ),
    link: null,
    colaborador: null,
  },
  {
    slug: 'bacha-testa',
    name: 'Bacha Testa',
    description: (
      <>
        Bacha de apoyo | exenta
        <br />
        Medidas: 620 x 320 x 110 mm (h)
        <br />
        Material: concreto
        <br />
        Diámetro desagüe: 40mm
        <br />
        Color: a elección (10 colores)
        <br />
        <br />
        <ConcavoColors />
        <br />
        {piezaDiseño}
        <br />
        {garantias}
      </>
    ),
    link: null,
    colaborador: null,
  },
  {
    slug: 'bacha-costa',
    name: 'Bacha Costa',
    description: (
      <>
        Bacha de apoyo | exenta
        <br />
        Medidas: diametro 360 x 110 mm (h)
        <br />
        Material: concreto
        <br />
        Diámetro desagüe: 40mm
        <br />
        Color: a elección (10 colores)
        <br />
        <br />
        <ConcavoColors />
        <br />
        {piezaDiseño}
        <br />
        {garantias}
      </>
    ),
    link: null,
    colaborador: null,
  },
  {
    slug: 'bacha-dieste',
    name: 'Bacha Dieste',
    description: (
      <>
        Bacha de apoyo | exenta
        <br />
        Medidas: diametro 360 x 60 mm (h)
        <br />
        Material: concreto
        <br />
        Diámetro desagüe: 40mm
        <br />
        Color: a elección (10 colores)
        <br />
        <br />
        <ConcavoColors />
        <br />
        {piezaDiseño}
        <br />
        {garantias}
      </>
    ),
    link: null,
    colaborador: null,
  },
  {
    slug: 'bañadera-kahlo',
    name: 'Bañadera Kahlo',
    description: (
      <>
        Bacha de apoyo | exenta
        <br />
        Medidas: 1750 x 860 x 470 mm (h)
        <br />
        Material: concreto
        <br />
        Diámetro desagüe: 52mm
        <br />
        Color: a elección (10 colores)
        <br />
        <br />
        <ConcavoColors />
        <br />
        {piezaDiseño}
        <br />
        {garantias}
      </>
    ),
    link: null,
    colaborador: null,
  },
  {
    slug: 'bañadera-testa',
    name: 'Bañadera Testa',
    description: (
      <>
        Bacha de apoyo | exenta
        <br />
        Medidas: 1570 x 780 x 440 mm (h)
        <br />
        Material: concreto
        <br />
        Diámetro desagüe: 52mm
        <br />
        Color: a elección (10 colores)
        <br />
        <br />
        <ConcavoColors />
        <br />
        {piezaDiseño}
        <br />
        {garantias}
      </>
    ),
    link: null,
    colaborador: null,
  },
  {
    slug: 'lampara-dieste',
    name: 'Lámpara Dieste',
    description: (
      <>
        <strong>Podes elegir opción colgante de techo o aplique de pared y combinarlas como más te guste</strong>
        <br />
        <br />
        <strong>(L) Large</strong>
        <br />
        Medidas: diámetro 360 x 60 mm (h)
        <br />
        <br />
        <strong>(S) Small</strong>
        <br />
        Medidas: diámetro 160 x 60 mm (h)
        <br />
        <br />
        Material: Concreto
        <br />
        Color: a elección (10 colores)
        <br />
        <br />
        <ConcavoColors />
        <br />
        Foco rosca tipo E27 Recomendamos luz cálida (lámpara no incluida)
        <br />
        Incluye Florón para salida de cable en techo de 10cm de diámetro
        <br />
        Opciones: Cable blanco o negro
        <br />
        <br />
        {piezaDiseño}
        <br />
        {garantias}
      </>
    ),
    link: null,
    colaborador: null,
  },
  {
    slug: 'aplique-botero',
    name: 'Aplique Botero',
    description: (
      <>
        <br />
        Aplique de pared
        <br />
        Medidas: 250 x 130 x 60 mm (profundidad)
        <br />
        Material: Concreto
        <br />
        Color: a elección (10 colores)
        <br />
        <br />
        <ConcavoColors />
        <br />
        Foco tipo bipin G9 220v
        <br />
        Recomendamos luz cálida (lámpara no incluida)
        <br />
        <br />
        {piezaDiseño}
        <br />
        {garantias}
      </>
    ),
    link: null,
    colaborador: null,
  },
]
