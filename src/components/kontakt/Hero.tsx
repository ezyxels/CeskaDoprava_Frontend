import Heading from '@components/bricks/Heading'
import Wrapper from '@components/bricks/Wrapper'
import { GiPalmTree } from "react-icons/gi"
import { HiCreditCard, HiMail, HiPhone, HiTruck } from 'react-icons/hi'

export default function Hero() {
  return (
    <>
      <div className='relative pt-36 pb-[600px] lg:pb-56 bg-pink-100'>
        <Wrapper size="base">
          <Heading level={1} size="xl">
            Kontaktujte nás
          </Heading>
          <p className='max-w-prose mt-10'>Pro vyřízení vašich požadavků, rezervací a objednávek jsme vám k dispozici na níže uvedených kontaktech, neváhejte se na nás obrátit.</p>
        </Wrapper>
      </div>
      <div className='relative my-10 bg-transparent -top-[575px] lg:-top-36 -mb-[575px] w-[90%] lg:-mb-36  max-w-[1280px] mx-auto grid lg:grid-cols-3 gap-10'>
        <div className='bg-white relative px-7 py-12 flex flex-col justify-between gap-y-4 shadow-2xl rounded-md'>
          <span className='absolute left-5 -top-5 h-10 w-10 bg-primary rounded-full flex items-center justify-center text-2xl text-white'><GiPalmTree /></span>
          <Heading level={2} size="sm">Cestovní agentura, zájezdy </Heading>
          <p>Rezervace zájezdů, informace, změny cestovních smluv, vstupenky</p>
          <div>
            <div className='flex flex-row items-center'>
              <HiPhone className='mr-2 text-primary' />
              <div className='flex flex-row flex-wrap gap-x-1'>
                <a href={"tel:+420 702 009 956"} className='c-link-3-a flex items-center text-primary font-medium'>
                  +420 702 009 956
                </a>,
                <a href={"tel:+420 606 391 992"} className='c-link-3-a flex items-center text-primary font-medium'>
                  +420 606 391 992
                </a>
              </div>
            </div>
            <a href={"mailto:cestovka.ceskadoprava@email.cz"} className='c-link-3-a flex items-center text-primary font-medium'>
              <HiMail className='mr-2' />cestovka.ceskadoprava@email.cz
            </a>
          </div>
        </div>

        <div className='bg-white relative px-7 py-12 flex flex-col justify-between gap-y-4 shadow-2xl rounded-md'>
          <span className='absolute left-5 -top-5 h-10 w-10 bg-primary rounded-full flex items-center justify-center text-2xl text-white'><HiTruck /></span>
          <Heading level={2} size="sm">Doprava, Jízdenky do Chorvatska</Heading>
          <p>Nonstop dispečink,  autobusová doprava, kamionová doprava, spedice, rezervace a prodej jízdenek, informace, příjem objednávek</p>
          <div>
            <a href={"tel:+420 721 174 928"} className='c-link-3-a flex items-center text-primary font-medium'>
              <HiPhone className='mr-2' />+420 721 174 928
            </a>
            <a href={"mailto:ceskadoprava@email.cz"} className='c-link-3-a flex items-center text-primary font-medium'>
              <HiMail className='mr-2' />ceskadoprava@email.cz
            </a>
          </div>
        </div>

        <div className='bg-white relative px-7 py-12 flex flex-col justify-between gap-y-4 shadow-2xl rounded-md'>
          <span className='absolute left-5 -top-5 h-10 w-10 bg-primary rounded-full flex items-center justify-center text-2xl text-white'><HiCreditCard /></span>
          <Heading level={2} size="sm">Fakturace, administrativní oddělení </Heading>
          <p>Zpracování faktur, objednávky, administrace webu</p>
          <div>
            <a href={"tel:+420 602 469 374"} className='c-link-3-a flex items-center text-primary font-medium'>
              <HiPhone className='mr-2' />+420 602 469 374
            </a>
            <a href={"mailto:fakturace.ceskadoprava@email.cz"} className='c-link-3-a flex items-center text-primary font-medium'>
              <HiMail className='mr-2' />fakturace.ceskadoprava@email.cz
            </a>
          </div>
        </div>

      </div>
    </>
  )
}