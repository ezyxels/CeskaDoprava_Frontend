import emailjs from "@emailjs/browser";
import jsPDF from "jspdf";
import { useState } from "react";

import Alert from "@components/bricks/Alert";
import Button from "@components/bricks/Button";
import Heading from "@components/bricks/Heading";
import Wrapper from "@components/bricks/Wrapper";
import Checkbox from "@components/forms/Checkbox";
import "public/fonts/DejaVuSans.js";


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

let allDataObject: any = {};
let requiredArray: any = [];

type UniFormProps = {
  children: React.ReactNode;
}

function UniForm({ children }: UniFormProps) {
  const [formState, setFormState] = useState<"waiting" | "verifying" | "refused" | "accepted">("waiting");

  function verifying() {
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
      else if (typeof e[1] === "object") {
        if (Object.keys(e[1]!).length !== 0) {
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

    doc.output('dataurlnewwindow')
    //sendEmail(doc.output('datauristring'))
    setFormState("accepted");
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
      size="sm"
      as="section"
      id="formular"
      paddedContent="base"
    >
      <div className="mt-12">
        <Heading level={2} size={"xl"}>Objednávkový formulář</Heading>
        <p className="text-gray-600 max-w-sm mt-10">Pole označená hvězdičkou jsou nutné vyplnit. Veštěré informace týkající se zájezdu naleznete zde nad formulářem</p>
        {children}
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