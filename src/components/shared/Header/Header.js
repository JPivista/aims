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
        className={`z-50 bg-white backdrop-blur-md w-full ${isSticky ? "fixed top-0 left-0 right-0" : "relative"
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
        {/* HEADER CONTAINER */}
        <div className="h-full flex flex-col">
          {/* TOP BAR */}
          <motion.div
            className="container mx-auto flex items-center justify-between px-4 lg:px-0 py-3 w-full h-[10vh] z-50 bg-white"
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
              <Link href="/" scroll={false} onClick={handleLogoClick}>
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={200}
                  height={200}
                  priority
                />
              </Link>
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
              <Link
                href="/aims-alumni-association"
                className="text-[#0C2165] text-xl hover:text-[#6E3299] hover:underline font-light"
              >
                Alumni
              </Link>
              <Link
                href="/eresources"
                className="text-[#0C2165] text-xl hover:text-[#6E3299] hover:underline font-light"
              >
                Resources
              </Link>

              <Button showReadMore={false}>Contact Us</Button>
            </motion.div>

            {/* Mobile Hamburger */}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-xl z-50 bg-white"
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
            className="hidden lg:flex bg-[#6E3299] w-full h-[7vh] items-center justify-center"
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
                              <Link
                                href={link.href || "#"}
                                className="block text-gray-700"
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
                    className="block py-2 text-[#0C2165] hover:text-[#6E3299] font-light"
                    onClick={handleLinkClick}
                  >
                    Alumni
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 text-[#0C2165] hover:text-[#6E3299] font-light"
                    onClick={handleLinkClick}
                  >
                    Resources
                  </Link>
                  <Button
                    className="font-light w-full mt-2"
                    hoverText="Contact Us"
                    showArrow={true}
                  >
                    Contact Us
                  </Button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Content spacer that smoothly adjusts when header becomes sticky */}
      <motion.div
        className="w-full"
        style={{
          height: isSticky ? "22vh md:19vh lg:16vh xl:15vh" : "0px", // Responsive height based on screen size
        }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
    </>
  );
}
