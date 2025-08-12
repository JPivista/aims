import Image from 'next/image'
import React from 'react'

const CfiGoals = () => {
    return (
        <>
            {/* OUR OBJECTIVES */}
            <div className='justify-center items-center mb-10 flex flex-col lg:px-0 px-4 relative overflow-hidden'>
                <div className='flex flex-col lg:px-0 px-4 bg-transparent relative z-10'>

                    {/* Our Goals */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

                        <div className='flex flex-col md:pl-8 pl-0 order-2 md:order-1 justify-center'>
                            <h3 className='text-start text-[32px] lg:text-[56px] playfair-300 text-[#A22877]'>
                                Goals
                            </h3>
                            <div>
                                <ul className='list-disc list-inside text-start monser-400 flex flex-col gap-4'>
                                    <li>
                                        Represent AIMS Institutes on global platforms that would help us achieve AIMS Institute’s vision of moulding professionals of global excellence
                                    </li>
                                    <li>
                                        Facilitate strategic collaborations with Global Universities/Institutions and Organisations of repute for activities like student/faculty exchange programs, joint research and conferences, and facilitating intake into various courses offered at AIMS Institutes, apart from providing career pathways for AIMERS
                                    </li>
                                    <li>
                                        Provide a support system and assistance to international students and professors visiting AIMS Institutes
                                    </li>
                                    <li>
                                        Plan and organise global immersion programs that add value for AIMERS and host delegations from foreign Universities and organisations
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 order-1 md:order-2'>
                            <Image
                                src="/centre-for-consulting/cfc-objectives.png"
                                alt="Our Goals and Objectives"
                                width={500}
                                height={500}
                                className='w-full h-full object-cover'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CfiGoals
