'use client'

import React from 'react'

const BcomStudentLead = () => {
    return (
        <>
            <div className="relative w-full lg:h-[80vh] h-[80vh] overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/bcom/companies-our-graduated-mobile.png')] lg:bg-[url('/bcom/companies-our-graduated.png')]">
                {/* Gradient Overlay - Figma Design */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)'
                    }}
                ></div>

                {/* Top Content Container */}
                <div className="relative z-10 h-full flex flex-col justify-end md:justify-center items-center md:items-start">
                    <div className="container mx-auto py-4 px-4 lg:px-0">
                        <div className="flex lg:flex-row md:gap-10 gap-4 lg:mb-0 mb-20">
                            <div className="text-center md:text-start">
                                <h3 className="text-white text-2xl lg:text-[60px] playfair-300 lg:leading-16">
                                    Companies
                                    <br className='md:block hidden' />
                                    Our Graduates
                                    <br className='md:block hidden' />
                                    Have Joined
                                </h3>
                                <p className='text-white'>
                                    Our alumni are placed across firms in banking,
                                    <br className='md:block hidden' />
                                    consultancy, audit, and retail.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BcomStudentLead
