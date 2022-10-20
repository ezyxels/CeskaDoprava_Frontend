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
  trips: any;
  reviews: any;
}

export default function Home({ trips, reviews }: Props) {
  return (
    <>
      <Seo title="Úvodní stránka" description="" />

      <Hero />

      {/* Nejbližší odjezdy */}
      <NearestDepartures trips={trips} />

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
  const [zajezdyRes, recenzeRes] = await Promise.all([
    fetch(ipToFetch + "/api/zajezds?populate[uvodniFoto][fields][0]=url&filters[kategorie][kategorie][$containsi]=LastMinute&pagination[pageSize]=4&fields[0]=nazev&fields[1]=stat&populate[terminACena][fields][2]=datumOd&populate[terminACena][fields][1]=datumDo&filters[terminACena][datumOd][$gte]=" + new Date().toISOString().slice(0, 10)),
    fetch(ipToFetch + "/api/recenzes?populate[fotka][fields][0]=url&pagination[pageSize]=4")
  ]);
  const [zajezdy, recenze] = await Promise.all([
    zajezdyRes.json(),
    recenzeRes.json()
  ]);

  const zajezdyData = zajezdy.data
  const recenzeData = recenze.data
  return {
    props: {
      trips: zajezdyData,
      reviews: recenzeData
    }
  }
}
