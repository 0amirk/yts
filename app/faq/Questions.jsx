"use client";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import Link from "next/link";
import TimeArr from "./data";
import { useState } from "react";
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <img
          className={`ml-auto transition-transform duration-200 ease-out ${
            isEnter && "rotate-180"
          }`}
          src="/arrow.svg"
          alt="Chevron"
        />
      </>
    )}
    className="border-b"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-2 text-left text-lg hover:bg-slate-100/40`,
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out",
    }}
    panelProps={{ className: "p-2" }}
  />
);

const Questions = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="w-full px-4 py-6 font-montserrat">
      <p className="text-center text-[25px] md:!text-[40px] text-[#B78738] font-abril">
        Frequently Asked Questions
      </p>
      <div className="flex justify-center w-full mt-8">
        <div className="flex flex-col md:flex-row items-start gap-3 md:justify-between w-full max-w-[2000px]">
          <div className="md:w-[20%] flex md:block gap-3">
            <p
              onClick={() => setIsOpen(false)}
              className={`px-3 py-2 md:py-3  ${
                isOpen
                  ? "bg-gray-200/50 hover:bg-gray-200/70"
                  : "bg-[#B78738]/80"
              } cursor-pointer  transition-all ease-in-out duration-500 md:text-xl max-w-[200px] md:max-w-[300px] text-center`}
            >
              Hajj & Umrah
            </p>
            <p
              onClick={() => setIsOpen(true)}
              className={`px-3 py-2 md:mt-4 md:py-3 ${
                isOpen
                  ? " bg-[#B78738]/80"
                  : "bg-gray-200/50 hover:bg-gray-200/70"
              }  cursor-pointer  transition-all ease-in-out duration-500 md:text-xl max-w-[200px] md:max-w-[300px] text-center`}
            >
              Customer Care
            </p>
          </div>
          <div className=" w-full md:w-[80%]">
            <div className={`${isOpen ? "hidden" : "block"}`}>
              {/* <div className="flex flex-wrap gap-4 mb-4 text-lg">
                <a>Time And Travel</a>
                <a>Women And Children</a>
                <a>Handicapped/Disabled/Ill</a>
                <a>Hotels</a>
                <a>Ihram</a>
                <a>General</a>
              </div> */}
              <p className="text-xl border-b-[2px] border-[#B78738]">
                Time And Travel
              </p>
              <div className="px-2">
                {TimeArr.map((item, index) => (
                  <Accordion transition transitionTimeout={200} key={index}>
                    <AccordionItem header={item.q}>{item.a}</AccordionItem>
                  </Accordion>
                ))}
              </div>
            </div>
            <Accordion
              transition
              transitionTimeout={200}
              className={`${isOpen ? "block" : "hidden"}`}
            >
              <AccordionItem header="ACC">TEST</AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Questions;
