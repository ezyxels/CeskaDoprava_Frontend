import Heading from "@components/bricks/Heading";
import ComboSelect from "@components/forms/ComboSelect";
import Input from "@components/forms/Input";
import Select from "@components/forms/Select";
import Textarea from "@components/forms/Textarea";
import { useEffect } from "react";

type Props = {
  formState: "waiting" | "verifying" | "refused" | "accepted";
  setPrice: any;
  code: string;
  dateAndPrice: {
    datumOd: string,
    datumDo: string,
    cena: number
  }[];
  departurePoints: string[];
  allDataObject: any;
  requiredArray: any;
}

export default function Trip({
  formState,
  setPrice,
  code,
  dateAndPrice,
  departurePoints,
  allDataObject,
  requiredArray
}: Props) {

  useEffect(() => {
    if (allDataObject.price === undefined) {
      allDataObject.price === "0"

    }
    if (allDataObject.date === undefined) {
      for (let e of dateAndPrice) {
        if (e.datumOd > new Date().toISOString().slice(0, 10)) {
          allDataObject.date = changeDateType(e.datumOd) + " - " + changeDateType(e.datumDo)
          allDataObject.price = e.cena;
          setPrice(e.cena);
          break;
        }
      }
    }
  })

  function changeDateType(date: string) {
    var newDate = date.split("-")[2] + "." + date.split("-")[1] + "." + date.split("-")[0]
    return newDate;
  }


  return (
    <div className="mt-28">
      <Heading level={3} size={"xl"}>Zájezd</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 mb-7">
        <Input
          className="mt-3 bg-gray-100 border-none cursor-not-allowed"
          name="code"
          type="text"
          label="Číslo zájezdu "
          isReadOnly={true}
          defaultValue={code}
          isRequired={true}
          requiredArray={requiredArray}
          allDataObject={allDataObject}
        />
        <Select
          name="date"
          label="Termín"
          isRequired={true}
          requiredArray={requiredArray}
          allDataObject={allDataObject}
          formState={formState}
          setFunction={setPrice}
          rare="dateAndPrice"
        >
          {dateAndPrice.map((entry: any, key: number) => (
            entry.datumOd > new Date().toISOString().slice(0, 10) &&
            <option
              key={key}
              value={`{"date" : "${changeDateType(entry.datumOd)} - ${changeDateType(entry.datumDo)}", "price" : "${entry.cena}"}`}
            >
              {changeDateType(entry.datumOd) + " - " + changeDateType(entry.datumDo)}
            </option>
          ))}
        </Select>
      </div>
      <ComboSelect
        name="departurePoint"
        label="Preferované nástupní / výstupní místo"
        isRequired={true}
        requiredArray={requiredArray}
        allDataObject={allDataObject}
        formState={formState}
        values={departurePoints}
      />
      <Textarea
        className="mt-10"
        name="comment"
        label="Vaše poznámka"
        allDataObject={allDataObject}
      />
    </div>
  )
}
