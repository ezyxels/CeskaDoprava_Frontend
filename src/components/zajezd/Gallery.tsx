import Image from "next/image";
import { useEffect, useState } from "react";
import { HiArrowLeft, HiArrowRight, HiX } from "react-icons/hi";
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
      document.getElementById("eZscroller")!.scrollLeft =
        document.getElementById("tiny" + imageIndex)!.offsetLeft -
        (document.getElementById("tiny" + imageIndex)!.clientWidth / 2) - 20;
    }
    else {
      document.body.classList.remove("helper-scroll-lock");
    }
  }, [imageIndex]);


  handlers = useSwipeable({
    onSwipedLeft: () => { (imageIndex !== undefined && imageIndex < (images.length - 1)) && setImageIndex(imageIndex + 1) },
    onSwipedRight: () => { (imageIndex !== undefined && imageIndex > 0) && setImageIndex(imageIndex - 1) },
  })

  return (
    <div
      id="galerie"
      className="flex flex-col gap-1 pb-32"
    >

      {/* Opened gallery */}
      {imageIndex !== undefined &&
        <div className="fixed z-[130] inset-0 bg-gray-900/85 backdrop-blur-sm">
          <div className="w-full relative h-3/4 flex flex-row items-center justify-center md:gap-x-20 px-5">
            {/* Gallery arrow left */}
            <span
              onClick={() => imageIndex !== 0 && setImageIndex(imageIndex - 1)}
              className={`absolute top-0 left-0 w-1/4 h-full md:w-10 md:h-10
                md:static flex text-3xl cursor-pointer duration-150 opacity-50 hover:opacity-90
                rounded-md border-white text-white z-[150]
                md:items-center justify-center
                `}

            >
              <HiArrowLeft className="hidden md:block" />
            </span>


            {/* Gallery close button */}
            <span
              onClick={() => setImageIndex(undefined)}
              className="top-5 right-5 md:w-10 md:h-10 absolute text-3xl cursor-pointer duration-150
              rounded-md border-white text-white opacity-50 hover:opacity-90 z-[160] flex justify-center items-center"
            >
              <HiX />
            </span>


            {/* Gallery main image */}
            <div
              className="relative w-full md:w-3/5 lg:w-[55%] aspect-[16/9] z-[140] select-none"
              {...handlers}
            >
              <Image
                src={images[imageIndex]}
                layout="fill"
                objectFit="contain"
              />
            </div>


            {/* Gallery arrow right */}
            <span
              onClick={() => imageIndex !== (images.length - 1) && setImageIndex(imageIndex + 1)}
              className={`absolute top-0 right-0 w-1/4 h-full md:w-10 md:h-10
                md:static flex text-3xl cursor-pointer duration-150 opacity-50 hover:opacity-90
                rounded-md border-white text-white z-[150]
                md:items-center justify-center
                `}
            >
              <HiArrowRight className="hidden md:block" />
            </span>
          </div>


          {/* Gallery small images */}
          <div className="w-full border-t border-gray-800 h-1/4 flex items-center">
            <div
              id="eZscroller"
              className="mx-5 md:mx-32 relative overflow-auto scroll flex flex-row gap-x-3 items-center"
            >
              {images &&
                images.map((imageSrc: any, index: number) => (
                  <span
                    id={"tiny" + index}
                    key={index}
                    onClick={() => setImageIndex(index)}
                    className={`
                       hover:shadow-md duration-200 relative cursor-pointer min-w-[150px] aspect-[4/3] select-none
                      ${images.indexOf(imageSrc) === imageIndex ? "scale-100" : "scale-75 hover:scale-90"}
                    `}
                  >
                    <Image
                      src={imageSrc}
                      layout="fill"
                      className="rounded-md"
                      objectFit="cover"
                      sizes="(max-width: 768px) 50vw,
                      (max-width: 1200px) 50vw,
                      50vw"
                    />
                  </span>
                )
                )}
            </div>
          </div>
        </div>
      }

      {/* Closed gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {images &&
          images.map((imageSrc: any, index: number) => (
            <span key={index} onClick={() => setImageIndex(index)} className=" select-none hover:scale-105 aspect-[4/3] hover:shadow-md duration-200 relative cursor-pointer">
              <Image
                src={imageSrc}
                layout="fill"
                className="rounded-md object-cover"
                sizes="(max-width: 768px) 50vw,
                (max-width: 1200px) 33vw,
                33vw"
              />
            </span>
          ))}
      </div>
    </div>
  );
}