import Heading from '@components/bricks/Heading'
import ScrollReveal from '@components/bricks/ScrollReveal'
import Wrapper from '@components/bricks/Wrapper'
import { HiCalendar } from 'react-icons/hi'

export default function Information() {
  return (
    <div className='bg-body-100'>
      <Wrapper as="section" size="base" paddedContent='base' id="information">
        <ScrollReveal>
          <Heading level={2} size="lg">Základní info</Heading>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex delectus possimus odit ipsam voluptas. Maxime aut aliquam dignissimos harum illum saepe modi iste voluptates, ratione dicta ad vitae cupiditate quas laborum nisi.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptates, vel nisi eius nihil reprehenderit, quidem temporibus iste corrupti quisquam culpa autem inventore harum?</p>

          </div>
        </ScrollReveal>
        <ScrollReveal>
          <Heading level={2} size={"lg"} className="mb-10 mt-32">Jak to funguje</Heading>
          <p className='max-w-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quasi sint explicabo ex illo minima vel quidem, deleniti at, sequi aut laborum eaque inventore nostrum, iste deserunt nemo? Commodi blanditiis ipsum sint.</p>
        </ScrollReveal>
        <ScrollReveal as={"div"} className="grid grid-cols-1 md:grid-cols-3 gap-x-5 lg:gap-x-10 gap-y-20 mt-32" animation='slide-up' staggerChildren staggerChildrenIncrement='200' duration='200'>
          <div className='relative px-5 py-10 flex flex-col items-center shadow-lg shadow-gray-300 bg-white'>
            <span className='w-10 h-10 flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 bg-primary rounded-full text-white text-xl'><HiCalendar></HiCalendar></span>
            <Heading level={3} size="sm">
              Lorem ipsum dolor sit amet.
            </Heading>
            <p className='text-center text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae veritatis laudantium magni nulla nam eos vel ea labore laborum voluptate.</p>
          </div>
          <div className='relative px-5 py-10 flex flex-col items-center shadow-lg shadow-gray-300 bg-white'>
            <span className='w-10 h-10 flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 bg-primary rounded-full text-white text-xl'><HiCalendar></HiCalendar></span>
            <Heading level={3} size="sm">
              Lorem ipsum dolor sit amet.
            </Heading>
            <p className='text-center text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae veritatis laudantium magni nulla nam eos vel ea labore laborum voluptate.</p>
          </div>
          <div className='relative px-5 py-10 flex flex-col items-center shadow-lg shadow-gray-300 bg-white'>
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