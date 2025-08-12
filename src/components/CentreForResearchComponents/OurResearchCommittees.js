import React from 'react'
import Image from 'next/image'

const OurResearchCommittees = () => {
    return (
        <>
        <div className="flex flex-col md:flex-row items-center md:items-start w-full container mx-auto my-10 px-4 shadow-[0_8px_6px_-6px_rgba(0,0,0,0.1)]">
            {/* Left Side - 60% */}
            <div className="w-full md:w-[70%] justify-center items-center my-auto">
                <h3 className="text-3xl md:text-5xl text-[#1D3B6C]">
                    Our Research <br /> Committees
                </h3>
                <h6 className="text-lg md:text-xl text-black mt-4" style={{ fontWeight: "500" }}>
                    Helping You Focus and Grow
                </h6>
            </div>

            {/* Right Side - 40% */}
            <div className="w-full md:w-[30%] relative">
                <div className="overflow-hidden">
                    <Image
                        src="/centre-for-research/our_research.png" // change to your image path
                        alt="Research Committees"
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>

        
        </>
    )
}

export default OurResearchCommittees
