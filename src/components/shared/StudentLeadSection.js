'use client'

import React from 'react'

const StudentLeadSection = ({
    mobileImage,
    desktopImage,
    title,
    description,
    gradientOverlay = 'linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)'
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
                className="relative w-full lg:h-[80vh] h-[90vh] overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${mobileImage})`,
                    '@media (min-width: 1024px)': {
                        backgroundImage: `url(${desktopImage})`
                    }
                }}
            >
                {/* Gradient Overlay - Customizable */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: gradientOverlay
                    }}
                ></div>

                {/* Top Content Container */}
                <div className="relative z-10 h-full flex flex-col items-start justify-center">
                    <div className="container mx-auto py-4 px-6 lg:px-8">
                        <div className=" lg:flex-row md:gap-10 gap-4 grid grid-cols-1 md:grid-cols-5">
                            <div className="col-span-2">
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