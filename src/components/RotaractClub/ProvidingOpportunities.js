import React from 'react'
import Image from 'next/image'

const ProvidingOpportunities = () => {
    return (
        <div className='w-full py-10 lg:px-0 px-4'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-8'>
                {/* Left Column - Image */}
                <div className='flex flex-col gap-4 col-span-1'>
                    <Image
                        src="/rotaract-club/providing-oppertunities.png"
                        alt="Providing Opportunities"
                        width={500}
                        height={500}
                        className='w-full h-full object-cover'
                    />
                </div>

                {/* Right Column - Content */}
                <div className='flex flex-col gap-6'>
                    <h2 className='text-4xl lg:text-5xl playfair-300 text-[#0C2165] leading-tight'>
                        Providing Opportunities
                    </h2>

                    <div className='text-gray-800 leading-relaxed space-y-4'>
                        <p className='text-lg'>
                            The Rotaract Club offers comprehensive personal and professional growth opportunities through our leadership programs, mentorship initiatives, and networking events. We are committed to equipping our members with the essential skills and resources they need to succeed and make a positive impact in their communities.
                        </p>
                        <p className='text-lg'>
                            Our focus is on investing in young leaders by providing them with platforms to develop their potential, gain practical experience, and build meaningful connections that will serve them throughout their careers and personal development journey.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProvidingOpportunities
