import Wrapper from "@components/bricks/Wrapper";
import { tagAndText } from "./References";
import { ScrollContainer } from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css'
import DatePicker from "@components/forms/DatePicker";
import { useEffect, useState } from "react";


type Props = {
  category?: string;
  setCategory: any;
  dateFrom?: string;
  setDateFrom: any;
  dateTo?: string;
  setDateTo: any;
}

export default function Filter({ category = "Vse", setCategory, dateFrom = "26.09.", setDateFrom, dateTo = "26.09.", setDateTo }: Props) {
  const [focused, setFocused] = useState<string>(category)
  
  return (
    <section
      id="filter"
      className="relative border-y border-mute mt-20 mb-5"
    >
      <Wrapper
        size="lg"
        className={`min-h-[75px] flex flex-row py-5 md:py-16 justify-between`}
      >
        <div className={`grid grid-cols-1 md:flex md:flex-row justify-between w-full`}>
          
        <ScrollContainer 
          component={"ul"}
          className={`flex my-auto flex-row overflow-x-scroll md:overflow-x-auto md:mr-16 pb-5 md:pt-5`}
        >
            {Object.entries(tagAndText).map((elem:any, key:number) => (
              <li
               tabIndex={0}    
                key={key}    
                  className={`flex mx-1 justify-center items-center px-3 md:px-5 w-fit h-10 font-semibold cursor-pointer whitespace-nowrap rounded-lg
                    ${elem[0] === category
                        ? "bg-gray-200"
                        : "hover:bg-gray-100"
                    }`}
                  onClick={() => setCategory(elem[0])}
                >
                {elem[1]}
              </li>
            ))}   
          </ScrollContainer>
          <div className={`flex md:my-auto gap-5`}>            
            <DatePicker 
              text="Datum od"
              setFunction={setDateFrom}
              datePickerAlign="left"
              datePickerValueAlign="right"
              tabIndex={0}
              inputClassName="rounded-lg border border-gray-500 w-36 h-12"
            />
            <DatePicker 
              text="Datum do"
              startYear={new Date().getFullYear() + 1}
              setFunction={setDateTo}
              datePickerAlign="right"
              datePickerValueAlign="right"
              tabIndex={0}
              inputClassName="rounded-lg border border-gray-500 w-36 h-12"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}