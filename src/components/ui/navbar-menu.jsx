"use client";
import React from "react";
import { motion } from "motion/react";
import { GoArrowDownRight } from "react-icons/go";
import { usePathname } from "next/navigation";
import Link from "next/link";



const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer hover:opacity-[0.9] text-white flex items-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl group">
        {item} <GoArrowDownRight className="group-hover:-rotate-90 transition-transform duration-200 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}>
          {active === item && (
            <div
              className="absolute top-[calc(100%_+_1.2rem)] transform -mt-1">
              <motion.div
                transition={transition}
                // layoutId ensures smooth animation
                layoutId="active"
                className="bg-white backdrop-blur-sm rounded-b-lg overflow-hidden shadow-xl">
                <motion.div
                  // layout ensures smooth animation
                  layout
                  className="w-max h-full p-0">
                  <div className="flex flex-col">
                    {children}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children
}) => {
  return (
    <nav
      // resets the state
      onMouseLeave={() => setActive(null)}
      className="relative shadow-input flex justify-center space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 py-2 md:py-2 lg:py-3 xl:py-4 2xl:py-6 text-white">
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl" />
      <div>
        <h4 className="text-xl font-bold text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({
  children,
  href,
  ...rest
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      {...rest}
      className={`text-[16px] transition-all duration-200 px-3 py-2 w-full block m-0 p-0 border-0 ${isActive
        ? "bg-[#6e3299] text-white"
        : "text-gray-700 hover:bg-[#2828a2] hover:text-white"
        }`}>
      {children}
    </Link>
  );
};
