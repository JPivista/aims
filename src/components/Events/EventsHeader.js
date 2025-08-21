'use client'
import React from 'react'
import NewsTabs from '../shared/NewsTabs'

const EventsHeader = () => {
    return (
        <>

            <div className='justify-center items-center flex flex-col lg:px-0 px-4 relative overflow-hidden bg-[#E1F9F4]'>
                <div className='container mx-auto py-6 lg:py-10 px-4 lg:px-0'>
                    <div className='flex flex-col bg-transparent relative z-10'>
                        {/* Header Section */}
                        <div className='text-center flex flex-col gap-3 lg:gap-4 justify-center items-center mb-6 lg:mb-8'>
                            <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-[56px] playfair-300 text-[#0C2165] leading-tight'>
                                Events That Shape Futures
                            </h3>
                            <h5 className='text-lg sm:text-xl monser-600 text-black'>
                                Resources
                            </h5>
                        </div>

                        {/* Tab Navigation */}
                        <NewsTabs />
                    </div>
                </div>
            </div>
            <div className='justify-center items-center flex flex-col lg:px-0 px-4 relative overflow-hidden'>
                <div className='container mx-auto py-10 border-b border-gray-200'>
                    <div className='md:w-[75%] mx-auto text-center flex flex-col gap-4 justify-center items-center'>
                        <h5 className='text-center text-3xl monser-600 text-[#0C2165]'>
                            Explore Events That Shape Tomorrow&apos;s Leaders
                        </h5>
                        <p>
                            Join a dynamic journey of learning and growth through workshops, seminars, and cultural events designed to sharpen skills and broaden horizons within our vibrant campus community.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventsHeader