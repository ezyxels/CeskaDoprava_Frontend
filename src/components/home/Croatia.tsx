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
        <p className="mb-10 max-w-prose">
          Naší srdcovkou je Chorvatsko. Každé léto zajišťujeme pravidelné autobusové spojení z jižních a západních Čech do všech chorvatských letovisek. Ať už se rozhodnete vyrazit na týdenní dovolenou nebo čím dál více oblíbené jednodenní koupání, naše autobusy jsou tu pro vás. Vaše dovolená začíná už na palubě našeho autobusu :-)
        </p>
        <div>
          <Link href="/chorvatsko">
            <Button as={"a"}>Zjistit více</Button>
          </Link>
        </div>
      </ScrollReveal>
      <ScrollReveal staggerChildren staggerChildrenIncrement="200" className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
        <div className="flex flex-col md:py-5 space-y-5">
          <span className="flex w-10 h-10 justify-center items-center rounded-full bg-primary text-xl text-white">1</span>
          <Heading level={3} size={"base"}>Vyberte destinaci</Heading>
          <p>
            Vyberte si z více než 40 nástupních míst v ČR a zvolte vaší oblíbenou destinaci v Chorvatsku.
          </p>
        </div>
        <div className="flex flex-col md:py-5 space-y-5">
          <span className="flex w-10 h-10 justify-center items-center rounded-full bg-primary text-xl text-white">2</span>
          <Heading level={3} size={"base"}>Na jak dlouho?</Heading>
          <p>
            Autobusy odjíždí z ČR každý pátek a můžete s nimi vyrazit jak na týdenní dovolenou, tak se zajet vykoupat na jeden den za super zvýhodněné jízdné.
          </p>
        </div>
        <div className="flex flex-col md:py-5 space-y-5">
          <span className="flex w-10 h-10 justify-center items-center rounded-full bg-primary text-xl text-white">3</span>
          <Heading level={3} size={"base"}>Rezervujte si místo</Heading>
          <p>
            Vytvořte si snadno a rychle rezervaci jízdenek pro vaší cestu do Chorvatska.
          </p>
        </div>
      </ScrollReveal>
    </Wrapper>
  )
}