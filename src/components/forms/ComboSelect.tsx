import { Combobox, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { HiCheck, HiChevronDown } from 'react-icons/hi';

type Props = {
  name: string;
  label: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  className?: string;
  values: any;
  allDataObject: any;
  requiredArray?: any;
  oneOfMany?: false | string;
  formState?: "waiting" | "verifying" | "refused" | "accepted";
  setFunction?: any;
  rare?: string | boolean;
};

export default function ComboSelect({
  name = "select",
  label = "Select label",
  isDisabled = false,
  isRequired = false,
  className = "",
  values,
  allDataObject,
  requiredArray,
  oneOfMany = false,
  formState,
  setFunction,
  rare = false,
}: Props) {
  const [inValidation, setInValidation] = useState<undefined | "waiting" | "verifying" | "refused" | "accepted">("waiting")
  const [selected, setSelected] = useState(values[0])
  const [query, setQuery] = useState('');

  const filteredPoints =
    query === ''
      ? values
      : values.filter((point: any) =>
        point
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      )

  useEffect(() => {
    if (oneOfMany === false) {
      if (allDataObject[name] === undefined) {
        allDataObject[name] === selected;
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
        allDataObject[oneOfMany][name] = selected
      }
      else {
        if (allDataObject[oneOfMany][name] === undefined)
          allDataObject[oneOfMany][name] = selected
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
    if (oneOfMany === false) {
      allDataObject[name] = selected;
    }
    else {
      allDataObject[oneOfMany][name] = selected;
    }
  }, [selected])

  useEffect(() => {
    setInValidation(formState)
  }, [formState])


  return (
    <div className='relative block w-full'>
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
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-3">
          <div>
            <Combobox.Input
              className={`h-auto w-full rounded-md border
              border-body bg-body-200 px-4 py-3 text-base 
              font-normal  transition duration-150 
              focus:border-primary focus:bg-white focus:!outline-none focus:ring-1 focus:ring-primary ${isDisabled
                  ? "pointer-events-none cursor-not-allowed opacity-60"
                  : "cursor-default opacity-100"
                }`}
              displayValue={(point: string) => point}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <HiChevronDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPoints.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nenalezeno.
                </div>
              ) : (
                filteredPoints.map((point: any) => (
                  <Combobox.Option
                    key={point}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-primary text-white' : 'text-gray-900'
                      }`
                    }
                    value={point}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                          {point}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute h-full inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-primary'
                              }`}
                          >
                            <HiCheck className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
