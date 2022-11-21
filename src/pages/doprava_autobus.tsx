import BasicContact from '@components/bricks/BasicContact'
import BasicHero from '@components/bricks/BasicHero'
import Button from '@components/bricks/Button'
import VehiclePark from '@components/doprava/Buses'
import Information from '@components/doprava/Information'
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
        text='Naše autobusy vás dopraví kamkoli v rámci České republiky i všech ostatních evropských států. Ať už cestujete za poznáním, odpočinkem, kulturou nebo třeba sportem. Dopravu zajišťujeme pro soukromé osoby, kolektivy, cestovní kanceláře, školy a další instituce. Na svých cestách se setkáte s ochotnými a vstřícnými řidiči, kteří vás do cíle dovezou bezpečně, pohodlně a vždy přidají svůj úsměv a dobrou náladu.'
      >
        <a href="#informace">
          <Button size="sm" className="w-fit" rightIcon={<HiArrowDown />}>Zjistit více</Button>
        </a>
      </BasicHero>
      <Information
        heading='Základní informace'
        textLeft='Zajišťujeme vnitrostátní i mezinárodní dopravu osob. Disponujeme vlastním vozovým parkem s kapacitou 8 - 59 osob. Všechny autobusy disponují nejvyšší zájezdovou i bezpečnostní výbavou. Dopravu zajišťujeme pro soukromé osoby, kolektivy, cestovní kanceláře, zájmové spolky, školy a další instituce.'
        textRight='Na svých cestách se setkáte s ochotnými a vstřícnými řidiči, kteří vás do cíle dovezou bezpečně, pohodlně a vždy přidají svůj úsměv a dobrou náladu.'
        heading2='Jak to funguje'
        text2='Rozhodli jste se vyzkoušet naše služby? Rezervaci autobusu vytvoříte snadno a jednoduše ve třech krocích.'
        c1heading='Poptávka'
        c1text='Kontaktujte nás telefonicky nebo prostřednictvím emailu a sdělte nám všechny vaše požadavky, týkající se vaší cesty (místo odjezdu, příjezdu, termín, počet osob...)'
        c2heading='Cenová kalkulace'
        c2text='Na základě vašich požadavků vám do 24 hodin vyhotovíme ZDARMA cenovou kalkulaci na míru vašim potřebám'
        c3heading='Rezervace autobusu'
        c3text='Po odsouhlasení cenové kalkulace vám náš dispečer vytvoří rezervaci autobusu. Pak už se stačí těšit na vaší cestu za zážitky'
      />
      <VehiclePark />
      <BasicContact
        heading='Máte zájem o pronájem autobusu?'
        text='Pro rezervaci autobusu nebo vytvoření cenové kalkulace jsme vám k dispozici 7 dní v týdnu na níže uvedených kontaktech. Neváhejte se na nás obrátit.'
      />
    </>
  )
}