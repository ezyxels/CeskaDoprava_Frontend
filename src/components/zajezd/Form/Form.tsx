import emailjs from "@emailjs/browser";
import jsPDF from "jspdf";
import { useEffect, useState } from "react";
/*import emailjs from "@emailjs/browser"; */

import Customer from "./Customer";
import Passengers from "./Passengers";
import Trip from "./Trip";

import Button from "@components/bricks/Button";
import Heading from "@components/bricks/Heading";
import Wrapper from "@components/bricks/Wrapper";
import Checkbox from "@components/forms/Checkbox";
import "public/fonts/DejaVuSans.js";

type FormProps = {
  code: string;
  dateAndPrice: [{
    datumOd: string,
    datumDo: string,
    cena: number
  }];
  departurePoints: [{
    mesto: string,
    ulice: string,
    cisloPopisne: number
  }];
}

export default function Form({ code, dateAndPrice, departurePoints }: FormProps) {
  let allDataObject: any = {};
  let requiredArray: any = [];

  return (
    <FormStater
      code={code}
      dateAndPrice={dateAndPrice}
      departurePoints={departurePoints}
      allDataObject={allDataObject}
      requiredArray={requiredArray}
    />
  )

}

type FormStaterProps = {
  code: string;
  dateAndPrice: [{
    datumOd: string,
    datumDo: string,
    cena: number
  }];
  departurePoints: [{
    mesto: string,
    ulice: string,
    cisloPopisne: number
  }];
  allDataObject: any;
  requiredArray: any;
}

function FormStater({ code, dateAndPrice, departurePoints, allDataObject, requiredArray }: FormStaterProps) {
  const [formState, setFormState] = useState<"waiting" | "verifying" | "refused" | "accepted">("waiting");
  const [passengers, setPassengers] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    if (price === undefined) {
      let tempPrice = 0;
      let tempDateFrom = "2025-12-12"
      dateAndPrice.map(entry => {
        if (new Date(entry.datumOd).getTime() > new Date().getTime() && new Date(entry.datumOd).getTime() < new Date(tempDateFrom).getTime()) {
          tempPrice = entry.cena;
        }
      })
      setPrice(tempPrice)
    }

    if (formState === "refused") {
      window.alert("Zapoměl jsi vyplnit některé z povinných polí")
    }
    else if (formState === "accepted") {
      window.alert("Vše úspěsně vyplněno")
      createPdf();
    }
  }, [formState])

  function verifying(e: any) {
    e.preventDefault();

    setFormState("verifying")
    setTimeout(
      () => {
        let tempState = "verifying"
        Object.entries(requiredArray).map((e) => {
          if (typeof e[1] === "string") {
            if ((e[1] in allDataObject) && allDataObject[e[1]] === "") {
              tempState = "refused"
              setFormState("refused")
            }
          }
          else if (typeof e[1] === "object" && e[1] !== null) {
            if (Object.keys(e[1]).length !== 0) {
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
    let posY = 0;
    const doc = new jsPDF();
    doc.setFont("DejaVuSans", "normal")

    /* Zájezd */
    doc.setFontSize(25)
    doc.text("Informace o zájezdu ____ :", 60, posY += 20)

    doc.setFontSize(15)
    doc.text(
      "Kód zájezdu: " + allDataObject.code,
      20,
      posY += 15
    )

    doc.text(
      "Termín: " + allDataObject.date,
      20,
      posY += 10
    )

    doc.text(
      "Nástupní / výstupní místo: " + allDataObject.departurePoint,
      20,
      posY += 10
    )

    doc.text("Poznámka od zákazníka:", 20, posY += 10)
    doc.text(allDataObject.comment, 20, posY += 10)



    /* Objednatel */
    doc.setFontSize(25)
    doc.text("Objednavatel:", 70, posY += 20)

    doc.setFontSize(15)
    doc.text(
      "Jméno: " + allDataObject.name,
      20,
      posY += 15
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
        if (posY + 40 >= 270 && i % 2 !== 0) {
          posY = 10;
          doc.addPage()
          doc.setFontSize(25)
          doc.text("Informace o zájezdu ______ :", 60, posY += 20)
          doc.setFontSize(20)
          doc.text("Další cestující:", 75, posY += 15)
          doc.setFontSize(15)
        }
        if (i % 2 !== 0) {
          doc.text(
            "Jméno: " + allDataObject.names["names" + i],
            20,
            i === 1 ? posY += 15 : posY += 20
          )
          doc.text(
            "Narození: " + allDataObject.births["births" + i],
            20,
            posY + 7
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
        }
      }
    }


    /* Cena a počet osob */
    doc.line(10, posY += 20, 200, posY)
    doc.text("Cena za osobu", 20, posY += 10)
    doc.text(allDataObject.price + ",-", 88, posY, undefined, "right")
    doc.text("Počet osob", 20, posY += 10)
    doc.text(
      allDataObject.names !== undefined ?
        (Object.keys(allDataObject.names).length).toString()
        :
        "1",
      85, posY
    )
    doc.line(10, posY += 5, 95, posY)
    doc.text("Celková cena", 20, posY += 7)
    doc.text(
      allDataObject.names !== undefined ?
        (allDataObject.price * Object.keys(allDataObject.names).length).toString() + ",-"
        :
        allDataObject.price + ",-",
      92, posY, undefined, "right"
    )
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
      size="base"
      as={"section"}
      className="mb-16"
    >
      <form className="mt-12">
        <Heading level={2} size={"xl"}>Objednávkový formulář</Heading>
        <p className="text-gray-600 max-w-sm mt-10">Pole označená hvězdičkou jsou nutné vyplnit. Veštěré informace týkající se zájezdu naleznete zde nad formulářem</p>
        <Customer
          allDataObject={allDataObject}
          requiredArray={requiredArray}
          formState={formState}
        />
        <Trip
          setPrice={setPrice}
          code={code}
          dateAndPrice={dateAndPrice}
          departurePoints={departurePoints}
          allDataObject={allDataObject}
          requiredArray={requiredArray}
          formState={formState}
        />
        <Passengers
          passengers={passengers}
          setPassengers={setPassengers}
          allDataObject={allDataObject}
          requiredArray={requiredArray}
          formState={formState}
        />
        <div className="flex flex-col mt-20">
          <span className="text-2xl">Celková cena</span>
          <span className="mt-3 text-3xl">{price * (1 + passengers)},-</span>
        </div>
      </form>


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
          onClick={(e: any) => verifying(e)}
        >
          Odeslat objednávku
        </Button>
      </div>
    </Wrapper>
  )
}
