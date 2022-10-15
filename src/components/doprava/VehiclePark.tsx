import Heading from '@components/bricks/Heading'
import Wrapper from '@components/bricks/Wrapper'
import { HiArrowDown } from 'react-icons/hi'
import TextPointAndImage from './TextPointAndImage'

export default function VehiclePark() {
  return (
    <Wrapper paddedContent='sm'>
      <Heading level={2} size={'xl'}>Vozový park</Heading>
      <div className='flex flex-col gap-y-20 lg:gap-y-48 md:mt-32' >
        <TextPointAndImage
          heading='Lorem ipsum dolor sit amet'
          perex='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
          imageBigSrc='/images/cd-img-8.jpg'
          imageBigAlt="doplnit alt!!!"
          imageSmallLeftSrc='/images/cd-img-8.jpg'
          imageSmallLeftAlt="doplnit alt!!!"
          imageSmallRightSrc='/images/cd-img-8.jpg'
          imageSmallRightAlt="doplnit alt!!!"
          imagePosition='left'
          points={[{
            heading: "Lorem ipsum dolor sit amet",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia.",
            icon: <HiArrowDown></HiArrowDown>
          },
          {
            heading: "Lorem ipsum dolor sit amet",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia.",
            icon: <HiArrowDown></HiArrowDown>
          },
          {
            heading: "Lorem ipsum dolor sit amet",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia.",
            icon: <HiArrowDown></HiArrowDown>
          }]}
        />

        <TextPointAndImage
          heading='Lorem ipsum dolor sit amet'
          perex='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
          imageBigSrc='/images/cd-img-8.jpg'
          imageBigAlt="doplnit alt!!!"
          imageSmallLeftSrc='/images/cd-img-8.jpg'
          imageSmallLeftAlt="doplnit alt!!!"
          imageSmallRightSrc='/images/cd-img-8.jpg'
          imageSmallRightAlt="doplnit alt!!!"
          imagePosition='right'
          points={[{
            heading: "Lorem ipsum dolor sit amet",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia.",
            icon: <HiArrowDown></HiArrowDown>
          },
          {
            heading: "Lorem ipsum dolor sit amet",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia.",
            icon: <HiArrowDown></HiArrowDown>
          },
          {
            heading: "Lorem ipsum dolor sit amet",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia.",
            icon: <HiArrowDown></HiArrowDown>
          }]}
        />

        <TextPointAndImage
          heading='Lorem ipsum dolor sit amet'
          perex='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
          imageBigSrc='/images/cd-img-8.jpg'
          imageBigAlt="doplnit alt!!!"
          imageSmallLeftSrc='/images/cd-img-8.jpg'
          imageSmallLeftAlt="doplnit alt!!!"
          imageSmallRightSrc='/images/cd-img-8.jpg'
          imageSmallRightAlt="doplnit alt!!!"
          imagePosition='left'
          points={[{
            heading: "Lorem ipsum dolor sit amet",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia.",
            icon: <HiArrowDown></HiArrowDown>
          },
          {
            heading: "Lorem ipsum dolor sit amet",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia.",
            icon: <HiArrowDown></HiArrowDown>
          },
          {
            heading: "Lorem ipsum dolor sit amet",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia.",
            icon: <HiArrowDown></HiArrowDown>
          }]}
        />
      </div>
    </Wrapper>
  )
}