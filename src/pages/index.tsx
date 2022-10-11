import ParallaxImage from "@components/bricks/ParallaxImage";
import Aftermovie from "@components/home/Aftermovie";
import BigImage from "@components/home/BigImage";
import Croatia from "@components/home/Croatia";
import CheapTrips from "@components/home/Croatia";
import Hero from "@components/home/Hero";
import NearestDepartures from "@components/home/NearestDepartures";
import OtherServices from "@components/home/OtherServices";
import Reviews from "@components/home/Reviews";
import TripsAndParallax from "@components/home/TripsAndParallax";
import Seo from "@components/root/seo/Seo";
import { ipToFetch } from "@configs/globalConfig";
import type { NextPage } from "next";

// Nejbližší odjezdy data
export const odjezdy = [
  {
    id: 1,
    tripId: 576,
    imageSrc: "/images/conf.jpg",
    imageAlt: "Heyyyy",
    country: "Chorvatsko",
    name: "Baška",
    dateFrom: "22.7.2022",
    dateTo: "28.7.2022",
  },
  {
    id: 2,
    tripId: 576,
    imageSrc: "/images/conf.jpg",
    imageAlt: "Heyyyy",
    country: "Chorvatsko",
    name: "Baška",
    dateFrom: "22.7.2022",
    dateTo: "28.7.2022",
  },
  {
    id: 3,
    tripId: 576,
    imageSrc: "/images/conf.jpg",
    imageAlt: "Heyyyy",
    country: "Chorvatsko",
    name: "Baška",
    dateFrom: "22.7.2022",
    dateTo: "28.7.2022",
  },
  {
    id: 4,
    tripId: 576,
    imageSrc: "/images/conf.jpg",
    imageAlt: "Heyyyy",
    country: "Chorvatsko",
    name: "Baška",
    dateFrom: "22.7.2022",
    dateTo: "28.7.2022",
  },
];

export const recenze = [
  {
    name: "Petr Rychlý",
    destination: "Chorvastko",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste rem modi dicta cum beatae. Non eveniet assumenda quisquam deserunt beatae!",
    imageSrc: "/images/conf.jpg"
  },
  {
    name: "Petr Rychlý",
    destination: "Chorvastko",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste rem modi dicta cum beatae. Non eveniet assumenda quisquam deserunt beatae!",
    imageSrc: "/images/conf.jpg"
  },
  {
    name: "Petr Rychlý",
    destination: "Chorvastko",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste rem modi dicta cum beatae. Non eveniet assumenda quisquam deserunt beatae!",
    imageSrc: "/images/conf.jpg"
  }
]

type Props = {
  trips: any;
  reviews: any;
}

export default function Home({trips, reviews}: Props){
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
      <ParallaxImage  className="w-screen aspect-[5/3]" speed={-8}/>

      {/* Chorvatsko */}
      <Croatia />

      {/* Další služby */}
      <OtherServices />
    </>
  );
}

export async function getStaticProps(){
  const [zajezdyRes, recenzeRes]  = await Promise.all([
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
