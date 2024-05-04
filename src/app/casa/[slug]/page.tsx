import Link from 'next/link'
import { notFound } from 'next/navigation'

import { colaboradoresRepository, productosRepository, ambientesRepository } from '@/controllers'

export default function Ambiente({ params }: { params: { ambienteSlug: string } }) {
  const ambiente = ambientesRepository.getAmbiente(decodeURIComponent(params.ambienteSlug))
  if (!ambiente) {
    notFound()
  }

  const productos = productosRepository.getProductosInAmbiente(ambiente.slug)
  const mainColaboradores = colaboradoresRepository.getMainColaboradoresByAmbiente(ambiente.slug)
  const standardColaboradores = colaboradoresRepository.getStandardColaboradoresByAmbiente(ambiente.slug)

  return (
    <main>
      <h1>{ambiente.name}</h1>
      <section>
        <ul aria-label='Lista de Productoos'>
          {productos.map((producto) => (
            <li key={producto.slug}>
              <Link href={`/productoos/${producto.slug}`}>{producto.name}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <ul aria-label='Lista de los principales Colaboradores del Ambiente'>
          {mainColaboradores.map((mainColaborador) => (
            <li key={mainColaborador.slug}>{mainColaborador.name}</li>
          ))}
        </ul>
      </section>
      <section>
        <ul aria-label='Lista del resto de los Colaboradores  del Ambiente'>
          {standardColaboradores.map((standardColaborador) => (
            <li key={standardColaborador.slug}>{standardColaborador.name}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}
