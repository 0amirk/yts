const Awards = () => {
  return (
    <main>
      <div className="flex justify-center w-full min-h-[400px] mt-32 font-montserrat md:min-h-0 md:h-1/3 mb-12 md:mb-20 ">
        <div className="text-black text-sm md:text-[15px] bg-white  w-[70%] border-2 border-black/60">
          <div className="flex flex-col-reverse h-full shadow-lg bg-[#6F6F6F]/10 md:flex-row ">
            <div className=" md:w-[30%] p-4 md:h-full flex justify-center items-center">
              <img src="/Award1.svg" className="w-[126px] h-[147px]" />
            </div>
            <div className="md:max-w-[70%] p-4 flex flex-col justify-center md:border-l-2 border-b-2 md:border-b-0 border-black/60">
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
    </main>
  );
};
export default Awards;
