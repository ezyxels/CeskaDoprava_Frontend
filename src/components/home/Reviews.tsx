import ScrollReveal from "@components/bricks/ScrollReveal";
import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";

import Heading from "@components/bricks/Heading";
import Wrapper from "@components/bricks/Wrapper";
import ReviewCard from "./ReviewCard";


type Props = {
  reviews: any;
}

export default function Reviews({ reviews }: Props) {
  const [data, setData] = useState<any>()

  useEffect(() => (
    setData(reviews)
  ), [setData]);

  if (data !== undefined && data !== null) {
    return (
      <Wrapper as={"section"} paddedContent="base">
        <ScrollReveal>
          <Heading level={2} size="lg" className="mb-5 pt-12">
            Co o nás říkají naši cestující?
          </Heading>
          <p className="max-w-prose">
            Vážíme si každého, kdo se rozhodne s námi cestovat a vyzkoušet naše služby. Zakládáme si na vstřícném a individuálním přístupu ke každému z vás a vaše spokojenost je pro nás na prvním i posledním místě.
          </p>
          <Swiper
            slidesPerView={1}
            grabCursor={true}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              960: {
                slidesPerView: 3,
              },
            }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            loop={true}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
          >
            {data.map((review: any, key: number) => (
              <SwiperSlide key={key} className="pb-16">
                <ReviewCard
                  name={review.attributes.jmeno}
                  destination={review.attributes.destinace}
                  text={review.attributes.text}
                  imageSrc={review.attributes.fotka.data.attributes.url}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </ScrollReveal>
      </Wrapper>
    )
  }
  else {
    return (null)
  }
}