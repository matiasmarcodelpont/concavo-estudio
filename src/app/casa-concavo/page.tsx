import { ambientesRepository } from '@/controllers'
import { Ambiente } from '@/components/domain/Ambiente'
import Heading from '@/components/domain/Heading'

export default function CasaConcavo() {
  const ambientes = ambientesRepository.getAmbientes()

  return (
    <main>
      <section className='mb-12 pt-3 sm:pt-8 md:pt-20'>
        <Heading className='hidden'>Casa Cóncavo</Heading>

        <article className='relative text-left p-[1.75em] mb-16 mx-6 xs:mx-12 sm:mx-20 md:mx-32 lg:mx-72 bg-white font-editorial-new font-extralight text-base md:text-xl w-fit max-w-[270px] xs:max-w-[320px] md:max-w-[400px]'>
          <strong className='font-regular'>CASA CÓNCAVO</strong> es nuestra forma de vivir las casa pensando en el todo
          y en el detalle. Conocé nuestra primera casa: ´Whitehaven´.
          <div className='absolute -top-3 md:-top-4 -left-0'>
            <div className='absolute w-[0.5px] h-6 md:h-8 bg-black'></div>
            <div className='absolute w-[0.5px] h-6 md:h-8 bg-black rotate-90'></div>
          </div>
        </article>

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
