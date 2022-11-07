import { useEffect, useState } from "react";

type Props = {
  name: string;
  label: string | React.ReactNode;
  isDisabled?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
  className?: string;
  defaultValue?: string;
  allDataObject: object | any;
  requiredArray?: string[] | object[] | any;
  oneOfMany?: boolean | string;
  position?: number;
  formState?: "waiting" | "verifying" | "refused" | "accepted";
  otherState?: any;
}

export default function Checkbox({
  name,
  label,
  isDisabled = false,
  isRequired = false,
  isReadOnly = false,
  className,
  defaultValue = "__false",
  allDataObject,
  requiredArray,
  oneOfMany = false,
  formState,
  otherState = undefined,
}: Props) {
  const [inValidation, setInValidation] = useState<undefined | "waiting" | "verifying" | "refused" | "accepted">("waiting")

  useEffect(() => {
    if (oneOfMany === false) {
      if (allDataObject[name] === undefined) {
        if (defaultValue === "__false") {
          allDataObject[name] = "";
        }
        else {
          allDataObject[name] = defaultValue;
        }
      }
      if (isRequired && requiredArray !== undefined) {
        if (!requiredArray.includes(name)) {
          requiredArray?.push(name)
        }
      }
    }
    else if (typeof oneOfMany === "string") {
      if (allDataObject[oneOfMany] === undefined) {
        allDataObject[oneOfMany] = {}
      }
      else {
        if (allDataObject[oneOfMany][name] === undefined)
          allDataObject[oneOfMany][name] = ""
      }

      if (isRequired && requiredArray !== undefined) {
        if (requiredArray[oneOfMany] === undefined) {
          requiredArray[oneOfMany] = []
          requiredArray[oneOfMany].push(name);
        }
        else {
          if (!requiredArray[oneOfMany].includes(name)) {
            requiredArray[oneOfMany].push(name);
          }
        }
      }
    }
  })

  useEffect(() => {
    setInValidation(formState)
  }, [formState])

  return (
    <div className={`w-full flex`}>
      <input
        type="checkbox"
        id={name}
        name={name}
        className={`border-1 h-5 w-5 rounded mr-2 mt-1
        border-primary bg-white transition-shadow duration-150
          checked:bg-primary checked:hover:bg-primary
          checked:focus:border-body hover:!outline-none 
          checked:focus:bg-primary
          ${isDisabled
            ? "pointer-events-none cursor-not-allowed opacity-60"
            : "cursor-pointer opacity-100"
          }`}
        disabled={isDisabled}
        required={isRequired}
        readOnly={isReadOnly}
        onChange={(e: any) => {
          if (oneOfMany === false) {
            if (otherState !== undefined) {
              otherState(e.target.checked);
            }
            allDataObject[name] = e.target.checked;
          }
          else if (typeof oneOfMany === "string") {
            if (otherState !== undefined) {
              otherState(e.target.checked);
            }
            allDataObject[oneOfMany][name] = e.target.checked;
          }
        }}
      />
      <label
        className="font-semibold text-black cursor-pointer"
        htmlFor={name}
      >
        {label}
        {isRequired && <span className="text-primary ml-1">*</span>}
        {(inValidation === "refused" &&
          isRequired &&
          oneOfMany === false &&
          (allDataObject[name] === "" || allDataObject[name] === "false"))
          &&
          <span className="text-primary ml-1">Toto pole je povinné!</span>
        }
        {(inValidation === "refused" &&
          isRequired &&
          typeof oneOfMany === "string" &&
          (allDataObject[oneOfMany][name] === "" || allDataObject[oneOfMany][name] === "false")
        )
          &&
          <span className="text-primary ml-1">Toto pole je povinné!</span>
        }
      </label>
    </div>
  );
}