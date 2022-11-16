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

let data: Trip[] = [];

export default function ContentCreator({ category, dateFrom, dateTo }: Props) {
  const [dataCounter, setDataCounter] = useState<number | null>(null);
  const [hasItemsLeft, setHasItemsLeft] = useState<boolean>(true);
  const itemsAtStart = 6;
  const addItems = 3;
  const populateQuery = "?populate[0]=uvodniFoto&populate[1]=kategorie&populate[2]=terminACena"
  let categoryQuery = category === "Vse" ? "" : "&filters[kategorie][kategorie][$containsi]=" + category;
  let dateQuery = "&filters[terminACena][datumOd][$gte]=" + dateFrom + "&filters[terminACena][datumDo][$lte]=" + dateTo;
  const fieldsQuery = "&fields[0]=nazev";

  useEffect(() => {
    setHasItemsLeft(true);
    getData(0, itemsAtStart, true)
  }, [category, dateFrom, dateTo])

  async function getData(currentAmount: number, addXItems: number, filterChanged: boolean) {
    let paginationQuery = "&pagination[start]=" + currentAmount + "&pagination[limit]=" + addXItems;
    await fetch(ipToFetch + "/api/zajezds"
      + populateQuery
      + categoryQuery
      + dateQuery
      + paginationQuery
      + fieldsQuery
    )
      .then(response => response.json())
      .then((all) => {
        /* Pokud se to úspěšně připojilo */
        if (all.data !== undefined && all.data !== null) {
          /* Pokud zatím nejsou žádný data nebo se změnil filtr */
          if (dataCounter === 0 || dataCounter === null || filterChanged) {
            /* Pokud se v databázi nenašla žádná data podle parametrů */
            if (all.data.length === 0) {
              data = [];
              setDataCounter(0);
            }
            /* Pokud se našli data */
            else {
              data = all.data;
              setDataCounter(all.data.length);
              /* Pokud je stažených dat míň než bylo požádáno -> skryje tlačítko */
              if (all.data.length < currentAmount + addXItems) {
                setHasItemsLeft(false);
              }
            }
          }
          /* Pokud už existujou nějaký data */
          else {
            data.push(...all.data);
            setDataCounter(data.length)

            /* Pokud je dat míň než bylo požádáno -> skryje tlačítko */
            if (data.length < currentAmount + addXItems) {
              setHasItemsLeft(false);
            }
          }
        }
        /* Špatný připojení/požadavek */
        else {
          data = [];
          setDataCounter(null);
        }
      })
  }

  if (dataCounter === 0) {
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
            onClick={() => getData(dataCounter!, addItems, false)}
          >
            zobrazit další
          </Button>
        }
      </Wrapper>
    )
  }
}