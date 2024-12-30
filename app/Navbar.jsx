"use client";

import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Modal from "./components/dialog";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const navItems = [
    { label: "About", href: "/about" },
    { label: "Hajj", href: "/hajj" },
    { label: "Umrah", href: "/umrah" },
    { label: "Ramadan", href: "/ramadan" },
    { label: "Ziyarat", href: "/#ziyarat" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ];

  // Add scroll listener to check when user scrolls past the hero section
  useEffect(() => {
    const handleScroll = () => {
      const ninetyVH = window.innerHeight * 0.2;
      if (window.scrollY > ninetyVH) {
        // If scrolled past hero section (assumed to be viewport height)
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 flex flex-col bg-black justify-center w-full transition-colors duration-500 `}
    >
      <div
        className={`absolute border-b-[1px] border-white/50 w-full top-0 transition-all text-2xl duration-500 ease-in-out ${
          hasScrolled
            ? "opacity-0 transform -translate-y-4"
            : "opacity-100 transform translate-y-0"
        }`}
      >
        <div className="flex mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-nowrap items-center font-montserrat    justify-between gap-4 py-1 text-[12px] text-white bg-black">
          <div className="flex gap-4">
            <a
              href="mailto:hello@yourtravelshop.com"
              className="items-center hidden gap-1 sm:flex"
            >
              <Mail className="w-3 h-3 md:w-4 md:h-4" />
              hello@yourtravelshop.com
            </a>

            <a href="tel:02085547070" className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              020 8554 7070
            </a>
            <p className="items-center hidden gap-1 md:flex">
              <MapPin className="w-3 h-3 md:w-4 md:h-4" />
              96 Thorold Road, Ilford, London, IG1 4EX
            </p>
          </div>

          <div className="flex items-center justify-end gap-3">
            <a
              target="_blank"
              href="https://www.facebook.com/Yourtravelshopcom/"
            >
              <Facebook className="w-5 h-5 transition-all duration-300 ease-in-out" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UC_1TAfW_CNhbkr5VCA1ypsQ"
            >
              <img
                src="/youtube.svg"
                className="w-5 h-5 transition-all duration-300 ease-in-out"
              />
            </a>
            <a
              href="https://www.instagram.com/accounts/login/?next=/yourtravelshop/"
              target="_blank"
            >
              <Instagram className="w-5 h-5 transition-all duration-300 ease-in-out" />
            </a>
          </div>
        </div>
      </div>
      <div
        className={`w-full transition-all duration-500 ease-in-out ${
          hasScrolled ? "mt-0" : "mt-10"
        }`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <img
                className="w-[170px] xl:w-[200px]"
                src="/travele-logo.png"
                alt="Logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden space-x-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors text-white/80 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <button
              onClick={setIsOpen}
              className="border-[#FFFFFF] text-[#FFFFFF] border hover:text-black hover:bg-white/80   hover:opacity-95 font-medium md:text-xl ease-in-out transition-all duration-500 hover:scale-[103%] md:px-5 px-3 py-1"
            >
              Book Now
            </button>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="stroke-white/95" size={24} />
              ) : (
                <Menu className="stroke-white/95" size={24} />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 transition-colors text-white/95 hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className="w-full overflow-hidden text-center text-black rounded-lg font-montserrat">
          <p className="text-2xl font-bold">Book Now!</p>
          <form className="w-full mt-4 mb-4">
            <div className="flex flex-col gap-3 md:flex-row">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-3 py-1 bg-transparent border border-gray-400 focus:outline-none focus:ring-0"
              />
              <input
                type="text"
                placeholder="Email Address"
                className="w-full px-3 py-1 bg-transparent border border-gray-400 focus:outline-none focus:ring-0"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full px-3 py-1 bg-transparent border border-gray-400 focus:outline-none focus:ring-0"
              />
            </div>
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
      </Modal>
    </nav>
  );
}
