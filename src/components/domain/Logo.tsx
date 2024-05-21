import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='w-[150px] h-[50px] sm:w-[201px] sm:h-[67px] relative'>
      <Image fill src='/logos/concavo_black.png' alt='Logo Cóncavo' className='object-contain' />
    </div>
  )
}

export default Logo
