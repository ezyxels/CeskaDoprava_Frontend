import { useEffect, useState } from "react";

type Props = {
  type: string;
  name: string;
  label: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
  className?: string;
  defaultValue?: string;
  allDataObject: any;
  requiredArray?: any;
  oneOfMany?: boolean | string;
  formState?: "waiting" | "verifying" | "refused" | "accepted";
}

export default function Input({
  type,
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
  formState
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
    <div className={`w-full`}>
      <label
        className="font-semibold text-black cursor-pointer"
        htmlFor={name}
      >
        {label}
        {isRequired && <span className="text-primary ml-1">*</span>}
        {(inValidation === "refused" &&
          isRequired &&
          oneOfMany === false &&
          allDataObject[name] === "")
          &&
          <span className="text-primary ml-1">Toto pole je povinné!</span>
        }
        {(inValidation === "refused" &&
          isRequired &&
          typeof oneOfMany === "string" &&
          allDataObject[oneOfMany][name] === "")
          &&
          <span className="text-primary ml-1">Toto pole je povinné!</span>
        }
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className={`w-full h-auto px-4 py-2.5 mt-3
        text-base text-rich font-normal placeholder:text-rich placeholder:opacity-60 
        bg-body-200 rounded-md border border-body-200 
        transition duration-default ${className}
        focus:bg-transparent focus:border-primary focus:relative focus:z-1
        focus:!outline-none focus:ring-2 focus:ring-primary ${isDisabled
            ? "cursor-not-allowed pointer-events-none opacity-60"
            : "cursor-text opacity-100"
          }`}
        disabled={isDisabled}
        required={isRequired}
        readOnly={isReadOnly}
        defaultValue={defaultValue !== "__false" ? defaultValue : ""}
        onChange={(e: any) => {
          if (oneOfMany === false) {
            allDataObject[name] = e.target.value
          }
          else if (typeof oneOfMany === "string") {
            allDataObject[oneOfMany][name] = e.target.value
          }
        }}
      />
    </div>
  );
}