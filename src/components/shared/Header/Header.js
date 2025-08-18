"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Button from "@/shared/Button";
import { MenuItems } from "@/utils/MenuItems";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  const { scrollY } = useScroll();

  // Ultra-smooth sticky behavior with debouncing
  useEffect(() => {
    let timeoutId;

    return scrollY.onChange((latest) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsSticky(latest > 50);
      }, 10); // Minimal delay for ultra-smooth response
    });
  }, [scrollY]);

  // Ultra-smooth transform values
  const y = useTransform(scrollY, [0, 100], [0, -5]);
  const shadowBlur = useTransform(scrollY, [0, 100], [0, 20]);
  const shadowOpacity = useTransform(scrollY, [0, 100], [0, 0.15]);
  // Removed scale transform to prevent width changes

  return (
    <>
      <motion.header
        className={`z-50 bg-white/95 backdrop-blur-md w-full ${isSticky ? "fixed top-0 left-0 right-0" : "relative"
          }`}
        style={{
          y,
          boxShadow: `0 4px ${shadowBlur}px rgba(0,0,0,${shadowOpacity})`,
        }}
        initial={{
          y: 0,
          opacity: 1,
        }}
        animate={{
          y: isSticky ? 0 : 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94], // Ultra-smooth cubic-bezier
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        }}
        layout
        layoutId="header"
      >
        {/* TOP BAR */}
        <motion.div
          className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 w-full"
          layout
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {/* Logo */}
          <motion.div
            className="flex items-center"
            layout
            transition={{
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={200}
              height={200}
              priority
            />
          </motion.div>

          {/* Desktop Right Section */}
          <motion.div
            className="hidden lg:flex items-center space-x-6"
            layout
            transition={{
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-full px-4 py-1 focus:outline-none"
              />
            </div>
            <a
              href="#"
              className="text-[#0C2165] text-xl hover:text-[#6E3299] hover:underline font-light"
            >
              Alumni
            </a>
            <a
              href="#"
              className="text-[#0C2165] text-xl hover:text-[#6E3299] hover:underline font-light"
            >
              Resources
            </a>

            <Button showReadMore={false}>Contact Us</Button>
          </motion.div>

          {/* Mobile Hamburger */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              duration: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </motion.div>

        {/* BOTTOM NAV (Desktop) */}
        <motion.div
          className="hidden lg:block bg-[#6E3299] w-full"
          layout
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <Menu setActive={setActive}>
              {MenuItems.map((item, idx) => (
                <MenuItem
                  key={idx}
                  setActive={setActive}
                  active={active}
                  item={item.title}
                >
                  <div className="flex flex-col space-y-2">
                    {item.links.map((link, i) => (
                      <HoveredLink
                        key={i}
                        href={link.href || "#"}
                        className="text-gray-700 hover:text-[#6E3299]"
                      >
                        {link.name}
                      </HoveredLink>
                    ))}
                  </div>
                </MenuItem>
              ))}
            </Menu>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="lg:hidden shadow-md"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* Search + Links */}
              <div className="p-4 border-b">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border rounded-full px-4 py-2 mb-3"
                />
                <a
                  href="#"
                  className="block py-2 text-[#0C2165] hover:text-[#6E3299] font-light"
                >
                  Alumni
                </a>
                <a
                  href="#"
                  className="block py-2 text-[#0C2165] hover:text-[#6E3299] font-light"
                >
                  Resources
                </a>
                <Button
                  className="font-light"
                  hoverText="Contact Us"
                  showArrow={true}
                >
                  Contact Us
                </Button>
              </div>
              {/* Nav Items */}
              <ul>
                {MenuItems.map((menu, idx) => (
                  <li key={idx}>
                    <button
                      className="w-full flex justify-between px-4 py-3 text-left bg-[#6E3299] text-white"
                      onClick={() =>
                        setActive(active === menu.title ? null : menu.title)
                      }
                    >
                      {menu.title}
                      <FiX
                        className={`transform transition ${active === menu.title ? "" : "rotate-45"
                          }`}
                      />
                    </button>
                    {active === menu.title && (
                      <ul className="bg-gray-50">
                        {menu.links.map((link, i) => (
                          <li key={i} className="px-6 py-2">
                            <a href={link.href || "#"} className="block text-gray-700">
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Content spacer that smoothly adjusts when header becomes sticky */}
      <motion.div
        className="w-full"
        style={{
          height: isSticky ? "120px" : "0px", // Adjust based on your header height
        }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
    </>
  );
}
