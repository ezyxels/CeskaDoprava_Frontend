import Button from "@components/bricks/Button";
import Heading from "@components/bricks/Heading";
import ComboSelect from "@components/forms/ComboSelect";
import DatePicker from "@components/forms/DatePicker";
import Input from "@components/forms/Input";
import { useEffect, useState } from "react";

type Props = {
  formState: "waiting" | "verifying" | "refused" | "accepted";
  passengers: number;
  setPassengers: any;
  allDataObject: object | any;
  requiredArray: string[] | object[] | any;
  months: Months[];
  departurePoints: DeparturePoints[];
}


interface DeparturePoints {
  oblast: string;
  stat: string;
  mesto: [{ nazev: string; }];
}

interface Months {
  datumCr: [{ datum: string; }];
  datumHr: [{ datum: string; }];
}

export default function Passengers({
  formState,
  passengers,
  setPassengers,
  allDataObject,
  requiredArray,
  months,
  departurePoints

}: Props) {
  const [restate, setRestate] = useState<"waiting" | "verifying" | "refused" | "accepted">("waiting")
  var allOthers = []

  useEffect(() => {
    setRestate(formState)
  }, [formState])


  for (var i = 1; i <= passengers; i++) {
    allOthers.push(
      <AddOthers
        formState={formState}
        id={i} key={i}
        allDataObject={allDataObject}
        requiredArray={requiredArray}
        months={months}
        departurePoints={departurePoints}
      />
    )
  }

  return (
    <div className="mt-28 flex flex-col">
      <Heading level={3} size={"lg"}>Další cestující</Heading>
      {allOthers}
      <div className="flex flex-row gap-5 mt-10">
        <Button
          onClick={() => setPassengers(passengers + 1)}
          color="grey"
          variant="outlined"
        >
          Přidat cestujícího +
        </Button>
        {allOthers.length >= 1 &&
          <Button
            onClick={() => {
              delete allDataObject.names["names" + passengers]
              requiredArray.names.pop()
              delete allDataObject.births["births" + passengers]
              requiredArray.births.pop()
              delete allDataObject.phones["phones" + passengers]
              requiredArray.phones.pop()
              delete allDataObject.points["points" + passengers]
              requiredArray.points.pop()
              setPassengers(passengers - 1);
            }}
            color="grey"
            variant="outlined"
          >
            Odebrat cestujícího -
          </Button>
        }
      </div>
    </div>
  )
}


type AddOthersProps = {
  formState: "waiting" | "verifying" | "refused" | "accepted";
  id: number;
  allDataObject: object;
  requiredArray: string[] | object[];
  months: Months[];
  departurePoints: DeparturePoints[];
}

function AddOthers({
  formState,
  id,
  allDataObject,
  requiredArray,
  months,
  departurePoints
}: AddOthersProps) {


  let departurePointsCz: string[] = [];
  let departurePointsHr: string[] = [];

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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 pb-6 border-b-1 border-gray-200">
      <Input
        className="mt-3 bg-gray-100 border-none"
        name={`names${id}`}
        type="text"
        label="Jméno a příjmení"
        isRequired={true}
        requiredArray={requiredArray}
        allDataObject={allDataObject}
        oneOfMany="names"
        formState={formState}
      />
      <DatePicker
        tabIndex={0}
        text=""
        name={`births${id}`}
        yearStart={1900}
        yearEnd={new Date().getFullYear()}
        label="Datum narození"
        oneOfMany={"births"}
        datePickerAlign="left"
        defaultTextAlign="left"
        datePickerValueAlign="left"
        allDataObject={allDataObject}
        formState={formState}
        isRequired={true}
        requiredArray={requiredArray}
      />
      <Input
        name={`phones${id}`}
        type="text"
        label="Telefonní číslo"
        isRequired={true}
        requiredArray={requiredArray}
        allDataObject={allDataObject}
        oneOfMany="phones"
        formState={formState}
      />
      <ComboSelect
        name={`points${id}`}
        label="Místo odjezdu"
        isRequired={true}
        requiredArray={requiredArray}
        allDataObject={allDataObject}
        oneOfMany={"points"}
        formState={formState}
        values={departurePointsCz}
      />
    </div>
  )
}
