import ScrollReveal from '@components/bricks/ScrollReveal';
import { useState } from 'react';
import { ScrollContainer } from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css';

import Button from '@components/bricks/Button';
import Heading from '@components/bricks/Heading';
import Wrapper from '@components/bricks/Wrapper';

type Props = {
  departurePoints: DeparturePointsProps[] | any;
}

interface DeparturePointsProps {
  oblast: string;
  stat: string;
  mesto: Mesto[];
}

interface Mesto {
  nazev: string;
}

export default function DeparturePoints({ departurePoints }: Props) {
  const [content, setContent] = useState<string>(departurePoints[0].oblast);

  return (
    <Wrapper as="section" size="base" paddedContent='sm' className='mt-20'>
      <ScrollReveal>
        <Heading level={2} size="xl">Nástupní a výstupní místa</Heading>
        <p className='mt-10 max-w-prose'>
          Nabízíme největší počet nástupních míst v Plzeňském a Jihočeském kraji. Nabereme vás doslova na každém rohu. V Chorvatsku obsluhujeme všechna letoviska podél celého pobřeží.
        </p>
      </ScrollReveal>

      {/*  On pc */}
      <div className={`hidden mt-10 md:grid md:grid-cols-5 gap-x-5`}>
        {departurePoints.map((e: DeparturePointsProps, key: number) => {
          return (
            <div key={key}>
              <Heading level={3} size={"sm"}>{e.oblast}</Heading>
              <p className='text-xs uppercase mt-2'>{e.stat}</p>
              <div className='flex flex-col mt-5 bg-gray-100  divide-y-2 border-gray-900'>
                {e.mesto.map((mesto: Mesto, key: number) => (
                  <p key={key} className='text-sm w-full text-center p-2'>{mesto.nazev}</p>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/*  On phone  */}
      <div className='md:hidden mt-10'>
        <ScrollContainer className='flex my-auto gap-x-3 mb-10'>
          {departurePoints.map((e: DeparturePointsProps, key: number) => (
            <Button key={key} className="leading-5 px-16" onClick={() => setContent(e.oblast)}>{e.oblast}</Button>
          ))}
        </ScrollContainer>
        <div className=''>
          <div className='flex flex-col bg-gray-100 divide-y-2 border-gray-900'>
            {departurePoints.find((e: any) => e.oblast === content).mesto.map((mesto: Mesto, key: number) => (
              <p key={key} className='text-sm w-full text-center p-2'>{mesto.nazev}</p>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}