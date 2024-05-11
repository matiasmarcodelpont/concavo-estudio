import { colaboradoresRepository, ambientesRepository } from '@/controllers'
import { Ambiente } from '@/components/domain/ambiente'
import { MainColaborador, StandardColaborador } from '@/components/domain/colaborador'
import { FlexWrap } from '@/components/layouts/fluid'

export default function CasaConcavo() {
  const ambientes = ambientesRepository.getAmbientes()
  const mainColaboradores = colaboradoresRepository.getMainColaboradores()
  const standardColaboradores = colaboradoresRepository.getStandardColaboradores()

  return (
    <main className='text-center'>
      <h1>Casa Cóncavo</h1>

      <section className='mx-12'>
        <ul aria-label='Lista de Ambientes' className='space-y-8'>
          {ambientes.map((ambiente) => (
            <li key={ambiente.slug}>
              <Ambiente {...ambiente} />
            </li>
          ))}
        </ul>
      </section>

      <section className='mx-12'>
        <FlexWrap aria-label='Lista de los principales Colaboradores' className='gap-12 justify-center'>
          {mainColaboradores.map((mainColaborador) => (
            <li key={mainColaborador.slug} className='w-[300px] list-none'>
              <MainColaborador {...mainColaborador} />
            </li>
          ))}
        </FlexWrap>
      </section>

      <section className='mx-12'>
        <FlexWrap aria-label='Lista del resto de los Colaboradores' className='gap-12 justify-center'>
          {standardColaboradores.map((standardColaborador) => (
            <li key={standardColaborador.slug} className='w-[300px] list-none'>
              <StandardColaborador {...standardColaborador} />
            </li>
          ))}
        </FlexWrap>
      </section>
    </main>
  )
}
