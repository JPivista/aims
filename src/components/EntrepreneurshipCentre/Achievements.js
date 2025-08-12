'use client'
import React, { useState } from 'react'

const Achievements = () => {
    const [expandedSection, setExpandedSection] = useState('award')

    const achievementsData = [
        {
            id: 'award',
            title: 'Outstanding Women Entrepreneur Award',
            content: 'This prestigious recognition celebrates exceptional women entrepreneurs who have demonstrated outstanding leadership, innovation, and business acumen in their respective fields.'
        },
        {
            id: 'accomplishments',
            title: 'Some of the sparkling accomplishments:',
            content: [
                'Won the Best Business Plan award by Goldman Sachs - ISB at AIMS Institutes, Bangalore, for the 10,000 Women Entrepreneurs Initiative',
                'Sneha Bhandare has been selected by CII-GIZ(Germany) for the 4th Indo-German Management Training Programme, which is an initiative by the German Govt and the Government of India to promote bilateral trade',
                'Nirvana has made it to the second round of ET-Power of Ideas and is gearing up for round 3. Currently, Nirvana has its own showroom in prime MG Road in Panjim, Goa. Nirvana is also strengthening its innovation pipeline and product range. They went online on 1st July with about 30 designs. Plans are on for increasing the product portfolio to become a head-to-toe cult brand'
            ]
        }
    ]

    const toggleSection = (sectionId) => {
        setExpandedSection(expandedSection === sectionId ? null : sectionId)
    }

    return (
        <div className='justify-center items-center mb-10 flex flex-col lg:px-0 px-4 relative overflow-hidden'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:px-0  bg-transparent relative z-10'>
                    {/* Header Section */}
                    <div className='text-left'>
                        <h3 className='text-[32px] lg:text-[56px] playfair-300 text-[#0C2165] mb-4'>
                            Achievements
                        </h3>
                    </div>

                    {/* Achievements Sections */}
                    <div className='space-y-2'>
                        {achievementsData.map((achievement) => (
                            <div key={achievement.id} className='border-b border-black'>
                                <button
                                    onClick={() => toggleSection(achievement.id)}
                                    className='w-full flex items-center justify-between text-left hover:bg-gray-50 rounded-lg transition-colors duration-200 p-2'
                                >
                                    <h5 className='text-black monser-600 text-xl lg:text-2xl'>
                                        {achievement.title}
                                        <span className='text-black pl-4 text-2xl transition-transform duration-200'>
                                            {expandedSection === achievement.id ? '↗' : '↙'}
                                        </span>
                                    </h5>

                                </button>

                                {expandedSection === achievement.id && (
                                    <div className='my-4 ml-4 space-y-4'>
                                        {achievement.id === 'award' ? (
                                            <p className='text-black leading-relaxed'>
                                                {achievement.content}
                                            </p>
                                        ) : (
                                            <ul className='list-none text-start monser-400 flex flex-col gap-4'>
                                                {achievement.content.map((item, index) => (
                                                    <li key={index} className='flex items-start gap-3'>
                                                        <span className='text-black'>•</span>
                                                        <span className='text-base lg:text-lg text-gray-700'>
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievements
