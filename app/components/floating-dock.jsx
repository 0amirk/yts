import { cn } from "../utils.jsx";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const FloatingDock = ({ items, mobileClassName }) => {
  return <FloatingDockMobile items={items} className={mobileClassName} />;
};

const FloatingDockMobile = ({ items, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("fixed right-[1%] bottom-[1%] z-50", className)}>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center w-10 h-10 rounded-full md:w-12 md:h-12 bg-gray-50 dark:bg-neutral-800"
        >
          <IconLayoutNavbarCollapse className="w-5 h-5 rotate-[-90deg] md:w-8 md:h-8 text-white/95" />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              layoutId="nav"
              className="absolute flex flex-row-reverse gap-2 mr-2 -top-0 right-full"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {items.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: 10,
                    transition: {
                      delay: idx * 0.05,
                    },
                  }}
                  transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="relative z-50 flex items-center justify-center w-10 h-10 rounded-full md:w-12 md:h-12 bg-gray-50 dark:bg-neutral-900"
                  >
                    <div className="w-4 h-4 md:w-6 md:h-6">{item.icon}</div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};