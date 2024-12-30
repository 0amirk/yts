"use client";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { useState } from "react";
import {
  TimeArr,
  ill,
  Women,
  General,
  Hotels,
  Ihram,
  Payment,
  Doc,
  Res,
} from "./data";

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <img
          className={`ml-auto w-5 h-5 transition-transform duration-300 ease-out ${
            isEnter && "rotate-[135deg]"
          }`}
          src="/faq/plus.svg"
          alt="plus"
        />
      </>
    )}
    className="border-b"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-2 text-left text-base md:text-lg ${
          isEnter && "bg-[#B78738]/30 hover:bg-[#B78738]/50"
        }`,
    }}
    contentProps={{
      className:
        "transition-height text-sm md:text-base mb-2 bg-[#B78738]/30 duration-200 ease-out",
    }}
    panelProps={{ className: "p-2" }}
  />
);

const Questions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Time and Travel");

  // Tab categories
  const tabsHajjUmrah = {
    "Time and Travel": TimeArr,
    "Women & Children": Women,
    "Handicapped/Disabled/ill": ill,
    Hotels: Hotels,
    Ihram: Ihram,
    General: General,
  };

  const tabsCustomerCare = {
    "Payment Information": Payment,
    Documentation: Doc,
    Reservation: Res,
  };

  const currentTabs = isOpen ? tabsCustomerCare : tabsHajjUmrah;

  return (
    <main className="w-full px-4 py-6 font-montserrat">
      <p className="text-center text-[25px] md:!text-[40px] text-[#B78738] font-abril">
        Frequently Asked Questions
      </p>
      <div className="flex justify-center w-full mt-8">
        <div className="flex flex-col md:flex-row items-start gap-3 md:justify-between w-full max-w-[2000px]">
          {/* Sidebar */}
          <div className="md:w-[20%] flex md:block gap-3">
            <p
              onClick={() => {
                setIsOpen(false);
                setActiveTab("Time and Travel");
              }}
              className={`px-3 py-2 md:py-3 ${
                !isOpen
                  ? "bg-[#B78738] text-white"
                  : "bg-gray-200/50 hover:bg-gray-200/70"
              } cursor-pointer transition-all ease-in-out duration-500 md:text-xl max-w-[200px] md:max-w-[300px] text-center`}
            >
              Hajj & Umrah
            </p>
            <p
              onClick={() => {
                setIsOpen(true);
                setActiveTab("Payment Information");
              }}
              className={`px-3 py-2 md:mt-4 md:py-3 ${
                isOpen
                  ? "bg-[#B78738] text-white"
                  : "bg-gray-200/50 hover:bg-gray-200/70"
              } cursor-pointer transition-all ease-in-out duration-500 md:text-xl max-w-[200px] md:max-w-[300px] text-center`}
            >
              Customer Care
            </p>
          </div>

          {/* Content */}
          <div className="w-full md:w-[80%]">
            {/* Tabs */}
            <div>
              {Object.keys(currentTabs).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm md:text-lg font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? "text-[#B78738] border-b-2 border-[#B78738]"
                      : "text-gray-600 border-b-2 border-transparent hover:text-[#B78738] hover:border-gray-400"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Accordion */}
            <div className="mt-4">
              {currentTabs[activeTab].map((item, index) => (
                <Accordion transition transitionTimeout={200} key={index}>
                  <AccordionItem header={item.q}>{item.a}</AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Questions;
