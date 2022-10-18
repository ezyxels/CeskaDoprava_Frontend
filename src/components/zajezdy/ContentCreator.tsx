import Button from "@components/bricks/Button";
import Heading from "@components/bricks/Heading";
import Wrapper from "@components/bricks/Wrapper";
import { ipToFetch } from "@configs/globalConfig";
import { useEffect, useState } from 'react';
import TripMinimal from "./TripMinimal";

type Props = {
  category: string;
  dateFrom: string;
  dateTo: string;
}
type Trip = {
  id: number;
  name: string;
  dateAndPrice: DateAndPrice[];
  price: string;
  imageSrc: string;
  dateFrom: string;
  dateTo: string;
  categories: Categories[];
}
type Categories = {
  kategorie: string;
}
type DateAndPrice = {
  datumOd: string;
  datumDo: string;
  cena: number;
}

export default function ContentCreator({ category, dateFrom, dateTo }: Props) {
  const [data, setData] = useState<Trip[]>();
  const [noTrips, setNoTrips] = useState<boolean>(false);
  const [hasItemsLeft, setHasItemsLeft] = useState<boolean>(true);
  const itemsAtStart = 6;
  const addItems = 3;
  const populateQuery = "?populate[0]=uvodniFoto&populate[1]=kategorie&populate[2]=terminACena"
  var categoryQuery = category === "Vse" ? "" : "&filters[kategorie][kategorie][$containsi]=" + category;
  var dateQuery = "&filters[terminACena][datumOd][$gte]=" + dateFrom + "&filters[terminACena][datumDo][$lte]=" + dateTo;
  const fieldsQuery = "";


  useEffect(() => {
    getData(0, itemsAtStart, true)
    setNoTrips(false)
  }, [category, dateFrom, dateTo])

  async function getData(currentAmount: number, addXItems: number, filterChanged: boolean) {
    var paginationQuery = "&pagination[start]=" + currentAmount + "&pagination[limit]=" + addXItems;
    await fetch(ipToFetch + "/api/zajezds"
      + populateQuery
      + categoryQuery
      + dateQuery
      + paginationQuery
      + fieldsQuery
    )
      .then(response => response.json())
      .then((all) => {
        if (all.data !== undefined && all.data !== null) {
          if (data === undefined || filterChanged) {
            if (all.data.length === 0) {
              setNoTrips(true)
            }
            else {
              setData((all.data))
              if (all.data.length < currentAmount + addXItems) {
                setHasItemsLeft(false);
              }
            }
          }
          else {
            var tempDataArray = data;
            tempDataArray.push(...all.data)
            setData(tempDataArray)

            if (all.data.length < currentAmount + addXItems) {
              setHasItemsLeft(false);
            }
          }
        }
        else {
          setNoTrips(true);
        }
      })
  }

  if (data === undefined || data === null || noTrips) {
    return (
      <Wrapper paddedContent="lg">
        <Heading level={3} size={"base"}>Bohužel, ve vyžadovaných parametrech není žádný zájezd</Heading>
      </Wrapper>
    )
  }
  else {
    return (
      <Wrapper
        id="zajezdy"
        size="lg"
        paddedContent="sm"
      >
        <div
          className="grid grid-cols-1 items-start md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {data.map((trip: any, key: number) => (
            <TripMinimal
              key={key}
              id={trip.id}
              name={trip.attributes.nazev}
              imageSrc={trip.attributes.uvodniFoto.data.attributes.url}
              categories={trip.attributes.kategorie}
              dateAndPrice={trip.attributes.terminACena}
              filterCategory={category}
              filterDateFrom={dateFrom}
              filterDateTo={dateTo}
            />
          ))}
        </div>
        {hasItemsLeft &&
          <Button
            className="mx-auto !flex w-fit mt-24"
            onClick={() => getData(data.length, addItems, false)}
          >
            zobrazit další
          </Button>
        }
      </Wrapper>
    )
  }
}