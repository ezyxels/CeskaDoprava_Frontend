import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import Image from "next/image"

type Props = {
  className?: string;
  speed?: number;
  url?: string;
  alt?: string;
}

export default function ParallaxImage({
  className, 
  speed = 3,
  url = "/images/conf.jpg",
  alt = "image alt"

}: Props) {
  return (
    <ParallaxProvider>
      <Parallax speed={speed} className={`relative ${className}`}>
        <Image
          src={url}
          alt={alt}
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </Parallax>
    </ParallaxProvider>
  )
}