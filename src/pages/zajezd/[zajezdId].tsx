import { useEffect, useState } from "react"
import Seo from '@components/root/seo/Seo'
import React from 'react'
import Hero from '@components/zajezd/Hero';
import ContentCreator from "@components/zajezd/ContentCreator"
import { ipToFetch } from '@configs/globalConfig';
import ParallaxImage from '@components/bricks/ParallaxImage';

type Props = {
  country: string;
  location: string;
  name: string;
  perex: string;
  code: string;
  categories: [{kategorie: string}];
  imageSrc: string;
  otherImages?: [string];
  dateAndPrice : [{
    datumOd: string,
    datumDo: string,
    cena: number,
    pocetDni: number,
    pocetNoci: number
  }];
  departurePoints: [{
    mesto: string,
    ulice: string,
    cisloPopisne: number
  }];
  text: string;
  information?: string;
  housing?: string;
  catering?: string;
  transport?: string;
  programme?: string;
  events?: string;
  tips?: string;
  comment?: string;
  vse: any;
}


export default function zajezd({
  country,
  location,
  name,
  perex,
  code,
  categories,
  imageSrc,
  otherImages,
  dateAndPrice,
  departurePoints,
  text,
  information,
  housing,
  catering,
  transport,
  programme,
  events,
  tips,
  comment,
  vse
}: Props) {
  const [lowestPrice, setLowestPrice] = useState<number>(9999999)
  
  useEffect(() => {
    dateAndPrice.map((e: any, index: number) => {
      let tmp = lowestPrice
      if(e.cena < tmp){
        setLowestPrice(e.cena)
      }
    })
  })

  return (
    <>
      <Seo title="Česká doprava" description="" />
      <Hero
        country={country}
        location={location}
        name={name}
        perex={perex}
        price={lowestPrice}
        code={code}
        categories={categories}
      /> 
      <ParallaxImage 
        url={ipToFetch + imageSrc}
        alt="Úvodní fotka zájezdu"
        className='w-[90%] mx-auto rounded-lg overflow-hidden aspect-[5/3] mt-28'
        speed={-6}        
      />
      <ContentCreator 
        code={code}
        imageSrc={imageSrc}
        otherImages={otherImages}
        dateAndPrice={dateAndPrice}
        departurePoints={departurePoints}
        text={text}
        information={information}
        housing={housing}
        catering={catering}
        transport={transport}
        programme={programme}
        events={events}
        tips={tips}
        comment={comment}
      />
    </>
  )
}

export async function getStaticProps({params} : any){
  const data = (await (await fetch(ipToFetch + "/api/zajezds/" + params.zajezdId + "?populate[terminACena][fields][0]=datumOd&populate[terminACena][fields][1]=datumDo&populate[terminACena][fields][2]=cena&populate[kategorie][fields][3]=kategorie&populate[odjezdovaMista][fields][4]=mesto&populate[odjezdovaMista][fields][5]=ulice&populate[odjezdovaMista][fields][6]=cisloPopisne&populate[uvodniFoto][fields][7]=url&populate[dalsiFoto][fields][8]=url&populate[terminACena][fields][9]=pocetDni&populate[terminACena][fields][10]=pocetNoci")).json()).data

  return {
    props: {
      country: data.attributes.stat,
      location: data.attributes.lokace,
      name: data.attributes.nazev,
      perex: data.attributes.kratkyPopis,
      code: data.attributes.kod,
      categories: data.attributes.kategorie,
      imageSrc: data.attributes.uvodniFoto.data.attributes.url,
      otherImages: data.attributes.dalsiFoto.data.map((e: any) => {
        return (e.attributes.url)
      }),
      dateAndPrice: data.attributes.terminACena,
      departurePoints: data.attributes.odjezdovaMista,
      text: data.attributes.popis,
      information: data.attributes.informace,
      housing: data.attributes.ubytovani,
      catering: data.attributes.stravovani,
      transport: data.attributes.doprava,
      programme: data.attributes.program,
      events: data.attributes.zabava,
      tips: data.attributes.tipy,
      comment: data.attributes.poznamka,
      vse: data
    }
  }
}

export async function getStaticPaths() {
  const data = (await(await fetch(ipToFetch + "/api/zajezds?fields[0]=id")).json()).data

  const paths = Object.entries(data).map((zajezd: any)  => {
    return {
      params: { zajezdId : String(zajezd[1].id) }
    }
  })
  return{
    paths,
    fallback:false
  }
}
