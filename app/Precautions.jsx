"use client";
"use client";
import { CardStack } from "./components/card-stack";
import { cn } from "./utils";
const Precautions = () => {
  const CARDS = [
    {
      id: 0,
      content: (
        <div className="flex flex-col items-center group ">
          <img src="/hands.png" />
          <p className="mt-12 text-lg md:text-xl text-[#303030] group-hover:text-[#b78738] transition-all duration-300">
            Wash your hands frequently with soap and water
          </p>
        </div>
      ),
    },
    {
      id: 1,
      content: (
        <div className="flex flex-col items-center group ">
          <img src="/face.png" />
          <p className="mt-12 text-lg md:text-xl text-[#303030] group-hover:text-[#b78738] transition-all duration-300">
            Avoid touching your face as much as possible
          </p>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="flex flex-col items-center group ">
          <img src="/cover.png" />
          <p className="mt-12 text-lg md:text-xl text-[#303030] group-hover:text-[#b78738] transition-all duration-300">
            Cover your mouth and nose while coughing or sneezing
          </p>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="flex flex-col items-center group ">
          <img src="/mask.png" />
          <p className="mt-12 text-lg md:text-xl text-[#303030] group-hover:text-[#b78738] transition-all duration-300">
            Discard disposable masks frequently
          </p>
        </div>
      ),
    },
  ];
  return (
    <main>
      <div>
        <div className="flex flex-col items-center justify-center w-full px-4 py-6 mt-12 text-center">
          <p className="text-[25px] md:text-[35px] font-semibold font-charm text-[#B78738]">
            Saftey Tips While Performing Umrah
          </p>
          <p className="md:mb-20 mb-16 text-lg md:text-xl text-[#303030] mt-2 ">
            Some of the most important points to consider while perfoming
            Umrah/Hajj, keeping in mind the most recent pandemic.
          </p>
          <div className="flex justify-center w-full">
            <CardStack items={CARDS} />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Precautions;
