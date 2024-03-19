'use client'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
  src: string | StaticImageData
  alt: string
}

const MyImage = ({ src, alt }: Props) => {
  const [isLoading, setIsLoading] = React.useState(true)
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={`100vw`}
      className={`object-cover ${
        isLoading
          ? 'scale-110 blur-2xl grayscale-0'
          : `scale-100 blur-0 grayscale-0`
      }`}
      onLoadingComplete={() => setIsLoading(false)}
    />
  )
}

export default MyImage
