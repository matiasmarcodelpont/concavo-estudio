import { colaboradoresRepository } from '@/controllers'
import Heading from '@/components/domain/Heading'
import { FlexWrap } from '@/components/layouts/Fluid'
import { Colaborador } from '@/components/domain/Colaborador'

export default function Colaboradores() {
  const colaboradores = colaboradoresRepository.getColaboradores()

  return (
    <main className='text-center'>
      <section aria-labelledby='colaboradores-heading' className='mx-6 sm:mx-10 md:mx-12 mb-12'>
        <Heading secondary id='colaboradores-heading'>
          Colaboradores
        </Heading>

        {colaboradores.length > 0 && (
          <FlexWrap
            aria-label='Colaboradores'
            className='gap-10 sm:gap-12 md:gap-14 lg:gap-16 mb-10 sm:mb-12 md:mb-14 lg:mb-16 justify-center'
          >
            {colaboradores.map((colaborador) => (
              <li key={colaborador.slug} className='list-none'>
                <Colaborador {...colaborador} />
              </li>
            ))}
          </FlexWrap>
        )}
      </section>
    </main>
  )
}
