import React from 'react'
import Image from 'next/image'

const SupportCommunity = () => {
    return (
        <div className='w-full bg-[#E1F9F4] py-10 lg:px-0 px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {/* Left Column - Image */}
                <div className='flex flex-col gap-4'>
                    <Image
                        src="/rotaract-club/support-for-community.png"
                        alt="Community Support Event"
                        width={500}
                        height={500}
                        className='w-full h-full object-cover'
                    />
                </div>

                {/* Right Column - Content */}
                <div className='flex flex-col md:pl-8 pl-0 justify-center'>
                    <h3 className='text-start text-[32px] lg:text-[56px] playfair-300 text-[#0C2165]'>
                        Support for Community
                    </h3>
                    <div>
                        <p className='mt-4'>
                            The Rotaract Club is dedicated to supporting local and global communities through meaningful service projects, advocacy initiatives, and collaborative partnerships. We believe in addressing community issues with compassion, innovation, and sustainable solutions.
                        </p>
                        <p className='mt-4'>
                            Our commitment extends beyond traditional volunteerism to creating lasting impact through strategic community engagement, educational programs, and initiatives that empower individuals and strengthen the social fabric of our communities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportCommunity
