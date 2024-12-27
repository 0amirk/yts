import React from "react";
import { FloatingDock } from "./components/floating-dock";
import { Facebook, Instagram, Mail, Phone, Youtube, House } from "lucide-react";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <House className="w-full h-full text-white/95" />,
      target: "",
      href: "/",
    },

    {
      title: "Facebook",
      icon: <Facebook className="w-full h-full text-white/95" />,
      target: "_blank",
      href: "https://www.facebook.com/Yourtravelshopcom/",
    },
    {
      title: "YT",
      icon: <Youtube className="w-full h-full text-white/95" />,
      target: "_blank",
      href: "https://www.youtube.com/channel/UC_1TAfW_CNhbkr5VCA1ypsQ",
    },
    {
      title: "Instagram",
      icon: <Instagram className="w-full h-full text-white/95" />,
      target: "_blank",
      href: "https://www.instagram.com/accounts/login/?next=/yourtravelshop/",
    },

    {
      title: "Phone",
      icon: <Phone className="w-full h-full text-white/95" />,
      target: "_blank",
      href: "tel:02085547070",
    },
    {
      title: "Mail",
      icon: <Mail className="w-full h-full text-white/95" />,
      target: "_blank",
      href: "mailto:hello@yourtravelshop.com",
    },
  ];
  return (
    <FloatingDock
      mobileClassName="fixed" // only for demo, remove for production
      items={links}
    />
  );
}
