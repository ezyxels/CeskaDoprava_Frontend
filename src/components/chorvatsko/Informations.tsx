import Heading from '@components/bricks/Heading'
import ScrollReveal from '@components/bricks/ScrollReveal'
import Wrapper from '@components/bricks/Wrapper'
import { HiCalendar } from 'react-icons/hi'

export default function Informations() {
  return (
    <div className='bg-body-100 pb-20' id="informace">
      <Wrapper as="section" size="base" paddedContent="base" className="justify-center items-center flex flex-col">
        <ScrollReveal>
          <Heading level={2} size={"lg"} align="center" className="mb-10">Jak to funguje</Heading>
          <p className='text-center max-w-prose'>Autobusy odjíždí z České republiky každý pátek večer a z Chorvatska každou sobotu večer a to od června do září. Všechny autobusy jsou vybaveny polohovatelnými sedačkami s bezpečnostními pásy, klimatizací, vždy funkční toaletou, občerstvením, zásuvkami na 230V, televizí a k dispozici je vám profesionální a zkušená posádka.</p>
        </ScrollReveal>
        <ScrollReveal staggerChildren className='grid grid-cols-1 md:grid-cols-3 gap-x-5 lg:gap-x-10 gap-y-12 mt-32'>
          <div className='bg-white relative px-5  pt-10 pb-5 flex flex-col items-center shadow-2xl'>
            <span className='w-10 h-10 flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 bg-primary rounded-full text-white text-xl'><HiCalendar></HiCalendar></span>
            <Heading level={3} size="sm" align='center'>
              Vyberte destinaci.
            </Heading>
            <p className='text-center text-sm mt-5'>
              Vyberte si z více než 40 nástupních míst v ČR a zvolte vaší oblíbenou destinaci v Chorvatsku.
            </p>
          </div>
          <div className='bg-white relative px-5  pt-10 pb-5 flex flex-col items-center shadow-2xl'>
            <span className='w-10 h-10 flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 bg-primary rounded-full text-white text-xl'><HiCalendar></HiCalendar></span>
            <Heading level={3} size="sm" align='center'>
              Na jak dlouho?
            </Heading>
            <p className='text-center text-sm mt-5'>
              Autobusy odjíždí z ČR každý pátek a můžete s nimi vyrazit jak na týdenní dovolenou, tak se zajet vykoupat na jeden den za super zvýhodněné jízdné.
            </p>
          </div>
          <div className='bg-white relative px-5 pt-10 pb-5 flex flex-col items-center shadow-2xl'>
            <span className='w-10 h-10 flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 bg-primary rounded-full text-white text-xl'><HiCalendar></HiCalendar></span>
            <Heading level={3} size="sm" align='center'>
              Rezervujte si místo
            </Heading>
            <p className='text-center text-sm mt-5'>
              Vytvořte si snadno a rychle rezervaci jízdenek pro vaší cestu do Chorvatska
            </p>
          </div>
        </ScrollReveal>
      </Wrapper>
    </div>
  )
}