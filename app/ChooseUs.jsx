const ChooseUs = () => {
  return (
    <main className="flex justify-center w-full mb-6 bg-[#ca9745]">
      <div className="mt-6 mb-6 text-[white] px-4 py-6">
        <p className="text-[25px] md:text-[35px] font-semibold font-charm">
          Why Choose Us
        </p>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/waRrwCyuGa0?si=RohBSYmUZqrr3E7Y"
            title="Why Choose Us"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default ChooseUs;
