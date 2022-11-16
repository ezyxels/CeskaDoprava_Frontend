import Heading from '@components/bricks/Heading';
import ScrollReveal from '@components/bricks/ScrollReveal';
import Wrapper from '@components/bricks/Wrapper';

type Props = {
  months: any;
}

export default function Dates({ months }: Props) {
  return (
    <Wrapper as="section" size="base" paddedContent='sm'>
      <ScrollReveal>
        <Heading level={2} size="xl">Termíny 2022</Heading>
        {/*         <p className='mt-10 max-w-prose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ullam cupiditate ea eveniet vel voluptatum expedita iusto cum dicta libero velit porro neque recusandae eius cumque, quidem sequi hic corporis alias deleniti?</p>
 */}      </ScrollReveal>

      <div className='grid grid-cols-1 md:grid-cols-2 my-14 gap-12'>
        {months.map((e: any, key: number) => {
          return (
            <div key={key}>
              <Heading level={3} size="base" color='white' align='center' className='bg-primary py-5'>{e.mesic}</Heading>
              <div className='grid grid-cols-2 py-5 bg-gray-100'>
                <div className='gap-y-1 divide-y-2 flex flex-col'>
                  <Heading level={4} align="center" size="xs" className='pb-2 h-12 items-end flex justify-center'>Odjezd ČR(pátek)</Heading>
                  {e.datumCr !== undefined && e.datumCr.map((date: any, key: number) => (
                    <p className='text-center' key={key}>{date.datum}</p>
                  ))}
                </div>
                <div className='gap-y-1 divide-y-2 flex flex-col'>
                  <Heading level={4} align="center" size="xs" className='pb-2 h-12 items-end flex justify-center'>Odjezd Chorvatsko(sobota)</Heading>
                  {e.datumHr !== undefined && e.datumHr.map((date: any, key: number) => (
                    <p className='text-center' key={key}>{date.datum}</p>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}