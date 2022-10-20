import Heading from "@components/bricks/Heading";
import Wrapper from "@components/bricks/Wrapper";
import { HiDownload, HiOutlineBookOpen, HiOutlineCalendar, HiOutlineClipboardList } from "react-icons/hi";

type Props = {
  calendar: string;
  catalog: string;
  conditions: string;
}

export default function Downloads({ calendar, catalog, conditions }: Props) {
  return (
    <section
      id="keStazeni"
      className="bg-gray-100"
    >
      <Wrapper
        size="base"
        className="py-20 md:py-36"
      >
        <Heading level={3} size={"lg"} className="font-bold text-black">Informace ke stažení</Heading>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {/* Kalendář */}
          <a
            href={calendar}
            download
            className="bg-white px-5 py-8 flex flex-col rounded-md hover:shadow-md hover:scale-105 duration-500"
          >
            <HiOutlineCalendar
              className="text-primary h-40 w-40 md:h-20 md:w-20 my-auto [&>path]:stroke-1"
            />
            <div className="p-5 md:px-0">
              <Heading level={4} size="sm">Kalendář akcí</Heading>
              <p className="mt-5 text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.</p>
              <span
                className="flex flex-row font-semibold mt-10"
              >
                Stáhnout zde
                <HiDownload size={20}
                  className="mt-1"
                />
              </span>
            </div>
          </a>

          {/* Katalog */}
          <a
            href={catalog}
            download
            className="bg-white px-5 py-8 flex flex-col rounded-md hover:shadow-md hover:scale-105 duration-500"
          >
            <HiOutlineBookOpen
              className="text-primary h-40 w-40 md:h-20 md:w-20 my-auto [&>path]:stroke-1"
            />
            <div className="p-5 md:px-0">
              <Heading level={4} size="sm">Katalog 2022</Heading>
              <p className="mt-5 text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.</p>
              <span className="flex flex-row font-semibold mt-10 ml-0">
                Stáhnout zde
                <HiDownload size={20}
                  className="mt-1"
                />
              </span>
            </div>
          </a>

          {/* Podmínky */}
          <a
            href={conditions}
            download
            className="bg-white px-5 py-8 flex flex-col rounded-md hover:shadow-md hover:scale-105 duration-500"
          >
            <HiOutlineClipboardList
              className="text-primary h-40 w-40 md:h-20 md:w-20 my-auto [&>path]:stroke-1"
            />
            <div className="p-5 md:px-0">
              <Heading level={4} size="sm">Všeobecné obchodní podmínky</Heading>
              <p className="mt-5 text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.</p>
              <span className="flex flex-row font-semibold mt-10 ml-0">
                Stáhnout zde
                <HiDownload size={20}
                  className="mt-1"
                />
              </span>
            </div>
          </a>
        </div>
      </Wrapper>
    </section>
  )
}