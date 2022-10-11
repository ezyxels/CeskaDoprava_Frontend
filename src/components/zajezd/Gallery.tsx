import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import GalleryCard from "./GalleryCard"


type Props = {
  images: any;
}




export default function Gallery({ images }: Props) {
  const [index, setIndex] = useState(-1);
  const [imagesShownArray, setImagesShownArray] = useState(
    Array(images.length).fill(false)
  );

  const imageVisibleChange = (index: number, isVisible: boolean) => {
    if (isVisible) {
      setImagesShownArray((currentImagesShownArray) => {
        currentImagesShownArray[index] = true;
        return [...currentImagesShownArray];
      });
    }
  };

  return (
    <div 
      id="galerie"
      className="grid grid-cols-2 md:grid-cols-3 gap-1"
    >
      {images &&
        images.map((imageSrc: any, index: number) => (
          <VisibilitySensor
            key={index}
            partialVisibility={true}
            offset={{ bottom: 80 }}
            onChange={(isVisible: any) => imageVisibleChange(index, isVisible)}
          >
            <GalleryCard
              imageSrc={imageSrc}
              show={imagesShownArray[index]}
            />
          </VisibilitySensor>
        ))}
    </div>
  );
}