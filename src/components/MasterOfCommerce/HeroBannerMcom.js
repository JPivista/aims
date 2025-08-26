import React from 'react'
import Image from 'next/image'
import ApplicationMarquee from '@/shared/ApplicationMarquee'


const HeroBannerMcom = ({ announcements, pageType = 'finance' }) => {
    return (
        <>
            <div className="relative w-full h-[100vh] md:h-[76vh] overflow-hidden">
                {/* Gradient Background */}
                <div
                    className="absolute inset-0 z-30"
                    style={{
                        background: 'linear-gradient(135deg, #E6BBD7 0%, #E6BBD7 39%, #531574 100%)',
                        opacity: 0.4
                    }}
                >

                </div>
                {/* EMPOWERING MINDS SINCE 1994 */}
                {/* <div className="absolute top-8 left-8 lg:left-12 z-10">
                 
                </div> */}

                {/* Main Content */}
                <div className="absolute inset-0 flex z-40">
                    <div className="container mx-auto px-4 lg:px-0">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                            {/* Left Content */}
                            <div className="space-y-6 flex flex-col justify-between h-full md:py-10 py-4">
                                <div>
                                    <h6 className=" text-gray-700 font-light tracking-wider text-[12px] md:text-start text-center">
                                        EMPOWERING MINDS
                                    </h6>
                                    <p className="text-2xl lg:text-3xl font-bold text-black monser-900 md:text-start text-center">
                                        SINCE 1994
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h1 className="text-4xl lg:text-6xl font-light text-[#002561] playfair-300 leading-tight md:text-start text-center">
                                        Master Finance.
                                        <br />
                                        Shape Your Future.
                                    </h1>
                                </div>

                                <div className="space-y-6 ">
                                    <h5 className="text-3xl font-bold text-[#0C2165] monser-600 md:text-start text-center">
                                        M.COM at AIMS
                                    </h5>
                                    <p className="text-lg lg:text-xl text-gray-700 max-w-lg md:text-start text-center">
                                        Sharpen your edge with an M.Com degree that combines academic rigour with practical exposure.
                                    </p>
                                </div>
                            </div>

                            {/* Right Content - Circular Image */}
                            <div className="flex justify-center lg:hidden">
                                <div className="relative">
                                    {/* Main circular image - Mobile */}
                                    <div className="w-96 h-96 rounded-full overflow-hidden z-30">
                                        <Image
                                            src="/mcom/mcom-hero-banner.webp"
                                            alt="M.Com Student"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop NAAC Accreditation Box - Absolute positioned */}
                <div className="hidden lg:block absolute bottom-0 left-0 z-40">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg">
                        <div className="flex items-center justify-center">
                            <Image
                                src="/mcom/naac.svg"
                                alt="NAAC Accreditation"
                                width={550}
                                height={200}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Desktop Circular Image - Absolute positioned */}
                <div className="hidden lg:block absolute right-0 bottom-0 z-30">
                    <div className="w-[700px] h-[550px] rounded-full overflow-hidden">
                        <Image
                            src="/mcom/mcom-hero-banner.webp"
                            alt="M.Com Student"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
            {/* NAAC Accreditation Box - Mobile */}
            <div className="lg:hidden bg-white/90 backdrop-blur-sm rounded-2xl max-w-md shadow-lg">
                <div className="flex items-center justify-center">
                    <Image
                        src="/mcom/naac.svg"
                        alt="NAAC Accreditation"
                        width={200}
                        height={100}
                        className="w-full h-full"
                    />
                </div>
            </div>
            {/* Application Announcements Marquee */}
            <ApplicationMarquee announcements={announcements} pageType={pageType} />
        </>
    )
}

export default HeroBannerMcom
