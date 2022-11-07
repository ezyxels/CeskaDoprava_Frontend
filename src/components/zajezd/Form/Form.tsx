import emailjs from "@emailjs/browser";
import jsPDF from "jspdf";
import { useEffect, useState } from "react";

import Customer from "./Customer";
import Passengers from "./Passengers";
import Trip from "./Trip";

import Alert from "@components/bricks/Alert";
import Button from "@components/bricks/Button";
import Heading from "@components/bricks/Heading";
import Wrapper from "@components/bricks/Wrapper";
import Checkbox from "@components/forms/Checkbox";
import "public/fonts/DejaVuSans.js";
import { zajezd64 } from "public/images/pdfs/zajezd64";

type FormProps = {
  country: string;
  code: string;
  dateAndPrice: [{
    datumOd: string,
    datumDo: string,
    cena: number
  }];
  departurePoints: string[];
}

export default function Form({ country, code, dateAndPrice, departurePoints }: FormProps) {
  let allDataObject: any = {};
  let requiredArray: any = [];

  return (
    <FormStater
      country={country}
      code={code}
      dateAndPrice={dateAndPrice}
      departurePoints={departurePoints}
      allDataObject={allDataObject}
      requiredArray={requiredArray}
    />
  )

}

type FormStaterProps = {
  country: string;
  code: string;
  dateAndPrice: [{
    datumOd: string,
    datumDo: string,
    cena: number
  }];
  departurePoints: string[];
  allDataObject: any;
  requiredArray: any;
}

function FormStater({ country, code, dateAndPrice, departurePoints, allDataObject, requiredArray }: FormStaterProps) {
  const [formState, setFormState] = useState<"waiting" | "verifying" | "refused" | "accepted">("waiting");
  const [passengers, setPassengers] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    allDataObject.country = country;
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
  }, [])

  function verifying(e: any) {
    setFormState("verifying")
    let tempState = "verifying"
    Object.entries(requiredArray).map((e) => {
      if (typeof e[1] === "string") {
        if (!(e[1] === "gdpr")) {
          if ((e[1] in allDataObject) && allDataObject[e[1]] === "") {
            tempState = "refused"
          }
        }
        else {
          if (allDataObject[e[1]] === false || allDataObject[e[1]] === "") {
            tempState = "refused"
          }
        }
      }
      else if (typeof e[1] === "object" && e[1] !== null) {
        if (Object.keys(e[1]).length !== 0) {
          if (e[0] in allDataObject) {
            Object.entries(allDataObject[e[0]]).map((elem: any) => {
              if (elem[1] === "") {
                tempState = "refused"
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
      createPdf();
    }
  }


  function createPdf() {
    const doc = new jsPDF("p", "mm", "a4");
    doc.setFont("DejaVuSans", "normal");
    doc.addImage(zajezd64, "JPEG", 0, 0, 210, 297);
    doc.setFontSize(10);

    /* Zájezd */
    doc.text(allDataObject.code, 57, 66);
    doc.text(allDataObject.country, 57, 71);
    doc.text(allDataObject.date, 57, 76);
    doc.text(allDataObject.departurePoint, 57, 86)

    /* Objednatel */
    doc.text(allDataObject.name, 40, 99);
    doc.text(allDataObject.birth, 163, 99);
    doc.text(allDataObject.phone, 25, 104);
    doc.text(allDataObject.email, 117, 104);

    /*Další cestující*/
    if (allDataObject.names !== undefined) {
      let fH: number = 121;
      for (let i = 1; i <= Object.values(allDataObject.names).length; i++) {

        doc.text(allDataObject.names["names" + i], 15, fH + (5 * i));
        doc.text(allDataObject.births["births" + i], 70, fH + (5 * i));
      }
    }


    doc.output('dataurlnewwindow')
    setFormState("accepted");
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
    )
      .then(
        () => {
          setFormState("accepted");
        },
        () => {
          setFormState("refused");
        }
      )
  }

  return (
    <Wrapper
      size="base"
      as={"section"}
      className="mb-16"
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
          onClick={(e: any) => verifying(e)}
          isLoading={formState === "verifying" ? true : false}
        >
          Odeslat objednávku
        </Button>
      </div>
      {formState === "accepted" &&
        <Alert
          status="success"
          title="Úspěch!"
          text="Vaše obědnávka byla úspěšně odeslána"
        />
      }
      {formState === "refused" &&
        <Alert
          status="error"
          title="Chyba!"
          text="Zapoměli jste vypnit některá pole"
        />
      }
    </Wrapper>
  )
}