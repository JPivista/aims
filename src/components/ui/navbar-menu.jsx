"use client";
import React from "react";
import { motion } from "motion/react";
import { GoArrowDownRight } from "react-icons/go";



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
        className="cursor-pointer hover:opacity-[0.9] text-white flex items-center gap-2 text-xl group">
        {item} <GoArrowDownRight className="group-hover:-rotate-90 transition-transform duration-200" />
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}>
          {active === item && (
            <div
              className="absolute top-[calc(100%_+_1.2rem)] transform pt-1">
              <motion.div
                transition={transition}
                // layoutId ensures smooth animation
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm rounded-b-lg overflow-hidden shadow-xl">
                <motion.div
                  // layout ensures smooth animation
                  layout
                  className="w-max h-full p-4">
                  {children}
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
      className="relative shadow-input flex justify-center space-x-10 py-4 text-white">
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
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
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
  ...rest
}) => {
  return (
    <a
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black text-lg">
      {children}
    </a>
  );
};
