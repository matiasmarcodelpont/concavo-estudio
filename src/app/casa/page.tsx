import Link from 'next/link'

import { colaboradoresRepository, ambientesRepository } from '@/controllers'

export default function CasaConcavo() {
  const ambientes = ambientesRepository.getAmbientes()
  const mainColaboradores = colaboradoresRepository.getMainColaboradores()
  const standardColaboradores = colaboradoresRepository.getStandardColaboradores()

  return (
    <main>
      <h1>Casa Cóncavo</h1>
      <section>
        <ul aria-label='Lista de Ambientes'>
          {ambientes.map((ambiente) => (
            <li key={ambiente.slug}>
              <Link href={`/casa/${ambiente.slug}`}>{ambiente.name}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <ul aria-label='Lista de los principales Colaboradores'>
          {mainColaboradores.map((mainColaborador) => (
            <li key={mainColaborador.slug}>{mainColaborador.name}</li>
          ))}
        </ul>
      </section>
      <section>
        <ul aria-label='Lista del resto de los Colaboradores'>
          {standardColaboradores.map((standardColaborador) => (
            <li key={standardColaborador.slug}>{standardColaborador.name}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}
