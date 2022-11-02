import Heading from "@components/bricks/Heading";
import Checkbox from "@components/forms/Checkbox";
import ComboSelect from "@components/forms/ComboSelect";
import Select from "@components/forms/Select";
import Textarea from "@components/forms/Textarea";
import { useState } from "react";

type Props = {
  formState: "waiting" | "verifying" | "refused" | "accepted";
  allDataObject: any;
  requiredArray: string[] | object[];
  prices: Prices[];
  months: Months[];
  departurePoints: DeparturePoints[];
}

interface Months {
  datumCr: [
    {
      datum: string;
    }
  ];
  datumHr: [
    {
      datum: string;
    }
  ]
}

interface Prices {
  oblast: string;
  zpatecni: string;
  jednosmerna: string;
}

interface DeparturePoints {
  oblast: string;
  stat: string;
  mesto: [{
    nazev: string;
  }];
}

export default function Trip({
  formState,
  allDataObject,
  requiredArray,
  months,
  departurePoints
}: Props) {
  const [zpatecni, setZpatecni] = useState<boolean>();
  let departurePointsCz: string[] = [];
  let departurePointsHr: string[] = [];
  let datesCz: string[] = [];
  let datesHr: string[] = [];

  if (departurePointsCz.length === 0) {
    departurePoints.map((e: DeparturePoints) => {
      e.stat === "Česká Republika" && e.mesto.map((mesto: any, key: number) => (
        departurePointsCz.push(mesto.nazev)
      ))
      e.stat === "Chorvatsko" && e.mesto.map((mesto: any, key: number) => (
        departurePointsHr.push(mesto.nazev)
      ))
    })
  }

  if (datesCz.length === 0) {
    months.map((e: Months) => {
      e.datumCr.map((date: any) => (
        datesCz.push(date.datum)
      ))
      e.datumHr.map((date: any) => (
        datesHr.push(date.datum)
      ))
    })
  }
  return (
    <div className="mt-28">
      <Heading level={3} size={"xl"} className="mb-10">Zájezd</Heading>
      <Checkbox
        allDataObject={allDataObject}
        requiredArray={requiredArray}
        label="Zpáteční zájezd?"
        name="zpatecni"
        formState={formState}
        className="pt-10"
        otherState={setZpatecni}
      />
      <div className="grid grid-cols-1 md:grid-cols-2  mt-3 gap-10 mb-7">
        <ComboSelect
          name="pointCz"
          label="Nástupní místo Česká republika"
          isRequired={true}
          requiredArray={requiredArray}
          allDataObject={allDataObject}
          formState={formState}
          values={departurePointsCz}
        />
        <Select
          name="dateCz"
          label="Termín odjezdu Česká republika"
          isRequired={true}
          requiredArray={requiredArray}
          allDataObject={allDataObject}
          formState={formState}
        >
          {datesCz.map((date: string, key: number) => (
            <option value={date} key={key}>{date}</option>
          ))}
        </Select>

        <ComboSelect
          name="pointHr"
          label={allDataObject.zpatecni === true ? "Nástupní místo Chorvatsko" : "Výstupní místo Chorvatsko"}
          isRequired={true}
          requiredArray={requiredArray}
          allDataObject={allDataObject}
          formState={formState}
          values={departurePointsHr}
        />
        {allDataObject.zpatecni === true &&
          <Select
            name="dateHr"
            label="Termín odjezdu Chorvatsko"
            isRequired={true}
            requiredArray={requiredArray}
            allDataObject={allDataObject}
            formState={formState}
          >
            {datesHr.map((date: string, key: number) => (
              <option value={date} key={key}>{date}</option>
            ))}
          </Select>}

      </div>
      <Textarea
        className="mt-10"
        name="comment"
        label="Poznámka k objednávce"
        allDataObject={allDataObject}
      />
    </div>
  )
}
