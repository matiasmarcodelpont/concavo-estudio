'use client'

import WhatsappIcon from '@/components/icons/WhatsappIcon'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint'

const MESSAGE = encodeURIComponent(
  '¡Hola! Estoy interesado en los productos que ofrecen. ¿Podrían darme más información?',
)

const WhatsappBubble = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Link
        className={cn(
          'fixed right-3 bottom-2 sm:right-4 sm:bottom-3 md:right-5 md:bottom-4 lg:right-6 lg:bottom-5 xl:right-7 bg-bone p-2 rounded-full hover:scale-105 transition-all z-50 shadow-lg',
          show ? 'visible opacity-80' : 'invisible opacity-0',
        )}
        target='_blank'
        href={`https://wa.me/5491136111800?text=${MESSAGE}`}
      >
        <WhatsappIcon className='w-9 h-9 fill-dark-gray cursor-pointer' />
      </Link>
      <div className='absolute top-[150vh] right-0'>
        <Waypoint
          onEnter={() => {
            setShow(true)
          }}
        />
      </div>
    </>
  )
}

export default WhatsappBubble
