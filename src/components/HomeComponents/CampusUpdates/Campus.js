"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    id: "s1",
    src: "/home/campus/embla-001-updated.png",
    description: "A Proud Moment for BHM Dept. of AIMS Institutes! Jun 6, 2025",
    alt: "card 1",
  },
  {
    id: "s2",
    src: "/home/campus/embla-002.png",
    description: "PG 27th Graduation Day",
    alt: "card 2",
  },
  {
    id: "s3",
    src: "/home/campus/embla-003.png",
    description: "Bronze Glory at the National Games",
    alt: "card 3",
  },
  {
    id: "s4",
    src: "/home/campus/embla-4.png",
    description: "UG 27th Graduation Day",
    alt: "card 4",
  },
  {
    id: "s6",
    src: "/home/campus/embla-006.png",
    description: "UG 28th Graduation Ceremony Jul 14, 2025",
    alt: "card 6",
  },
];

export default function AimsCarousel() {
  const [start, setStart] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const [visible, setVisible] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  const next = () => setStart((i) => (i + 1) % slides.length);
  const prev = () => setStart((i) => (i - 1 + slides.length) % slides.length);

  // Responsive visible count + mobile flag
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setVisible(mobile ? 1 : 4);
      setIsMobile(mobile);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const windowIdxs = Array.from(
    { length: visible },
    (_, k) => (start + k) % slides.length
  );

  // Auto-slide effect
  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setStart((i) => (i + 1) % slides.length);
      }, 20500);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  return (
    <>
      <div className=" bg-[#fff]">
        <div
          className="relative w-full container mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Track */}
          {isMobile ? (
            // Mobile: Centered single slide with smooth slide
            <div className="flex justify-center overflow-hidden py-10">
              <AnimatePresence mode="wait">
                {/* MOBILE SLIDE */}
                <motion.div
                  key={slides[start].id}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  className="relative rounded-2xl overflow-hidden flex flex-col items-center w-80 h-[420px]"
                >
                  {/* image wrapper fixed height */}
                  <div className="relative w-full">
                    <Image
                      src={slides[start].src}
                      alt={slides[start].alt}
                      width={500}
                      height={500}
                      className="object-contain"
                      priority
                    />
                  </div>

                  {/* description stays at bottom */}
                  {slides[start].description && (
                    <div className="w-full lg:py-2 bg-white">
                      <p className="text-black text-sm font-medium text-center line-clamp-2">
                        {slides[start].description}
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            // Desktop: multiple slides with animation
            <motion.div
              layout
              className="flex items-end gap-6 overflow-hidden py-10"
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            >
              {windowIdxs.map((idx, pos) => {
                const item = slides[idx];
                const isActive = pos === 0;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    className="relative rounded overflow-hidden  flex flex-col items-center"
                    style={{
                      width: isActive ? 500 : 400,
                      height: isActive ? 440 : 380,
                      marginRight: isActive ? 40 : 0,
                    }}
                    animate={{
                      y: isActive ? -2 : 0,
                      scale: isActive ? 1 : 1,
                    }}
                  >
                    {/* image wrapper fixed height */}
                    <div className="relative w-full flex items-center justify-center">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={500} // keep actual width or max
                        height={500} // keep actual height or max
                        className="object-contain"
                        priority={isActive}
                      />
                    </div>

                    {/* description at bottom */}
                    {item.description && (
                      <div className="w-full py-2">
                        <p className="text-black text-sm font-medium text-left">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* Arrows */}
          <div className="absolute lg:bottom-2 bottom-5 right-6 flex items-center gap-6">
            {/* PREV BUTTON */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="h-12 w-12 rounded-full bg-white text-black shadow-md ring-1 ring-black/10 grid place-items-center hover:bg-[#A22877] hover:text-white"
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
                  stroke="currentColor" // ✅ follows text color
                  strokeWidth="0.5"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* NEXT BUTTON */}
            <button
              onClick={next}
              aria-label="Next"
              className="h-12 w-12 rounded-full bg-white text-black shadow-md ring-1 ring-black/10 grid place-items-center hover:bg-[#A22877] hover:text-white"
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
                  stroke="currentColor" // ✅ follows text color
                  strokeWidth="0.5"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
