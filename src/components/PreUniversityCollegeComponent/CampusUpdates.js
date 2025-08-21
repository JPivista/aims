"use client"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/pre-university-college/apply_now.webp",
  "/pre-university-college/pu_distinction.webp",
  "/pre-university-college/aims.webp",
  "/pre-university-college/tennikoit.webp",
];

const CampusUpdates = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // move backward so it looks left ➝ right
      setIndex((prev) => (prev - 1 + images.length) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Left 3 images
  const getLeftImages = () => {
    return [0, 1, 2].map(
      (offset) => images[(index + offset) % images.length]
    );
  };

  // Right single image
  const getRightImage = () => {
    return images[(index + 3) % images.length];
  };

  return (
    <div className="container mx-auto py-10 px-4">
    <div className="w-full h-[420px] flex items-center justify-center overflow-hidden">
      <div className="relative w-[90%] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="flex w-full gap-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 2 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Left side (3 arrow images with border) */}
            {/* Left side (full-length arrow images with border) */}
            <div className="w-2/3 flex relative h-[400px]">
              {getLeftImages().map((src, i) => (
                <div
                  key={src}
                  className="absolute top-0 h-full w-[360px]" // full height arrow
                  style={{
                    left: `${i * 180}px`, // adjust spacing so arrows overlap correctly
                    zIndex: 10 - i, // first on top, others behind
                    clipPath: "polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)",
                    background: "#a22978", // border color
                    borderRadius: "12px",
                    padding: "10px", // border thickness
                  }}
                >
                  <img
                    src={src}
                    alt={`left-${i}`}
                    className="w-full h-full object-cover"
                    style={{
                      clipPath: "polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              ))}
            </div>
            {/* Right side (1 square image with border) */}
            <div className="w-1/3 flex items-center justify-center h-[400px]">
              <div
                className="rounded-2xl shadow-xl w-[360px] h-[400px]"
              // style={{ background: "#a22978" }}
              >
                <img
                  src={getRightImage()}
                  alt="right"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
    </div>
  );
};

export default CampusUpdates;
