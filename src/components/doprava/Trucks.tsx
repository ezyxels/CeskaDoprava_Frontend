import Heading from '@components/bricks/Heading'
import Wrapper from '@components/bricks/Wrapper'
import { HiArrowDown } from 'react-icons/hi'
import TextPointAndImage from './TextPointAndImage'

export default function VehiclePark() {
  return (
    <Wrapper paddedContent='sm'>
      <Heading level={2} size={'xl'}>Vozový park</Heading>
      <div className='flex flex-col gap-y-20 lg:gap-y-48 md:mt-32' >
        <TextPointAndImage
          heading='DAF XF + NÁVĚS SCHMITZ'
          imageBigSrc='/images/nakladni/pruh1.jpg'
          imageBigAlt="Nákladní vůz DAF XF + návěs SCHMITZ"
          imageSmallLeftSrc='/images/nakladni/pruh2.jpg'
          imageSmallLeftAlt="Nákladní vůz DAF XF + návěs SCHMITZ"
          imageSmallRightSrc='/images/nakladni/pruh3.jpg'
          imageSmallRightAlt="Nákladní vůz DAF XF + návěs SCHMITZ"
          imagePosition='left'
          points={[
            {
              heading: "Kapacita",
              text: "Je schopen pojmout kapacitu nákladu až 24 tun.",
              icon: <HiArrowDown />
            },
            {
              heading: "Vybavení",
              text: "Třístranná shrnovačka a ložná délka 13,6 m.",
              icon: <HiArrowDown />
            },
            {
              heading: "Emisní norma",
              text: "Tento nákladní automobil splňuje emisní normu EURO VI.",
              icon: <HiArrowDown />
            },
          ]}
        />

        <TextPointAndImage
          heading='DAF XF + NÁVĚS KRONE'
          imageBigSrc='/images/nakladni/daf1.jpg'
          imageBigAlt="Nákladní vůz DAF XF + návěs KRONE"
          imageSmallLeftSrc='/images/nakladni/daf2.jpg'
          imageSmallLeftAlt="Nákladní vůz DAF XF + návěs KRONE"
          imageSmallRightSrc='/images/nakladni/daf3.jpg'
          imageSmallRightAlt="Nákladní vůz DAF XF + návěs KRONE"
          imagePosition='right'
          points={[{
            heading: "Kapacita",
            text: "Je schopen pojmout kapacitu nákladu až 24 tun.",
            icon: <HiArrowDown></HiArrowDown>
          },
          {
            heading: "Vybavení",
            text: "Třístranná shrnovačka a ložná délka 13,6 m. Obsahuje paletový koš.",
            icon: <HiArrowDown></HiArrowDown>
          },
          {
            heading: "Emisní norma",
            text: "Tento nákladní automobil splňuje emisní normu EURO VI.",
            icon: <HiArrowDown></HiArrowDown>
          }]}
        />

        <TextPointAndImage
          heading='RENAULT PREMIUM + NÁVĚS SCHMITZ'
          imageBigSrc='/images/nakladni/renault1.jpg'
          imageBigAlt='Nákladní vůz RENAULT PREMIUM + návěs SCHMITZ'
          imageSmallLeftSrc='/images/nakladni/renault2.jpg'
          imageSmallLeftAlt='Nákladní vůz RENAULT PREMIUM + návěs SCHMITZ'
          imageSmallRightSrc='/images/nakladni/renault3.jpg'
          imageSmallRightAlt='Nákladní vůz RENAULT PREMIUM + návěs SCHMITZ'
          imagePosition='left'
          points={[{
            heading: "Kapacita",
            text: "Je schopen pojmout kapacitu nákladu až 24 tun.",
            icon: <HiArrowDown></HiArrowDown>
          },
          {
            heading: "Vybavení",
            text: "Třístranná shrnovačka a ložná délka 13,6 m.",
            icon: <HiArrowDown></HiArrowDown>
          },
          {
            heading: "Emisní norma",
            text: "Tento nákladní automobil splňuje emisní normu EURO EEV.",
            icon: <HiArrowDown></HiArrowDown>
          }]}
        />
      </div>
    </Wrapper>
  )
}