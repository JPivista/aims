"use client";
import React from "react";
import Link from "next/link";
import { GoArrowDownRight } from "react-icons/go";

const FloatingButton = () => {
    return (
        <div className="fixed right-3 top-[35%] flex flex-col z-[9999] -rotate-90 transform origin-right">
            {/* Enquire Now Button */}
            <div className="flex gap-4">
                {/* Apply Now Button */}
                <Link
                    href="https://apply.theaims.ac.in/login"
                    target="_blank"
                    className="bg-[#9c2474] text-white font-semibold text-xs md:text-sm px-3 md:px-4 py-1 rounded-tl-lg rounded-tr-lg shadow-lg transform origin-right hover:bg-[#FF7F02] transition-all duration-300 group flex items-center justify-center"
                >
                    <span className="flex items-center justify-center gap-1 md:gap-2">
                        Apply Now
                        <GoArrowDownRight className="w-3 h-3 md:w-4 md:h-4 transition-all duration-300 ease-in-out group-hover:-rotate-90" />
                    </span>
                </Link>

                {/* Enquire Now Button */}
                <Link
                    href="https://enquiry.theaims.ac.in/"
                    target="_blank"
                    className="bg-[#9c2474] text-white font-semibold text-xs md:text-sm px-3 md:px-4 py-1 rounded-tl-lg rounded-tr-lg shadow-lg transform  origin-right hover:bg-[#FF7F02] transition-all duration-300 group flex items-center justify-center"
                >
                    <span className="flex items-center justify-center gap-1 md:gap-2">
                        Enquire Now
                        <GoArrowDownRight className="w-3 h-3 md:w-4 md:h-4 transition-all duration-300 ease-in-out group-hover:-rotate-90" />
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default FloatingButton;
