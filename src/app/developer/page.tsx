import { Fluid } from '@/components/layouts/fluid'
import { redirect } from 'next/navigation'

const Colaborador = () => {
  return <div>Facu</div>
}

export default function Home() {
  if (process.env.ENVIRONMENT !== 'local') redirect('/')

  return (
    <div>
      <Fluid className='gap-12'>
        {Array.from({ length: 10 }).map((_, index) => (
          <Colaborador key={index} />
        ))}
      </Fluid>
    </div>
  )
}
