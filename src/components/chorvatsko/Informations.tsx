import Heading from '@components/bricks/Heading'
import ScrollReveal from '@components/bricks/ScrollReveal'
import Wrapper from '@components/bricks/Wrapper'
import { HiCalendar } from 'react-icons/hi'

export default function Informations() {
  return (
    <div className='bg-body-100 pb-20'>
      <Wrapper as="section" size="base" paddedContent="base" className="justify-center items-center flex flex-col">
        <ScrollReveal>
          <Heading level={2} size={"lg"} align="center" className="mb-10">Jak to funguje</Heading>
          <p className='text-center max-w-prose'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quasi sint explicabo ex illo minima vel quidem, deleniti at, sequi aut laborum eaque inventore nostrum, iste deserunt nemo? Commodi blanditiis ipsum sint.</p>
        </ScrollReveal>
        <ScrollReveal staggerChildren className='grid grid-cols-1 md:grid-cols-3 gap-x-5 lg:gap-x-10 gap-y-12 mt-32'>
          <div className='bg-white relative px-5 py-10 flex flex-col items-center shadow-lg shadow-gray-300'>
            <span className='w-10 h-10 flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 bg-primary rounded-full text-white text-xl'><HiCalendar></HiCalendar></span>
            <Heading level={3} size="sm">
              Lorem ipsum dolor sit amet.
            </Heading>
            <p className='text-center text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae veritatis laudantium magni nulla nam eos vel ea labore laborum voluptate.</p>
          </div>
          <div className='bg-white relative px-5 py-10 flex flex-col items-center shadow-lg shadow-gray-300'>
            <span className='w-10 h-10 flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 bg-primary rounded-full text-white text-xl'><HiCalendar></HiCalendar></span>
            <Heading level={3} size="sm">
              Lorem ipsum dolor sit amet.
            </Heading>
            <p className='text-center text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae veritatis laudantium magni nulla nam eos vel ea labore laborum voluptate.</p>
          </div>
          <div className='bg-white relative px-5 py-10 flex flex-col items-center shadow-lg shadow-gray-300'>
            <span className='w-10 h-10 flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 bg-primary rounded-full text-white text-xl'><HiCalendar></HiCalendar></span>
            <Heading level={3} size="sm">
              Lorem ipsum dolor sit amet.
            </Heading>
            <p className='text-center text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae veritatis laudantium magni nulla nam eos vel ea labore laborum voluptate.</p>
          </div>
        </ScrollReveal>
      </Wrapper>
    </div>
  )
}