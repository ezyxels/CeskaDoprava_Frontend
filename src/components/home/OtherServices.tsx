import Button from "@components/bricks/Button";
import Heading from "@components/bricks/Heading";
import ScrollReveal from "@components/bricks/ScrollReveal";
import Wrapper from "@components/bricks/Wrapper";
import Image from "next/image";
import Link from "next/link";

export default function OtherServices() {
  return (
    <>
      {/* Intro */}
      <Wrapper className="border-t-2 border-grey-500 my-24 xl:my-32">
        <ScrollReveal>
          <Heading level={2} size={"lg"} className="mb-8 mt-20">Další služby</Heading>
          <p className="max-w-prose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde rem voluptate totam ea aperiam non!</p>
        </ScrollReveal>
      </Wrapper>

      <Wrapper size="lg" className="flex flex-col gap-y-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Link href="/doprava_autobus">
            <a className="relative aspect-square md:aspect-[4/3] overflow-hidden isolate rounded-xl group">
              <Image
                src={"/images/home/otherServices/autobus.jpg"}
                alt={"doplnit alt!!"}
                layout="fill"
                objectFit="cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  50vw"
                className="group-hover:scale-110 transition-transform origin-center duration-300"
              />
              <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent transition-transform duration-300 group-hover:translate-y-20 md:group-hover:translate-y-28 "></div>
              <Heading level={3} size={"lg"} color="white" className="absolute left-5 bottom-5 sm:bottom-8 sm:left-8 lg:left-12 lg:bottom-12">Autobusová<br />doprava</Heading>
            </a>
          </Link>
          <Link href="/doprava_nakladni">
            <a className="relative aspect-square md:aspect-[4/3] overflow-hidden isolate rounded-xl group">
              <Image
                src={"/images/home/otherServices/kamion.jpg"}
                alt={"doplnit alt!!"}
                layout="fill"
                objectFit="cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  50vw"
                className="group-hover:scale-110 transition-transform origin-center duration-300"
              />
              <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent transition-transform duration-300 group-hover:translate-y-20 md:group-hover:translate-y-28 "></div>
              <Heading level={3} size={"lg"} color="white" className="absolute left-5 bottom-5 sm:bottom-8 sm:left-8 lg:left-12 lg:bottom-12">Nákladní<br />doprava</Heading>
            </a>
          </Link>
        </div>

        <Link href="/zajezdy">
          <a className="relative aspect-square md:aspect-[21/9] overflow-hidden isolate rounded-xl group">
            <Image
              src={"/images/home/otherServices/zajezdy.jpg"}
              alt={"doplnit alt!!"}
              layout="fill"
              objectFit="cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 100vw,
              100vw"
              className="group-hover:scale-110 transition-transform origin-center duration-300"
            />
            <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent transition-transform duration-300 group-hover:translate-y-20 md:group-hover:translate-y-28 "></div>
            <div className="absolute flex flex-col gap-8 items-start justify-start left-5 bottom-5 sm:bottom-8 sm:left-8 lg:left-12 lg:bottom-12">
              <Heading level={3} size={"lg"} color="white">Zájezdy</Heading>
              <p className="text-white max-w-xl hidden md:block">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis hic, quaerat officia vero nam. Aliquid perferendis ipsum sit ex asperiores, corporis corrupti inventore tempora.</p>
              <Button variant={"outlined"} color={"light"}>Zjistit více</Button>
            </div>
          </a>
        </Link>
      </Wrapper>
    </>
  )
}