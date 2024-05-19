import { colaboradoresRepository, ambientesRepository } from '@/controllers'
import { Ambiente } from '@/components/domain/Ambientee'
import { MainColaborador, StandardColaborador } from '@/components/domain/Colaboradorr'
import { FlexWrap } from '@/components/layouts/Fluidd'
import Heading from '@/components/domain/Headingg'

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

      <section className='mb-12 mx-6 sm:mx-12'>
        <Heading className='text-xl sm:text-2xl md:text-3xl'>Nuestros Colaboradores</Heading>

        <FlexWrap
          aria-label='Lista de los principales Colaboradores'
          className='gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12'
        >
          {mainColaboradores.map((mainColaborador) => (
            <li key={mainColaborador.slug} className='list-none'>
              <MainColaborador {...mainColaborador} />
            </li>
          ))}
        </FlexWrap>

        <FlexWrap
          aria-label='Lista del resto de los Colaboradores'
          className='gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-center'
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
