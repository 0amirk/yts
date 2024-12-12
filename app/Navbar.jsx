"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Hajj", href: "/hajj" },
    { label: "Umrah", href: "/umrah" },
    { label: "Ziyarat", href: "/ziyarat" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 flex justify-center w-full bg-white">
      <div className="bg-black w-[97%] md:w-[98%] mt-2 rounded-t-lg">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <img className="w-[170px]" src="/travele-logo.png" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden space-x-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors text-white/90 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>

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
