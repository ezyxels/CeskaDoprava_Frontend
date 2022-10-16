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
  const [changeables, setChangables] = useState<{ dateFrom: string, dateTo: string }>
    ({ dateFrom: "2023-12-31", dateTo: "2023-12-31" })

  let counterForTags = 0

  useEffect(() => {
    let tempDateFrom = "2023-12-31";
    let tempDateTo = "2023-12-31";

    dateAndPrice.map((entry, index) => {
      if ((index + 1) === dateAndPrice.length) {
        if (new Date(entry.datumOd).getTime() >= new Date().getTime() && new Date(entry.datumOd).getTime() < new Date(tempDateFrom).getTime()) {
          setChangables({
            dateFrom: changeDateType(entry.datumOd),
            dateTo: changeDateType(entry.datumDo),
          })
        }
        else {
          setChangables({
            dateFrom: changeDateType(tempDateFrom),
            dateTo: changeDateType(tempDateTo),
          })
        }
      }
      else {
        if (new Date(entry.datumOd).getTime() >= new Date().getTime() && new Date(entry.datumOd).getTime() < new Date(tempDateFrom).getTime()) {
          tempDateFrom = entry.datumOd;
          tempDateTo = entry.datumDo;
        }
      }
    })
  }, [])


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
          {changeables.dateFrom} - {changeables.dateTo}
        </span>
      </a>
    </Link>
  );
}
