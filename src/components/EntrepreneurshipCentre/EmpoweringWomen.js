'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const EmpoweringWomen = () => {
    const [selectedParticipant, setSelectedParticipant] = useState('mahita')

    const participantsData = {
        mahita: {
            name: "Mahita Fernandez",
            affiliation: "Children's Activity & Play Centre",
            testimonial: "I have used the knowledge I gained there to create a business plan not just for the sake of the competition but also genuinely to provide me with a roadmap to grow and further my business Gambolla I have made a few alterations to my plan even after the culmination of our sessions and have finally arrived at a document that I am satisfied with (for the time being) I am proud to say that I have already begun putting some of my plans into action and hope to achieve the success that I have shown on paper in reality"
        },
        meena: {
            name: "Meena Sivaraman",
            affiliation: "Sustainable Fashion Brand",
            testimonial: "The program provided me with invaluable insights into business strategy and market analysis. I've been able to scale my sustainable fashion brand from a local startup to a recognized name in the industry."
        },
        sandhya: {
            name: "Sandhya Yadav",
            affiliation: "Digital Marketing Agency",
            testimonial: "Through the mentorship and networking opportunities, I've expanded my digital marketing agency to serve clients across multiple cities. The program's focus on women entrepreneurship gave me the confidence to dream bigger."
        },
        nitya: {
            name: "Nitya Kalyani",
            affiliation: "Health & Wellness Center",
            testimonial: "The business knowledge and mentorship I received helped me establish a successful health and wellness center. The program's emphasis on practical implementation made all the difference."
        },
        padmavathy: {
            name: "Padmavathy Mahesh",
            affiliation: "Educational Technology Startup",
            testimonial: "As a tech entrepreneur, the program helped me understand both the business and social impact aspects of my venture. I've been able to secure funding and expand to multiple schools."
        },
        latha: {
            name: "Latha Srinivasan",
            affiliation: "Organic Food Distribution",
            testimonial: "The program's focus on sustainable business models aligned perfectly with my vision. I've created a network of organic farmers and established a successful distribution business."
        },
        sadhana: {
            name: "Sadhana Kini",
            affiliation: "Creative Design Studio",
            testimonial: "The mentorship helped me transform my creative passion into a profitable business. I've expanded from freelance work to a full-service design studio with multiple employees."
        }
    }

    const participants = [
        { id: 'mahita', name: 'Mahita Fernandez' },
        { id: 'meena', name: 'Meena Sivaraman' },
        { id: 'sandhya', name: 'Sandhya Yadav' },
        { id: 'nitya', name: 'Nitya Kalyani' },
        { id: 'padmavathy', name: 'Padmavathy Mahesh' },
        { id: 'latha', name: 'Latha Srinivasan' },
        { id: 'sadhana', name: 'Sadhana Kini' }
    ]

    return (
        <>
            <div className='justify-center items-center mb-10 flex flex-col lg:px-0 px-4 relative overflow-hidden'>
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
                                Empowering Women
                                <br className='hidden md:block' />
                                Entrepreneurs
                            </h3>
                            <h5 className='text-xl monser-600 text-black mb-4'>
                                Goldman Sachs - ISB - AIMS 10,000 Women Entrepreneurs Programme
                            </h5>
                            <p className='text-lg lg:text-[20px] monser-400 text-black'>
                                AEEC has proudly hosted 5 successful batches of this prestigious initiative, helping 150 women entrepreneurs graduate with hands-on business knowledge and mentorship. Recognised as one of the most impactful women entrepreneurship programs in Bangalore, It also features guest sessions by successful founders and insights into programs for women entrepreneurs in India, specifically tailored for growth-stage female-led businesses.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider Line */}
            <hr className='border-black mb-12 w-full' />

            <div className='justify-center items-center mb-10 flex flex-col lg:px-0 px-4 relative overflow-hidden'>
                <div className='container mx-auto'>
                    <div className='flex flex-col lg:px-0 px-4 bg-transparent relative z-10'>
                        {/* Participant Voices Section */}
                        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8'>
                            {/* Left Column - Participant Names */}
                            <div className='lg:col-span-2 md:border-r-2 border-black'>
                                <h5 className='text-2xl lg:text-3xl monser-600 text-[#A22877] mb-6'>
                                    Participant Voices
                                </h5>

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
                                                className={`text-left px-4 py-[0.5] rounded-lg transition-all block duration-300 mb-3 border-[1px] ${selectedParticipant === participant.id
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
                            <div className='lg:col-span-3 border-l-2 border-white md:pl-8 bg'>
                                <div className='mb-6'>
                                    <h5 className='text-2xl lg:text-3xl monser-600 text-[#0C2165] mb-2'>
                                        {participantsData[selectedParticipant].name}
                                    </h5>
                                    <p className='text-lg lg:text-xl monser-600 text-[#0C2165]'>
                                        {participantsData[selectedParticipant].affiliation}
                                    </p>
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
        </>

    )
}

export default EmpoweringWomen
