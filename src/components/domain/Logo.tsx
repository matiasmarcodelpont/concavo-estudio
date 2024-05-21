import Image from 'next/image'
import React from 'react'

interface LogoProps {
  className?: string
}

const Logo = ({ className }: LogoProps) => {
  return <Image width={200} height={200 / 3} src='/logos/concavo_black.png' alt='Logo Cóncavo' className={className} />
}

export default Logo
