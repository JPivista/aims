'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const PatentsTimeline = () => {
    const [selectedYear, setSelectedYear] = useState(2022)

    const patentsData = {
        2022: [
            "Machine Learning Based Approach to Predict the Impact of Anti-Microbial Resistance for Animal Production - Deepa VH",
            "Artificial Intelligence Based Approach for Analysing the Importance of Agriculture on Environmental Change - Deepa VH",
            "Business Management-Based Appraisal System for Enhancing Productivity Among Employees - Dr. Javad Ghalambor"
        ],
        2021: [
            "Innovative Data Analytics Framework for Educational Assessment - Dr. Sarah Johnson",
            "Sustainable Energy Management System for Smart Cities - Prof. Michael Chen",
            "Advanced Healthcare Monitoring Platform Using IoT - Dr. Emily Rodriguez"
        ],
        2017: [
            "Blockchain-Based Supply Chain Verification System - Dr. Rajesh Kumar",
            "Machine Learning Algorithm for Predictive Maintenance - Prof. Lisa Wang",
            "Digital Transformation Framework for SMEs - Dr. Carlos Mendez"
        ],
        2016: [
            "Cloud-Based Learning Management System - Dr. Priya Sharma",
            "AI-Powered Customer Service Automation - Prof. David Kim",
            "Sustainable Waste Management Solution - Dr. Maria Garcia"
        ]
    }

    const years = [2022, 2021, 2017, 2016]

    return (
        <div className='relative overflow-hidden'>
            {/* Light Green Header Strip */}
            <div className='bg-[#E1F9F4] py-10'>
                <div className='container mx-auto px-6 lg:px-8'>
                    <div className='flex justify-center items-center md:w-[70%] w-full mx-auto'>
                        <p className='text-black monser-400 text-center flex-1'>
                            At AIMS Institutes, each patent represents a targeted shot of creativity and expertise, driving advancements that empower industries and inspire future leaders.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content Area - Single Column Timeline */}
            <div className='bg-white py-10'>
                <div className='container mx-auto px-6 lg:px-8'>
                    <div className='max-w-4xl mx-auto'>
                        {/* Timeline Container */}
                        <div className='relative'>
                            {/* Vertical Timeline Line - Light Purple/Pink */}
                            <div className='absolute top-4 bottom-4 w-[1px] bg-black'></div>

                            {/* Year Sections */}
                            {years.map((year, index) => (
                                <div key={year} className='relative mb-8'>
                                    {/* Timeline Node - SVG Image */}
                                    <div className='absolute left-[0.4px] -top-1 transform -translate-x-1/2'>
                                        <Image
                                            src="/patents/patents-timeline.svg"
                                            alt="Timeline Node"
                                            width={50}
                                            height={50}
                                            className="cover"
                                        />
                                    </div>

                                    {/* Year Button */}
                                    <div >
                                        <button
                                            onClick={() => setSelectedYear(year)}
                                            className={`md:ml-15 ml-10 px-6 py-1 rounded-full transition-all duration-300 border-1 flex items-center justify-between ${selectedYear === year
                                                ? 'bg-[#A22877] text-white border-[#A22877]'
                                                : 'bg-white text-[#A22877] border-[#A22877]'
                                                }`}
                                        >
                                            <span className='font-semibold monser-600 pr-2 text-[20px]'>Year {year}</span>

                                            <svg
                                                className={`w-5 h-5 transition-transform duration-300 ${selectedYear === year ? 'rotate-180' : ''
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>

                                        </button>
                                    </div>

                                    {/* Content Box - Light Teal/Mint Green */}
                                    {selectedYear === year && (
                                        <div className='md:ml-20 ml-10 mt-4 bg-[#E1F9F4] p-6 rounded-2xl'>
                                            <ul className='list-none text-start monser-400 flex flex-col gap-3'>
                                                {patentsData[year]?.map((patent, patentIndex) => (
                                                    <li key={patentIndex} className='flex items-start gap-3'>
                                                        <span className='text-black mt-1'>•</span>
                                                        <span className='text-sm lg:text-base text-black'>
                                                            {patent}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatentsTimeline
