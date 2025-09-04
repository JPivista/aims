'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const EmpoweringWomen = () => {
    const [selectedParticipant, setSelectedParticipant] = useState('mahita')

    const participantsData = {
        mahita: {
            name: "Mahita Fernandez",
            affiliation: "Children's Activity & Play Centre",
            testimonial: "I have used the knowledge I gained there to create a business plan, not just for the sake of the competition, but also genuinely to provide me with a roadmap to grow and further my business, Gambolla. I have made a few alterations to my plan even after the culmination of our sessions, and have finally arrived at a document that I am satisfied with (for the time being). I am proud to say that I have already begun putting some of my plans into action, and hope to achieve the success that I have shown on paper, in reality."
        },
        meena: {
            name: "Meena Sivaraman",
            affiliation: "Daycare Centre for Corporate",
            testimonial: "I take back significant lessons from the course and the need to rework my business plan. Continue to build relationships and that has been my God given strength from childhood. I would be more than happy to be a case study for your students as to how it took me 19 years to reach 88lakh revenue from here after this course it will be an accelerated growth with strategy in place already fixed an appointment with a reputed management consultant. I feel blessed to have got this chance."
        },
        sandhya: {
            name: "Sandhya Yadav",
            affiliation: "Landscaping, Trading and Designing of Flowers (fresh)",
            testimonial: "The program covered many things which I was unaware of and also, I'm very confident that I can compete with the existing competition."
        },
        nitya: {
            name: "Nitya Kalyani",
            affiliation: "Publishing of Magazines for Insurance Professional",
            testimonial: "Being mentored was a fantastic opportunity. Faculty of AIMS went out of the way to make the program a success."
        },
        padmavathy: {
            name: "Padmavathy Mahesh",
            affiliation: "Coaching for MBA Exam",
            testimonial: "Really, I have learnt many skills like Leadership, Marketing, Communication, Finance and negotiation skills. I will implement all the techniques and other motivation techniques to move my business forward with success."
        },
        latha: {
            name: "Latha Srinivasan",
            affiliation: "Children's Library & Learning Centre",
            testimonial: "More than what I expected – mentoring by the seasoned entrepreneurs have been a significant value-add."
        },
        sadhana: {
            name: "Sadhana Kini",
            affiliation: "NGO for differently-abled Children",
            testimonial: "Always felt the need to do an MBA course and this course has covered all the subjects in a consolidated form."
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
            <div className='justify-center items-center mb-10 flex flex-col relative overflow-hidden'>
                <div className='px-4 lg:px-8'>
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
                        <div className='flex flex-col bg-transparent relative z-10'>
                            {/* Header Section */}
                            <div className='text-left'>
                                <h3 className='text-[32px] lg:text-[56px] playfair-300 text-[#0C2165] mb-4'>
                                    Empowering Women <br className='hidden md:block' />
                                    Entrepreneurs
                                </h3>
                                <h5 className='text-xl monser-600 text-black mb-4'>
                                    Goldman Sachs - ISB - AIMS 10,000 Women Entrepreneurs Programme
                                </h5>
                                <p className='text-lg lg:text-[20px] monser-400 text-black'>
                                    AEEC has proudly hosted 5 successful batches of this prestigious initiative, helping 150 women entrepreneurs graduate with hands-on business knowledge and mentorship. Recognised as one of the most impactful women entrepreneurship programs in Bangalore, it also features guest sessions by successful founders and insights into programs for women entrepreneurs in India, specifically tailored for growth-stage female-led businesses.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider Line */}
            <hr className='border-black mb-12 w-full' />

            <div className='justify-center items-center mb-10 flex flex-col relative overflow-hidden'>
                <div className='px-4 lg:px-8'>
                    <div className='container mx-auto'>
                        <div className='flex flex-col bg-transparent relative z-10'>
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
            </div>
        </>
    )
}

export default EmpoweringWomen
