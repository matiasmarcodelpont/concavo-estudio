import { MainColaborador, StandardColaborador } from '@/components/domain/colaborador'
import Fluid from '@/components/layouts/fluid'
import { colaboradoresRepository } from '@/controllers'
import { redirect } from 'next/navigation'

export default function Home() {
  if (process.env.ENVIRONMENT !== 'local') redirect('/')

  const mainColaboradores = colaboradoresRepository.getMainColaboradores()
  const standardColaboradores = colaboradoresRepository.getStandardColaboradores()

  return (
    <div>
      <Fluid className='gap-12'>
        {standardColaboradores.map((colaborador) => (
          <StandardColaborador key={colaborador.slug} {...colaborador} />
        ))}
      </Fluid>
      <Fluid className='gap-12'>
        {mainColaboradores.map((colaborador) => (
          <MainColaborador key={colaborador.slug} {...colaborador} />
        ))}
      </Fluid>
      <br />
    </div>
  )
}
