"use client";
import React from "react";
import Link from "next/link";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";

const FloatingButton = () => {
    return (
        <div className="fixed right-3 top-1/3 md:flex flex-col gap-32 z-[9999] hidden">
            {/* Enquire Now Button */}
            <Link
                href="https://enquiry.theaims.ac.in/"
                className="bg-[#9c2474] text-white font-semibold text-sm px-4 py-2 rounded-tl-lg rounded-tr-lg shadow-lg transform -rotate-90 origin-right hover:bg-[#FF7F02] transition-all duration-300 group relative overflow-hidden"
            >
                <div className="relative flex items-center ">
                    <span className="transition-all duration-300 ease-in-out">
                        Enquire Now
                    </span>
                    <div className="relative flex items-center ml-2">
                        <GoArrowDownRight className="w-4 h-4 text-current transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:-rotate-90 " />
                        {/* <GoArrowUpRight className="w-4 h-4 text-current absolute top-0 left-0 transition-all duration-300 ease-in-out opacity-0 -rotate-12 scale-75 group-hover:rotate-0 group-hover:scale-100" /> */}
                    </div>
                </div>
            </Link>

            {/* Apply Now Button */}
            <Link
                href="https://enquiry.theaims.ac.in/"
                className="bg-[#9c2474] text-white font-semibold text-sm px-4 py-2 rounded-tl-lg rounded-tr-lg shadow-lg transform -rotate-90 origin-right hover:bg-[#FF7F02] transition-all duration-300 group relative overflow-hidden"
            >
                <div className="relative flex items-center">
                    <span className="transition-all duration-300 ease-in-out">
                        Apply Now
                    </span>
                    <div className="relative flex items-center ml-2">
                        <GoArrowDownRight className="w-4 h-4 text-current transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:-rotate-90 " />
                        {/* <GoArrowUpRight className="w-4 h-4 text-current absolute top-0 left-0 transition-all duration-300 ease-in-out opacity-0 -rotate-12 scale-75 group-hover:rotate-0 group-hover:scale-100" /> */}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default FloatingButton;
