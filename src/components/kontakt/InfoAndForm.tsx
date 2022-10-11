import Heading from '@components/bricks/Heading'
import Wrapper from '@components/bricks/Wrapper'
import Form from '@components/kontakt/Form'
import React from 'react'

type Props = {}

export default function InfoAndForm({}: Props) {
  return (
    <Wrapper paddedContent='base' size='base' className='grid md:grid-cols-4'>
      <div className='px-2 flex flex-col gap-y-5'>
        <Heading level={2} size='base' className='mb-2'>Firemní ůdaje</Heading>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla a voluptas, iure nobis sed error ullam deserunt quia excepturi et.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla a voluptas, iure nobis sed error ullam deserunt quia excepturi et.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla a voluptas, iure nobis sed error ullam deserunt quia excepturi et.</p>
      </div>
      <div className='col-span-3'>
        <Form></Form>
      </div>
    </Wrapper>
  )
}