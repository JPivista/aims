'use client'
import React, { useState } from 'react'

const ValueAddedPrograms = () => {
    const [expandedSection, setExpandedSection] = useState('life-skills')

    const programs = [
        {
            id: 'life-skills',
            title: 'Life Skills',
            content: [
                'Firefighting at Peenya Fire Station',
                'Certification on hygiene, sanitation, general nutrition management & physical fitness',
                'Emotional Wellbeing',
                'Yoga & Meditation'
            ]
        },
        {
            id: 'social-sensitisation',
            title: 'Social Sensitisation',
            content: [
                'Community service projects',
                'Social responsibility awareness',
                'Environmental consciousness programs'
            ]
        },
        {
            id: 'employability',
            title: 'Employability & Pre-Placement Trainings',
            content: [
                'Resume building workshops',
                'Interview preparation sessions',
                'Professional communication skills',
                'Industry-specific training modules'
            ]
        },
        {
            id: 'certifications',
            title: 'Career Oriented Certifications',
            content: [
                'Financial modeling certifications',
                'Data analytics tools training',
                'Enterprise software proficiency',
                'Industry-recognized credentials'
            ]
        },
        {
            id: 'workshops',
            title: 'Workshops',
            content: [
                'Industry expert sessions',
                'Case study workshops',
                'Practical application training',
                'Skill development sessions'
            ]
        }
    ]

    const toggleSection = (sectionId) => {
        setExpandedSection(expandedSection === sectionId ? null : sectionId)
    }

    return (
        <>
            <div className='py-16 bg-white'>
                <div className='container mx-auto px-6 lg:px-8'>
                    {/* Header Section */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
                        <h3 className='text-[#0C2165] playfair-300'>
                            Value Added Programs
                        </h3>
                        <p className='text-gray-700 leading-relaxed'>
                            In our effort to build the profile of the participants of the program and ensure they meet the requirements of the industry (in addition to personality development), we at AIMS incorporate a set of value added programs in each semester.
                        </p>
                    </div>

                    {/* Program Sections */}
                    <div className='space-y-6'>
                        {programs.map((program) => (
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
                    <div className='mt-6'>
                        <p className='text-gray-600 text-sm leading-relaxed'>
                            Value additions might vary for every semester depending on the feedback from the alumni and industry representatives.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ValueAddedPrograms
