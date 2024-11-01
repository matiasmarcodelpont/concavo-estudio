'use client'

import Heading from '@/components/domain/Heading'
import Image from 'next/image'
import IsologoConcavo from '@/components/icons/IsologoConcavo'
import { Waypoint } from 'react-waypoint'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const EQUIPO = [
  {
    slug: 'empresa-constructora',
    position: 'Empresa Constructora',
    name: 'Civil Construcción SRL',
  },
  {
    slug: 'paisajismo',
    position: 'Paisajismo',
    name: 'Epifita Arquitectura & Paisaje',
  },
  {
    slug: 'interiorismo',
    position: 'Interiorismo',
    name: 'Mercedes Navarro',
  },
  {
    slug: 'proyecto-luminico',
    position: 'Proyecto Lumínico',
    name: 'Alejandra Rodriguez',
  },
  {
    slug: 'diseñadora',
    position: 'Diseñadora',
    name: 'Trinidad Azpiroz',
  },
  {
    slug: 'redes',
    position: 'Redes',
    name: 'Lucía de la Torre',
  },
  {
    slug: 'web',
    position: 'Web',
    name: 'Facundo y Matías Marcó del Pont',
  },
  {
    slug: 'marketing-pr',
    position: 'Marketing y PR',
    name: 'María E. Magnolle',
  },
]

