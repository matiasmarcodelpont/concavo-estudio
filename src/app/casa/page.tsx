import { colaboradoresRepository, ambientesRepository } from '@/controllers'
import { Ambiente } from '@/components/domain/Ambiente'
import { MainColaborador, StandardColaborador } from '@/components/domain/Colaborador'
import { FlexWrap } from '@/components/layouts/Fluid'
import Heading from '@/components/domain/Heading'

export default function CasaConcavo() {
  const ambientes = ambientesRepository.getAmbientes()
  const mainColaboradores = colaboradoresRepository.getMainColaboradores()
  const standardColaboradores = colaboradoresRepository.getStandardColaboradores()

  return (
    <main className='text-center'>
      <section className='mb-12'>
        <Heading className='text-xl sm:text-2xl md:text-3xl hidden'>Casa Cóncavo</Heading>

        <ul aria-label='Lista de Ambientes' className='space-y-4'>
          {ambientes.map((ambiente) => (
            <li key={ambiente.slug}>
              <Ambiente {...ambiente} />
            </li>
          ))}
        </ul>
      </section>

      <section className='mx-4 sm:mx-6 md:mx-8 mb-12'>
        <Heading className='text-xl sm:text-2xl md:text-3xl'>Nuestros Colaboradores</Heading>

        <FlexWrap
          aria-label='Lista de los principales Colaboradores'
          className='gap-10 sm:gap-12 md:gap-14 lg:gap-16 mb-10 sm:mb-12 md:mb-14 lg:mb-16'
        >
          {mainColaboradores.map((mainColaborador) => (
            <li key={mainColaborador.slug} className='list-none'>
              <MainColaborador {...mainColaborador} />
            </li>
          ))}
        </FlexWrap>

        <FlexWrap
          aria-label='Lista del resto de los Colaboradores'
          className='gap-10 sm:gap-12 md:gap-14 lg:gap-16 justify-center'
        >
          {standardColaboradores.map((standardColaborador) => (
            <li key={standardColaborador.slug} className='list-none'>
              <StandardColaborador {...standardColaborador} />
            </li>
          ))}
        </FlexWrap>
      </section>
    </main>
  )
}
