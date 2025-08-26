"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
const StructuredSupport = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint

        handleResize(); // run once on mount
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="bg-gradient-to-t from-[#F1DEFC] to-[#FFE0F4] px-4">
            <div className='container mx-auto py-10'>
                <h3 className='text-center text-[#0C2165] font-semibold'>Structured Support to Help You AIM Right</h3>
                <h6 className='text-center'>ACR is actively involved in various research projects with the industry and government bodies that provide a great platform for students and faculty to nurture their research skills, abilities, and knowledge. </h6>
                <div className='flex justify-center items-center py-10'>
                    {/* <Image
                        src="/centre-for-research/beyond_collaboration.png"
                        alt="Structured Support"
                        width={1000}
                        height={1000} /> */}
                    <Image
                        src={
                            isMobile
                                ? "/centre-for-research/beyond_collaboration_mob.svg"
                                : "/centre-for-research/beyond_collaboration.webp"
                        }
                        alt="Our Track Record"
                        width={1000}
                        height={1000}   // set the original image height
                        className="md:w-[1000px] w-full h-auto object-cover"
                        priority
                    />
                </div>
                <h6 className='text-center'>This makes AIMS a college with guidance to prepare research projects in Bangalore, enabling students and scholars to build the knowledge, tools, and clarity they need to hit their academic targets.</h6>
            </div>
        </div>
    )
}

export default StructuredSupport
