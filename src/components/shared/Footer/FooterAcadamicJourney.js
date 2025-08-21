"use client";
import React from "react";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import Button from "@/shared/Button";

export default function FooterAcadamicJourney() {
    return (
        <section className="relative bg-[#A22877] text-white overflow-hidden">
            {/* Darker purple strip at top */}
            <div className="h-1 bg-[#5A2A7A]"></div>

            <div className="container mx-auto px-4 lg:px-0 py-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="relative z-10 col-span-2    ">
                        {/* Heading */}
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-playfair font-bold leading-tight mb-6">
                            Ready to <br />
                            Draw Your Bow?
                        </h2>

                        {/* Description */}
                        <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
                            Whether you're an aspiring academic or a professional seeking
                            research depth, AIMS helps you aim sharper and go further.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Apply Now Button */}
                            <Button
                                href="https://enquiry.theaims.ac.in/"
                                variant="secondary"
                                showArrow={true}
                                className="bg-white text-[#A22877] border-white hover:bg-transparent hover:text-white"
                            >
                                Apply Now
                            </Button>

                            {/* Enquire Now Button */}
                            <Button
                                href="https://enquiry.theaims.ac.in/"
                                variant="secondary"
                                showArrow={true}
                                className="bg-white text-[#A22877] border-white hover:bg-transparent hover:text-white"
                            >
                                Download Brochure
                            </Button>
                            <Button
                                href="https://enquiry.theaims.ac.in/"
                                variant="secondary"
                                showArrow={true}
                                className="bg-white text-[#A22877] border-white hover:bg-transparent hover:text-white"
                            >
                                Talk to a Counsellor
                            </Button>
                        </div>
                    </div>

                    {/* Right Graphic */}
                    <div className="relative lg:flex justify-end items-center">
                        <div className="w-64 h-64 lg:w-80 lg:h-80 opacity-20 flex items-center justify-center">
                            <Image
                                src="/right-arrow-footer.svg"
                                alt="Decorative Arrow"
                                width={180}
                                height={180}
                                className="object-contain brightness-0 invert"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Dark blue strip at bottom */}
            <div className="h-2 bg-[#0C2165]"></div>
        </section>
    );
}
