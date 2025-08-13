'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const CocGuidingPrinciples = () => {
    const [selectedPrinciple, setSelectedPrinciple] = useState('professional')

    const principlesData = {
        professional: {
            name: "Professional Presence & Integrity",
            content: [
                "Be on campus during all working hours and on designated days",
                "Conduct Institute tasks with the highest levels of honesty, accuracy, and fairness",
                "Fully cooperate with Institute authorities in professional responsibilities",
                "Maintain a vice-free, disciplined environment. No intoxicants on campus or during duty hours"
            ]
        },
        campus: {
            name: "Campus Culture & Collegiality",
            content: [
                "Foster a positive and inclusive campus environment",
                "Promote mutual respect and collaboration among colleagues",
                "Support diversity and inclusion initiatives",
                "Contribute to building a strong academic community"
            ]
        },
        resource: {
            name: "Resource & Class Management",
            content: [
                "Efficiently manage and utilize institutional resources",
                "Maintain organized and effective classroom environments",
                "Ensure proper documentation and record-keeping",
                "Optimize resource allocation for maximum impact"
            ]
        },
        communication: {
            name: "Communication & Reputation Management",
            content: [
                "Maintain professional communication standards",
                "Protect and enhance institutional reputation",
                "Use appropriate channels for official communications",
                "Represent AIMS Institutes professionally in all interactions"
            ]
        },
        loyalty: {
            name: "Institutional Loyalty & Neutrality",
            content: [
                "Demonstrate commitment to AIMS Institutes' mission and values",
                "Maintain political and personal neutrality in professional capacity",
                "Avoid conflicts of interest in institutional matters",
                "Uphold institutional policies and procedures consistently"
            ]
        }
    }

    const principles = [
        { id: 'professional', name: 'Professional Presence & Integrity' },
        { id: 'campus', name: 'Campus Culture & Collegiality' },
        { id: 'resource', name: 'Resource & Class Management' },
        { id: 'communication', name: 'Communication & Reputation Management' },
        { id: 'loyalty', name: 'Institutional Loyalty & Neutrality' }
    ]

    return (
        <>
            <div className='justify-center items-center pt-10 flex flex-col lg:px-0 px-4 relative overflow-hidden'>
                <div className='absolute top-[20%] right-0 md:block hidden rotate-180'>
                    <Image
                        src="/school-circle.svg"
                        alt="School Circle Background"
                        width={100}
                        height={100}
                        className="rotate-180"
                    />
                </div>
                <div className='container mx-auto'>
                    <div className='flex flex-col lg:px-0 px-4 bg-transparent relative z-10'>
                        {/* Header Section */}
                        <div className='text-left mb-12'>
                            <h3 className='text-[32px] lg:text-[56px] playfair-300 text-[#0C2165] mb-4'>
                                Guiding Principles for
                                <br className='hidden md:block' />
                                Faculty and Staff
                            </h3>
                            <p className='text-lg lg:text-[20px] monser-400 text-black md:w-[60%] w-full'>
                                Our Faculty & Staff Code of Conduct provides clear guidelines to cultivate respect, accountability, and transparent collaboration across campus. All employees are expected to follow the established policies and procedures at AIMS Institutes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider Line */}
            {/* <hr className='border-black mb-12 w-full' /> */}

            <div className='justify-center items-center mb-10 flex flex-col lg:px-0 px-4 relative overflow-hidden'>
                <div className='container mx-auto'>
                    <div className='flex flex-col lg:px-0 px-4 bg-transparent relative z-10'>
                        {/* Guiding Principles Section */}
                        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8'>
                            {/* Left Column - Principles List */}
                            <div className='lg:col-span-2 md:border-r-2 border-black'>
                                {/* Mobile Tabs - Visible only on mobile */}
                                <div className='lg:hidden'>
                                    <div className='flex flex-col gap-3'>
                                        <div>
                                            {principles.map((principle) => (
                                                <button
                                                    key={principle.id}
                                                    onClick={() => setSelectedPrinciple(principle.id)}
                                                    className={`text-left px-4 py-[0.5px] rounded-2xl mb-2 transition-all duration-300 border-2 ${selectedPrinciple === principle.id
                                                        ? 'bg-[#A22877] text-white border-[#A22877]'
                                                        : 'bg-white text-black border-[1px] border-black hover:border-[#A22877]'
                                                        }`}
                                                >
                                                    <span className='font-semibold text-lg'>{principle.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Tabs - Visible only on desktop */}
                                <div className='hidden lg:flex flex-col gap-4'>
                                    <div>
                                        {principles.map((principle) => (
                                            <button
                                                key={principle.id}
                                                onClick={() => setSelectedPrinciple(principle.id)}
                                                className={`text-left px-4 py-[0.5px] rounded-2xl mb-2 transition-all duration-300 border-2 ${selectedPrinciple === principle.id
                                                    ? 'bg-[#A22877] text-white border-[#A22877]'
                                                    : 'bg-white text-black border-[1px] border-black hover:border-[#A22877]'
                                                    }`}
                                            >
                                                <span className='font-semibold text-lg'>{principle.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Principle Details */}
                            <div className='lg:col-span-3 lg:pl-8'>
                                <div className='mb-6'>
                                    <h5 className='text-2xl lg:text-3xl monser-600 text-[#A22877] mb-4'>
                                        {principlesData[selectedPrinciple].name}
                                    </h5>
                                </div>

                                <ul className='list-none text-start monser-400 flex flex-col bg-[#A22877] rounded-xl p-5'>
                                    {principlesData[selectedPrinciple].content.map((item, index) => (
                                        <li key={index} className='flex items-start gap-3 text-white mb-2'>
                                            <span className='text-white'>•</span>
                                            <span className='text-base lg:text-lg '>
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default CocGuidingPrinciples
