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

  const fakes: any = [0, 0, 0, 0];

  async function getData() {
    const populateQuery = "?populate[uvodniFoto][fields][0]=url&populate[terminACena][fields][1]=datumOd&populate[terminACena][fields][2]=datumDo";
    const filtersQuery = "&filters[kategorie][kategorie][$containsi]=LastMinute&filters[terminACena][datumOd][$gte]=" + new Date().toISOString().slice(0, 10);
    const fieldsQuery = "&fields[0]=nazev&fields[1]=stat";
    const paginationQuery = "&pagination[pageSize]=4";

    await fetch(ipToFetch + "/api/zajezds"
      + populateQuery
      + filtersQuery
      + fieldsQuery
      + paginationQuery
    )
      .then(response => response.json())
      .then((all) => {
        if (all.data !== undefined && all.data !== null && all.data.length !== 0) {
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
      {data !== undefined ?
        <div className="grid grid-cols-1 gap-6 md:gap-10 xs:grid-cols-2 lg:grid-cols-4">
          {data.map((trip: any) => (
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
          }
        </div>
        :
        <div className="grid grid-cols-1 gap-6 md:gap-10 xs:grid-cols-2 lg:grid-cols-4">
          <NearestDeparturesCard
            fake={true}
          />
          <NearestDeparturesCard
            fake={true}
          />
          <NearestDeparturesCard
            fake={true}
          />
          <NearestDeparturesCard
            fake={true}
          />
        </div>
      }
    </Wrapper>
  )
}