import Image from "next/image";
import Heading from './Heading';
import Wrapper from './Wrapper';

type Props = {
  heading: string;
  text: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  children?: React.ReactNode;
}

export default function BasicHero({ heading, text, imageSrc = "", imageAlt, imagePosition = "right", children }: Props) {
  return (
    <Wrapper as={"header"} size={"base"} paddedContent={"lg"} className={`flex flex-col gap-10 ${imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"}`}>
      <div className="mt-20 md:mt-0 md:w-1/2 flex justify-center items-center">
        <div className="flex flex-col space-y-10">
          <Heading level={1} size={"lg"} className="text-left max-w-md">{heading}</Heading>
          <p className="max-w-prose">{text}</p>
          {children}
        </div>
      </div>
      <div className="relative md:w-1/2 aspect-[4/3] md:aspect-square">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          loading="eager"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </div>
    </Wrapper>
  )
}