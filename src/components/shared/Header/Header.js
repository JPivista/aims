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

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setActive(null);
  };

  // Function to handle link click and scroll to top
  const handleLinkClick = () => {
    closeMobileMenu();
    // Scroll page to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to handle logo click and ensure scroll to top
  const handleLogoClick = () => {
    // Force scroll to top after a short delay to ensure navigation completes
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 150);
  };

  const { scrollY } = useScroll();

  // Scroll to top on page refresh - robust solution
  useEffect(() => {
    // Prevent scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Force scroll to top immediately
    window.scrollTo(0, 0);

    // Prevent any scroll events during initial load
    const preventScroll = (e) => {
      if (window.scrollY > 0) {
        window.scrollTo(0, 0);
      }
    };

    // Add scroll listener temporarily
    window.addEventListener('scroll', preventScroll);

    // Also handle any delayed scrolling issues
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      window.removeEventListener('scroll', preventScroll);
    }, 500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', preventScroll);
    };
  }, []);

  // Ultra-smooth sticky behavior with debouncing
  useEffect(() => {
    let timeoutId;

    return scrollY.onChange((latest) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsSticky(latest > 1); // Reduced threshold for smoother transition
      }, 0); // Reduced delay for even smoother response
    });
  }, [scrollY]);

  // Removed all transforms to prevent mobile header enlarging

  return (
    <>
      <header
        className={`z-50 bg-white backdrop-blur-md w-full ${isSticky ? "fixed top-0 left-0 right-0 md:shadow-none shadow-sm" : "relative"
          }`}
      >
        {/* HEADER CONTAINER */}
        <div className="h-full flex flex-col">
          {/* TOP BAR */}
          <div
            className="container mx-auto flex items-center justify-between px-4 lg:px-0 py-3 w-full h-[10vh] z-50 bg-white"
          >
            {/* Logo */}
            <div
              className="flex items-center"
            >
              <Link href="/" scroll={false} onClick={handleLogoClick}>
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={200}
                  height={200}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Right Section */}
            <div
              className="hidden lg:flex items-center space-x-6"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border rounded-full px-4 py-1 focus:outline-none transition-all duration-200 ease-out focus:ring-2 focus:ring-[#6E3299]/20 focus:border-[#6E3299]"
                />
              </div>
              <Link
                href="/aims-alumni-association"
                className="text-[#0C2165] text-xl hover:text-[#6E3299] hover:underline font-light transition-all duration-200 ease-out"
              >
                Alumni
              </Link>
              {/* <Link
                href="/eresources"
                className="text-[#0C2165] text-xl hover:text-[#6E3299] hover:underline font-light transition-all duration-200 ease-out"
              >
                Resources
              </Link> */}

              <Button showReadMore={false} href="https://enquiry.theaims.ac.in/">Contact Us</Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-xl z-50 bg-white rounded-lg p-2 hover:bg-gray-50 transition-all duration-200 ease-out"
            >
              {mobileOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* BOTTOM NAV (Desktop) */}
          <div
            className="hidden lg:flex bg-[#0C2165] w-full h-[7vh] items-center justify-center"
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
                          className="text-gray-700 hover:text-[#6E3299] hover"
                        >
                          {link.name}
                        </HoveredLink>
                      ))}
                    </div>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Full-screen overlay */}
              <motion.div
                className="fixed inset-0 bg-black/75 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMobileMenu}
                transition={{
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              />

              {/* Mobile menu content */}
              <motion.div
                className="lg:hidden shadow-md min-h-screen bg-white z-50 relative overflow-scroll"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {/* Search */}
                {/* <div className="p-4 border-b">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full border rounded-full px-4 py-2 mb-3"
                  />
                </div> */}

                {/* Nav Items */}
                <ul>
                  {MenuItems.map((menu, idx) => (
                    <li key={idx}>
                      <button
                        className="w-full flex justify-between px-4 py-3 text-left bg-[#0C2165] text-white hover:bg-[#0C2165]/90 transition-all duration-200 ease-out"
                        onClick={() =>
                          setActive(active === menu.title ? null : menu.title)
                        }
                      >
                        {menu.title}
                        <FiX
                          className={`transform transition-all duration-300 ease-out ${active === menu.title ? "" : "rotate-45"
                            }`}
                        />
                      </button>
                      {active === menu.title && (
                        <ul className="bg-gray-50">
                          {menu.links.map((link, i) => (
                            <li key={i} className="px-6 py-2">
                              <Link
                                href={link.href || "#"}
                                className="block text-gray-700 hover:text-[#6E3299] transition-all duration-200 ease-out"
                                onClick={handleLinkClick}
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Additional Links - After Placements */}
                <div className="p-4 border-t border-gray-200">
                  <Link
                    href="/aims-alumni-association"
                    className="block py-2 text-[#0C2165] hover:text-[#6E3299] font-light transition-all duration-200 ease-out"
                    onClick={handleLinkClick}
                  >
                    Alumni
                  </Link>
                  {/* <Link
                    href="#"
                    className="block py-2 text-[#0C2165] hover:text-[#6E3299] font-light transition-all duration-200 ease-out"
                    onClick={handleLinkClick}
                  >
                    Resources
                  </Link> */}
                  <Button
                    className="font-light w-full mt-2"
                    hoverText="Contact Us"
                    showArrow={true}
                    href="https://enquiry.theaims.ac.in/"
                  >
                    Contact Us
                  </Button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Content spacer that smoothly adjusts when header becomes sticky */}
      <motion.div
        className="w-full"
        style={{
          height: isSticky ? "17vh" : "0px", // Fixed height to match header height
        }}
        transition={{
          duration: 0.3, // Faster transition to prevent gap
          ease: "ease-out",
        }}
      />
    </>
  );
}
