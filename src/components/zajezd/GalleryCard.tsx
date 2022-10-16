import Image from "next/image";
import { HiChevronLeft, HiChevronRight, HiX } from "react-icons/hi";

type Props = {
  imageSrc: string;
  index: number;
}
export default function GalleryCard({ imageSrc, index }: Props) {
  return (
    <div
      className="hidden w-full h-full fixed z-10 target:block top-0 left-0 bg-black/60"
      id={"img" + index}
    >
      <a
        href={"#img" + (index - 1)}
        className="left-[7%] top-1/2 absolute text-3xl cursor-pointer hover:scale-125 duration-150
         rounded-md border-[3px] border-primary text-primary bg-white"
      >
        <HiChevronLeft />
      </a>
      <a
        href="#_"
        className="top-[10%] right-[10%] absolute text-3xl cursor-pointer hover:scale-125 duration-150
         rounded-md border-[3px] border-primary text-primary bg-white"
      >
        <HiX />
      </a>
      <div
        className="relative w-3/5 h-3/5  top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
      >
        <Image
          src={imageSrc}
          layout="fill"
        />
      </div>
      <a
        href={"#img" + (index + 1)}
        className="right-[7%] top-1/2 absolute text-3xl cursor-pointer hover:scale-125 duration-150
         rounded-md border-[3px] border-primary text-primary bg-white"
      >
        <HiChevronRight />
      </a>
    </div>
  )
}