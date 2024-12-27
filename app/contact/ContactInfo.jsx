"use client";
import { useEffect } from "react";
import {
  Facebook,
  Instagram,
  MailOpen,
  Map,
  PhoneOutgoing,
} from "lucide-react";

const ContactInfo = () => {
  useEffect(() => {
    const fadeIns = document.querySelectorAll(".fade-in");

    const observerOptions = {
      root: null, // Use the viewport
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, observerOptions);

    // Observe all the targeted elements
    fadeIns.forEach((fadeIn) => {
      observer.observe(fadeIn);

      // Fallback check: add the show class if already visible
      if (fadeIn.getBoundingClientRect().top < window.innerHeight) {
        fadeIn.classList.add("show");
      }
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <div className="flex flex-col justify-center w-full my-12 font-montserrat md:flex-row fade-in">
        <div className="w-[100%] md:max-w-[500px]  px-8">
          <div>
            <p className="text-[30px] md:text-[35px] font-abril text-[#B78738]">
              Get in Touch
            </p>

            <form className="w-full mt-4 mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-3 py-1 mt-4 bg-transparent border border-gray-400 focus:outline-none focus:ring-0"
              />
              <input
                type="text"
                placeholder="Email Address"
                className="w-full px-3 py-1 mt-4 bg-transparent border border-gray-400 focus:outline-none focus:ring-0"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full px-3 py-1 mt-4 bg-transparent border border-gray-400 focus:outline-none focus:ring-0"
              />

              <textarea
                type="text"
                placeholder="Enter Your Message"
                className="w-full px-3 py-1 mt-4 bg-transparent border border-gray-400 hide-scrollbar focus:outline-none focus:ring-0"
              />
              <button className="border-[#B78738] text-[#B78738] border font-medium md:text-xl px-5 py-1 mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="w-full md:max-w-[500px] px-8">
          <div className="">
            <div>
              <p className="text-[30px] md:text-[35px] font-abril text-[#B78738]">
                Feel free to contact us!
              </p>
              {/* first */}
              <div className="flex items-center gap-4 mt-4">
                <div className="p-2 bg-gray-300/30">
                  <Map className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div>
                  <p className="text-xl font-semibold">Location</p>
                  <p className="text-sm">
                    96 Thorold Road, Ilford, London, IG1 4EX
                  </p>
                </div>
              </div>
              {/* second */}
              <div className="flex items-center gap-4 mt-6">
                <div className="p-2 bg-gray-300/30">
                  <MailOpen className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div>
                  <p className="text-xl font-semibold">Email Address</p>
                  <a
                    className="text-sm text-[#B78738]"
                    href="mailto:hello@yourtravelshop.com"
                  >
                    hello@yourtravelshop.com
                  </a>
                </div>
              </div>
              {/* third */}
              <div className="flex items-center gap-4 mt-6">
                <div className="p-2 bg-gray-300/30">
                  <PhoneOutgoing className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div>
                  <p className="text-xl font-semibold">Phone Number</p>
                  <a className="text-sm text-[#B78738]" href="tel:02085547070">
                    020 8554 7070
                  </a>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xl font-semibold">
                  Follow us on social media.
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/Yourtravelshopcom/"
                  >
                    <Facebook className="w-8 h-8" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/channel/UC_1TAfW_CNhbkr5VCA1ypsQ"
                  >
                    <img src="/youtube-black.svg" className="w-8 h-8" />
                  </a>
                  <a
                    href="https://www.instagram.com/accounts/login/?next=/yourtravelshop/"
                    target="_blank"
                  >
                    <Instagram className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ContactInfo;
