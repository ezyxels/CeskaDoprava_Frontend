import Button from "@components/bricks/Button"
import Heading from "@components/bricks/Heading"
import ScrollReveal from "@components/bricks/ScrollReveal"
import Wrapper from "@components/bricks/Wrapper"
import Link from "next/link"

export default function Croatia() {
  return (
    <Wrapper paddedContent="none" className="mt-28 md:mt-48">
      <ScrollReveal staggerChildren>
        <Heading level={2} size={"lg"} className="mb-5">K moři za pár kaček?</Heading>
        <p className="mb-10 max-w-prose">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, cumque voluptas esse dolor repudiandae impedit, et ullam, officia natus obcaecati accusantium sequi. Perferendis, nobis ullam. Nemo, quidem sed! Eaque recusandae doloremque similique.</p>
        <div>
          <Link href="/chorvatsko">
            <Button as={"a"}>Zjistit více</Button>
          </Link>
        </div>
      </ScrollReveal>
      <ScrollReveal staggerChildren staggerChildrenIncrement="200" className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
        <div className="flex flex-col md:py-5 space-y-5">
          <span className="flex w-10 h-10 justify-center items-center rounded-full bg-primary text-xl text-white">1</span>
          <Heading level={3} size={"base"}>Lorem, ipsum dolor.</Heading>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quia beatae, omnis nulla temporibus quis vel quam quae!</p>
        </div>
        <div className="flex flex-col md:py-5 space-y-5">
          <span className="flex w-10 h-10 justify-center items-center rounded-full bg-primary text-xl text-white">2</span>
          <Heading level={3} size={"base"}>Lorem, ipsum dolor.</Heading>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quia beatae, omnis nulla temporibus quis vel quam quae!</p>
        </div>
        <div className="flex flex-col md:py-5 space-y-5">
          <span className="flex w-10 h-10 justify-center items-center rounded-full bg-primary text-xl text-white">3</span>
          <Heading level={3} size={"base"}>Lorem, ipsum dolor.</Heading>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quia beatae, omnis nulla temporibus quis vel quam quae!</p>
        </div>
      </ScrollReveal>
    </Wrapper>
  )
}