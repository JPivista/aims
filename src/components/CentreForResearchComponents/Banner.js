import React from 'react'
import Image from 'next/image'
import ApplicationMarquee from '@/shared/ApplicationMarquee'

const CentreForResearchBanner = ({ announcements, pageType = 'phd' }) => {
    return (
        <>
            <div className="relative w-full h-[100vh] md:h-[83vh] bg-[url('/centre-for-research/centre-for-research-banner.png')] bg-no-repeat bg-cover bg-center">
                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 lg:p-16">
                    {/* Top text */}
                    <div>
                        <h6 className="tracking-wider text-xs sm:text-sm lg:text-base text-white">EMPOWERING MINDS</h6>
                        <h5 className="text-lg sm:text-xl lg:text-2xl font-black text-white " style={{ fontWeight: "900" }}>SINCE 1994</h5>
                    </div>
                    {/* Bottom text */}
                    <div>
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl text-white ">
                            AIMS <br className='hidden lg:block' /> Centre for Research
                        </h1>
                    </div>
                </div>
            </div>
            {/* Application Announcements Marquee */}
            <ApplicationMarquee announcements={announcements} pageType={pageType} />
        </>
    )
}

export default CentreForResearchBanner
