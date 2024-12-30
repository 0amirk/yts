const AboutTxt = () => {
  return (
    <main className="flex flex-col-reverse justify-center w-full gap-12 px-4 py-6 mt-8 md:mt-10 md:flex-row">
      <div className="md:w-[1000px] w-full">
        <iframe
          src="https://www.youtube-nocookie.com/embed/waRrwCyuGa0?si=RohBSYmUZqrr3E7Y"
          title="Why Choose Us"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-[100%] h-full aspect-video"
        ></iframe>
      </div>
      <div className="md:w-[1000px] font-montserrat">
        <p className="font-abril leading-none  text-[38px] sm:text-[45px] md:text-[50px] text-[#B78738]">
          About Us
        </p>
        <p className="mt-2 text-sm md:mt-4 md:text-xl">
          At YourTravelShop, we believe that every pilgrimage is not just a
          journey, but a deeply spiritual experience. Since our founding, our
          mission has been to provide the most seamless, comforting, and
          enriching Hajj, Umrah, and Ziyarat trips.
        </p>
        <p className="mt-2 text-sm md:text-xl">
          We understand the sacredness of these travels, and we are dedicated to
          making every step of your journey as meaningful as the destination
          itself. Our team is committed to providing personalized care, offering
          expert guidance, and ensuring that every detail of your trip is
          handled with the utmost attention. Whether you are a first-time
          traveler or returning for another pilgrimage, we are here to guide you
          through each step, making your journey memorable and spiritually
          fulfilling.
        </p>
        <p className="mt-2 text-sm md:text-xl">
          Watch the video to learn more about our passion for helping you
          achieve a life-changing experience, grounded in faith and trust.
        </p>
      </div>
    </main>
  );
};
export default AboutTxt;
