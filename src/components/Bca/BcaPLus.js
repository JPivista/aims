'use client'

import React from 'react'

const BcaPlus = () => {
    return (
        <>
            <div className="relative w-full lg:h-[60vh] h-[90vh] overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/bca/bca-plus-mobile.webp')] lg:bg-[url('/bca/bca-plus.webp')]">
                {/* Gradient Overlay - Figma Design */}
                {/* <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)'
                    }}
                ></div> */}

                {/* Top Content Container */}
                <div className="relative z-10 h-full flex flex-col md:items-start items-end md:justify-center justify-end md:pb-0 pb-10 px-4 lg:px-8">
                    <div className="container mx-auto py-4 ">
                        <div className="flex lg:flex-row md:gap-10 gap-4">
                            <div className="">
                                <h3 className="text-black text-2xl lg:text-[60px] playfair-300 lg:leading-16">
                                    BCA+
                                </h3>
                                <h5 className='text-black monser-600 mb-3 text-xl'>
                                    AI/ML | Data Science | <br className='md:block hidden' /> Full-stack Development
                                </h5>
                                <p className='text-black'>
                                    Hands-on training available in AI/ML, Data Science, and <br className='md:block hidden' />
                                    Full-stack Development for interested BCA students.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BcaPlus
