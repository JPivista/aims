'use client'

import React from 'react'

const StudentLeadSection = ({
    mobileImage,
    desktopImage,
    title,
    description,
    gradientOverlay = 'linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)',
    backgroundClassName
}) => {
    // Handle case when required props are missing
    if (!mobileImage || !desktopImage || !title) {
        return (
            <div className="relative w-full lg:h-[80vh] h-[90vh] overflow-hidden bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                    <h3 className="text-gray-600 text-2xl lg:text-3xl font-bold">
                        Student Lead Section
                    </h3>
                    <p className="text-gray-500 mt-2">Content not available</p>
                </div>
            </div>
        )
    }

    return (
        <>
            <div
                className={`relative w-full md:h-[80vh] h-[80vh] overflow-hidden bg-cover bg-center bg-no-repeat ${backgroundClassName}`}
            >
                {/* Gradient Overlay - Customizable */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: gradientOverlay
                    }}
                ></div>

                {/* Top Content Container */}
                <div className="relative z-10 h-full flex flex-col justify-end md:justify-center items-center md:items-start">
                    <div className="container mx-auto py-4 px-4 lg:px-0">
                        <div className="flex lg:flex-row md:gap-10 gap-4 lg:mb-0 mb-20">
                            <div className="text-center md:text-start lg:w-[37%] w-full">
                                <h3 className="text-white text-2xl lg:text-[60px] playfair-300 lg:leading-16">
                                    {title}
                                </h3>
                                {description && (
                                    <p className='text-white text-lg lg:text-xl mt-4 max-w-2xl'>
                                        {description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentLeadSection 