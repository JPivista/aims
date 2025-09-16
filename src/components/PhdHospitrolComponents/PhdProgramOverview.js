import React from "react";
import Image from "next/image";
import Link from "next/link";

const PhdProgramOverview = () => {
    return (
        <div className="bg-white py-4 lg:py-5 lg:px-8 px-4">
            <div className="container mx-auto ">
                {/* Header */}
                <div className="flex flex-col lg:flex-row md:gap-6 gap-0 lg:gap-5 md:mb-12 mb-8 md:pt-5 pt-0 items-start">
                    <div className="w-full">
                        <h3 className="text-3xl md:text-4xl font-semibold text-left text-[#0c2165]  pb-0 mb-0">
                            <span style={{ fontWeight: '500', color: '#a22978', fontFamily: 'Playfair Display' }} className="italic -mt-10 md:-mt-10">PhD Program</span> <br />
                            Overview
                        </h3>
                    </div>
                    <div className="flex flex-col justify-center py-5">
                        <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
                            At AIMS Institutes, scholars are trained to think deeply, write
                            rigorously, and contribute meaningfully to their field. With access
                            to expert guides and institutional resources, candidates are
                            supported through every phase of their research journey.
                        </p>
                    </div>
                </div>

                {/* Info Boxes with Central Border */}
                <div className="flex justify-center px-2 md:px-6 mb-6 md:mb-0">
                    {/* Mobile Card Version */}
                    <div className="block md:hidden w-full max-w-sm">
                        <div className="rounded-2xl p-6 border border-[#A774CC]">
                            {/* Affiliation & Recognition Section */}
                            <div className="text-center mb-6">
                                <div className="flex justify-center">
                                    <Image
                                        src="/business_school/phd/trophy2.svg"
                                        alt="Trophy"
                                        width={32}
                                        height={32}
                                        className="w-[130px] h-[130px] object-contain"
                                    />
                                </div>
                                <h5 className="text-[#A22877] monser-600 text-[20px] mb-2">
                                    Affiliation & Recognition
                                </h5>
                                <p className="text-sm monser-400 ">
                                    Affiliated to University of Mysore
                                </p>
                            </div>

                            <div className="border-t border-gray-500 mb-4"></div>

                            {/* Accreditations Section */}
                            <div className="text-center mb-6">
                                <div className="flex justify-center mb-4">
                                    <Image
                                        src="/business_school/phd/phd_overview_2.svg"
                                        alt="NAAC and IACBE"
                                        width={96}
                                        height={32}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h5 className="text-[#A22877] monser-600 text-[20px] mb-2">
                                    Accreditations
                                </h5>
                                <p className="text-sm monser-400">
                                    <span className="monser-600">NAAC &apos;A&apos;</span> Grade (3.25 on a
                                    scale of 4)
                                </p>
                            </div>

                            <div className="border-t border-gray-500 mb-6"></div>

                            {/* Duration Section */}
                            <div className="text-center">
                                <div className="flex justify-center">
                                    <Image
                                        src="/business_school/phd/calender2.svg"
                                        alt="Calendar"
                                        width={32}
                                        height={32}
                                        className="w-[130px] h-[130px] object-contain"
                                    />
                                </div>
                                <h5 className="text-[#A22877] monser-600 text-[20px] mb-2">
                                    Duration
                                </h5>
                                <p className="text-black text-sm">3 years (Minimum)</p>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Version */}
                    <div className="hidden md:block">
                        <Image
                            src="/business_school/phd/phd_program.svg"
                            alt="MBA Program Overview"
                            width={1000}
                            height={600}
                            className="object-contain w-full h-full"
                            priority
                        />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default PhdProgramOverview;
