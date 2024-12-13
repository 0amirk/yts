import React from "react";
import { FloatingDock } from "./components/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="w-full h-full text-white/95" />,
      href: "#",
    },

    {
      title: "Facebook",
      icon: <Facebook className="w-full h-full text-white/95" />,
      href: "https://www.facebook.com/Yourtravelshopcom/",
    },
    {
      title: "Components",
      icon: <Youtube className="w-full h-full text-white/95" />,
      href: "https://www.youtube.com/channel/UC_1TAfW_CNhbkr5VCA1ypsQ",
    },
    {
      title: "Changelog",
      icon: <Instagram className="w-full h-full text-white/95" />,
      href: "https://www.instagram.com/accounts/login/?next=/yourtravelshop/",
    },

    {
      title: "Twitter",
      icon: <Phone className="w-full h-full text-white/95" />,
      href: "tel:02085547070",
    },
    {
      title: "GitHub",
      icon: <Mail className="w-full h-full text-white/95" />,
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
