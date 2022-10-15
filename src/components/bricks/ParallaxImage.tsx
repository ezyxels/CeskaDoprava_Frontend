import Image from "next/image";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

type Props = {
  className?: string;
  speed?: number;
  url?: string;
  alt?: string;
  animOnPhone?: true | false;
}

export default function ParallaxImage({
  className,
  speed = 3,
  url = "/images/conf.jpg",
  alt = "image alt",
  animOnPhone = true
}: Props) {
  if (animOnPhone) {
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
  else {
    return (
      <ParallaxProvider>
        <Parallax speed={speed} className={`relative hidden md:block ${className}`}>
          <Image
            src={url}
            alt={alt}
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </Parallax>
        <div className={`relative block md:hidden ${className}`}>
          <Image
            src={url}
            alt={alt}
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </div>
      </ParallaxProvider>
    )
  }
}