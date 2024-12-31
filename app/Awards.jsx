// const Awards = () => {
//   return (
//     <main>
//       <div className="flex justify-center w-full min-h-[400px] mt-32 font-montserrat md:min-h-0 md:h-1/3 mb-12 md:mb-20">
//         <div className="relative text-black text-sm md:text-[15px] max-w-[1200px] bg-white w-[80%] border-[#B78738]">
//           {/* Custom Borders */}
//           <div className="absolute top-0 right-0 w-24 h-2 border-t-2 border-[#B78738]"></div>
//           <div className="absolute bottom-0 left-0 w-2 h-24 border-l-2 border-[#B78738]"></div>
//           <div className="absolute top-0 right-0 w-2 h-24 border-r-2 border-[#B78738]"></div>
//           <div className="absolute bottom-0 left-0 w-24 h-2 border-b-2 border-[#B78738]"></div>

//           <div className="flex flex-col-reverse justify-around h-full md:flex-row">
//             <div className="flex items-center justify-center p-4 md:justify-start md:w-fit md:h-full">
//               <img src="/Award1.svg" className="w-[126px] h-[147px]" />
//             </div>
//             <div className="md:max-w-[70%] p-4 flex flex-col justify-center border-black/60">
//               <p className="text-[30px] leading-tight md:text-[33px] mb-4 font-abril">
//                 Awards & Accolades
//               </p>
//               <p>
//                 Over the years we have received numerous awards and letters of
//                 endorsements in recognizing the services we provide, most
//                 recently the public voted and nominated us for both{" "}
//                 <span className="font-bold">
//                   {" "}
//                   the Best Hajj and Best UK Umrah Operator 2018 and 2019{" "}
//                 </span>{" "}
//                 categories, at the awards ceremony organized by the Council of
//                 British Hajis, CBHUK.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Awards;
const Awards = () => {
  return (
    <main>
      <div className="flex justify-center w-full min-h-[400px] mt-32 font-montserrat md:min-h-0 md:h-1/3 mb-12 md:mb-20">
        <div className="relative w-[80%] max-w-[1200px]">
          {/* Light Gray Background for 3D Effect */}
          <div className="absolute w-full h-full bg-[#6F6F6F]/10 top-3 left-4"></div>

          {/* Main Div */}
          <div className="relative text-black text-sm md:text-[15px] bg-white hover:translate-x-2 hover:translate-y-1 transition-all duration-200 ease-linear">
            {/* Custom Borders */}
            <div className="absolute top-0 right-0 w-24 h-2 border-t-2 border-[#B78738]"></div>
            <div className="absolute bottom-0 left-0 w-2 h-24 border-l-2 border-[#B78738]"></div>
            <div className="absolute top-0 right-0 w-2 h-24 border-r-2 border-[#B78738]"></div>
            <div className="absolute bottom-0 left-0 w-24 h-2 border-b-2 border-[#B78738]"></div>

            <div className="flex flex-col-reverse justify-around h-full md:flex-row">
              <div className="flex items-center justify-center p-4 md:justify-start md:w-fit md:h-full">
                <img src="/Award1.svg" className="w-[126px] h-[147px]" />
              </div>
              <div className="md:max-w-[70%] p-4 flex flex-col justify-center border-black/60">
                <p className="text-[30px] leading-tight md:text-[33px] mb-4 font-abril">
                  Awards & Accolades
                </p>
                <p>
                  Over the years we have received numerous awards and letters of
                  endorsements in recognizing the services we provide, most
                  recently the public voted and nominated us for both{" "}
                  <span className="font-bold">
                    {" "}
                    the Best Hajj and Best UK Umrah Operator 2018 and 2019{" "}
                  </span>{" "}
                  categories, at the awards ceremony organized by the Council of
                  British Hajis, CBHUK.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Awards;
