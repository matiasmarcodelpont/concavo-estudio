'use client'

import { ImageWithResolvedPuntitos, ResolvedPuntito } from '@/data/repositories/ambientes'
import { Ambiente, AmbienteImage } from '@/data/types'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'

const PuntitoLink = ({
  puntito,
  imageSize,
  renderedImageSize,
}: {
  puntito: ResolvedPuntito
  imageSize: Pick<AmbienteImage, 'width' | 'height'>
  renderedImageSize: Pick<AmbienteImage, 'width' | 'height'>
}) => {
  const { top, left } = useMemo(() => {
    const { x, y } = puntito.coordinates
    const { width, height } = imageSize
    const { width: renderedWidth, height: renderedHeight } = renderedImageSize

    const left = (x * renderedWidth) / width
    const top = (y * renderedHeight) / height

    return {
      left: `${left.toString()}px`,
      top: `${top.toString()}px`,
    }
  }, [puntito.coordinates, imageSize, renderedImageSize])

  return (
    <Link
      href={`/productos/${puntito.producto.slug}`}
      className='absolute size-8 p-2 rounded-full bg-black/20 hover:scale-125 transition -translate-x-1/2 -translate-y-1/2'
      style={{ top, left }}
    >
      <div className='size-full rounded-full bg-white' />
    </Link>
  )
}

export const AmbienteImageWithPuntitos = ({
  ambiente,
  image,
}: {
  ambiente: Omit<Ambiente, 'productos' | 'images'>
  image: ImageWithResolvedPuntitos
}) => {
  const imageRef = useRef<HTMLImageElement>(null)

  const [{ width, height }, setImageRenderedDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (!imageRef.current) {
      return
    }

    setImageRenderedDimensions({
      width: imageRef.current.clientWidth,
      height: imageRef.current.clientHeight,
    })
  }, [])

  return (
    <>
      <Image
        ref={imageRef}
        src={`/ambientes/${ambiente.slug}/${image.src}`}
        alt={ambiente.name}
        width={image.width}
        height={image.height}
        className='size-full object-cover'
      />

      {image.puntitos.map((puntito) => (
        <PuntitoLink
          key={puntito.producto.slug}
          puntito={puntito}
          imageSize={{ width: image.width, height: image.height }}
          renderedImageSize={{ width, height }}
        />
      ))}
    </>
  )
}
