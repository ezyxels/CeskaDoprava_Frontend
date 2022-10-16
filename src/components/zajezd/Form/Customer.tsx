import Heading from "@components/bricks/Heading";
import DatePicker from "@components/forms/DatePicker";
import Input from "@components/forms/Input";

type Props = {
  formState: "waiting" | "verifying" | "refused" | "accepted";
  allDataObject: object;
  requiredArray: string[] | object[];
}

export default function Customer({ formState, allDataObject, requiredArray }: Props) {
  return (
    <div className="mt-28">
      <Heading level={3} size={"xl"}>Objednatel</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
        <Input
          name="name"
          type="text"
          label="Jméno a příjmení"
          isRequired={true}
          requiredArray={requiredArray}
          allDataObject={allDataObject}
          formState={formState}
        />
        <DatePicker
          tabIndex={0}
          text=""
          name="birth"
          label="Datum narození"
          yearStart={1900}
          yearEnd={new Date().getFullYear()}
          datePickerAlign="left"
          defaultTextAlign="left"
          datePickerValueAlign="left"
          allDataObject={allDataObject}
          formState={formState}
          isRequired={true}
          requiredArray={requiredArray}
        />
        <Input
          name="phone"
          type="tel"
          label="Telefonní číslo"
          isRequired={true}
          requiredArray={requiredArray}
          allDataObject={allDataObject}
          formState={formState}
        />
        <Input
          name="email"
          type="email"
          label="E-mail"
          isRequired={true}
          requiredArray={requiredArray}
          allDataObject={allDataObject}
          formState={formState}
        />
      </div>
    </div>
  )
}
