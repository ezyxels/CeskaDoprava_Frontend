import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  tripId: number;
  imageSrc: string;
  imageAlt: string;
  country: string;
  name: string;
  dateAndPrice: {
    datumOd: string;
    datumDo: string;
    cena: number;
  }[];
  className?: string;
};

export default function NearestDeparturesCard({
  tripId,
  imageSrc,
  imageAlt,
  country,
  name,
  dateAndPrice,
  className = "",
}: Props) {
  const [dateFrom, setDateFrom] = useState<string>("2023-12-31")
  const [dateTo, setDateTo] = useState<string>("2023-12-31")
  var tempDateFrom = dateFrom;

  useEffect(() => {
    dateAndPrice.map(entry => {
      if (new Date(entry.datumOd).getTime() < new Date(tempDateFrom).getTime()) {
        setDateFrom(changeDateType(entry.datumOd));
        setDateTo(changeDateType(entry.datumDo));
      }
    })
  })


  function changeDateType(date: string) {
    var newDate = date.split("-")[2] + "." + date.split("-")[1] + "."
    return newDate;
  }

  return (
    <Link href={`/zajezd/${tripId}`}>
      <a
        className={`flex flex-col items-start transition duration-200 md:gap-2 hover:-translate-y-4 ${className}`}
      >
        <div className="relative aspect-square w-full overflow-hidden rounded-lg">
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            loading="eager"
          />
        </div>
        <span className="block mt-2 text-lg font-semibold text-rich leading-6">
          {country} - {name}
        </span>
        <span className="block mt-auto">
          {dateFrom} - {dateTo}
        </span>
      </a>
    </Link>
  );
}
