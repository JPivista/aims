
import React from 'react'
import Image from 'next/image'
import ApplicationMarquee from '../../shared/ApplicationMarquee'

const HeroBannerRc = ({ announcements, pageType = 'engineering' }) => {
    return (
        <>
            <div className="relative w-full h-[100vh] overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/rotaract-club/rotaract-club-banner.png"
                    alt="Rotaract Club"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                    priority
                />

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
                                    Rotaract Club
                                    <br className='hidden md:block' />
                                    of AIMS
                                </h1>
                            </div>
                            {/* <div className="flex items-center">
                                <Image
                                    src="/school-of-business/iacbe.png"
                                    alt="IACBE"
                                    width={400}
                                    height={100}
                                    className="object-contain"
                                />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Application Announcements Marquee */}
            <ApplicationMarquee announcements={announcements} pageType={pageType} />
        </>
    )
}

export default HeroBannerRc
