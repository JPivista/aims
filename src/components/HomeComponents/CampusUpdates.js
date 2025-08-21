"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const updates = [
    {
        id: 1,
        title: "A Proud Moment for BHM Dept. of AIMS Institutes!",
        date: "Jun 6, 2025",
        image: "/home/AIMS School of Business MBA Wins .webp",
    },
    {
        id: 2,
        title: "UG 28th Graduation Ceremony",
        date: "Jul 14, 2025",
        image: "/home/banner-001.png",
    },
    {
        id: 3,
        title: "Bronze Glory at the National Games",
        date: "Recent",
        image: "/home/AIMS School of Business MBA Wins .webp",
    },
    {
        id: 4,
        title: "UG 27th Graduation Day - Class of 2024",
        date: "Class of 2024",
        image: "/home/banner-001.png",
    },
];

const CampusUpdates = () => {
    // Duplicate updates array to create an infinite effect
    const repeatedUpdates = [...updates, ...updates];

    return (
        <>
            <style>
                {
                    `
            /* Hexagon Shape */
.clip-hexagon {
  clip-path: polygon(
    10% 0%,
    90% 0%,
    100% 50%,
    90% 100%,
    10% 100%,
    0% 50%
  );
}
`
                }
            </style>

            <div className="w-full flex flex-col items-center justify-center py-10 bg-white">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-[#14202E]">Campus Updates</h2>
                <p className="text-gray-600 mt-3 text-center max-w-2xl">
                    Stay informed about the latest news, events, and developments,
                    including achievements and opportunities that shape our community.
                </p>

                {/* Slider Wrapper */}
                <div className="relative w-[90%] max-w-6xl mt-8 overflow-hidden">
                    <motion.div
                        className="flex gap-6"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            ease: "linear",
                            duration: 20, // speed of slide
                            repeat: Infinity,
                        }}
                    >
                        {repeatedUpdates.map((item, index) => (
                            <div
                                key={`${item.id}-${index}`}
                                className="relative w-[320px] flex-shrink-0"
                            >
                                {/* Hexagon Shape */}
                                <div className="relative w-full h-[350px] bg-white shadow-lg overflow-hidden clip-hexagon">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Title & Date */}
                                <div className="mt-3 text-center">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-[#2B50EC] font-medium mt-1">
                                        {item.date}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default CampusUpdates;