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
    phone: '11 5616-9553',
  },
  {
    slug: 'paisajismo',
    position: 'Paisajismo',
    name: 'Epifita Arquitectura & Paisaje',
    phone: '11 5772-1878',
  },
  {
    slug: 'interiorismo',
    position: 'Interiorismo',
    name: 'Mercedes Navarro',
    phone: '11 5097-8911',
  },
  {
    slug: 'proyecto-luminico',
    position: 'Proyecto Lumínico',
    name: 'Alejandra Rodriguez',
    phone: '11 4448-0564',
  },
  {
    slug: 'diseñadora',
    position: 'Diseñadora',
    name: 'Trinidad Azpiroz',
    phone: '11 6305-3928',
  },
  {
    slug: 'redes',
    position: 'Redes',
    name: 'Lucía de la Torre',
    phone: '11 6787-6374',
  },
  {
    slug: 'web',
    position: 'Web',
    name: 'Facundo Marcó del Pont',
    phone: '11 3178-7583',
  },
  {
    slug: 'web',
    position: 'Web',
    name: 'Matías Marcó del Pont',
    phone: '11 6295-6880',
  },
  {
    slug: 'marketing-pr',
    position: 'Marketing y PR',
    name: 'María E. Magnolle',
    phone: '11 6647-0364',
  },
]

