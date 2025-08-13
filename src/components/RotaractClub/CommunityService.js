import React from 'react'
import Image from 'next/image'

const CommunityService = () => {
    return (
        <div className='w-full bg-[#F8F9FA] py-16'>
            <div className='container mx-auto px-4 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    {/* Left Column - Image */}
                    <div className='flex justify-center lg:justify-start'>
                        <div className='relative'>
                            <div className='relative'>
                                <Image
                                    src="/rotaract-club/community-service-image.png"
                                    alt="Community Service Activities"
                                    width={500}
                                    height={400}
                                    className="w-full h-auto max-w-lg"
                                />
                                <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#F8F9FA] opacity-20'></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-4xl lg:text-5xl playfair-300 text-[#0C2165] leading-tight'>
                            Community Service
                        </h2>

                        <div className='text-gray-800 leading-relaxed space-y-4'>
                            <p className='text-lg'>
                                Our community service initiatives focus on addressing local needs through sustainable projects, environmental conservation efforts, and social welfare programs. We believe in creating lasting positive impact in our communities.
                            </p>
                            <p className='text-lg'>
                                From organizing blood donation camps to conducting awareness campaigns and supporting underprivileged communities, our members actively contribute to building a better society through dedicated service and compassion.
                            </p>
                        </div>

                        <div className='mt-6'>
                            <a
                                href="#"
                                className='inline-flex items-center text-[#A22877] hover:text-[#8B1F6A] font-semibold text-lg transition-colors duration-300 group'
                            >
                                Explore Projects
                                <svg
                                    className='ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunityService
