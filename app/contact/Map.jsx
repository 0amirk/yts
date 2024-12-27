const MapComponent = () => {
  return (
    <main>
      <div className="flex justify-center h-[50vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310.04303852034866!2d0.07552702410470138!3d51.56192132386676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a68bf0af19af%3A0x4f428ef2ed728fd3!2s96%20Thorold%20Rd%2C%20Ilford%20IG1%204EX%2C%20UK!5e0!3m2!1sen!2sin!4v1735275979413!5m2!1sen!2sin"
          style={{
            width: "80%",
            height: "100%",
          }}
          className="border-[2px] border-[#B78738]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
};
export default MapComponent;
