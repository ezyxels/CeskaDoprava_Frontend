import BasicContact from '@components/bricks/BasicContact'
import BasicHero from '@components/bricks/BasicHero'
import Button from '@components/bricks/Button'
import Information from '@components/doprava/Information'
import VehiclePark from '@components/doprava/Trucks'
import Seo from '@components/root/seo/Seo'
import { HiArrowDown } from 'react-icons/hi'

export default function doprava_kamion() {
  return (
    <>
      <Seo title='Česká doprava' description='' />
      <BasicHero
        imageSrc='/images/nakladni/hero.png'
        imageAlt="doplnit alt!!!"
        heading='Kamionová doprava'
        text='Naše společnost zajišťuje vnitrostátní kamionovou dopravu a spedici. K přepravám využíváme vlastní vozidla (plachtové návěsy standard nebo lowdeck s ložnou délkou 13,6 metru), případně vozidla našich smluvních přepravců.'
      >
        <a href="#informace">
          <Button size="sm" className="w-fit" rightIcon={<HiArrowDown />}>Zjistit více</Button>
        </a>
      </BasicHero>
      <Information
        heading='Základní informace'
        textLeft='Naše společnost zajišťuje vnitrostátní kamionovou dopravu a spedici. K přepravám využíváme vlastní vozidla (plachtové návěsy standard nebo lowdeck s ložnou délkou 13,6 metru), případně vozidla našich smluvních přepravců.'
        textRight='Specializujeme se na přepravu všech druhů stavebního materiálu a paletových nákladů, ale poradíme si samozřejmě i s přepravou všech ostatních artiklů. Zajišťujeme také přepravu sklápěčem (8 tun) a plachtovou dodávkou (3,5 tuny).'
        heading2='Jak to funguje'
        text2='Rozhodli jste se vyzkoušet naše služby? Rezervaci nákladní dopravy vytvoříte snadno a jednoduše ve třech krocích.'
        c1heading='Poptávka'
        c1text='Kontaktujte nás telefonicky nebo prostřednictvím emailu a sdělte nám všechny vaše požadavky, týkající se vaší cesty (místo odjezdu, příjezdu, termín...)'
        c2heading='Cenová kalkulace'
        c2text='Na základě vašich požadavků vám do 24 hodin vyhotovíme ZDARMA cenovou kalkulaci na míru vašim potřebám'
        c3heading='Rezervace nákladní dopravy'
        c3text='Po odsouhlasení cenové kalkulace vám náš dispečer vytvoří rezervaci kamionu. Pak už se stačí těšit na vaší cestu.'
      />
      <VehiclePark />
      <BasicContact
        heading='Máte zájem o pronájem kamionu?'
        text='Pro rezervaci kamionu nebo vytvoření cenové kalkulace jsme vám k dispozici 7 dní v týdnu na níže uvedených kontaktech. Neváhejte se na nás obrátit.'
      />
    </>
  )
}