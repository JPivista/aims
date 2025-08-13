'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Button from '../../shared/Button'

const EsprStudentEngagementEvents = () => {
    const [selectedParticipant, setSelectedParticipant] = useState('professional-presence-integrity')

    const participantsData = {
        'professional-presence-integrity': {
            name: "COMPLIANCE AND CONFORMANCE",
            testimonial: "I have used the knowledge I gained there to create a business plan not just for the sake of the competition but also genuinely to provide me with a roadmap to grow and further my business Gambolla I have made a few alterations to my plan even after the culmination of our sessions and have finally arrived at a document that I am satisfied with (for the time being) I am proud to say that I have already begun putting some of my plans into action and hope to achieve the success that I have shown on paper in reality"
        },
        'campus-culture-collegiality': {
            name: "CONTINUOUS IMPROVEMENT",
            testimonial: "TAIMS wil establish achievable E&S goals, objectives and targets ni conjunction with the interests ofour students, infrastructure and other related entities andcontinualy improve our performance and wil report our progress as and when required. We aim to establish policies and controls that promote a positive E&S culture."
        },
        'resource-class-management': {
            name: "Resource & Class Management",
            testimonial: "Through the mentorship and networking opportunities, I've expanded my digital marketing agency to serve clients across multiple cities. The program's focus on women entrepreneurship gave me the confidence to dream bigger."
        },
        'communication-reputation-management': {
            name: "Communication & Reputation Management",
            testimonial: "The business knowledge and mentorship I received helped me establish a successful health and wellness center. The program's emphasis on practical implementation made all the difference."
        },
        'institutional-loyalty-neutrality': {
            name: "Institutional Loyalty & Neutrality",
            testimonial: "As a tech entrepreneur, the program helped me understand both the business and social impact aspects of my venture. I've been able to secure funding and expand to multiple schools."
        },
    }

    const participants = [
        { id: 'professional-presence-integrity', name: 'Professional Presence & Integrity' },
        { id: 'campus-culture-collegiality', name: 'Campus Culture & Collegiality' },
        { id: 'resource-class-management', name: 'Resource & Class Management' },
        { id: 'communication-reputation-management', name: 'Communication & Reputation Management' },
        { id: 'institutional-loyalty-neutrality', name: 'Institutional Loyalty & Neutrality' },
    ]

    return (
        <>

            <div className='w-full bg-[#E1F9F4] py-10'>
                <div className='justify-center items-center mb-5 flex flex-col lg:px-0 px-4 relative overflow-hidden'>
                    <div className='absolute top-[0%] right-0 md:block hidden rotate-180'>
                        <Image
                            src="/school-circle.svg"
                            alt="School Circle Background"
                            width={80}
                            height={80}
                            className="rotate-180"
                        />
                    </div>
                    <div className='container mx-auto'>
                        <div className='flex flex-col lg:px-0 px-4 bg-transparent relative z-10'>
                            {/* Header Section */}
                            <div className='text-left'>
                                <h3 className='text-[32px] lg:text-[56px] playfair-300 text-[#0C2165] mb-4'>
                                    Student Engagement
                                    <br className='hidden md:block' />
                                    and Events
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='justify-center items-center mb-10 flex flex-col lg:px-0 px-4 relative overflow-hidden'>
                    <div className='container mx-auto'>
                        <div className='flex flex-col lg:px-0 px-4 bg-transparent relative z-10'>
                            {/* Participant Voices Section */}
                            <div className='grid grid-cols-1 lg:grid-cols-5 gap-8'>
                                {/* Left Column - Participant Names */}
                                <div className='lg:col-span-2 md:border-r-2 border-black'>
                                    {/* Mobile Tabs - Visible only on mobile */}
                                    <div className='lg:hidden'>
                                        <div className='flex flex-col gap-3'>
                                            <div className=''>
                                                {participants.map((participant) => (
                                                    <button
                                                        key={participant.id}
                                                        onClick={() => setSelectedParticipant(participant.id)}
                                                        className={`text-left px-4 py-[0.5] rounded-lg transition-all block duration-300 mb-3 border-[1px]  ${selectedParticipant === participant.id
                                                            ? 'bg-[#A22877] text-white border-[#A22877]'
                                                            : 'bg-white text-gray-700 border-gray-300 hover:border-[#A22877]'
                                                            }`}
                                                    >
                                                        <span className='font-semibold text-lg'>{participant.name}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Desktop Tabs - Visible only on desktop */}
                                    <div className='hidden lg:flex flex-col gap-4 '>
                                        <div className=''>
                                            {participants.map((participant) => (
                                                <button
                                                    key={participant.id}
                                                    onClick={() => setSelectedParticipant(participant.id)}
                                                    className={`text-left px-4 py-[0.5] rounded-2xl transition-all block duration-300 mb-3 border-[1px] ${selectedParticipant === participant.id
                                                        ? 'bg-[#A22877] text-white border-[#A22877]'
                                                        : 'bg-white text-gray-700 border-black hover:border-[#A22877]'
                                                        }`}
                                                >
                                                    <span className='font-semibold text-lg'>{participant.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Participant Details */}
                                <div className='lg:col-span-3 md:pl-8 bg'>
                                    <div className='mb-6'>
                                        <h5 className='text-2xl lg:text-3xl monser-600 text-[#0C2165] mb-2'>
                                            {participantsData[selectedParticipant].name}
                                        </h5>
                                    </div>

                                    <div className='bg-[#A22877] text-white p-6 rounded-lg'>
                                        <p className='text-lg monser-400 leading-relaxed'>
                                            {participantsData[selectedParticipant].testimonial}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Audit Report Banner */}
            <div className='bg-[#A22877] relative overflow-hidden py-10 px-4 lg:px-8'>
                <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10'>
                    <div className='flex flex-col gap-6 text-white'>
                        <h3 className='text-4xl lg:text-6xl playfair-300 leading-tight'>
                            AIMS Environmental and
                            <br className='hidden md:block' />
                            Sustainability Audit Report
                        </h3>
                        <div>
                            <Button
                                variant='secondary'
                                onClick={() => window.open('/environment-sustainability-policy-report/AIMS+Environment+&+Sustainability+Audit+Report.pdf', '_blank')}
                            >
                                Click to View
                            </Button>
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <Image
                            src="/environment-sustainability-policy-report/arrow.svg"
                            alt="Abstract Arrow Design"
                            width={300}
                            height={300}
                            className='opacity-80'
                        />
                    </div>
                </div>
            </div>

            {/* GRI Report */}
            <div className=' relative overflow-hidden py-10 px-4 lg:px-8'>
                <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10'>
                    <div className='flex flex-col gap-4 '>
                        <h3 className='text-4xl lg:text-6xl playfair-300 text-[#A22877]'>
                            GRI Report
                        </h3>
                        <p>
                            AIMS Institutes is among the leading institutes in terms of social and environmental initiatives and environmental initiatives. This report for AIMS Institutes has been prepared in accordance with the Global Reporting Initiative (GRI) Standards: Core option.
                        </p>
                        <p>
                            In line with GRI requirements, this report presents the significant environmental and social impacts and our contributions to the field of education and society at large. The content of this report is shaped by the four reporting principles established by the GRI standards: stakeholder inclusiveness, sustainability context, materiality, and completeness
                        </p>
                        <p>
                            You can download and view our submitted information using this <a href='/environment-sustainability-policy-report/AIMS+Environment+&+Sustainability+Audit+Report.pdf' target='_blank' className='text-[#A22877] hover:underline'>link</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EsprStudentEngagementEvents
