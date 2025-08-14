'use client'
import React, { useState } from 'react'

const AcilForStudentsStaff = () => {
    const [activeTab, setActiveTab] = useState('faculty')

    const tabData = {
        aims: {
            title: "ACIL For AIMS Students",
            content: {
                heading: "ACIL For AIMS Students",
                description: "ACIL provides AIMS students with unique opportunities to expand their global perspective and enhance their academic experience through various international programs and collaborations.",
                features: [
                    "International student exchange programs",
                    "Global internship opportunities",
                    "Cross-cultural learning experiences",
                    "International conference participation",
                    "Study abroad programs with partner institutions"
                ],
                conclusion: "These opportunities help AIMS students develop a global mindset and prepare them for international careers."
            }
        },
        exchange: {
            title: "ACIL For Exchange/International Students",
            content: {
                heading: "ACIL For Exchange/International Students",
                description: "ACIL welcomes students from partner institutions worldwide, providing them with a rich academic and cultural experience in the heart of Bangalore.",
                features: [
                    "Cultural immersion programs",
                    "Academic credit transfer systems",
                    "Local industry exposure and internships",
                    "Language and cultural workshops",
                    "Networking with Indian business community"
                ],
                conclusion: "Exchange students gain valuable insights into Indian business practices and culture while contributing to our diverse campus community."
            }
        },
        faculty: {
            title: "ACIL For Faculty & Staff",
            content: {
                heading: "ACIL For Faculty & Staff",
                description: "ACIL creates opportunities for knowledge-sharing and global collaboration through:",
                features: [
                    "Guest lectures and visiting faculty exchanges",
                    "Joint research or case study development",
                    "International conference participation and hosting",
                    "Development of global curriculum and academic collaborations"
                ],
                conclusion: "These engagements are essential to maintaining AIMS' reputation as a college with international institutions collaborations in Bangalore."
            }
        }
    }

    const tabs = [
        { id: 'aims', label: 'ACIL For AIMS Students' },
        { id: 'exchange', label: 'ACIL For Exchange/International Students' },
        { id: 'faculty', label: 'ACIL For Faculty & Staff' }
    ]

    return (
        <div className='justify-center items-center pb-10 flex flex-col lg:px-0 px-4 relative overflow-hidden'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:px-0 px-4 bg-transparent relative z-10'>
                    {/* Header Section */}
                    <div className='text-left mb-12'>
                        <h3 className='text-[32px] lg:text-[56px] playfair-300 text-[#0C2165] mb-4'>
                            ACIL FOR STUDENTS/STAFF
                        </h3>
                        <p className='text-lg lg:text-[20px] monser-400 text-gray-700 max-w-4xl'>
                            AIMS Institutes&apos; campus reflects a &quot;global village&quot; with students from over 20 countries. ACIL provides a platform for AIMS students and students/professors from partner institutions through exchange programs, activities and opportunities.
                        </p>
                    </div>

                    {/* Mobile Tabs - Visible only on mobile */}
                    <div className='lg:hidden mb-8'>
                        <div className='flex flex-col gap-3'>
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`text-left px-2 py-1 rounded-lg transition-all duration-300 border-2 ${activeTab === tab.id
                                        ? 'bg-[#A22877] text-white border-[#A22877]'
                                        : 'bg-white text-gray-700 border-gray-300 hover:border-[#A22877]'
                                        }`}
                                >
                                    <span className='font-semibold text-lg'>{tab.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Layout - Two Column */}
                    <div className='hidden lg:grid lg:grid-cols-5 gap-8'>
                        {/* Left Column - Navigation */}
                        <div className='col-span-2'>
                            <div className=''>
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`text-left px-4 py-[0.5]blo rounded-2xl mb-3 transition-all duration-300 border-[1px] ${activeTab === tab.id
                                            ? 'bg-[#A22877] text-white border-[#A22877]'
                                            : 'bg-white text-gray-700 border-gray-300 hover:border-[#A22877]'
                                            }`}
                                    >
                                        <span className='font-semibold text-lg'>{tab.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className='col-span-3 border-l-2 border-gray-200 pl-8'>
                            <div className='mb-6'>
                                <h5 className='text-2xl lg:text-4xl monser-600 text-[#A22877] mb-4'>
                                    {tabData[activeTab].content.heading}
                                </h5>
                            </div>

                            <div className='bg-[#A22877] text-white p-6 rounded-lg'>
                                <p className='text-lg monser-400 mb-4'>
                                    {tabData[activeTab].content.description}
                                </p>

                                <ul className='space-y-3 mb-4'>
                                    {tabData[activeTab].content.features.map((feature, index) => (
                                        <li key={index} className='flex items-start gap-3'>
                                            <span className='text-white'>•</span>
                                            <span className='monser-400'>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className='text-lg monser-400'>
                                    {tabData[activeTab].content.conclusion}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Content - Visible only on mobile */}
                    <div className='lg:hidden'>
                        <div className='mb-6'>
                            <h4 className='text-2xl lg:text-3xl monser-600 text-[#A22877] mb-4'>
                                {tabData[activeTab].content.heading}
                            </h4>
                        </div>

                        <div className='bg-[#A22877] text-white p-6 rounded-lg'>
                            <p className='text-lg monser-400 mb-4'>
                                {tabData[activeTab].content.description}
                            </p>

                            <ul className='space-y-3 mb-4'>
                                {tabData[activeTab].content.features.map((feature, index) => (
                                    <li key={index} className='flex items-start gap-3'>
                                        <span className='text-white'>•</span>
                                        <span className='monser-400'>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className='text-lg monser-400'>
                                {tabData[activeTab].content.conclusion}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AcilForStudentsStaff
