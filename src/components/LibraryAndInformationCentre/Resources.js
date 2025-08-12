'use client'
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Button from '@/shared/Button'

const Resources = () => {
    const [isPlagiarismOpen, setIsPlagiarismOpen] = useState(false);
    const [isBookRecommendationsOpen, setIsBookRecommendationsOpen] = useState(false);

    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="container mx-auto px-6 md:pb-12 pb-5">
            {/* Heading */}
            <h3 className="text-4xl font-bold text-[#0d2352] mb-8">Resources:</h3>

            {/* Library Membership */}
            <div className="bg-[#fbeaee] border border-[#f2d0cf] rounded-2xl p-6 mb-6">
                <div className="flex flex-col md:flex-row gap-4">

                    {/* Left Column */}
                    <div className="md:w-1/4 flex justify-center md:justify-start items-center md:border-r md:border-[#B79AAD] pr-0 md:pr-4">
                        <h5 className="text-lg" style={{ fontWeight: "600" }}>Library Membership</h5>
                    </div>

                    {/* Right Column */}
                    <div className="md:w-3/4 md:pl-4">
                        <p className="text-gray-800 mb-3">
                            The AIMS Library provides essential services that ensure fair access, academic credibility,
                            and tailored support for both students and faculty.
                        </p>
                        <p className="text-gray-800 mb-4">
                            <span style={{ fontWeight: "600" }}>Student Library Membership</span> enables borrowing privileges and full access to reading rooms
                            and digital platforms. Membership is valid for the duration of the program.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button showReadMore={false}>Student Membership Form</Button>

                            <Button showReadMore={false}>Faculty Membership Form</Button>
                        </div>
                    </div>

                </div>
            </div>




            {/* Accordion */}
            <div className="grid md:grid-cols-2 gap-4">
                {/* Plagiarism Check */}
                <div className="border border-[#f2d0cf] rounded-2xl overflow-hidden">
                    <button
                        onClick={() => setIsPlagiarismOpen(!isPlagiarismOpen)}
                        className="w-full flex justify-between items-center bg-[#fbeaee] px-4 py-3 text-lg"
                        style={{ fontWeight: "600" }}
                    >
                        Plagiarism Check
                        <span
                            className={`transform transition-transform duration-300 ${isPlagiarismOpen ? 'rotate-180' : 'rotate-0'
                                }`}
                        >
                            <FaChevronDown
                                className={`transform transition-transform duration-300 ${openSection === 'plagiarism' ? 'rotate-180' : 'rotate-0'
                                    }`}
                            />
                        </span>
                    </button>
                    <div
                        className={`transition-all duration-500 overflow-hidden ${isPlagiarismOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <div className="px-4 py-3 text-gray-800">
                            <p className="mb-2">
                                (Faculty Only) Faculty members can access plagiarism-check tools to ensure originality in student
                                submissions and research publications.
                            </p>
                            <p>
                                Fill the form <a href="#" className="text-[#a22978] underline" style={{ fontWeight: "600" }}>here</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Faculty Book Recommendations */}
                <div className="border border-[#f2d0cf] rounded-xl overflow-hidden">
                    <button
                        onClick={() => setIsBookRecommendationsOpen(!isBookRecommendationsOpen)}
                        className="w-full flex justify-between items-center bg-[#fbeaee] px-4 py-3 text-lg"
                        style={{ fontWeight: "600" }}
                    >
                        Faculty Book Recommendations
                        <span
                            className={`transform transition-transform duration-300 ${isBookRecommendationsOpen ? 'rotate-180' : 'rotate-0'
                                }`}
                        >
                            <FaChevronDown
                                className={`transform transition-transform duration-300 ${openSection === 'bookRecommendations' ? 'rotate-180' : 'rotate-0'
                                    }`}
                            />
                        </span>
                    </button>
                    <div
                        className={`transition-all duration-500 overflow-hidden ${isBookRecommendationsOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <div className="px-4 py-3 text-gray-800">
                            <p className="mb-2">
                                Faculty are encouraged to suggest books or journals relevant to their curriculum or emerging fields.
                                These inputs directly inform future acquisitions.
                            </p>
                            <p>
                                Access it here: <a href="#" className="text-[#a22978] underline" style={{ fontWeight: "600" }}>Link</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact */}
            <div className="mt-8 text-center text-gray-700">
                Get in Touch Email: <a href="mailto:library@theaims.ac.in" className="text-[#531675] underline" style={{ fontWeight: "600" }}>library@theaims.ac.in</a>
            </div>
        </div>
    );
};

export default Resources;
