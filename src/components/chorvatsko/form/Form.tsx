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
import { chorvatsko64 } from "public/images/pdfs/chorvatsko64";

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
      createPdf();
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

  function createPdf() {
    const doc = new jsPDF("p", "mm", "a4");
    doc.setFont("DejaVuSans", "normal");
    doc.addImage(chorvatsko64, "JPEG", 0, 0, 210, 297);
    doc.setFontSize(10);

    /* Zájezd */

    doc.text("Česká Republika", 57, 66);
    doc.text("Chorvatsko - " + allDataObject.pointHr, 57, 71);
    doc.text(allDataObject.zpatecni === true ? "Zpáteční" : "Jednosměrná", 57, 76);
    doc.text(allDataObject.zpatecni === true ? "Od: " + allDataObject.dateCz + " / Do: " + allDataObject.dateHr : allDataObject.dateCz, 57, 81);
    doc.text(allDataObject.pointCz, 57, 86);

    /* Objednatel */
    doc.text(allDataObject.name, 40, 99);
    doc.text(allDataObject.birth, 160, 99);
    doc.text(allDataObject.phone, 25, 104);
    doc.text(allDataObject.email, 115, 104);

    /*Další cestující*/
    if (allDataObject.names !== undefined) {
      let fH: number = 121;
      for (let i = 1; i <= Object.values(allDataObject.names).length; i++) {

        doc.text(allDataObject.names["names" + i], 18, fH + (5 * i));
        doc.text(allDataObject.births["births" + i], 67, fH + (5 * i));
        doc.text(allDataObject.phones["phones" + i], 105, fH + (5 * i));
        doc.text(allDataObject.points["points" + i], 150, fH + (5 * i));
      }
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
          className="w-fit my-8"
          onClick={() => verifying()}
        >
          Odeslat objednávku
        </Button>
      </div>
    </Wrapper>
  )
}