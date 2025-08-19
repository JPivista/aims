'use client'
import React, { useState } from 'react'

const ValueAddedPrograms = ({ programsData, title, description, disclaimer }) => {
    const [expandedSection, setExpandedSection] = useState(programsData?.[0]?.id || null)

    // Handle case when programsData is undefined or empty
    if (!programsData || programsData.length === 0) {
        return (
            <div className='py-10 bg-white'>
                <div className='container mx-auto px-6 lg:px-8'>
                    <div className='text-center'>
                        <h3 className='text-[#0C2165] playfair-300' dangerouslySetInnerHTML={{ __html: title || 'Value Added Programs' }}>
                        </h3>
                    </div>
                </div>
            </div>
        )
    }

    const toggleSection = (sectionId) => {
        setExpandedSection(expandedSection === sectionId ? null : sectionId)
    }

    return (
        <>
            <div className='py-10 bg-white'>
                <div className='container mx-auto px-4 lg:px-0'>
                    {/* Header Section */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-8 gap-0'>
                        <h3 className='text-[#0C2165] playfair-300' dangerouslySetInnerHTML={{ __html: title || 'Value Added Programs' }}>
                        </h3>
                        <p className='text-gray-700 leading-relaxed'>
                            {description || 'In our effort to build the profile of the participants of the program and ensure they meet the requirements of the industry (in addition to personality development), we at AIMS incorporate a set of value added programs in each semester.'}
                        </p>
                    </div>

                    {/* Program Sections */}
                    <div className='space-y-6 md:mt-12 mt-6'>
                        {programsData.map((program) => (
                            <div key={program.id} className='border-b border-gray-200'>
                                <button
                                    onClick={() => toggleSection(program.id)}
                                    className='w-full flex items-center justify-between text-left hover:bg-gray-50 rounded-lg transition-colors duration-200'
                                >
                                    <h4 className='text-[#0C2165] monser-600 text-xl'>
                                        {program.title}   <span className='text-[#0C2165] text-2xl transition-transform duration-200'>
                                            {expandedSection === program.id ? '↗' : '↙'}
                                        </span>
                                    </h4>

                                </button>

                                {expandedSection === program.id && (
                                    <div className='my-4 ml-4 space-y-2'>
                                        {program.content.map((item, index) => (
                                            <div key={index} className='flex items-start'>
                                                <span className='text-[#0C2165] mr-3 mt-2'>•</span>
                                                <p className='text-gray-700 leading-relaxed'>
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Footer Disclaimer */}
                    {disclaimer && (
                        <div className='mt-6'>
                            <p className='text-gray-600 text-sm leading-relaxed'>
                                {disclaimer}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ValueAddedPrograms
