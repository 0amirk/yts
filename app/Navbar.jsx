// "use client";

// import { Menu, X } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { label: "About", href: "/about" },
//     { label: "Hajj", href: "/hajj" },
//     { label: "Umrah", href: "/umrah" },
//     { label: "Ziyarat", href: "/ziyarat" },
//     { label: "FAQ", href: "/faq" },
//     { label: "Contact Us", href: "/contact" },
//   ];

//   return (
//     <nav className="fixed top-0 z-50 flex justify-center w-full bg-transparent font-montserrat">
//       <div className="bg-transparent w-[100%]">
//         <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <Link href="/" className="flex items-center space-x-2">
//               <img className="w-[170px]" src="/travele-logo.png" />
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden space-x-8 md:flex">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className="transition-colors text-white/80 hover:text-white"
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>

//             {/* Mobile Navigation Button */}
//             <button
//               className="md:hidden"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? (
//                 <X className="stroke-white/95" size={24} />
//               ) : (
//                 <Menu className="stroke-white/95" size={24} />
//               )}
//             </button>
//           </div>

//           {/* Mobile Navigation Menu */}
//           {isMenuOpen && (
//             <div className="md:hidden">
//               <div className="px-2 pt-2 pb-3 space-y-1">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     className="block px-3 py-2 transition-colors text-white/95 hover:text-primary"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {item.label}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }
"use client";

import {
  Copyright,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Hajj", href: "/hajj" },
    { label: "Umrah", href: "/umrah" },
    { label: "Ziyarat", href: "/ziyarat" },
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
      className={`fixed top-0 z-50 flex flex-col justify-center w-full transition-colors duration-500 ${
        hasScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div
        className={`text-3xl text-white  ${hasScrolled ? "hidden" : "block"}`}
      >
        <div className="flex items-center font-montserrat  flex-wrap  justify-around gap-4 py-1 text-[12px] text-white bg-black">
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
            <p className="items-center hidden gap-1 sm:flex">
              <MapPin className="w-3 h-3 md:w-4 md:h-4" />
              96 Thorold Road, Ilford, London, IG1 4EX
            </p>
          </div>

          <div className="flex items-center justify-end gap-3">
            <Facebook className="w-5 h-5" />
            <Youtube className="w-5 h-5" />
            <Instagram className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="w-full">
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
            <button className="border-[#FFFFFF] text-[#FFFFFF] border hover:text-black hover:bg-white/80   hover:opacity-95 font-medium md:text-xl ease-in-out transition-all duration-500 hover:scale-[103%] md:px-5 px-3 py-1">
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
    </nav>
  );
}
