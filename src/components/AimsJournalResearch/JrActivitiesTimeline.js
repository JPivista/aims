
'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const JrActivitiesTimeline = () => {
    const [selectedYear, setSelectedYear] = useState(2011)

    const iqacData = {
        2020: [
            "Quality assurance activities and institutional development programs",
            "Academic audit and review processes",
            "Student feedback collection and analysis"
        ],
        2019: [
            "Curriculum enhancement and review initiatives",
            "Faculty development programs and workshops",
            "Infrastructure improvement projects"
        ],
        2018: [
            "Academic excellence programs and quality benchmarks",
            "Research methodology workshops",
            "Industry collaboration initiatives"
        ],
        2017: [
            "Teaching-learning process improvements",
            "Assessment and evaluation enhancements",
            "Student support system development"
        ],
        2016: [
            "Quality management system implementation",
            "Academic planning and monitoring",
            "Stakeholder engagement programs"
        ],
        2015: [
            "Institutional quality standards development",
            "Performance monitoring and evaluation",
            "Continuous improvement initiatives"
        ],
        2014: [
            "Quality assurance framework establishment",
            "Academic program review processes",
            "Faculty competency development"
        ],
        2013: [
            "Institutional effectiveness assessment",
            "Quality enhancement strategies",
            "Academic excellence promotion"
        ],
        2012: [
            "Quality assurance mechanisms implementation",
            "Academic standards maintenance",
            "Institutional development planning"
        ],
        2011: [
            "Pragmatics: New Horizons of Theory and Practice and the Calling of Planetary Conversations, University, Ms. Sudha Reddy, Activist-Human and Prof. Raymond, Univ. of Sydney were the resource persons, 23rd February, 2011.",
            "Asian Forum for Social Theory on \"Visions of Asia and the Challenges of Creative Social Theorizing\", Dr. Subhash Sharma, Dean-IBA, Mr. Anugraha John, CEO, Global Citizen for Sustainable development were the key speakers, 21st & 22nd February, 2011.",
            "Workshop on Case Study Writing.",
            "Workshop on Enhancing the teaching skills.",
            "Workshop on Business Simulation.",
            "XED Business awareness program, XED.",
            "Workshop on designing the Exit Survey.",
            "Orientation program on Design of outcomes based programs."
        ]
    }

    const years = [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011]

    return (
        <div className='relative overflow-hidden'>
            {/* Light Green Header Strip */}
            <div className='py-10 border-t-[1px] border-black'>
                <div className='container mx-auto px-6 lg:px-8'>
                    <div className='flex flex-col'>
                        <h3 className='text-2xl lg:text-4xl playfair-300 text-[#0C2165] mb-4'>
                            Activities of IQAC
                        </h3>
                        <h5 className='monser-600 text-black'>
                            MAJOR ACTIVITIES OF THE INTERNAL QUALITY
                            <br className='hidden md:block' />
                            ASSURANCE CELL
                        </h5>
                    </div>
                </div>
            </div>

            {/* Main Content Area - Single Column Timeline */}
            <div className='bg-white py-10'>
                <div className='container mx-auto px-6 lg:px-8'>
                    <div className='absolute top-[40%] right-0 md:block hidden rotate-180'>
                        <Image
                            src="/school-circle.svg"
                            alt="School Circle Background"
                            width={150}
                            height={150}
                            className=" rotate-180"
                        />
                    </div>
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
                                                {iqacData[year]?.map((activity, activityIndex) => (
                                                    <li key={activityIndex} className='flex items-start gap-3'>
                                                        <span className='text-black mt-1'>•</span>
                                                        <span className='text-sm lg:text-base text-black'>
                                                            {activity}
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

export default JrActivitiesTimeline
