import Heading from '@components/bricks/Heading'
import ScrollReveal from '@components/bricks/ScrollReveal'
import Wrapper from '@components/bricks/Wrapper'
import { HiCalendar } from 'react-icons/hi'

type Props = {
  heading: string;
  textLeft: string;
  textRight: string;
  heading2: string;
  text2: string;
  c1heading: string;
  c1text: string;
  c2heading: string;
  c2text: string;
  c3heading: string;
  c3text: string;
}

export default function Information({
  heading,
  textLeft,
  textRight,
  heading2,
  text2,
  c1heading,
  c1text,
  c2heading,
  c2text,
  c3heading,
  c3text
}: Props) {
  return (
    <div className='bg-body-100'>
      <Wrapper as="section" size="base" paddedContent='base' id="informace">
        <ScrollReveal>
          <Heading level={2} size="lg">{heading}</Heading>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10'>
            <p>{textLeft}</p>
            <p>{textRight}</p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <Heading level={2} size={"lg"} className="mb-10 mt-32">{heading2}</Heading>
          <p className='max-w-xl'>{text2}</p>
        </ScrollReveal>
        <ScrollReveal as={"div"} className="grid grid-cols-1 md:grid-cols-3 gap-x-5 lg:gap-x-10 gap-y-20 mt-32" animation='slide-up' staggerChildren staggerChildrenIncrement='200' duration='200'>
          <div className='relative px-5 py-10 flex flex-col items-center shadow-lg shadow-gray-300 bg-white'>
            <span className='w-10 h-10 flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 bg-primary rounded-full text-white text-xl'><HiCalendar></HiCalendar></span>
            <Heading level={3} size="sm" align='center'>
              {c1heading}
            </Heading>
            <p className='text-center text-sm mt-5'>{c1text}</p>
          </div>
          <div className='relative px-5 py-10 flex flex-col items-center shadow-lg shadow-gray-300 bg-white'>
            <span className='w-10 h-10 flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 bg-primary rounded-full text-white text-xl'><HiCalendar></HiCalendar></span>
            <Heading level={3} size="sm" align='center'>
              {c2heading}
            </Heading>
            <p className='text-center text-sm mt-5'>{c2text}</p>
          </div>
          <div className='relative px-5 py-10 flex flex-col items-center shadow-lg shadow-gray-300 bg-white'>
            <span className='w-10 h-10 flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 bg-primary rounded-full text-white text-xl'><HiCalendar></HiCalendar></span>
            <Heading level={3} size="sm" align='center'>
              {c3heading}
            </Heading>
            <p className='text-center text-sm mt-5'>{c3text}</p>
          </div>
        </ScrollReveal>
      </Wrapper>
    </div>
  )
}