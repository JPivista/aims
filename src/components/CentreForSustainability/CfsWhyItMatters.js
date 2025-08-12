'use client'

import React from 'react'

const CfsWhyItMatters = () => {
    return (
        <>
            <div className="relative w-full lg:h-[60vh] h-[90vh] overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/centre-for-sustainability/cfr-why-it-matters-bg.png')] lg:bg-[url('/centre-for-sustainability/cfr-why-it-matters-bg.png')] mb-10">
                {/* Gradient Overlay - Figma Design */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)'
                    }}
                >
                </div>

                {/* Top Content Container */}
                <div className="relative z-10 h-full flex flex-col items-start justify-center lg">
                    <div className="container mx-auto py-4 px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-4">
                        <div className='col-span-1'>

                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-white playfair-300 leading-0">
                                Why It Matters
                            </h3>
                            <p className='text-white'>
                                At its core, ACS represents a commitment: to help every student AIM for a sustainable future. In an era of climate urgency and social transition, we guide learners to identify environmental challenges, work across disciplines, and co-create research-based sustainability solutions for urban development.
                            </p>
                            <p className='text-white'>
                                Whether it&apos;s through green campus initiatives in Bangalore, or research collaboration for sustainable development in Bangalore, our efforts are focused on one goal: building a better tomorrow by empowering students today.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CfsWhyItMatters
