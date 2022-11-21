import Heading from '@components/bricks/Heading';
import ScrollReveal from "@components/bricks/ScrollReveal";
import Wrapper from '@components/bricks/Wrapper';
import Image from 'next/image';

type Props = {
  heading: string;
  imageBigSrc: string;
  imageBigAlt: string;
  imageSmallLeftSrc: string;
  imageSmallLeftAlt: string;
  imageSmallRightSrc: string;
  imageSmallRightAlt: string;
  imagePosition: "left" | "right";
  points: {
    heading: string,
    text: string,
    icon: any
  }[];
};

export default function TextPointAndImage({
  heading,
  points,
  imageBigSrc,
  imageBigAlt,
  imageSmallLeftSrc,
  imageSmallLeftAlt,
  imageSmallRightSrc,
  imageSmallRightAlt,
  imagePosition
}: Props) {
  return (
    <Wrapper
      size='base'
      className={`flex flex-col-reverse gap-10 h-full
        ${imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      <div className='flex flex-col lg:w-1/2 gap-5'>
        <div className="relative overflow-hidden rounded-xl aspect-[5/3]">
          <Image
            src={imageBigSrc}
            alt={imageBigAlt}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='grid grid-cols-2 gap-5'>
          <div className="relative overflow-hidden rounded-xl aspect-[8/5]">
            <Image
              src={imageSmallLeftSrc}
              alt={imageSmallLeftAlt}
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className="relative overflow-hidden rounded-xl aspect-[8/5]">
            <Image
              src={imageSmallRightSrc}
              alt={imageSmallRightAlt}
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-12 lg:mt-0 lg:w-1/2">
        <h3 className="text-3xl text-gray-900 font-bold">{heading}</h3>
        <ScrollReveal staggerChildren className='mt-5 gap-y-7 flex flex-col'>
          {points.map((item, key) => (
            <div
              className="py-3 lg:px-5 flex flex-col lg:flex-row gap-y-3"
              key={key}
            >
              <span className="flex justify-center items-center w-8 min-w-[32px] h-8 min-h-[32px] mr-5 bg-primary rounded-full text-white text-xl">
                {item.icon}
              </span>
              <div className="flex flex-col gap-y-1">
                <Heading size="base" level={3} className="text-gray-900">{item.heading}</Heading>
                <p className="text-gray-700 mt-1 leading-5">{item.text}</p>
              </div>
            </div>
          ))}

        </ScrollReveal>
      </div>
    </Wrapper>
  )
}