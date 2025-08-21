"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    id: "s1",
    src: "/home/campus/embla-1.png",
    description: "A Proud Moment for BHM Dept. of AIMS Institutes! Jun 6, 2025",
    alt: "card 1",
  },
  {
    id: "s2",
    src: "/home/campus/embla-2.png",
    description: "PG 27th Graduation Day",
    alt: "card 2",
  },
  {
    id: "s3",
    src: "/home/campus/embla-3.png",
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
    id: "s5",
    src: "/home/campus/embla-5.png",
    description: "PG 25th Graduation Day Highlights",
    alt: "card 5",
  },
  {
    id: "s6",
    src: "/home/campus/embla-6.png",
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
      setVisible(mobile ? 1 : 5);
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
      }, 2500);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  return (
    <div
      className="relative w-full container mx-auto lg:my-20 my-10"
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
              className="relative rounded-2xl overflow-hidden bg-white flex flex-col items-center w-80 h-[420px]"
            >
              {/* image wrapper fixed height */}
              <div className="relative w-full min-h-[300px] flex-grow">
                <Image
                  src={slides[start].src}
                  alt={slides[start].alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* description stays at bottom */}
              {slides[start].description && (
                <div className="w-full py-2 bg-white">
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
                className="relative rounded-2xl overflow-hidden bg-white flex flex-col items-center"
                style={{
                  width: isActive ? 340 : 260,
                  height: isActive ? 440 : 380,
                  marginRight: isActive ? 40 : 0,
                }}
                animate={{
                  y: isActive ? -20 : 0,
                  scale: isActive ? 1.05 : 1,
                }}
              >
                {/* image wrapper fixed height */}
                <div className="relative w-full min-h-[260px] flex-grow">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    priority={isActive}
                  />
                </div>

                {/* description at bottom */}
                {item.description && (
                  <div className="w-full py-2 bg-white">
                    <p className="text-black text-sm font-medium text-center line-clamp-2">
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
      <div className="absolute lg:-bottom-14 -bottom-4 right-6 flex items-center gap-6">
        <button
          onClick={prev}
          aria-label="Previous"
          className="h-12 w-12 rounded-full bg-white shadow-md ring-1 ring-black/10 grid place-items-center hover:bg-gray-50"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="h-12 w-12 rounded-full bg-white shadow-md ring-1 ring-black/10 grid place-items-center hover:bg-gray-50"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
