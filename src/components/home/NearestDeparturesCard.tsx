import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  tripId?: number;
  imageSrc?: string;
  imageAlt?: string;
  country?: string;
  name?: string;
  dateAndPrice?: {
    datumOd: string;
    datumDo: string;
    cena: number;
  }[];
  className?: string;
  fake?: boolean;
};

export default function NearestDeparturesCard({
  tripId,
  imageSrc = "",
  imageAlt = "",
  country = "",
  name = "",
  dateAndPrice,
  className = "",
  fake = false
}: Props) {
  const [changeables, setChangables] = useState<{ dateFrom: string, dateTo: string }>
    ({ dateFrom: "2023-12-31", dateTo: "2023-12-31" })

  let counterForTags = 0

  useEffect(() => {
    let tempDateFrom = "2023-12-31";
    let tempDateTo = "2023-12-31";

    !fake && dateAndPrice!.map((entry, index) => {
      if ((index + 1) === dateAndPrice!.length) {
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
    <Link
      href={fake ? "" : `/zajezd/${tripId}`}
    >
      <a
        className={`flex flex-col md:gap-2 overflow-hidden rounded-lg ${fake ? "justify-between animate-pulse" : "items-start transition duration-200 hover:-translate-y-2 hover:shadow-xl"} ${className}`}
        onClick={(e) => fake && e.preventDefault()}
      >
        <div className={`relative w-full aspect-square ${fake && "bg-gray-200"}`}>
          {!fake &&
            <Image
              src={imageSrc}
              alt={imageAlt}
              layout="fill"
              objectFit="cover"
              loading="eager"
              sizes="(max-width: 768px) 50vw,
                (max-width: 1200px) 25vw,
                25vw"
            />
          }
        </div>
        <div className="px-2 py-2 flex flex-col gap-2">
          <span className={`block ${fake ? "w-40 h-5 bg-gray-200" : "text-lg font-semibold text-rich leading-6"}`}>
            {!fake && country + "-" + name}
          </span>
          <span className={`block ${fake ? "w-28 h-5 bg-gray-200" : "mt-auto"}`}>
            {!fake && changeables.dateFrom + "-" + changeables.dateTo}
          </span>
        </div>
      </a>
    </Link>
  );
}
