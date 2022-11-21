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
          heading='VDL FUTURA 139-440'
          imageBigSrc='/images/autobusova/red1.jpg'
          imageBigAlt="Autobus VDL FUTURA 139-440"
          imageSmallLeftSrc='/images/autobusova/red2.jpg'
          imageSmallLeftAlt="Autobus VDL FUTURA 139-440"
          imageSmallRightSrc='/images/autobusova/red3.jpg'
          imageSmallRightAlt="Autobus VDL FUTURA 139-440"
          imagePosition='left'
          points={[{
            heading: "Obsaditelnost",
            text: "Tento autobus má obsaditelnost 59 + 1 +1.",
            icon: <HiArrowDown />
          },
          {
            heading: "Vybavení",
            text: "Klimatizace, polohovací sedačky, bezpečnostní pásy, 2x lednice, kuchyňka, kávovar, toaleta, 2x LCD TV s USB přehrávačem, palubní audiosystém, skibox.",
            icon: <HiArrowDown />
          },
          {
            heading: "Emisní norma",
            text: "Tento autobus splňuje emisní normu EURO V. ",
            icon: <HiArrowDown />
          }]}
        />

        <TextPointAndImage
          heading='VDL FUTURA 129-410'
          imageBigSrc='/images/autobusova/white1.jpg'
          imageBigAlt="Autobus VDL FUTURA 129-410"
          imageSmallLeftSrc='/images/autobusova/white2.jpg'
          imageSmallLeftAlt="Autobus VDL FUTURA 129-410"
          imageSmallRightSrc='/images/autobusova/white3.jpg'
          imageSmallRightAlt="Autobus VDL FUTURA 129-410"
          imagePosition='right'
          points={[{
            heading: "Obsaditelnost",
            text: "Tento autobus má obsaditelnost 53 + 1 +1.",
            icon: <HiArrowDown></HiArrowDown>
          },
          {
            heading: "Vybavení",
            text: "Klimatizace, polohovací sedačky, bezpečnostní pásy, 2x lednice, kávovar, toaleta, 2x LCD TV s USB přehrávačem, palubní audiosystém, skibox, tažné zařízení.",
            icon: <HiArrowDown></HiArrowDown>
          },
          {
            heading: "Emisní norma",
            text: "Tento autobus splňuje emisní normu EURO V.",
            icon: <HiArrowDown></HiArrowDown>
          }]}
        />

        <TextPointAndImage
          heading='BOVA FUTURA FHD 13-380'
          imageBigSrc="/images/autobusova/eyes1.jpg"
          imageBigAlt="Autobus BOVA FUTURA FHD 13-380"
          imageSmallLeftSrc="/images/autobusova/eyes2.jpg"
          imageSmallLeftAlt="Autobus BOVA FUTURA FHD 13-380"
          imageSmallRightSrc="/images/autobusova/eyes3.jpg"
          imageSmallRightAlt="Autobus BOVA FUTURA FHD 13-380"
          imagePosition='left'
          points={[{
            heading: "Obsaditelnost",
            text: "Tento autobus má obsaditelnost 53 + 1 +1.",
            icon: <HiArrowDown></HiArrowDown>
          },
          {
            heading: "Vybavení",
            text: "Klimatizace, polohovací sedačky, bezpečnostní pásy, 2x lednice, kávovar, toaleta, 2x LCD TV s USB přehrávačem, palubní audiosystém, skibox, tažné zařízení.",
            icon: <HiArrowDown></HiArrowDown>
          },
          {
            heading: "Emisní norma",
            text: "Tento autobus splňuje emisní normu EURO IV.",
            icon: <HiArrowDown></HiArrowDown>
          }]}
        />
        <TextPointAndImage
          heading='VOLKSWAGEN CARAVELLA'
          imageBigSrc='/images/autobusova/volwie1.jpg'
          imageBigAlt="Přepravní vůz VOLKSWAGEN CARAVELLA"
          imageSmallLeftSrc='/images/autobusova/volwie2.jpg'
          imageSmallLeftAlt="Přepravní vůz VOLKSWAGEN CARAVELLA"
          imageSmallRightSrc='/images/autobusova/volwie3.jpg'
          imageSmallRightAlt="Přepravní vůz VOLKSWAGEN CARAVELLA"
          imagePosition='right'
          points={[{
            heading: "Obsaditelnost",
            text: "Tato dodávka má obsaditelnost 8 + 1.",
            icon: <HiArrowDown></HiArrowDown>
          },
          {
            heading: "Vybavení",
            text: "Klimatizace, tažné zařízení.",
            icon: <HiArrowDown></HiArrowDown>
          },
          {
            heading: "Emisní norma",
            text: "Tato dodávka splňuje emisní normu EURO IV.",
            icon: <HiArrowDown></HiArrowDown>
          }]}
        />
      </div>
    </Wrapper>
  )
}