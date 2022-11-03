import Heading from "@components/bricks/Heading";
import Wrapper from "@components/bricks/Wrapper";
import { ipToFetch } from "@configs/globalConfig";
import { useEffect, useState } from "react";
import NearestDeparturesCard from "./NearestDeparturesCard";

export default function NearestDepartures() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    getData();
  }, [])

  const fakes: any = [];

  for (let i = 0; i < 4; i++) {
    fakes.push(
      <div className="flex flex-col md:gap-2  justify-between" key={"fake" + i}>
        <div className="w-full aspect-square bg-gray-200 rounded-t-md">
        </div>
        <div className="px-2 py-2 flex flex-col">
          <div className="h-5 w-40 bg-gray-200">
          </div>
          <div className="h-5 w-28 bg-gray-200 mt-1">
          </div>
        </div>
      </div>
    )
  }

  async function getData() {
    const populateQuery = "?populate[uvodniFoto][fields][0]=url&populate[terminACena][fields][1]=datumOd&populate[terminACena][fields][2]=datumDo";
    const filtersQuery = "&filters[kategorie][kategorie][$containsi]=LastMinute&filters[terminACena][datumOd][$gte]=" + new Date().toISOString().slice(0, 10);
    const fieldsQuery = "&fields[0]=nazev&fields[1]=stat";
    const paginationQuery = "&pagination[pageSize]=4";
    console.log(data);

    await fetch(ipToFetch + "/api/zajezds"
      + populateQuery
      + filtersQuery
      + fieldsQuery
      + paginationQuery
    )
      .then(response => response.json())
      .then((all) => {
        if (all.data !== undefined && all.data !== null && all.data.length !== 0) {
          console.log(all.data);
          setData(all.data);
        }
      }
      )
  }
  return (
    <Wrapper className="pb-28 md:pb-36">
      <Heading level={2} size="sm" className="mb-12">
        Nejbližší odjezdy
      </Heading>
      <div className="grid grid-cols-1 gap-6 md:gap-10 xs:grid-cols-2 lg:grid-cols-4">
        {data !== undefined ? data.map((trip: any) => (
          <NearestDeparturesCard
            tripId={trip.id}
            key={trip.id}
            imageSrc={trip.attributes.uvodniFoto.data.attributes.url}
            imageAlt={trip.attributes.nazev}
            country={trip.attributes.stat}
            name={trip.attributes.nazev}
            dateAndPrice={trip.attributes.terminACena}
          />
        ))
          :
          fakes
        }
      </div>
    </Wrapper>
  )
}