import ParallaxImage from '@components/bricks/ParallaxImage';
import Seo from '@components/root/seo/Seo';
import ContentCreator from "@components/zajezd/ContentCreator";
import Hero from '@components/zajezd/Hero';
import { ipToFetch } from '@configs/globalConfig';
import { useEffect, useState } from "react";

type Props = {
  country: string;
  location: string;
  name: string;
  perex: string;
  code: string;
  categories: [{ kategorie: string }];
  imageSrc: string;
  otherImages?: [string];
  dateAndPrice: [{
    datumOd: string,
    datumDo: string,
    cena: number,
    pocetDni: number,
    pocetNoci: number
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
  trasy: any;
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
  text,
  information,
  housing,
  catering,
  transport,
  programme,
  events,
  tips,
  comment,
  trasy
}: Props) {
  const [lowestPrice, setLowestPrice] = useState<number>(9999999)
  useEffect(() => {
    dateAndPrice.map((e: any, index: number) => {
      let tmp = lowestPrice
      if (e.cena < tmp) {
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
        src={imageSrc}
        alt="Úvodní fotka zájezdu"
        className='w-[90%] mx-auto rounded-lg overflow-hidden aspect-[5/3] mt-28'
        speed={-6}
      />
      <ContentCreator
        code={code}
        country={country}
        imageSrc={imageSrc}
        otherImages={otherImages}
        dateAndPrice={dateAndPrice}
        text={text}
        information={information}
        housing={housing}
        catering={catering}
        transport={transport}
        programme={programme}
        events={events}
        tips={tips}
        comment={comment}
        trasy={trasy}
      />
    </>
  )
}

export async function getStaticProps({ params }: any) {
  const zajezdData = (await (await fetch(ipToFetch + "/api/zajezds/" + params.zajezdId + "?populate[terminACena][fields][0]=datumOd&populate[terminACena][fields][1]=datumDo&populate[terminACena][fields][2]=cena&populate[kategorie][fields][3]=kategorie&populate[odjezdovaMista][fields][4]=mesto&populate[odjezdovaMista][fields][5]=ulice&populate[odjezdovaMista][fields][6]=cisloPopisne&populate[uvodniFoto][fields][7]=url&populate[dalsiFoto][fields][8]=url&populate[terminACena][fields][9]=pocetDni&populate[terminACena][fields][10]=pocetNoci&populate[trasy][fields][11]=oznaceniTrasy")).json()).data
  let trasyString = ""
  zajezdData.attributes.trasy.map((e: any, i: number) => {
    if (trasyString === "") {
      trasyString += "?filters[$or][" + i + "][oznaceni][$eq]=" + e.oznaceniTrasy
    }
    else {
      trasyString += "&filters[$or][" + i + "][oznaceni][$eq]=" + e.oznaceniTrasy
    }
  })
  const trasyData = (await (await fetch(ipToFetch + "/api/trasas" + trasyString + "&populate=%2A")).json()).data

  return {
    props: {
      country: zajezdData.attributes.stat,
      location: zajezdData.attributes.lokace,
      name: zajezdData.attributes.nazev,
      perex: zajezdData.attributes.kratkyPopis,
      code: zajezdData.attributes.kod,
      categories: zajezdData.attributes.kategorie,
      imageSrc: zajezdData.attributes.uvodniFoto.data.attributes.url,
      otherImages: zajezdData.attributes.dalsiFoto.data.map((e: any) => {
        return (e.attributes.url)
      }),
      dateAndPrice: zajezdData.attributes.terminACena,
      text: zajezdData.attributes.popis,
      information: zajezdData.attributes.informace,
      housing: zajezdData.attributes.ubytovani,
      catering: zajezdData.attributes.stravovani,
      transport: zajezdData.attributes.doprava,
      programme: zajezdData.attributes.program,
      events: zajezdData.attributes.zabava,
      tips: zajezdData.attributes.tipy,
      comment: zajezdData.attributes.poznamka,
      trasy: trasyData
    }
  }
}

export async function getStaticPaths() {
  const data = (await (await fetch(ipToFetch + "/api/zajezds?fields[0]=id")).json()).data

  const paths = Object.entries(data).map((zajezd: any) => {
    return {
      params: { zajezdId: String(zajezd[1].id) }
    }
  })
  return {
    paths,
    fallback: false
  }
}