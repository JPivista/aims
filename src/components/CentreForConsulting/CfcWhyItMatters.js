'use client'

import React from 'react'

const CfcWhyItMatters = () => {
    return (
        <>
            <div className="relative w-full lg:min-h-[60vh] min-h-[90vh] overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/centre-for-consulting/cfc-why-its-matter-n.png')] lg:bg-[url('/centre-for-consulting/cfc-why-its-matter-n.png')]">
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
                                Too often, there’s a disconnect between classroom learning and practical implementation. ACC was created to change that. Through structured business consulting services in academic institutions in Bangalore, the centre:
                            </p>
                            <div>
                                <ul className='list-disc list-inside text-start monser-400 flex flex-col gap-4 text-white'>
                                    <li className='flex items-start gap-3'>
                                        <span className='text-white'>•</span>
                                        Helps students develop practical skills through corporate projects
                                    </li>
                                    <li className='flex items-start gap-3'>
                                        <span className='text-white'>•</span>
                                        Exposes faculty to the operational and strategic realities of the industries they teach about
                                    </li>
                                    <li className='flex items-start gap-3'>
                                        <span className='text-white'>•</span>
                                        Ensures the application of book knowledge in real-time settings
                                    </li>
                                    <li className='flex items-start gap-3'>
                                        <span className='text-white'>•</span>
                                        Enhances the long-term industry readiness of AIMS students
                                    </li>
                                </ul>
                            </div>
                            <p className='text-white'>
                                Each partnership adds depth to our college-level fundraising for social causes in Bangalore and strengthens student volunteering and collaboration with NGOs in Bangalore.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CfcWhyItMatters
