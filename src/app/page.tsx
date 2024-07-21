import { productosRepository } from '@/controllers'
import { Producto } from '@/components/domain/Producto'
import { VideoBackgroundSection } from '@/components/domain/VideoBackgroundSection'
import Heading from '@/components/domain/Heading'
import { GridFluid } from '@/components/layouts/Fluid'
import Logo from '@/components/domain/Logo'

export default function Home() {
  const productos = productosRepository.getProductosConcavo()

  return (
    <main className='text-center'>
      <Heading className='hidden'>Cóncavo</Heading>

      <VideoBackgroundSection src='/casa.mp4' title='Casa Cóncavo' className='video-dynamic-height-100dvh group mb-12'>
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
