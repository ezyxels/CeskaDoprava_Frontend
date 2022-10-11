import Heading from '@components/bricks/Heading'
import Wrapper from '@components/bricks/Wrapper'
import React from 'react'
import { Disclosure } from '@headlessui/react'
import { HiChevronDown } from 'react-icons/hi'
import Accordion from '@components/bricks/Accordion'
import AccordionStack from '@components/bricks/AccordionStack'

export default function Questions() {
  return (
    <div className='bg-body-100'>
      <Wrapper as="section" size="base" paddedContent='sm'>
        <Heading level={2} size="xl">Často kladené otázky</Heading>
        <p className='mt-4 max-w-prose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ullam cupiditate ea eveniet vel voluptatum expedita iusto cum dicta libero velit porro neque recusandae eius cumque, quidem sequi hic corporis alias deleniti?</p>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
          <div>
            <AccordionStack>
              <Accordion title='Lorem ipsum dolor sit amet consectetur?'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti magnam tenetur eum error cumque iste voluptates minima culpa aliquid amet maxime, excepturi consequuntur? Nisi accusantium quo et consequuntur at! Optio, magnam porro.
              </Accordion>
              <Accordion title='Lorem ipsum dolor sit amet consectetur?'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti magnam tenetur eum error cumque iste voluptates minima culpa aliquid amet maxime, excepturi consequuntur? Nisi accusantium quo et consequuntur at! Optio, magnam porro.
              </Accordion>
              <Accordion title='Lorem ipsum dolor sit amet consectetur?'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti magnam tenetur eum error cumque iste voluptates minima culpa aliquid amet maxime, excepturi consequuntur? Nisi accusantium quo et consequuntur at! Optio, magnam porro.
              </Accordion>
              <Accordion title='Lorem ipsum dolor sit amet consectetur?'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti magnam tenetur eum error cumque iste voluptates minima culpa aliquid amet maxime, excepturi consequuntur? Nisi accusantium quo et consequuntur at! Optio, magnam porro.
              </Accordion>
              <Accordion title='Lorem ipsum dolor sit amet consectetur?'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti magnam tenetur eum error cumque iste voluptates minima culpa aliquid amet maxime, excepturi consequuntur? Nisi accusantium quo et consequuntur at! Optio, magnam porro.
              </Accordion>
            </AccordionStack>
          </div>

          <div>
            <AccordionStack>
              <Accordion title='Lorem ipsum dolor sit amet consectetur?'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti magnam tenetur eum error cumque iste voluptates minima culpa aliquid amet maxime, excepturi consequuntur? Nisi accusantium quo et consequuntur at! Optio, magnam porro.
              </Accordion>
              <Accordion title='Lorem ipsum dolor sit amet consectetur?'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti magnam tenetur eum error cumque iste voluptates minima culpa aliquid amet maxime, excepturi consequuntur? Nisi accusantium quo et consequuntur at! Optio, magnam porro.
              </Accordion>
              <Accordion title='Lorem ipsum dolor sit amet consectetur?'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti magnam tenetur eum error cumque iste voluptates minima culpa aliquid amet maxime, excepturi consequuntur? Nisi accusantium quo et consequuntur at! Optio, magnam porro.
              </Accordion>
              <Accordion title='Lorem ipsum dolor sit amet consectetur?'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti magnam tenetur eum error cumque iste voluptates minima culpa aliquid amet maxime, excepturi consequuntur? Nisi accusantium quo et consequuntur at! Optio, magnam porro.
              </Accordion>
            </AccordionStack>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}