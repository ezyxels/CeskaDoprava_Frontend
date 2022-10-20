import emailjs from "@emailjs/browser";
import jsPDF from "jspdf";
import { useEffect, useState } from "react";

import Customer from "./Customer";
import Passengers from "./Passengers";
import Trip from "./Trip";

import Button from "@components/bricks/Button";
import Heading from "@components/bricks/Heading";
import Wrapper from "@components/bricks/Wrapper";
import Checkbox from "@components/forms/Checkbox";


type FormProps = {
  prices: Prices[];
  months: Months[];
  specialPrices: SpecialPrices[];
  departurePoints: departurePoints[];
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

interface SpecialPrices {
  cena: string;
  mesto: [
    {
      nazev: string;
    }
  ]
}

interface departurePoints {
  oblast: string;
  stat: string;
  mesto: [{
    nazev: string;
  }];
}

export default function Form({ prices, months, specialPrices, departurePoints }: FormProps) {
  let allDataObject: any = {};
  let requiredArray: any = [];

  return (
    <FormStater
      allDataObject={allDataObject}
      requiredArray={requiredArray}
      prices={prices}
      months={months}
      specialPrices={specialPrices}
      departurePoints={departurePoints}
    />
  )

}

type FormStaterProps = {
  allDataObject: object | any;
  requiredArray: string[] | object[];
  prices: Prices[];
  months: Months[];
  specialPrices: SpecialPrices[];
  departurePoints: any;
}

function FormStater({ allDataObject, requiredArray, prices, months, specialPrices, departurePoints }: FormStaterProps) {
  const [formState, setFormState] = useState<"waiting" | "verifying" | "refused" | "accepted">("waiting");
  const [passengers, setPassengers] = useState<number>(0);

  useEffect(() => {
    if (formState === "refused") {
      window.alert("Zapoměl jsi vyplnit některé z povinných polí")
    }
    else if (formState === "accepted") {
      window.alert("Vše úspěsně vyplněno")
      CreatePdf();
    }
  }, [formState])

  function verifying() {
    setFormState("verifying")
    setTimeout(
      () => {
        let tempState = "verifying"
        Object.entries(requiredArray).map((e) => {
          if (typeof e[1] === "string") {
            if (!(e[1] === "gdpr")) {
              if ((e[1] in allDataObject) && allDataObject[e[1]] === "") {
                tempState = "refused"
                setFormState("refused")
              }
            }
            else {
              if (allDataObject[e[1]] === false || allDataObject[e[1]] === "") {
                tempState = "refused"
                setFormState("refused")
              }
            }
          }
          else if (typeof e[1] === "object") {
            if (e[1].length !== 0) {
              if (e[0] in allDataObject) {
                Object.entries(allDataObject[e[0]]).map((elem: any) => {
                  if (elem[1] === "") {
                    tempState = "refused"
                    setFormState("refused")
                  }
                })
              }
            }
          }
        })
        if (tempState === "refused") {
          setFormState("refused")
        }
        else {
          setFormState("accepted")
        }
      }, 150
    )
  }

  function CreatePdf() {
    const doc = new jsPDF();
    doc.setFontSize(25)
    doc.text("Informace o zájezdu ______ :", 60, 10)

    doc.setFontSize(15)
    doc.text(
      "Termín odjezdu Česká Republika: \n\t" + allDataObject.dateCz,
      20,
      30
    )

    doc.text(
      "Nástupní místo Česká Republika: \n\t" + allDataObject.pointCz,
      120,
      30
    )

    doc.text(
      "Termín odjezdu Chorvatsko: \n\t" + allDataObject.dateHr,
      20,
      50
    )

    doc.text(
      "Nástupní místo Chorvatsko: \n\t" + allDataObject.pointHr,
      120,
      50
    )


    doc.text("Poznámka od zákazníka:", 20, 75)
    doc.text(allDataObject.comment, 20, 70)


    doc.setFontSize(25)
    doc.text("Objednavatel:", 70, 100)

    doc.setFontSize(15)
    doc.text(
      "Jméno: " + allDataObject.name,
      20,
      120
    )

    doc.text(
      "Narození: " + allDataObject.birth,
      20,
      130
    )


    doc.text(
      "Číslo: " + allDataObject.phone,
      20,
      140
    )

    doc.text(
      "E-mail: " + allDataObject.email,
      20,
      150
    )


    doc.setFontSize(20)
    doc.text("Další cestující:", 65, 165)

    doc.setFontSize(15)

    if (allDataObject.names !== undefined) {
      Object.values(allDataObject.names).map((name: any, i: number) => {
        if (i % 2 == 0) {
          doc.text(
            "Jméno: " + name,
            20,
            180 + i * 16
          )
        }
        else {
          doc.text(
            "Jméno: " + name,
            120,
            180 + (i - 1) * 16
          )
        }
      })

      Object.values(allDataObject.births).map((birth: any, i: number) => {
        if (i % 2 == 0) {
          doc.text(
            "Narození: " + birth,
            20,
            187 + i * 16
          )
        }
        else {
          doc.text(
            "Narození: " + birth,
            120,
            187 + (i - 1) * 16
          )
        }
      })

      Object.values(allDataObject.phones).map((phone: any, i: number) => {
        if (i % 2 == 0) {
          doc.text(
            "Telefon: " + phone,
            20,
            194 + i * 16
          )
        }
        else {
          doc.text(
            "Telefon: " + phone,
            120,
            194 + (i - 1) * 16
          )
        }
      })

      Object.values(allDataObject.points).map((point: any, i: number) => {
        if (i % 2 == 0) {
          doc.text(
            "Nástupní místo: " + point,
            20,
            201 + i * 16
          )
        }
        else {
          doc.text(
            "Nástupní místo: " + point,
            120,
            201 + (i - 1) * 16
          )
        }
      })
    }
    doc.line(10, 255, 200, 255)
    doc.text("Cena za osobu", 20, 265)
    doc.text("_________ ,-", 88, 265, undefined, "right")
    doc.text("Pocet osob", 20, 273)
    doc.line(10, 277, 95, 277)
    doc.text("Celková cena", 20, 285)

    doc.text("Podpis: ....................", 145, 285)

    doc.output('dataurlnewwindow')
    //sendEmail(doc.output('datauristring'))
  }

  function sendEmail(doc: any) {
    emailjs.send(
      process.env.SERVICE_ID!,
      "template_fy1kysa",
      {
        name: allDataObject.name,
        phone: allDataObject.phone,
        email: allDataObject.email,
        createdPdf: doc
      },
      process.env.PUBLIC_KEY!
    );
  }

  return (
    <Wrapper
      size="sm"
      as="section"
      id="formular"
      paddedContent="base"
    >
      <div className="mt-12">
        <Heading level={2} size={"xl"}>Objednávkový formulář</Heading>
        <p className="text-gray-600 max-w-sm mt-10">Pole označená hvězdičkou jsou nutné vyplnit. Veštěré informace týkající se zájezdu naleznete zde nad formulářem</p>
        <Customer
          allDataObject={allDataObject}
          requiredArray={requiredArray}
          formState={formState}
        />
        <Trip
          allDataObject={allDataObject}
          requiredArray={requiredArray}
          formState={formState}
          prices={prices}
          months={months}
          departurePoints={departurePoints}
        />
        <Passengers
          passengers={passengers}
          setPassengers={setPassengers}
          allDataObject={allDataObject}
          requiredArray={requiredArray}
          formState={formState}
          months={months}
          departurePoints={departurePoints}
        />
      </div>


      <div className="mt-16 flex flex-col">
        <Checkbox
          allDataObject={allDataObject}
          requiredArray={requiredArray}
          isRequired={true}
          label={<>Souhlasím se <span className="text-primary">zpracováním osobních údajů</span></>}
          name="gdpr"
          formState={formState}
        />
        <Button
          className="w-fit my-8 md:mx-auto"
          onClick={() => verifying()}
        >
          Odeslat objednávku
        </Button>
      </div>
    </Wrapper>
  )
}