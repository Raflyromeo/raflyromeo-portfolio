"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { GoHome } from "react-icons/go";
import { PiPaintBrushDuotone } from "react-icons/pi";
import { CiUser, CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { href: "/", icon: <GoHome size={20} />, label: "Home" },
  { href: "/about", icon: <CiUser size={20} />, label: "About" },
  {
    href: "/projects",
    icon: <PiPaintBrushDuotone size={20} />,
    label: "Projects",
  },
  {
    href: "https://github.com/Raflyromeo",
    icon: <FaGithub size={20} />,
    label: "GitHub",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/muhammadraflyromeonasution",
    icon: <FaLinkedin size={20} />,
    label: "LinkedIn",
    external: true,
  },
  { href: "/contact", icon: <CiMail size={20} />, label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  return (
    <div className="w-full flex items-center justify-center z-50">
      <motion.nav
        className="fixed bottom-6 z-50 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-lg backdrop-blur-md"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="flex items-center space-x-4">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            const linkProps = item.external
              ? {
                  href: item.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : { href: item.href };

            return (
              <div key={index} className="relative">
                <Link {...linkProps}>
                  <motion.button
                    onMouseEnter={() => setShowTooltip(item.label)}
                    onMouseLeave={() => setShowTooltip(null)}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-blue-500 text-white"
                        : "text-gray-600 hover:text-blue-500"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.icon}
                  </motion.button>
                </Link>
                {showTooltip === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-3 py-1 text-sm rounded-lg bg-gray-800 text-white whitespace-nowrap"
                  >
                    {item.label}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </motion.nav>
    </div>
  );
}
