'use client'
import React, { useState } from 'react'

const CfsStudentEvents = () => {
    const [selectedYear, setSelectedYear] = useState(2022)
    const [expandedEvent, setExpandedEvent] = useState(0) // Default to first event (index 0)

    const eventsData = {
        2022: [
            {
                title: "International Summit on Sustainable Development - Global Challenges, November 2022",
                objective: "The main objective of the summit was to have deliberations on 3 sustainable development goals (SDG):",
                sdgs: [
                    "Quality Education - Equitable and lifelong learning opportunities",
                    "Life on Land - Protect, Promote, and Restore Terrestrial Eco System",
                    "Decent work and economic growth"
                ],
                outcomes: "The outcomes of the summit will be a better understanding, appreciation and make recommendations towards achievement of the UN SDGs and make the world a better place to live.",
                conclusion: "The Summit concluded by the launch of the Global Economic Forum brochure of Bali summit to be held on Jan 26th, 2023 by all the delegates of SUNFO and AIMS management."
            },
            {
                title: "International Seminar on Global Ecosystem for a Sustainable Earth: Celebrating the Global Un-plastic Day, September 2022",
                objective: "A comprehensive seminar focused on addressing plastic pollution and promoting sustainable practices.",
                outcomes: "The seminar brought together experts and students to discuss innovative solutions for reducing plastic waste and protecting our global ecosystem.",
                conclusion: "Participants committed to implementing sustainable practices in their daily lives and academic institutions."
            }
        ],
        2019: [
            {
                title: "Sustainability Workshop Series",
                objective: "Interactive workshops focused on practical sustainability implementation.",
                outcomes: "Students gained hands-on experience with sustainable technologies and practices.",
                conclusion: "Workshop participants developed action plans for their communities."
            }
        ],
        2018: [
            {
                title: "Green Campus Initiative Launch",
                objective: "Establishing comprehensive sustainability practices across campus.",
                outcomes: "Implementation of waste segregation, energy conservation, and green building practices.",
                conclusion: "Campus became a model for sustainable institutional practices."
            }
        ],
        2017: [
            {
                title: "Community Outreach Program",
                objective: "Extending sustainability education to local communities.",
                outcomes: "Enhanced community awareness and participation in environmental initiatives.",
                conclusion: "Established long-term partnerships with local organizations."
            }
        ],
        2016: [
            {
                title: "Research Symposium on Environmental Sciences",
                objective: "Showcasing student research in sustainability and environmental protection.",
                outcomes: "Publication of research papers and establishment of research networks.",
                conclusion: "Strengthened academic focus on sustainability research."
            }
        ],
        2015: [
            {
                title: "Foundation of Sustainability Club",
                objective: "Creating a student-led platform for sustainability initiatives.",
                outcomes: "Regular awareness campaigns and community engagement activities.",
                conclusion: "Established a sustainable framework for student leadership in environmental causes."
            }
        ]
    }

    const years = [2022, 2019, 2018, 2017, 2016, 2015]

    const toggleEvent = (eventIndex) => {
        setExpandedEvent(expandedEvent === eventIndex ? null : eventIndex)
    }

    const handleYearChange = (year) => {
        setSelectedYear(year)
        setExpandedEvent(null) // Reset expanded event when year changes
    }

    return (
        <div className='justify-center items-center py-10 flex flex-col lg:px-0 px-4 relative overflow-hidden'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:px-0 px-4 bg-transparent relative z-10'>
                    {/* Header Section */}
                    <div className='text-left mb-12'>
                        <h3 className='text-[32px] lg:text-[56px] playfair-300 text-[#0C2165] mb-4'>
                            Student Engagement
                            <br className='md:block hidden' />
                            and Events
                        </h3>
                        <p className='text-lg lg:text-[20px] monser-400 text-gray-700 max-w-4xl'>
                            Through continuous sustainability awareness activities for students, ACS ensures that students not only learn, but participate. Key milestones include:
                        </p>
                    </div>

                    {/* Timeline Layout */}
                    <div className=' flex-col lg:flex-row gap-8 grid grid-cols-1 lg:grid-cols-6'>
                        {/* Year Navigation */}
                        <div className='flex flex-col gap-4 flex-shrink-0 col-span-1 w-20'>
                            {years.map((year) => (
                                <button
                                    key={year}
                                    onClick={() => handleYearChange(year)}
                                    className={`text-center px-2 py-1 rounded-full transition-all duration-300 text-sm 
                                         ${selectedYear === year
                                            ? 'bg-[#A22877] text-white shadow-lg'
                                            : 'border-2 border-[#A22877] text-[#A22877] hover:bg-[#A22877] hover:text-white'
                                        }`}
                                >
                                    <span className='font-semibold'>{year}</span>
                                </button>
                            ))}
                        </div>

                        {/* Event Details */}
                        <div className='flex-1 border-l-2 border-black pl-8 min-h-[400px] col-span-5'>
                            {eventsData[selectedYear]?.map((event, index) => (
                                <div key={index} className='mb-8'>
                                    <button
                                        onClick={() => toggleEvent(index)}
                                        className='w-full flex items-center justify-between text-left hover:bg-gray-50 rounded-lg transition-colors duration-200 p-2'
                                    >
                                        <h5 className='lg:text-2xl monser-600 text-[#0C2165] flex-1 leading-tight text-left'>
                                            {event.title}
                                        </h5>
                                        <span className='text-[#A22877] text-2xl transition-transform duration-200 ml-4'>
                                            {expandedEvent === index ? '↗' : '↙'}
                                        </span>
                                    </button>

                                    {expandedEvent === index && (
                                        <div className='my-4 space-y-4 text-gray-700'>
                                            <p className='monser-400'>
                                                {event.objective}
                                            </p>

                                            {event.sdgs && (
                                                <div>
                                                    <ol className='monser-400 space-y-2'>
                                                        {event.sdgs.map((sdg, sdgIndex) => (
                                                            <li key={sdgIndex} className='flex items-start gap-2'>
                                                                <span className='text-[#8B5CF6] font-semibold flex-shrink-0'>{sdgIndex + 1}.</span>
                                                                <span>{sdg}</span>
                                                            </li>
                                                        ))}
                                                    </ol>
                                                </div>
                                            )}

                                            <p className='monser-400'>
                                                {event.outcomes}
                                            </p>

                                            <p className='monser-400'>
                                                {event.conclusion}
                                            </p>
                                        </div>
                                    )}

                                    {/* {index < eventsData[selectedYear].length - 1 && (
                                        <hr className='my-6 ' />
                                    )} */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Concluding Statement */}
                <div className='mt-12 pt-4'>
                    <p className='text-lg lg:text-[20px] monser-400 text-gray-700 max-w-4xl'>
                        These initiatives allow students to experience the arc from classroom awareness to field action, strengthening their confidence as future leaders of sustainable change.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CfsStudentEvents
