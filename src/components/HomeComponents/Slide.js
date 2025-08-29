"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Button from "@/shared/Button";
import Link from "next/link";
import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "School of Business",
    programs: [
      { name: "PhD in Management", link: "/phd-management" },
      { name: "MBA Master of Business Administration", link: "/mba" },
      { name: "BBA Bachelor of Business Administration", link: "/bba" },
      { name: "BBA Aviation", link: "/bba-aviation" },
      { name: "BBA+ CA / ACCA", link: "/bba-ca-acca" },
    ],
    leftImage: "/home/course/school-of-buisnesss-left.webp",
    rightImage: "/home/course/school-of-buisnesss.webp",
  },
  {
    id: 2,
    title: "School of Finance and Commerce",
    programs: [
      { name: "Ph.D in Commerce", link: "/phd-commerce" },
      { name: "Master of Commerce MCOM", link: "/mcom" },
      { name: "Bachelor of Commerce BCOM", link: "/bcom" },
      { name: "CA / ACCA BCOM+", link: "/bcom-ca-acca" },
    ],
    leftImage: "/home/course/school-of-finance-left.webp",
    rightImage: "/home/course/school-of-finance.webp",
  },
  {
    id: 3,
    title: "School of Hospitality and Tourism",
    programs: [
      { name: "BHM Bachelor of Hotel Management", link: "/bhm" },
      {
        name: "Certificate in Vocational Studies in QSR (Quick Service Restaurant)",
        link: "/certificate-qsr",
      },
      { name: "MHM", link: "/mhm" },
    ],
    programsTitle: "Swiss International",
    programs2: [
      {
        name: "Culinary Professional Diploma (VET by EHL)",
        link: "/culinary-diploma",
      },
      {
        name: "Food & Beverage Service Professional Diploma (VET by EHL)",
        link: "/food-beverage-diploma",
      },
      {
        name: "Rooms Professional Diploma (VET by EHL)",
        link: "/rooms-diploma",
      },
    ],
    leftImage: "/home/course/school-of-hospitality-left.webp",
    rightImage: "/home/course/school-of-hospitality.webp",
  },
  {
    id: 4,
    title: "School of Information and Technology",
    programs: [
      { name: "Master of Computer Application MCA", link: "/mca" },
      { name: "Bachelor of Computer Application BCA", link: "/bca" },
      {
        name: "AI/ML | Data Science | Full-Stack Development BCA+",
        link: "/bca-ai-ml",
      },
    ],
    leftImage: "/home/course/school-of-information-left.webp",
    rightImage: "/home/course/school-of-information.webp",
  },
  {
    id: 5,
    title: "Pre-University College (PUC)",
    programsTitle: "SCIENCE",
    programs2: [
      { name: "PCMB", link: "/puc-pcmb" },
      { name: "PCMC", link: "/puc-pcmc" },
    ],
    programsTitle2: "COMMERCE",
    programs3: [{ name: "CEBA", link: "/puc-ceba" }],
    leftImage: "/home/course/puc-left.webp",
    rightImage: "/home/course/puc.webp",
  },
];

export default function ExactSwapCarousel() {
  const [current, setCurrent] = useState(0);
  const thumbsRef = useRef([]);
  const thumbsContainerRef = useRef(null);

  useEffect(() => {
    thumbsRef.current = thumbsRef.current.slice(0, courses.length);
  }, []);

  useEffect(() => {
    const el = thumbsRef.current[current];
    if (el && typeof el.scrollIntoView === "function") {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [current]);

  const prev = () =>
    setCurrent((p) => (p - 1 + courses.length) % courses.length);
  const next = () => setCurrent((p) => (p + 1) % courses.length);
  const goTo = (i) => setCurrent(i);

  return (
    <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-purple-800 text-white p-6 md:p-12 relative overflow-hidden">
      <div className="container mx-auto">
        <div>
          <h3> Select your Course</h3>
          <p className="pb-4">
            Explore our schools, see their potential paths, and select the{" "}
            <br /> one that fits your goal.
          </p>
        </div>
        <div className="md:flex gap-6 md:gap-12 items-center">
          {/* LEFT - Big Image (Desktop only) */}
          <div className="hidden md:flex justify-center items-center">
            <div className="w-full max-w-[520px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={courses[current].id}
                  layoutId={`card-${courses[current].id}`}
                  initial={{ y: -120, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 120, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  className="rounded-lg overflow-hidden"
                >
                  <Image
                    width={320}
                    height={320}
                    src={courses[current].leftImage}
                    alt={courses[current].title}
                    className="h-[320px] md:h-full object-cover block"
                    draggable={true}
                  />
                </motion.div>
              </AnimatePresence>
              {/* Ghost to keep thumbnail visible during transition */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <motion.img
                  key={`ghost-${courses[current].id}`}
                  src={courses[current].rightImage}
                  alt={courses[current].title}
                  layoutId={`thumb-${courses[current].id}`}
                  style={{ visibility: "hidden" }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT - Text and Thumbnails */}
          <div className="flex flex-col w-full">
            {/* Mobile: Show thumbnail image at top */}
            <div className="md:hidden mb-6">
              <div className="w-full relative">
                <Image
                  width={400}
                  height={300}
                  src={courses[current].rightImage}
                  alt={courses[current].title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${courses[current].id}`}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mb-4 w-full md:w-2/3"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  {courses[current].title}
                </h3>
                {courses[current].programs &&
                  courses[current].programs.length > 0 && (
                    <ul className="mb-4 space-y-1">
                      {courses[current].programs.map((p, i) => (
                        <li key={i} className="text-lg leading-snug">
                          <Link
                            href={p.link}
                            className="hover:text-yellow-300 transition-colors duration-200 hover:underline"
                          >
                            {p.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                {courses[current].programsTitle && (
                  <span className="text-2xl monser-600">
                    {courses[current].programsTitle}
                  </span>
                )}
                {courses[current].programs2 &&
                  courses[current].programs2.length > 0 && (
                    <ul className="my-4 space-y-1 ">
                      {courses[current].programs2.map((p, i) => (
                        <li key={i} className="text-lg leading-snug">
                          <Link
                            href={p.link}
                            className="hover:text-yellow-300 transition-colors duration-200 hover:underline"
                          >
                            {p.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                {courses[current].programsTitle2 && (
                  <span className="text-2xl monser-600">
                    {courses[current].programsTitle2}
                  </span>
                )}
                {courses[current].programs3 &&
                  courses[current].programs3.length > 0 && (
                    <ul className="my-4 space-y-1 ">
                      {courses[current].programs3.map((p, i) => (
                        <li key={i} className="text-lg leading-snug">
                          <Link
                            href={p.link}
                            className="hover:text-yellow-300 transition-colors duration-200 hover:underline"
                          >
                            {p.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                <Button
                  showReadMore={false}
                  className="hover:text-white hover:border-white"
                >
                  <Link href="/campus-life">Browse All Programs</Link>
                </Button>
              </motion.div>
            </AnimatePresence>

            {/* THUMBNAILS */}
            {/* THUMBNAILS + ARROWS WRAPPER */}
            <div className="relative">
              {/* THUMBNAILS */}
              <motion.div
                ref={thumbsContainerRef}
                className="flex gap-4 overflow-x-auto pb-2 mt-10 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {courses.map((c, idx) => {
                  const isActive = idx === current;
                  return (
                    <motion.button
                      key={c.id}
                      ref={(el) => (thumbsRef.current[idx] = el)}
                      onClick={() => goTo(idx)}
                      layoutId={`card-${c.id}`}
                      className={`flex-none w-[150px] md:w-[160px] rounded-lg overflow-hidden border-2 focus:outline-none ${
                        isActive ? "border-transparent" : "border-transparent"
                      }`}
                      whileHover={{ scale: 1.03 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 24,
                      }}
                      aria-pressed={isActive}
                    >
                      <motion.img
                        src={c.rightImage}
                        alt={c.title}
                        className="w-full h-full object-cover block"
                        initial={false}
                        animate={isActive ? { y: -16 } : { y: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        draggable={false}
                      />
                      <div className="text-sm md:text-sm font-medium truncate">
                        {c.title}
                      </div>
                    </motion.button>
                  );
                })}
              </motion.div>

              {/* ARROWS ABOVE THUMBNAILS */}
              <div className="absolute -top-8 -right-10 flex gap-5 z-20">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="bg-white hover:bg-[#A22877] hover:text-white text-black p-2 rounded-full shadow"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 17"
                    fill="none"
                    className="rotate-180"
                  >
                    <path
                      d="M0.125 8.5H18.875M18.875 8.5L11.375 1M18.875 8.5L11.375 16"
                      stroke="currentColor" // ✅ makes stroke follow text color
                      strokeWidth="0.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button
                  onClick={next}
                  aria-label="Next"
                  className="bg-white text-black p-2 rounded-full shadow hover:bg-[#A22877] hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 17"
                    fill="none"
                  >
                    <path
                      d="M0.125 8.5H18.875M18.875 8.5L11.375 1M18.875 8.5L11.375 16"
                      stroke="currentColor" // ✅ now follows text color
                      strokeWidth="0.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
