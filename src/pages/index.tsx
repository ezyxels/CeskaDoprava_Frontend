import ParallaxImage from "@components/bricks/ParallaxImage";
import Aftermovie from "@components/home/Aftermovie";
import Croatia from "@components/home/Croatia";
import Hero from "@components/home/Hero";
import NearestDepartures from "@components/home/NearestDepartures";
import OtherServices from "@components/home/OtherServices";
import Reviews from "@components/home/Reviews";
import TripsAndParallax from "@components/home/TripsAndParallax";
import Seo from "@components/root/seo/Seo";
import { ipToFetch } from "@configs/globalConfig";

type Props = {
  reviews: any;
}

export default function Home({ reviews }: Props) {
  return (
    <>
      <Seo title="Úvodní stránka" description="" />

      <Hero />

      {/* Nejbližší odjezdy */}
      <NearestDepartures />

      {/* Aftermovie */}
      <Aftermovie />

      {/* Zajezdy */}
      <TripsAndParallax />

      {/* Recenze */}
      <Reviews reviews={reviews} />

      {/* Obrázek */}
      <ParallaxImage
        className="w-screen aspect-[5/3]"
        speed={-8}
        animOnPhone={false}
        src="/images/home/chorvatsko.jpg"
      />

      {/* Chorvatsko */}
      <Croatia />

      {/* Další služby */}
      <OtherServices />
    </>
  );
}


export async function getStaticProps() {
  const res = await fetch(ipToFetch + "/api/recenzes?populate[fotka][fields][0]=url&pagination[pageSize]=4")
  const dataAndMeta = await res.json()
  const data = dataAndMeta.data
  return {
    props: {
      reviews: data
    }
  }
}
