import Image from "next/image";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

type Props = {
  className?: string;
  speed?: number;
  src?: string;
  alt?: string;
  animOnPhone?: true | false;
  loading?: "eager" | "lazy";
}

export default function ParallaxImage({
  className,
  speed = 3,
  src = "/images/conf.jpg",
  alt = "image alt",
  animOnPhone = true,
  loading = "lazy"
}: Props) {
  if (animOnPhone) {
    return (
      <ParallaxProvider>
        <Parallax speed={speed} className={`relative ${className}`}>
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover"
            loading={loading}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 100vw,
              100vw"
          />
        </Parallax>
      </ParallaxProvider>
    )
  }
  else {
    return (
      <ParallaxProvider>
        <Parallax speed={speed} className={`hidden md:block ${className}`}>
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover"
            loading={loading}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 100vw,
              100vw"
          />
        </Parallax>
        <div className={`relative block md:hidden ${className}`}>
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover"
            loading={loading}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 100vw,
              100vw"
          />
        </div>
      </ParallaxProvider>
    )
  }
}