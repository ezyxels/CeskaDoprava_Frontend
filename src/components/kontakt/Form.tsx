import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";

import Button from "@components/bricks/Button";
import Heading from "@components/bricks/Heading";
import Wrapper from "@components/bricks/Wrapper";
import Checkbox from "@components/forms/Checkbox";
import Input from "@components/forms/Input";
import Textarea from "@components/forms/Textarea";

export default function Form() {
  let allDataObject: any = {};
  let requiredArray: any = [];

  return (
    <FormStater
      allDataObject={allDataObject}
      requiredArray={requiredArray}
    />
  )

}

type FormStaterProps = {
  allDataObject: any;
  requiredArray: any;
}

function FormStater({ allDataObject, requiredArray }: FormStaterProps) {
  const [formState, setFormState] = useState<"waiting" | "verifying" | "refused" | "accepted">("waiting");

  useEffect(() => {
    if (formState === "refused") {
      window.alert("Zapoměl jsi vyplnit některé z povinných polí")
    }
    else if (formState === "accepted") {
      sendMail();
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

  function sendMail() {
    emailjs.send(
      process.env.SERVICE_ID!,
      "template_y1d19nf",
      {
        name: allDataObject.name,
        phone: allDataObject.phone,
        email: allDataObject.email,
        question: allDataObject.question
      },
      process.env.PUBLIC_KEY!
    ).then((result) => {
      window.alert("Email úspěšně odeslán");
    }, (error) => {
      window.alert("Email se někde zasekl");
    });
  }

  return (
    <Wrapper
      size="base"
      as={"section"}
    >
      <form>
        <Heading level={2} size={"base"} className="mt-32 md:mt-0">Máte dotaz?</Heading>
        <div className="mt-12 flex flex-col gap-10">
          <Input
            allDataObject={allDataObject}
            requiredArray={requiredArray}
            label="Jméno a příjmení"
            name="name"
            type="text"
          />
          <div className="grid md:grid-cols-2 gap-10">
            <Input
              allDataObject={allDataObject}
              requiredArray={requiredArray}
              label="Telefon"
              name="phone"
              type="tel"
            />
            <Input
              allDataObject={allDataObject}
              requiredArray={requiredArray}
              isRequired={true}
              label="Email"
              name="email"
              type="email"
              formState={formState}
            />
          </div>
          <Textarea
            id="question"
            label="Váš dotaz"
            name="question"
            rows={8}
            allDataObject={allDataObject}
            isRequired={true}
            requiredArray={requiredArray}
            formState={formState}
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
            onClick={(e: any) => verifying(e)}
          >
            Odeslat
          </Button>
        </div>
      </form>
    </Wrapper>
  )
}