import Heading from '@components/bricks/Heading'
import Wrapper from '@components/bricks/Wrapper'
import { globalConfig } from '@configs/globalConfig'


export default function Map() {
  return (
    <Wrapper size='lg' className='mb-12 md:mb-20'>
      <div className='max-w-prose mx-auto'>
        <Heading level={2} size="lg" className='text-center'>
          Kde nás najdete?
        </Heading>
        {/*         <p className='mt-7 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias placeat molestias labore totam similique, assumenda obcaecati?</p>
 */}      </div>
      <div className='relative mt-20 w-full aspect-[10/7] md:aspect-[10/4]'>
        <iframe
          src={globalConfig.googleAddress}
          allowFullScreen
          loading="lazy"
          className='w-full h-full'
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Wrapper>
  )
}