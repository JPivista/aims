'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const Achievements = () => {
    const [expandedSection, setExpandedSection] = useState('award') // First section is active by default

    const achievementsData = [
        {
            id: 'award',
            title: 'Outstanding Women Entrepreneur Award',
            content:
                [
                    'AIMS family Congratulates Lakshmidevi B.V., cohort of Batch-3 of Goldman Sachs ISB AIMS 10 K Women Entrepreneurs Development Program, for winning the Priyadarshini Award. This award was given in the 12th global conference of women entrepreneurs organised by the Federation of Indian Women Entrepreneurs in association with the International Federation of Women Entrepreneurs at Hotel Ashok, New Delhi.',
                    'The award was presented to 31 Indian women entrepreneurs and around 15 foreign women entrepreneurs, recognising them as outstanding women entrepreneurs. The award was presented by Union Minister (state) for women & child welfare, Smt Krishna Teertha, Mauritius Women & Child Welfare Minister Miss Martin, NSIC Chairman Kumar & FIWE President Smt Rajinee Agarwal on 5th September 2012.',
                    'The liberating Goa-based brand, Nirvana, is now online. Sneha Bhandare, Batch - 2 Cohort of GS ISB AIMS 10K Women entrepreneurs Development Program, is the co-owner of Nirvana Brand T-Shirts.'
                ]
        },
        {
            id: 'accomplishments',
            title: 'Some of the sparkling accomplishments:',
            content: [
                'Won the Best Business Plan award by Goldman Sachs- ISB at AIMS Institutes, Bangalore, for the 10,000 Women Entrepreneurs Initiative.',
                'Sneha Bhandare has been selected by CII-GIZ(Germany) for the 4th Indo-German Management Training Programme, which is an initiative by the German Govt and the Government of India to promote bilateral trade.',
                'Nirvana has made it to the second round of ET-Power of Ideas and is gearing up for round 3. Currently, Nirvana has its own showroom in prime MG Road in Panjim, Goa. Nirvana is also strengthening its innovation pipeline and product range. They went online on 1st July with about 30 designs. Plans are on for increasing the product portfolio to become a head-to-toe cult brand.'
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
                                    className={`w-full flex items-center justify-between text-left  transition-all duration-200 p-2 ${expandedSection === achievement.id
                                        ? 'bg-[#A22877] text-white hover:bg-[#8B1F6A]'
                                        : 'hover:bg-gray-50'
                                        }`}
                                >
                                    <h5 className={`monser-600 text-xl lg:text-2xl transition-colors duration-200 ${expandedSection === achievement.id ? 'text-white' : 'text-black'
                                        }`}>
                                        {achievement.title}
                                        <span className={`pl-4 text-3xl transition-transform duration-200 ${expandedSection === achievement.id ? 'text-white' : 'text-black'
                                            }`}>
                                            {expandedSection === achievement.id ? '↗' : '↙'}
                                        </span>
                                    </h5>
                                </button>

                                {expandedSection === achievement.id && (
                                    <div className=' space-y-4 bg-gray-100 p-4'>
                                        {achievement.id === 'award' ? (
                                            <div className='space-y-4'>
                                                {achievement.content.map((paragraph, index) => (
                                                    <p key={index} className='text-black leading-relaxed'>
                                                        {paragraph}
                                                    </p>
                                                ))}
                                            </div>
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
