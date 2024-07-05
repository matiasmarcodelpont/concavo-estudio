import { ambientesRepository } from '@/controllers'
import { Ambiente } from '@/components/domain/Ambiente'
import Heading from '@/components/domain/Heading'

export default function CasaConcavo() {
  const ambientes = ambientesRepository.getAmbientes()

  return (
    <main className='text-center'>
      <section className='mb-12'>
        <Heading className='hidden'>Casa Cóncavo</Heading>

        <ul aria-label='Lista de Ambientes' className='space-y-4 sm:space-y-8 md:space-y-12'>
          {ambientes.map((ambiente) => (
            <li key={ambiente.slug}>
              <Ambiente {...ambiente} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
