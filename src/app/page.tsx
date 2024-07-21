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
      <div className='h-[14vw] min-h-32' />

      <h1 className='mb-4 sticky top-4 z-50 animate-fade-in delay-250'>
        <Logo className='m-auto' />
      </h1>

      <p className='font-editorial-new font-extralight sm:text-xl mb-6 animate-fade-in delay-250'>
        Un camino de disfrute y creación.
        <br />
        De imaginar espacios relajados, armónicos y luminosos.
        <br />
        De crear sensaciones de <em>calma.</em>
        <br />
      </p>

      <IsologoConcavo className='mx-auto size-12 animate-fade-in delay-250' />

      <div className='h-[14vw] min-h-32' />

      <VideoBackgroundSection src='/casa.mp4' title='Casa Cóncavo' className='h-[60vw] min-h-[400px] group mb-12'>
        <div className='flex flex-col h-full bg-[#0003] justify-around items-center'>
          <div className='pt-2 pb-1 border-white uppercase invisible'>Start here</div>

          <p className='text-bone text-xl sm:text-2xl font-bold uppercase tracking-[.2em]'>
            Casa
            <Logo variant='white' className='w-[300px] sm:w-[400px] -mt-[.5em]' />
          </p>

          <a
            href='/casa-concavo'
            className='font-editorial-new px-6 pt-2 pb-1 text-bone border rounded-full border-white uppercase'
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
