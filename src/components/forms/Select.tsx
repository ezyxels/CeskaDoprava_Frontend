import { useEffect, useState } from "react"

type Props = {
  name: string;
  label: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  className?: string;
  children: any;
  allDataObject: any;
  requiredArray?: any;
  oneOfMany?: boolean | string;
  formState?: "waiting" | "verifying" | "refused" | "accepted";
  setFunction?: any;
  rare?: string | boolean;
};

export default function Select({
  name = "select",
  label = "Select label",
  isDisabled = false,
  isRequired = false,
  className = "",
  children,
  allDataObject,
  requiredArray,
  oneOfMany = false,
  formState,
  setFunction,
  rare = false,
}: Props) {
  const [inValidation, setInValidation] = useState<undefined |"waiting" | "verifying" | "refused" | "accepted">("waiting")

  useEffect(() => {
    if(oneOfMany === false){
      if(allDataObject[name] === undefined){
        if(!rare && children !== undefined && children !== null){
          children.map((e:any, i:number) => {
            if(children[i] !== false && children[i].props !== undefined && allDataObject[name] === undefined){
              allDataObject[name] = children[i].props.value;
            }
          })
        }
        else if(rare === "dateAndPrice"){
          if(children !== undefined && children !== null){
            children.map((e:any, i:number) => {
              if(children[i] !== false && allDataObject.date === undefined){
                allDataObject.date = JSON.parse(children[i].props.value).date;
                allDataObject.price = JSON.parse(children[i].props.value).price;
                setFunction(allDataObject.price);
              }
            })
          }
        }
      }
      if(isRequired && requiredArray !== undefined){
        if(!requiredArray.includes(name)){
          requiredArray?.push(name)
        }
      }
    }
    else if(typeof oneOfMany === "string"){
      if(allDataObject[oneOfMany] === undefined){
        allDataObject[oneOfMany] = {}
      }
      else{
        if(allDataObject[oneOfMany][name] === undefined)
          allDataObject[oneOfMany][name] = ""
      }
      
      if(isRequired && requiredArray !== undefined){
        if(requiredArray[oneOfMany] === undefined){
          requiredArray[oneOfMany] = []
          requiredArray[oneOfMany].push(name);
        }
        else{
          if(!requiredArray[oneOfMany].includes(name)){
            requiredArray[oneOfMany].push(name);
          }
        }
      }
    }
  })

useEffect(() => {
  setInValidation(formState)
},[formState])

  return (
    <div className={`relative block w-full ${className}`}>
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
      <select
        id={name}
        name={name}
        className={`h-auto w-full rounded-md border mt-3
          border-body bg-body-200 px-4 py-3 text-base 
          font-normal  transition duration-150 
          focus:border-primary focus:bg-white focus:!outline-none focus:ring-1 focus:ring-primary ${
        isDisabled
          ? "pointer-events-none cursor-not-allowed opacity-60"
          : "cursor-default opacity-100"
      }`}
        disabled={isDisabled}
        required={isRequired}
        onChange={(e:any) => {
          if(rare === false){
            if(oneOfMany === false){
              allDataObject[name]=e.target.value
            }
            else if(typeof oneOfMany === "string"){
              allDataObject[oneOfMany][name] = e.target.value
            }
          }
          else{
            if(rare === "dateAndPrice"){
              allDataObject.date = JSON.parse(e.target.value).date;
              allDataObject.price = JSON.parse(e.target.value).price;
              setFunction(allDataObject.price);
            }
          }
        }}
      >
        {children}
      </select>
    </div>
  );
}
