const Accred = () => {
  return (
    <main>
      <div className="px-6 py-3 md:px-12 md:py-6 font-montserrat">
        <p className="text-[25px] font-abril text-center  text-[#B78738]">
          Accreditations
        </p>
        <p className="text-center">
          All the flights and flight-inclusive packages on this website are
          financially protected by the ATOL scheme. When you pay you will be
          supplied with an ATOL Certificate. Please ask for it and check to
          ensure that everything you booked (flights, hotels and other services)
          is listed on it. Please see our booking conditions for further
          information or for more information about financial protection and the
          ATOL Certificate go to:{" "}
          <a
            href="https://www.caa.co.uk/"
            target="_blank"
            className="text-[#B78738]"
          >
            www.caa.co.uk
          </a>
        </p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <img src="/acc1.png" className="w-[80px] h-[50px]" />
          <img src="/acc2.png" className="w-[80px] h-[50px]" />
          <img src="/acc3.png" className="w-[80px] h-[50px]" />
          <img src="/acc4.png" className="w-[80px] h-[50px]" />
        </div>
      </div>
    </main>
  );
};
export default Accred;
