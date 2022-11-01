import Button from "@components/bricks/Button";
import Heading from "@components/bricks/Heading";
import DatePicker from "@components/forms/DatePicker";
import Input from "@components/forms/Input";
import { useEffect, useState } from "react";

type Props = {
  formState: "waiting" | "verifying" | "refused" | "accepted";
  passengers: number;
  setPassengers: any;
  allDataObject: any;
  requiredArray: any;
}

export default function Passengers({ formState, passengers, setPassengers, allDataObject, requiredArray }: Props) {
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
      />
    )
  }

  return (
    <div className="mt-28 flex flex-col">
      <Heading level={3} size={"lg"}>Další cestující</Heading>
      {allOthers}
      <div className="flex flex-row gap-5 mt-10">
        {allOthers.length <= 6 &&
          <Button
            onClick={() => setPassengers(passengers + 1)}
            color="grey"
            variant="outlined"
          >
            Přidat cestujícího +
          </Button>
        }
        {allOthers.length >= 1 &&
          <Button
            onClick={() => {
              delete allDataObject.names["names" + passengers]
              requiredArray.names.pop()
              delete allDataObject.births["births" + passengers]
              requiredArray.births.pop()
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
  allDataObject: any;
  requiredArray: any;
}

function AddOthers({ formState, id, allDataObject, requiredArray }: AddOthersProps) {
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
    </div>
  )
}
