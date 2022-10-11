import { HiMail, HiPhone } from "react-icons/hi";

import Button from "@components/bricks/Button"
import { ctaMenu } from "@configs/routes";
import Wrapper from "./Wrapper";
import Heading from "./Heading";

type Props = {
  heading: string;
  text: string;
}

export default function BasicContact({heading, text}: Props){
  return(
    <section>
      <Wrapper
        size="full"
        paddedContent="sm"
        className="flex flex-col bg-primary rounded-md mb-20 md:min-h-[700px] px-5 justify-center items-center bg-gradient-to-tl from-black/60"
      >
        <Heading level={3} size="lg" color="white" className="text-center">{heading}</Heading>
        <p className="text-white mt-5 max-w-lg text-center">{text}</p>
        <div className="grid md:grid-cols-2 gap-5 mt-5">
          <a
            href={ctaMenu[0].link}
          >
            <Button 
              color="light"
              variant="filled"
              className="w-full"
              leftIcon={<HiPhone/>}
            >
              {ctaMenu[0].label}
            </Button>
          </a>
          <a
            href={ctaMenu[1].link}
          >        
          <Button 
            color="light"
            variant="filled"
            className="w-full"
            leftIcon={ <HiMail className="mr-3"/>}
          >
          {ctaMenu[1].label}
        </Button>      
          </a>
        </div>
      </Wrapper>
    </section>
  )
}