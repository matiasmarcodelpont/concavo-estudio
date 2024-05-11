import { MainColaborador, StandardColaborador } from '@/components/domain/colaborador'
import { Producto } from '@/components/domain/producto'
import { FlexWrap, GridFluid } from '@/components/layouts/fluid'
import { ambientesRepository, colaboradoresRepository, productosRepository } from '@/controllers'
import { redirect } from 'next/navigation'

export default function Home() {
  if (process.env.ENVIRONMENT !== 'local') redirect('/')

  const mainColaboradores = colaboradoresRepository.getMainColaboradores()
  const standardColaboradores = colaboradoresRepository.getStandardColaboradores()
  const productosConcavo = productosRepository.getProductosConcavo()

  const ambientes = ambientesRepository.getAmbientes()
  const productos = ambientes.flatMap((ambiente) => productosRepository.getProductosInAmbiente(ambiente.slug))

  return (
    <div className='flex flex-col gap-4'>
      <span>
        <h1 className='text-center'>Main Colaboradores</h1>
        <FlexWrap className='gap-12 justify-center'>
          {mainColaboradores.map((colaborador) => (
            <MainColaborador key={colaborador.slug} {...colaborador} className='w-[300px]' />
          ))}
        </FlexWrap>
      </span>
      <span>
        <h1 className='text-center'>Standard Colaboradores</h1>
        <FlexWrap className='gap-12 justify-center'>
          {standardColaboradores.map((colaborador) => (
            <StandardColaborador key={colaborador.slug} {...colaborador} className='w-[300px]' />
          ))}
        </FlexWrap>
      </span>
      <span className='mx-12'>
        <h1 className='text-center'>Productos Cóncavo</h1>
        <GridFluid className='gap-4 justify-center'>
          {productosConcavo.map((producto) => (
            <Producto key={producto.slug} {...producto} concavo />
          ))}
        </GridFluid>
      </span>
      <span className='mx-12'>
        <h1 className='text-center'>Productos</h1>
        <GridFluid className='gap-4 justify-center'>
          {productos.map((producto) => (
            <Producto key={producto.slug} {...producto} />
          ))}
        </GridFluid>
      </span>
    </div>
  )
}
