"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/shared/Button";
import { MenuItems } from "@/utils/MenuItems";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [isFixed, setIsFixed] = useState(false);

  const { scrollY } = useScroll();

  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  const scrollThreshold = viewportHeight * 0.2; // Set to 20% (or adjust to 0.1 for 10%)

  const opacity = useTransform(scrollY, [0, scrollThreshold], [0.9, 1]);
  const y = useTransform(scrollY, [0, scrollThreshold], [-5, 0]);
  const shadowBlur = useTransform(scrollY, [0, scrollThreshold], [10, 20]);
  const shadowOpacity = useTransform(scrollY, [0, scrollThreshold], [0.05, 0.1]);
  const shadowY = useTransform(scrollY, [0, scrollThreshold], [2, 4]);

  // 🔁 Dynamically update isFixed based on scroll position
  useEffect(() => {
    return scrollY.onChange((latestY) => {
      setIsFixed(latestY > scrollThreshold);
    });
  }, [scrollY, scrollThreshold]);

  return (
    <motion.header 
      className={`z-50 bg-white transition-all duration-300 ${
        isFixed ? 'fixed top-0 left-0 right-0' : 'relative'
      }`}
      style={{
        opacity,
        y,
        boxShadow: `0 ${shadowY}px ${shadowBlur}px rgba(0,0,0,${shadowOpacity})`
      }}
    >
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.svg" alt="Logo" width={200} height={200} priority />
        </div>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex items-center space-x-6">
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

          <Button showReadMore={false}>
            Contact Us
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-xl"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* BOTTOM NAV (Desktop) */}
      <div className="hidden lg:block bg-[#6E3299] ">
        <div className="container mx-auto">
          <Menu setActive={setActive}>
            {MenuItems.map((item, idx) => (
              <MenuItem
                key={idx}
                setActive={setActive}
                active={active}
                item={item.title}
              >
                <div className="flex flex-col space-y-4">
                  {item.links.map((link, i) => (
                    <HoveredLink
                      key={i}
                      href="#"
                      className="text-gray-700 hover:text-[#6E3299]"
                    >
                      {link}
                    </HoveredLink>
                  ))}
                </div>
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden shadow-md">
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
                    className={`transform transition ${
                      active === menu.title ? "" : "rotate-45"
                    }`}
                  />
                </button>
                {active === menu.title && (
                  <ul className="bg-gray-50">
                    {menu.links.map((link, i) => (
                      <li key={i} className="px-6 py-2">
                        <a href="#" className="block text-gray-700">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  );
}
