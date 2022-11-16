import Wrapper from "@components/bricks/Wrapper";
import DatePicker from "@components/forms/DatePicker";
import { ScrollContainer } from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css';
import { tagAndText } from "./References";


type Props = {
  category?: string;
  setCategory: any;
  dateFrom?: string;
  setDateFrom: any;
  dateTo?: string;
  setDateTo: any;
}

export default function Filter({ category = "Vse", setCategory, dateFrom = "26.09.", setDateFrom, dateTo = "26.09.", setDateTo }: Props) {

  return (
    <section
      id="filter"
      className="relative border-y border-mute mt-20 mb-5"
    >
      <Wrapper
        size="lg"
        className={`min-h-[75px] !w-full flex flex-row py-5 xl:py-16 justify-between`}
      >
        <div className={`grid grid-cols-1 xl:flex xl:flex-row justify-between w-full`}>

          <ScrollContainer
            component={"ul"}
            className={`flex my-auto flex-row xl:mr-16 pb-5 xl:pt-5`}
          >
            {Object.entries(tagAndText).map((elem: any, key: number) => (
              <li
                tabIndex={0}
                key={key}
                className={`flex mx-1 justify-center items-center px-3 xl:px-5 w-fit h-10 font-semibold cursor-pointer whitespace-nowrap rounded-lg text-sm md:text-base
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
          <div className={`grid grid-cols-2 sm:flex xl:my-auto justify-center sm:justify-end gap-5`}>
            <DatePicker
              text="Datum od"
              startDay="today"
              setFunction={setDateFrom}
              datePickerAlign="left"
              datePickerValueAlign="right"
              tabIndex={0}
              inputClassName="rounded-lg w-full sm:w-[153px] h-12"
            />
            <DatePicker
              text="Datum do"
              startDay={31}
              startMonth={11}
              startYear={new Date().getFullYear() + 1}
              setFunction={setDateTo}
              datePickerAlign="right"
              datePickerValueAlign="right"
              tabIndex={0}
              inputClassName="rounded-lg w-full sm:w-[153px] h-12"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}