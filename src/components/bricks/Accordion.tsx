import { Disclosure } from "@headlessui/react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  isDefaultOpen?: boolean;
};

export default function Accordion({
  title = "Lorem ipsum dolor sit amet?",
  children = "Yes! You can purchase a license that you can share with your entire team",
  isDefaultOpen = false,
}: AccordionProps) {
  return (
    <Disclosure defaultOpen={isDefaultOpen}>
      {({ open }) => (
        <div>
          <Disclosure.Button
            className={`flex w-full items-center justify-between py-4 text-left text-xl font-semibold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/70`}
          >
            <span className={`text-base ${open ? "text-primary" : "text-rich"}`}>
              {title}
            </span>
            {open ? (
              <HiChevronUp className="shrink-0 text-primary" />
            ) : (
              <HiChevronDown className="shrink-0 text-rich" />
            )}
          </Disclosure.Button>
          <Disclosure.Panel className="pt-2 pb-8">{children}</Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
