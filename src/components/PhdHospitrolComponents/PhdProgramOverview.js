import React from "react";
import Image from "next/image";
import Link from "next/link";

const PhdProgramOverview = () => {
    return (
        <div className="bg-white py-8 sm:py-12 lg:py-5 lg:px-0 px-4">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-5 mb-12 pt-5">
                    <div className="w-full">
                        <h3 className="text-3xl md:text-4xl font-semibold text-left text-[#0c2165] lg:mb-12 lg:pb-12">
                            <span style={{ fontWeight: '500', color: '#a22978', fontFamily: 'Playfair Display' }} className="italic">PhD Program</span> <br />
                           Overview
                        </h3>
                    </div>
                    <div className="flex flex-col justify-center pb-5">
                        <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
                            At AIMS Institutes, scholars are trained to think deeply, write
                            rigorously, and contribute meaningfully to their field. With access
                            to expert guides and institutional resources, candidates are
                            supported through every phase of their research journey.
                        </p>
                    </div>
                </div>

                {/* Info Boxes with Central Border */}
                <div className="flex justify-center">
                    <div className="w-full container border border-[#A774CC] rounded-2xl  bg-white">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {/* Box 1 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="-mt-8 sm:-mt-10 lg:-mt-11 mb-3 sm:mb-4 w-20 sm:w-24 lg:w-32">
                                    <Image
                                        src="/business_school/phd/phd_overview_1.svg"
                                        alt="Accreditation Icon"
                                        className="w-full h-full object-contain"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="pt-1 w-full">
                                    <h5 style={{ color: "#A22877", fontSize: "1.1rem", fontWeight: '600' }} className="min-h-8 sm:min-h-10 font-semibold mb-1 sm:text-lg lg:text-xl">
                                        Affiliation & Recognition
                                    </h5>
                                    <p style={{ fontSize: "1.1rem" }} className="text-gray-700 text-xs sm:text-sm lg:text-base">
                                        Affiliated to University of Mysore
                                    </p>
                                </div>
                            </div>

                            {/* Box 2 */}
                            <div className="flex flex-col items-center text-center pb-5">
                                <div className="-mt-6 sm:-mt-8 lg:-mt-8 mb-3 sm:mb-4 w-16 sm:w-20 lg:w-52">
                                    <Image
                                        src="/business_school/phd/phd_overview_2.svg"
                                        alt="Accreditation Icon"
                                        className="w-full h-full object-contain"
                                        width={64}
                                        height={64}
                                    />
                                </div>
                                <div className=" w-full  border-t border-b sm:border-t-0 sm:border-b-0 sm:border-l sm:border-r border-[#A774CC]">
                                    <h5 style={{ color: "#A22877", fontSize: "1.1rem", fontWeight: '600' }} className="min-h-8 sm:min-h-10 font-semibold mb-1 sm:text-lg lg:text-xl">
                                        Accreditations
                                    </h5>
                                    <p style={{ fontSize: "1.1rem" }} className="text-gray-700 text-xs sm:text-sm lg:text-base">
                                        NAAC &apos;A&apos; Grade (3.25 on a scale of 4)
                                    </p>
                                </div>
                            </div>

                            {/* Box 3 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="-mt-8 sm:-mt-10 lg:-mt-11 mb-3 sm:mb-4 w-20 sm:w-24 lg:w-32">
                                    <Image
                                        src="/business_school/phd/phd_overview_3.svg"
                                        alt="Duration Icon"
                                        className="w-full h-full object-contain"
                                        width={64}
                                        height={64}
                                    />
                                </div>
                                <div className="pt-1 w-full">
                                    <h5 style={{ color: "#A22877", fontSize: "1.1rem", fontWeight: '600' }} className="min-h-8 sm:min-h-10 font-semibold mb-1 sm:text-lg lg:text-xl">
                                        Duration
                                    </h5>
                                    <p style={{ fontSize: "1.1rem" }} className="text-gray-700 text-xs sm:text-sm lg:text-base">
                                        3 years (minimum)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

              
            </div>
        </div>
    );
};

export default PhdProgramOverview;
