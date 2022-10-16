import Image from "next/image";
import { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight, HiX } from "react-icons/hi";
import { ScrollContainer } from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css';
import { useSwipeable } from "react-swipeable";



type Props = {
  images: any;
}


export default function Gallery({ images }: Props) {
  const [imageIndex, setImageIndex] = useState<number | undefined>(undefined);
  let handlers: any;

  useEffect(() => {
    if (imageIndex !== undefined) {
      document.body.classList.add("helper-scroll-lock");
    } else {
      document.body.classList.remove("helper-scroll-lock");
    }
  }, [imageIndex]);


  handlers = useSwipeable({
    onSwipedRight: () => { (imageIndex !== undefined && imageIndex > 0) && setImageIndex(imageIndex - 1) },
    onSwipedLeft: () => { (imageIndex !== undefined && imageIndex < (images.length - 1)) && setImageIndex(imageIndex + 1) }
  })

  return (
    <div
      id="galerie"
      className="flex flex-col gap-1 pb-32"
    >

      {/* Opened gallery */}
      {imageIndex !== undefined &&
        <div className="fixed z-10 inset-0 bg-black">
          <div className="w-full h-3/4 flex flex-row items-center justify-center gap-x-5 md:gap-x-20 px-5 pt-20">
            {/* Gallery arrow left */}
            <span
              onClick={() => imageIndex !== 0 && setImageIndex(imageIndex - 1)}
              className="hidden md:flex text-3xl cursor-pointer hover:scale-125 duration-150
              rounded-md  border-2 border-gray-500 text-gray-500 z-20"
            >
              <HiChevronLeft />
            </span>


            {/* Gallery close button */}
            <span
              onClick={() => setImageIndex(undefined)}
              className="top-[100px] right-[20px] absolute text-3xl cursor-pointer hover:scale-125 duration-150
              rounded-md border-2 border-gray-500 text-gray-500 z-20"
            >
              <HiX />
            </span>


            {/* Gallery main image */}
            <div
              className="relative w-full md:w-3/5 aspect-[16/9] z-20"
              {...handlers}
            >
              <Image
                src={images[imageIndex]}
                layout="fill"
                className="object-contain"
              />
            </div>


            {/* Gallery arrow right */}
            <span
              onClick={() => imageIndex !== (images.length - 1) && setImageIndex(imageIndex + 1)}
              className="hidden md:flex text-3xl cursor-pointer hover:scale-125 duration-150
                rounded-md  border-2 border-gray-500 text-gray-500 z-20"
            >
              <HiChevronRight />
            </span>
          </div>


          {/* Gallery small images */}
          <ScrollContainer
            className="flex flex-row min-w-full h-1/4 my-auto px-5 md:px-40 gap-x-3 border-t border-gray-800 items-center"
          >
            {images &&
              images.map((imageSrc: any, index: number) => (
                <span
                  onClick={() => setImageIndex(index)}
                  className={`${images.indexOf(imageSrc) === imageIndex ? "scale-100" : "scale-75 hover:scale-90"} hover:shadow-md duration-200 relative cursor-pointer min-w-[150px] aspect-[4/3]
                  `}
                >
                  <Image
                    src={imageSrc}
                    layout="fill"
                    className="rounded-md object-cover"
                  />
                </span>
              )
              )}
          </ScrollContainer>
        </div>
      }

      {/* Closed gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {images &&
          images.map((imageSrc: any, index: number) => (
            <span onClick={() => setImageIndex(index)} className="hover:scale-105 aspect-[4/3] hover:shadow-md duration-200 relative cursor-pointer">
              <Image
                src={imageSrc}
                layout="fill"
                className="rounded-md object-cover"
              />
            </span>
          ))}
      </div>
    </div>
  );
}