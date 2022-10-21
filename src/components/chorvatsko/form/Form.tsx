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
import "public/fonts/DejaVuSans.js";

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
    console.log(allDataObject)
    let posY = 0;
    const doc = new jsPDF();
    doc.setFont("DejaVuSans", "normal")

    /* Zájezd */
    doc.setFontSize(25)
    doc.text("Informace o zájezdu ______ :", 60, posY += 10)

    doc.setFontSize(15)
    doc.text(
      "Termín odjezdu Česká Republika:\n     " + allDataObject.dateCz,
      20,
      posY += 20
    )

    doc.text(
      "Nástupní místo Česká Republika:\n     " + allDataObject.pointCz,
      120,
      posY
    )

    doc.text(
      "Termín odjezdu Chorvatsko:\n     " + allDataObject.dateHr,
      20,
      posY += 15
    )

    doc.text(
      "Nástupní místo Chorvatsko:\n     " + allDataObject.pointHr,
      120,
      posY
    )


    doc.text("Poznámka od zákazníka:", 20, posY += 20)
    doc.text(allDataObject.comment, 20, posY += 10)


    doc.setFontSize(25)
    doc.text("Objednavatel:", 70, posY += 20)

    doc.setFontSize(15)
    doc.text(
      "Jméno: " + allDataObject.name,
      20,
      posY += 10
    )

    doc.text(
      "Narození: " + allDataObject.birth,
      20,
      posY += 10
    )


    doc.text(
      "Číslo: " + allDataObject.phone,
      20,
      posY += 10
    )

    doc.text(
      "E-mail: " + allDataObject.email,
      20,
      posY += 10
    )

    /* Další cestující */
    if (allDataObject.names !== undefined) {
      doc.setFontSize(20)
      doc.text("Další cestující:", 75, posY += 15)

      doc.setFontSize(15)
      for (let i = 1; i <= Object.values(allDataObject.names).length; i++) {

        /* Pokud by to přeteklo stránku vytvoří novou */
        if (posY + 40 >= 250 && i % 2 !== 0) {
          posY = 10;
          doc.addPage()
          doc.setFontSize(25)
          doc.text("Informace o zájezdu ______ :", 60, posY += 20)
          doc.setFontSize(20)
          doc.text("Další cestující:", 75, posY += 15)
          doc.setFontSize(15)
          posY -= 20
        }
        if (i % 2 !== 0) {
          doc.text(
            "Jméno: " + allDataObject.names["names" + i],
            20,
            i === 1 ? posY += 15 : posY += 40
          )
          doc.text(
            "Narození: " + allDataObject.births["births" + i],
            20,
            posY + 7
          )
          doc.text(
            "Telefon: " + allDataObject.phones["phones" + i],
            20,
            posY + 14
          )
          doc.text(
            "Nástupní místo: " + allDataObject.points["points" + i],
            20,
            posY + 21
          )
        }
        else {
          doc.text(
            "Jméno: " + allDataObject.names["names" + i],
            120,
            posY
          )
          doc.text(
            "Narození: " + allDataObject.births["births" + i],
            120,
            posY + 7
          )
          doc.text(
            "Telefon: " + allDataObject.phones["phones" + i],
            120,
            posY + 14
          )
          doc.text(
            "Nástupní místo: " + allDataObject.points["points" + i],
            120,
            posY + 21
          )
        }
      }
    }

    /* Cena a počet osob */
    doc.line(10, posY += 40, 200, posY)
    doc.text("Cena za osobu", 20, posY += 10)
    doc.text("________ ,-", 92, posY, undefined, "right")
    doc.text("Pocet osob", 20, posY += 10)
    doc.text(
      allDataObject.names !== undefined ?
        (Object.keys(allDataObject.names).length).toString()
        :
        "1",
      85, posY
    )
    doc.line(10, posY += 5, 89, posY)
    doc.text("Celková cena", 20, posY += 7)
    doc.text("________ ,-", 92, posY, undefined, "right")
    doc.text("Podpis: ____________", 145, posY)


    /* Page counter */
    for (let i = 1; i <= doc.getNumberOfPages(); i++) {
      doc.setPage(i)
      doc.text(i + " / " + doc.getNumberOfPages(), 190, 290)
    }

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