import { productosRepository } from '@/controllers'
import { Producto } from '@/components/domain/Producto'
import { VideoBackgroundSection } from '@/components/domain/VideoBackgroundSection'
import Heading from '@/components/domain/Heading'
import { GridFluid } from '@/components/layouts/Fluid'
import Logo from '@/components/domain/Logo'
import IsologoConcavo from '@/components/icons/IsologoConcavo'

export default function Home() {
  const productos = productosRepository.getProductosConcavo()

  return (
    <main className='text-center'>
      <div className='h-[17vh]' />

      <h1 className='animate-fade-in delay-250 sticky top-4 z-30 mb-4 my-0 pointer-events-none'>
        <Logo className='m-auto' />
      </h1>

      <section className='animate-fade-in delay-250 flex flex-col justify-center items-center'>
        <p className='font-editorial-new font-extralight sm:text-xl mb-6'>
          Un camino de disfrute y creación.
          <br />
          De imaginar espacios relajados, armónicos y luminosos.
          <br />
          De crear sensaciones de <em>calma.</em>
          <br />
        </p>

        <IsologoConcavo className='size-12' />
      </section>

      <div className='h-[17vh]' />

      <VideoBackgroundSection
        src='/casa.mp4'
        title='Casa Cóncavo'
        className='h-[60vw] min-h-[400px] max-h-[80vh] group mb-12'
      >
        <div className='flex flex-col h-full bg-[#0003] items-center'>
          <p className='text-white text-lg sm:text-xl font-bold uppercase tracking-[.2em] mt-auto mb-16'>
            Casa
            <Logo variant='white' className='w-[200px] sm:w-[250px] -mt-[.5em]' />
          </p>

          <a
            href='/casa-concavo'
            className='font-editorial-new text-sm sm:text-base px-6 pt-2 pb-1 text-white border rounded-full border-white uppercase mb-auto'
          >
            Start here
          </a>
        </div>
      </VideoBackgroundSection>

      <section className='mx-6 sm:mx-10 md:mx-12 mb-12'>
        <Heading id='productos-concavo' secondary>
          Nuestra tienda
        </Heading>

        <GridFluid aria-labelledby='productos-concavo'>
          {productos.map((producto) => (
            <li key={producto.slug}>
              <Producto {...producto} concavo />
            </li>
          ))}
        </GridFluid>
      </section>
    </main>
  )
}
