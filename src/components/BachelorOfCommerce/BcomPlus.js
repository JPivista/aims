'use client'

import React from 'react'

const BcomPlus = () => {
    return (
        <>
            <div className="relative w-full lg:h-[50vh] h-auto overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/bcom/bcom-plus.webp')] lg:bg-[url('/bcom/bcom-plus.webp')]">
                {/* Gradient Overlay - Figma Design */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)'
                    }}
                ></div>

                {/* Top Content Container */}
                <div className="relative z-10 h-full flex flex-col items-start justify-center">
                    <div className="container mx-auto py-4 px-6 lg:px-8">
                        <div className="flex lg:flex-row md:gap-10 gap-4">
                            <div className="">
                                <h3 className="text-white text-2xl lg:text-[60px] playfair-300 ">
                                    B.COM+
                                </h3>

                                <h5 className='text-white text-2xl monser-600 mb-6'>
                                    CA/ACCA Training
                                </h5>

                                <p className='text-white text-sm'>
                                    Training in CA or ACCA is available for students aiming
                                    <br className='md:block hidden' />
                                    to complement their B.Com with global accounting
                                    <br className='md:block hidden' />
                                    qualifications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default BcomPlus
