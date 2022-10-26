import Image from "next/image";

type Props = {
  name: string;
  destination: string;
  text: string;
  imageSrc: string;
}

export default function ReviewCard({ name, destination, text, imageSrc }: Props) {
  return (
    <div className="mt-20 px-6 py-8 flex flex-col items-center justify-center text-center border border-gray-200">
      <div className="flex flex-row w-full pb-5">
        <div className="w-16 h-16 relative rounded-full overflow-hidden">
          <Image
            src={imageSrc}
            alt="Ikona"
            layout="fill"
            objectFit="cover"
            loading="eager"
          />
        </div>
        <div className="w-[calc(100%_-_60px)] px-2 my-auto">
          <p className="font-semibold text-left">{name}</p>
          <p className="text-sm text-gray-400 text-left">{destination}</p>
        </div>
      </div>
      <p className="text-sm font-medium text-left">{text}</p>
    </div>
  )
}