export default function AboutUs() {
  return (
    <main className='text-center space-y-24 pt-12'>
      <h1 className='uppercase font-editorial-new normal font-light text-center text-6xl xs:text-7xl sm:text-7xl'>
        <span className='italic'>About </span>Us
      </h1>

      <section className='space-y-24 sticky top-[72px] md:top-[81px] bg-bone'>
        <div className='min-h-[400px] sm:min-h-[600px] md:min-h-[800px] lg:min-h-[900px] relative'>
          <Image src='/about-us/coti-felix.png' alt='Creadores de Cóncavo' fill className='object-cover' />
        </div>
      </section>

      <div className='space-y-24 z-10 bg-bone relative py-16'>
        <section className='space-y-24 bg-bone'>
          <article className='flex justify-center items-center'>
            <p className='text-base xs:text-lg sm:text-xl px-8 xs:px-10 sm:px-14 max-w-[800px] text-center text-balance'>
              Somos un equipo conformado por la arquitecta Constanza Llorente y el artista visual Félix Llambias.
              Creamos y desarrollamos productos elaborados localmente para el hogar. Trabajamos con artesanos
              apasionados por el arte y la belleza para crear piezas únicas hechas por manos argentinas.
            </p>
          </article>
        </section>

        <section className='px-14 flex'>
          <IsologoConcavo className='size-[200px] m-auto' />
        </section>

        <section className='space-y-24'>
          <article className='relative inline-flex flex-col xl:flex-row px-8 sm:px-16'>
            <Heading
              as='h2'
              className='w-fit z-10 font-light mt-6 mb-0 sm:mt-6 sm:mb-0 md:mt-6 md:mb-0 absolute right-8 xs:left-[40%] md:left-[400px] text-4xl sm:text-6xl md:text-6xl'
            >
              Arquitecta
            </Heading>

            <div className='xl:mr-8 shrink-0 h-[400px] w-[230px] xs:w-[320px] sm:w-[400px] relative'>
              <Image src={`/about-us/coti.png`} alt='Arquitecta' fill className='object-cover' />
            </div>

            <p className='text-base xl:text-lg sm:text-xl max-w-[725px] text-left text-balance mt-[24px] xl:mt-[110px]'>
              Después de haber vivido y trabajado cuatro años en Australia y un año en Brasil, pude encontrar mi pasión
              por la naturaleza. Me gusta pensar cada espacio en relación al exterior y así aprovechar todo lo que nos
              ofrece en los espacios interiores. Usar materiales nobles, crear espacios funcionales y lo que encuentro
              fundamental, la Iluminación a lo largo del día con susluces y sombras.
            </p>
          </article>

          <article className='relative inline-flex flex-col items-end xl:flex-row-reverse xl:items-start px-8 sm:px-16 '>
            <Heading
              as='h2'
              className='w-[200px] sm:w-[310px] md:w-min xl:w-fit flex z-10 font-light mt-6 mb-0 sm:mt-6 sm:mb-0 md:mt-6 md:mb-0 absolute left-8 xs:left-[unset] xs:right-[50%] md:right-[380px] text-4xl sm:text-6xl md:text-6xl'
            >
              Director Creativo
            </Heading>

            <div className='xl:ml-8 shrink-0 h-[400px] w-[230px] xs:w-[320px] sm:w-[400px] relative'>
              <Image src={`/about-us/felix.png`} alt='Director Creativo' fill className='object-cover' />
            </div>

            <p className='text-base xl:text-lg sm:text-xl max-w-[725px] text-right text-balance mt-[24px] xl:mt-[110px]'>
              Mi interés por la calidez y el paso del tiempo son motivaciones para lograr una visión sensible y natural.
              Formas, texturas, reflejos, contrastes y movimientos son mis inspiraciones para generar un mundo de
              sensaciones en el observador. Un ojo agudizado en el detalle.
            </p>
          </article>
        </section>

        <section className='lg:hidden space-y-24 flex flex-col items-center'>
          <Heading as='h2' className='italic text-6xl md:text-6xl'>
            Equipo
          </Heading>

          <div className='p-6 xs:p-8'>
            {EQUIPO.map(({ slug, position, name }) => (
              <EquipoMember key={slug} position={position} name={name} />
            ))}
          </div>

          <div className='xl:ml-8 shrink-0 h-[400px] w-[90vw] max-w-[800px] relative'>
            <Image src={`/about-us/equipo_2.png`} alt='Director Creativo' fill className='object-cover' />
          </div>
        </section>

        <section className='hidden lg:flex flex-col p-14'>
          <Heading
            as='h2'
            className='w-[600px] lg:w-[1000px] xl:w-[1200px] m-auto italic text-6xl md:text-6xl text-left'
          >
            Equipo
          </Heading>

          <div className='w-[600px] lg:w-[1000px] xl:w-[1200px] m-auto flex gap-14'>
            <div className='w-1/2 space-y-14 text-end'>
              <div className='h-[600px] w-[100%] relative'>
                <Image src={`/about-us/equipo_1.png`} alt='Director Creativo' fill className='object-cover' />
              </div>

              <div className='inline-flex flex-col text-right'>
                {EQUIPO.slice(3).map(({ slug, position, name }) => (
                  <EquipoMember key={slug} position={position} name={name} size='big' />
                ))}
              </div>
            </div>

            <div className='w-1/2 space-y-14 text-start'>
              <div className='inline-flex flex-col relative w-[100%]'>
                {EQUIPO.slice(0, 3).map(({ slug, position, name }) => (
                  <EquipoMember key={slug} position={position} name={name} size='big' />
                ))}

                <IsologoConcavo className='size-[150px] m-auto absolute bottom-[-30px] right-0' />
              </div>

              <div className='h-[900px] w-[100%] relative'>
                <Image src={`/about-us/equipo_2.png`} alt='Director Creativo' fill className='object-cover' />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

interface EquipoMemberProps {
  size?: 'small' | 'big'
  position: string
  name: string
}

const EquipoMember = ({ size = 'small', position, name }: EquipoMemberProps) => {
  const [animate, setAnimate] = useState(false)

  return (
    <>
      <Waypoint
        onEnter={() => {
          setAnimate(true)
        }}
      />

      <div className={cn('space-y-2 mb-14', animate ? 'animate-slide-up' : 'opacity-0')}>
        {size === 'small' ? (
          <>
            <p className='font-editorial-new uppercase font-extralight text-2xl xs:text-3xl sm:text-4xl'>{position}</p>
            <p className='text-xl xs:text-2xl sm:text-3xl'>{name}</p>
          </>
        ) : (
          <>
            <p className='font-editorial-new uppercase font-extralight lg:text-3xl xl:text-4xl'>{position}</p>
            <p className='lg:text-2xl xl:text-3xl'>{name}</p>
          </>
        )}
      </div>
    </>
  )
}
