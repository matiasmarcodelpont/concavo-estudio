import { ambientesRepository } from '@/controllers'
import { Ambiente } from '@/components/domain/Ambiente'

export default function CasaConcavo() {
  const ambientes = ambientesRepository.getAmbientes()

  return (
    <main>
      <section className='pb-24 sm:pb-32 md:pb-40 pt-28 sm:pt-36 md:pt-48 flex'>
        <div className='flex-grow-[1]' />

        <article className='relative bg-white text-sm sm:text-base md:text-lg text-left p-[1.75em] mx-8 w-fit max-w-[330px] sm:max-w-[380px] md:max-w-[420px]'>
          <h1 className='font-extrabold inline'>CASA CÓNCAVO</h1> es nuestra forma de vivir las casa pensando en el todo
          y en el detalle. Conocé nuestra primera casa: ´Whitehaven´.
          <div className='absolute -top-3 md:-top-4 -left-0'>
            <div className='absolute w-[0.5px] h-6 md:h-8 bg-black'></div>
            <div className='absolute w-[0.5px] h-6 md:h-8 bg-black rotate-90'></div>
          </div>
        </article>

        <div className='flex-grow-[2]' />
      </section>

      <section>
        <ul aria-label='Lista de Ambientes' className='space-y-2'>
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
