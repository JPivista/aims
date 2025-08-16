'use client'
import React from 'react'
import NewsTabs from '../shared/NewsTabs'

const Newsletter = () => {
    return (
        <div className='justify-center items-center mb-10 flex flex-col lg:px-0 px-4 relative overflow-hidden'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:px-0 px-4 bg-transparent relative z-10'>
                    {/* Header Section */}
                    <div className='text-center mb-12'>
                        <h3 className='text-[32px] lg:text-[56px] playfair-300 text-[#0C2165] mb-4'>
                            The AIMS Newsletter
                        </h3>
                        <h5 className='text-xl monser-600 text-black mb-8'>
                            Resources
                        </h5>
                    </div>

                    {/* Tab Navigation */}
                    <NewsTabs />

                    {/* Content Area */}
                    <div className='mt-12 text-center'>
                        <p className='text-lg monser-400 text-gray-600'>
                            Stay updated with our latest newsletter editions and institutional updates.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
