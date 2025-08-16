'use client'
import React, { useState } from 'react'

const AQARComponent = () => {
    const [activeTab, setActiveTab] = useState('aqar')

    const tabData = {
        aqar: {
            title: "AQAR",
            content: {
                heading: "AQAR",
                documents: [
                    { year: "2021-22", link: "#" },
                    { year: "2020-21", link: "#" },
                    { year: "2019-20", link: "#" },
                    { year: "2018-19", link: "#" },
                    { year: "2017-18", link: "#" },
                    { year: "2016-17", link: "#" },
                    { year: "2015-16", link: "#" }
                ]
            }
        },
        minutes: {
            title: "Minutes Of Meeting",
            content: {
                heading: "Minutes Of Meeting",
                description: "Official records and documentation of institutional meetings and proceedings."
            }
        },
        feedback: {
            title: "Feedback",
            content: {
                heading: "Feedback",
                description: "Student and stakeholder feedback systems and reports."
            }
        },
        policies: {
            title: "Policies And Procedures",
            content: {
                heading: "Policies And Procedures",
                description: "Institutional policies, guidelines, and standard operating procedures."
            }
        },
        practices: {
            title: "Best Practices",
            content: {
                heading: "Best Practices",
                description: "Documented best practices and quality improvement initiatives."
            }
        },
        distinctiveness: {
            title: "Institutional Distinctiveness",
            content: {
                heading: "Institutional Distinctiveness",
                description: "Unique features and characteristics that set our institution apart."
            }
        },
        declaration: {
            title: "Declaration",
            content: {
                heading: "Declaration",
                description: "Official declarations and compliance statements."
            }
        }
    }

    const tabs = [
        { id: 'aqar', label: 'AQAR' },
        { id: 'minutes', label: 'Minutes Of Meeting' },
        { id: 'feedback', label: 'Feedback' },
        { id: 'policies', label: 'Policies And Procedures' },
        { id: 'practices', label: 'Best Practices' },
        { id: 'distinctiveness', label: 'Institutional Distinctiveness' },
        { id: 'declaration', label: 'Declaration' }
    ]

    return (
        <div className='justify-center items-center pb-10 flex flex-col lg:px-0 px-4 relative overflow-hidden'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:px-0 px-4 bg-transparent relative z-10'>
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
                        <div className='hidden lg:flex flex-col gap-4 col-span-2'>
                            <div className=''>
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`text-left px-4 py-[0.5] rounded-2xl transition-all block duration-300 mb-3 border-[1px] ${activeTab === tab.id
                                            ? 'bg-[#A22877] text-white border-[#A22877]'
                                            : 'bg-white text-gray-700 border-black hover:border-[#A22877]'
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

                            {activeTab === 'aqar' ? (
                                <div className='bg-[#A22877] text-white p-6 rounded-lg'>
                                    <ul className='space-y-3'>
                                        {tabData.aqar.content.documents.map((doc, index) => (
                                            <li key={index} className='flex items-start gap-3'>
                                                <span className='text-white'>•</span>
                                                <span className='monser-400'>
                                                    AQAR {doc.year} - Download using this{' '}
                                                    <a
                                                        href={doc.link}
                                                        className='underline hover:text-gray-200 transition-colors'
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        link
                                                    </a>
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <div className='bg-[#A22877] text-white p-6 rounded-lg'>
                                    <p className='text-lg monser-400'>
                                        {tabData[activeTab].content.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Content - Visible only on mobile */}
                    <div className='lg:hidden'>
                        <div className='mb-6'>
                            <h4 className='text-2xl lg:text-3xl monser-600 text-[#A22877] mb-4'>
                                {tabData[activeTab].content.heading}
                            </h4>
                        </div>

                        {activeTab === 'aqar' ? (
                            <div className='bg-[#A22877] text-white p-6 rounded-lg'>
                                <ul className='space-y-3'>
                                    {tabData.aqar.content.documents.map((doc, index) => (
                                        <li key={index} className='flex items-start gap-3'>
                                            <span className='text-white'>•</span>
                                            <span className='monser-400'>
                                                AQAR {doc.year} - Download using this{' '}
                                                <a
                                                    href={doc.link}
                                                    className='underline hover:text-gray-200 transition-colors'
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    link
                                                </a>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <div className='bg-[#A22877] text-white p-6 rounded-lg'>
                                <p className='text-lg monser-400'>
                                    {tabData[activeTab].content.description}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AQARComponent
