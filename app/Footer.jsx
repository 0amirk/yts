import { Copyright, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <main>
      <div className="flex items-center justify-center gap-4 py-1 text-[12px] text-white bg-black">
        <a
          href="mailto:hello@yourtravelshop.com"
          className="flex items-center gap-1"
        >
          <Mail className="w-4 h-4" />
          hello@yourtravelshop.com
        </a>
        <p>|</p>
        <a href="tel:02085547070" className="flex items-center gap-1">
          <Phone className="w-4 h-4" />
          020 8554 7070
        </a>
        <p>|</p>
        <p className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          96 Thorold Road, Ilford, London, IG1 4EX
        </p>
        <p>|</p>

        <p className="flex items-center gap-1">
          <Copyright className="w-4 h-4" />
          {new Date().getFullYear()} yourtravelshop.com. All rights reserved.
        </p>
      </div>
    </main>
  );
};
export default Footer;
