import Button from "@components/bricks/Button";
import Heading from "@components/bricks/Heading";
import ScrollReveal from "@components/bricks/ScrollReveal";
import Wrapper from "@components/bricks/Wrapper";
import Image from "next/image";
import Link from "next/link";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function TripsAndParallax() {
  return (
    <>
      <Wrapper
        as={"section"}
        paddedContent="base"
      >
        <ScrollReveal staggerChildren>
          <Heading level={2} size="lg" className="max-w-lg mb-10">
            Pojeďte s námi na dovolenou po celé ČR i do zahraničí
          </Heading>
          <p className="max-w-prose mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            consequuntur dignissimos voluptatibus quos facilis architecto iure
            eaque nobis voluptas natus fugit nulla aperiam eius ducimus, excepturi
            sunt reprehenderit ea odio.
          </p>
          <Link href="/zajezdy">
            <a>
              <Button>Zobrazit zájezdy</Button>
            </a>
          </Link>
        </ScrollReveal>
      </Wrapper>

      <Wrapper size="lg">
        <JustParallax />
      </Wrapper>
    </>
  )
}


type JustParallaxProps = {
  className?: string;
};

function JustParallax({ className = "" }: JustParallaxProps) {
  return (
    <ParallaxProvider>
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-5 py-20 ${className}`}>
        {/* 1 */}
        <Parallax speed={3} className="relative aspect-[3/5] my-auto hidden md:flex">
          <Image
            src="/images/home/parallax/1.jpg"
            alt="Obrázek"
            layout="fill"
            objectFit="cover"
            loading="lazy"
            className="rounded-xl"
          />
        </Parallax>

        {/* 2 */}
        <Parallax speed={-5} className="flex flex-col gap-5">
          <div className="relative aspect-[3/5]">
            <Image
              src="/images/home/parallax/2.jpg"
              alt="Obrázek"
              layout="fill"
              objectFit="cover"
              loading="lazy"
              className="rounded-xl h-1/2"
            />
          </div>
          <div className="relative aspect-[3/5]">
            <Image
              src="/images/home/parallax/3.jpg"
              alt="Obrázek"
              layout="fill"
              objectFit="cover"
              loading="lazy"
              className="rounded-xl h-1/2"
            />
          </div>
        </Parallax>

        {/* 2 */}
        <Parallax speed={5} className="flex flex-col gap-5">
          <div className="relative aspect-[3/5]">
            <Image
              src="/images/home/parallax/4.jpg"
              alt="Obrázek"
              layout="fill"
              objectFit="cover"
              loading="lazy"
              className="rounded-xl h-1/2"
            />
          </div>
          <div className="relative aspect-[3/5]">
            <Image
              src="/images/home/parallax/5.jpg"
              alt="Obrázek"
              layout="fill"
              objectFit="cover"
              loading="lazy"
              className="rounded-xl h-1/2"
            />
          </div>
        </Parallax>

        {/* 1 */}
        <Parallax speed={-3} className="relative aspect-[3/5] my-auto hidden md:flex">
          <Image
            src="/images/home/parallax/6.jpg"
            alt="Obrázek"
            layout="fill"
            objectFit="cover"
            loading="lazy"
            className="rounded-xl"
          />
        </Parallax>

      </div>
    </ParallaxProvider>
  );
}