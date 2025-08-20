import React from 'react'
import Image from 'next/image'
import ApplicationMarquee from '../../shared/ApplicationMarquee'

const HeroBannerCfi = ({ announcements, pageType = 'centreForInternationalLiaison' }) => {
    return (
        <>
            <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
                {/* Background Image */}
                <div className="hidden md:block w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/centre-for-international-liaison/centre-for-international-liaison-herobanner.png')]" />

                {/* Background Image - Mobile */}
                <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/centre-for-international-liaison/centre-for-international-liaison-herobanner-mobile.png')]" />

                {/* Gradient Overlay - Figma Design */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)'
                    }}
                ></div>

                {/* Bottom Content Container */}
                <div className="absolute md:bottom-10 bottom-0 left-0 right-0 px-4 lg:px-0">
                    <div className="container mx-auto">
                        <div className="flex lg:flex-row flex-col items-center justify-between md:gap-4 gap-0">
                            <div className="flex items-center">
                                <h1 className="text-white text-2xl lg:text-[60px] playfair-300 lg:leading-16 md:text-start text-center">
                                    AIMS Centre for International
                                    <br className='hidden lg:block' />
                                    Liaison (ACIL)
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Application Announcements Marquee */}
            <ApplicationMarquee announcements={announcements} pageType={pageType} />
        </>
    )
}

export default HeroBannerCfi