export default function AboutUs() {
  return (
    <main className='text-center'>
      <h1 className='uppercase font-editorial-new font-light text-5xl sm:text-6xl [word-spacing:5px] mt-16 mb-4'>
        <span className='italic'>About</span> Us
      </h1>

      <Image
        src='/about-us/coti-felix.png'
        alt='Creadores de Cóncavo'
        width={4427}
        height={2551}
        className='w-full h-[90vw] max-h-[765px] object-cover sticky top-[72px] mb-[1px]'
      />

      <div className='bg-bone relative'>
        <div className='m-auto px-8 pt-12 sm:pt-16 max-w-[1024px]'>
          <p className='mb-4 text-sm sm:text-base leading-6'>
            Somos un equipo conformado por la arquitecta Constanza Llorente y el artista visual Félix Llambias. Creamos
            y desarrollamos productos elaborados localmente para el hogar. Trabajamos con artesanos apasionados por el
            arte y la belleza para crear piezas únicas hechas por manos argentinas.
          </p>

          <IsologoConcavo className='size-[5rem] my-10 md:my-16 mx-auto' />

          <section className='mb-12 sm:mb-16 overflow-hidden'>
            <div className='flex'>
              <Image
                src='/about-us/coti.png'
                alt='Arquitecta'
                width={297}
                height={182}
                className='aspect-square object-cover w-[60%] max-w-[260px] shrink-0'
              />

              <div>
                <Heading
                  as='h2'
                  className='font-light text-2xl xs:text-3xl sm:text-3xl md:text-4xl relative -left-16 my-6 sm:my-6 md:my-6 text-left'
                >
                  Arquitecta
                </Heading>

                <p className='hidden sm:block text-left mx-4 max-w-[580px] text-sm sm:text-base leading-6'>
                  Después de haber vivido y trabajado cuatro años en Australia y un año en Brasil, pude encontrar mi
                  pasión por la naturaleza. Me gusta pensar cada espacio en relación al exterior y así aprovechar todo
                  lo que nos ofrece en los espacios interiores. Usar materiales nobles, crear espacios funcionales y lo
                  que encuentro fundamental, la Iluminación a lo largo del día con susluces y sombras.
                </p>
              </div>
            </div>

            <p className='sm:hidden text-left my-2 text-sm sm:text-base leading-6'>
              Después de haber vivido y trabajado cuatro años en Australia y un año en Brasil, pude encontrar mi pasión
              por la naturaleza. Me gusta pensar cada espacio en relación al exterior y así aprovechar todo lo que nos
              ofrece en los espacios interiores. Usar materiales nobles, crear espacios funcionales y lo que encuentro
              fundamental, la Iluminación a lo largo del día con susluces y sombras.
            </p>
          </section>

          <section className='mb-12 sm:mb-16'>
            <div className='relative flex flex-row-reverse'>
              <Image
                src='/about-us/felix.png'
                alt='Director Creativo'
                width={298}
                height={183}
                className='aspect-square object-cover w-[60%] max-w-[260px] flex-shrink-0'
              />

              <div>
                <Heading
                  as='h2'
                  className='font-light text-2xl xs:text-3xl sm:text-3xl md:text-4xl relative left-12 my-6 sm:my-6 md:my-6 text-right'
                >
                  Director Creativo
                </Heading>

                <p className='hidden sm:block text-right mx-4 max-w-[580px] text-sm sm:text-base leading-6'>
                  Mi interés por la calidez y el paso del tiempo son motivaciones para lograr una visión sensible y
                  natural. Formas, texturas, reflejos, contrastes y movimientos son mis inspiraciones para generar un
                  mundo de sensaciones en el observador. Un ojo agudizado en el detalle.
                </p>
              </div>
            </div>

            <p className='sm:hidden text-right my-2 text-sm sm:text-base leading-6'>
              Mi interés por la calidez y el paso del tiempo son motivaciones para lograr una visión sensible y natural.
              Formas, texturas, reflejos, contrastes y movimientos son mis inspiraciones para generar un mundo de
              sensaciones en el observador. Un ojo agudizado en el detalle.
            </p>
          </section>

          <section className='mb-6 sm:mb-12 sm:hidden'>
            <Heading className='italic text-3xl my-8'>Equipo</Heading>

            <div className='space-y-6 mb-6'>
              {EQUIPO.map(({ slug, position, name, phone }) => (
                <EquipoMember key={slug} position={position} name={name} phone={phone} />
              ))}
            </div>

            <Image
              src='/about-us/equipo_2.png'
              alt='Equipo'
              width={564}
              height={846}
              className='w-full aspect-[5/2] object-cover'
              style={{ objectPosition: '50% 62%' }}
            />
          </section>

          <section className='hidden sm:block mb-6 sm:mb-12'>
            <Heading className='italic text-2xl xs:text-3xl sm:text-3xl md:text-4xl text-left my-2 sm:my-2 md:my-2'>
              Equipo
            </Heading>

            <div className='flex'>
              <div className='w-1/2 pr-2 md:pr-3 text-end'>
                <Image
                  src={`/about-us/equipo_1.png`}
                  alt='Equipo'
                  width={508}
                  height={635}
                  className='object-cover w-full'
                />

                <div className='space-y-6 mt-6'>
                  {EQUIPO.slice(4).map(({ slug, position, name, phone }) => (
                    <EquipoMember key={slug} position={position} name={name} phone={phone} reverse />
                  ))}
                </div>
              </div>

              <div className='w-1/2 pl-2 md:pl-3 text-start flex flex-col'>
                <div className='flex'>
                  <div className='flex-grow'>
                    <div className='space-y-6 mb-3'>
                      {EQUIPO.slice(0, 4).map(({ slug, position, name, phone }) => (
                        <EquipoMember key={slug} position={position} name={name} phone={phone} />
                      ))}
                    </div>
                  </div>

                  <IsologoConcavo className='size-[5rem] self-end rotate-180' />
                </div>

                <Image
                  src={`/about-us/equipo_2.png`}
                  alt='Equipo'
                  width={564}
                  height={846}
                  className='object-cover w-full flex-grow'
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

interface EquipoMemberProps {
  position: string
  name: string
  phone: string
  reverse?: boolean
}

const EquipoMember = ({ position, name, phone, reverse }: EquipoMemberProps) => {
  const [animate, setAnimate] = useState(false)

  return (
    <div>
      <Waypoint
        onEnter={() => {
          setAnimate(true)
        }}
      />

      <div className={animate ? 'animate-slide-up' : 'opacity-0'}>
        <p className='font-editorial-new uppercase font-extralight leading-4 text-lg'>{position}</p>
        <p
          className={cn(
            'inline-flex flex-row flex-nowrap gap-1 [&_i]:not-italic [&_i]:text-nowrap',
            reverse ? 'flex-row-reverse' : '',
          )}
        >
          <i>{name}</i> — <i>{phone}</i>
        </p>
      </div>
    </div>
  )
}
