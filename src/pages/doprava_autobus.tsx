import BasicContact from '@components/bricks/BasicContact'
import BasicHero from '@components/bricks/BasicHero'
import Button from '@components/bricks/Button'
import Information from '@components/doprava/Information'
import VehiclePark from '@components/doprava/VehiclePark'
import Seo from '@components/root/seo/Seo'
import { HiArrowDown } from 'react-icons/hi'

export default function doprava_autobus() {
  return (
    <>
      <Seo title='Česká doprava' description='' />
      <BasicHero
        imageSrc='/images/autobusova/hero.png'
        imageAlt="doplnit alt!!!"
        heading='Autobusová doprava'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
      >
        <Button size="sm" className="w-fit" rightIcon={<HiArrowDown></HiArrowDown>}>Zjistit více</Button>
      </BasicHero>
      <Information />
      <VehiclePark />
      <BasicContact
        heading='Máte zájem o pronájem autobusu?'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent conubia.'
      />
    </>
  )
}