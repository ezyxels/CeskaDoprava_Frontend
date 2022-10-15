import Image from "next/image";

type Props = {
  imageSrc: string;
  imageAlt: string;
}

export default function BigImage({ imageSrc, imageAlt }: Props) {
  return (
    <div className="relative w-full aspect-[4/3] md:aspect-video flex justify-center mt-32">
      <Image
        src={imageSrc}
        alt={imageAlt}
        layout="fill"
        objectFit="cover"
        loading="lazy"
      />
    </div>
  )
}