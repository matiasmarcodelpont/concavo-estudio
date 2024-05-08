import { MainColaborador, StandardColaborador } from '@/components/domain/colaborador'
import Fluid from '@/components/layouts/fluid'
import { colaboradoresRepository } from '@/controllers'
import { redirect } from 'next/navigation'

export default function Home() {
  if (process.env.ENVIRONMENT !== 'local') redirect('/')

  const mainColaboradores = colaboradoresRepository.getMainColaboradores()
  const standardColaboradores = colaboradoresRepository.getStandardColaboradores()

  return (
    <div className='flex flex-col gap-4'>
      <div>
        <h1 className='text-center'>Main Colaboradores</h1>
        <Fluid className='gap-12 justify-center'>
          {mainColaboradores.map((colaborador) => (
            <MainColaborador key={colaborador.slug} {...colaborador} className='w-[300px]' />
          ))}
        </Fluid>
      </div>
      <div>
        <h1 className='text-center'>Standard Colaboradores</h1>
        <Fluid className='gap-12 justify-center'>
          {standardColaboradores.map((colaborador) => (
            <StandardColaborador key={colaborador.slug} {...colaborador} className='w-[300px]' />
          ))}
        </Fluid>
      </div>
    </div>
  )
}
