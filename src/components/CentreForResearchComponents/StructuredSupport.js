import React from 'react'
import Image from 'next/image'
const StructuredSupport = () => {
    return (
        <div className="bg-gradient-to-t from-[#F1DEFC] to-[#FFE0F4] px-4">
            <div className='container mx-auto py-10'>
                <h3 className='text-center text-[#0C2165] font-semibold'>Structured Support to Help You AIM Right</h3>
                <h6 className='text-center'>ACR is actively involved in various research projects with the industry and government bodies that provide a great platform for students and faculty to nurture their research skills, abilities, and knowledge. </h6>
                <div className='flex justify-center items-center py-10'>
                    <Image src="/centre-for-research/beyond_collaboration.png" alt="Structured Support" width={1000} height={1000} />
                </div>
                <h6 className='text-center'>This makes AIMS a college with guidance to prepare research projects in Bangalore, enabling students and scholars to build the knowledge, tools, and clarity they need to hit their academic targets.</h6>
            </div>
        </div>
    )
}

export default StructuredSupport
