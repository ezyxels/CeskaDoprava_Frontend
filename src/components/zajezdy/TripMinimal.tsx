import { ipToFetch } from "@configs/globalConfig";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

type Categories = {
  kategorie: string;
}

type DateAndPrice = {
  datumOd: string;
  datumDo: string;
  cena: number;
}

type Props = {
  id: number;
  name: string;
  imageSrc: string;
  dateAndPrice: DateAndPrice[];
  categories: Categories[];
  filterCategory: string;
  filterDateFrom: string;
  filterDateTo: string;
}

export default function TripMinimal({ id, name, imageSrc, dateAndPrice, categories, filterCategory, filterDateFrom, filterDateTo }: Props) {
  const [dateFrom, setDateFrom] = useState<string>("2023-12-31")
  const [dateTo, setDateTo] = useState<string>("2023-12-31")
  const [price, setPrice] = useState<number>(0)

  var tempDateFrom = dateFrom;

  var counterForTags = 0

  useEffect(() => {
    dateAndPrice.map(entry => {
      if (new Date(entry.datumOd).getTime() > new Date(filterDateFrom).getTime() && new Date(entry.datumOd).getTime() < new Date(tempDateFrom).getTime()) {
        setDateFrom(changeDateType(entry.datumOd));
        setDateTo(changeDateType(entry.datumDo));
        setPrice(entry.cena);
      }
    })
  })

  function changeDateType(date: string) {
    var newDate = date.split("-")[2] + "." + date.split("-")[1] + "."
    return newDate;
  }
  
  return (
    <Link
      href={`/zajezd/${id}`}
    >
      <a
        className="flex flex-col transition duration-300 hover:-translate-y-2 hover:shadow-lg rounded-lg"
      >
        <div
          className="relative w-full h-[250px] rounded-md overflow-hidden"
        >
          <Image
            src={ipToFetch + imageSrc}
            alt='#'
            layout='fill'
            objectFit='cover'
            priority={true}
          />
        </div>
        <div className="flex flex-row justify-between mt-5">
          <div className="flex flex-wrap gap-y-2">
            {categories.map((category: any, key: number) => {
              if (
                counterForTags === 0 ||
                counterForTags === 1 && category.kategorie === filterCategory ||
                counterForTags === 1 && key === categories.length - 1
              ) {
                counterForTags++
                return (
                  <span
                    className="h-fit bg-primary mr-2 text-white px-1 rounded-md uppercase tracking-wider"
                    key={key}
                  >
                    {category.kategorie}
                  </span>
                )
              }
            })}
          </div>
          <span className="min-w-[110px]">{dateFrom} - {dateTo.slice(0, 6)}</span>
        </div>
        <span className="text-lg font-bold text-black pt-3">{name}</span>
        <span
          className="text-gray-600 font-semibold"
        >
          {price} Kč
        </span>
        <div className="flex flex-row justify-between w-full text-primary font-semibold">
          Zobrazit více
          <HiArrowNarrowRight />
        </div>
      </a>
    </Link>
  )
}