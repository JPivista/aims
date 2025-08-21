import React from 'react'
import Image from 'next/image'
import ApplicationMarquee from '@/shared/ApplicationMarquee'


const HeroBannerBcom = ({ announcements, pageType = 'finance' }) => {
    return (
        <>
            <div className="relative w-full h-[100vh] md:h-[76vh] overflow-hidden">
                {/* Background Image */}
                {/* <div
                    className="absolute inset-0 z-10"
                    style={{
                        backgroundImage: 'url("/bcom/bcom-banner.png")',
                        backgroundSize: 'cover ',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                /> */}

                {/* Gradient Overlay */}
                <div
                    className="absolute inset-0 z-20"
                    style={{
                        background: 'linear-gradient(135deg, #E6BBD7 0%, #E6BBD7 39%, #531574 100%)',
                        opacity: 0.4
                    }}
                >
                </div>

                {/* Main Content */}
                <div className="absolute inset-0 flex z-30">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                            {/* Left Content */}
                            <div className="space-y-6 flex flex-col justify-between h-full md:py-10 py-4">
                                <div>
                                    <h6 className=" text-gray-700 font-light tracking-wider text-[12px] lg:text-start text-center">
                                        EMPOWERING MINDS
                                    </h6>
                                    <p className="text-2xl lg:text-3xl font-bold text-black monser-900 lg:text-start text-center">
                                        SINCE 1994
                                    </p>
                                </div>
                                <div className="space-y-4 lg:text-start text-center">
                                    <h1 className="text-4xl lg:text-6xl font-light text-[#002561] playfair-300 leading-tight">
                                        A Clear Focus.
                                        <br />
                                        A Strong Launch.
                                    </h1>
                                </div>

                                <div className="space-y-6 lg:text-start text-center">
                                    <h5 className="text-3xl font-bold text-[#0C2165] monser-600">
                                        B.COM at AIMS
                                    </h5>
                                    <p className="text-lg lg:text-xl text-gray-700 max-w-lg ">
                                        Sharpen your fundamentals in finance, accounting and business law, while gaining hands-on experience and certifications that make your profile stand out.
                                    </p>
                                </div>

                                <div className="text-start lg:block hidden">
                                    <Image
                                        src="/naac-logo.svg"
                                        alt="NAAC Accreditation"
                                        width={200}
                                        height={200}
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Right Content - Circular Image */}
                            <div className="flex justify-center lg:hidden">
                                <div className="relative">
                                    {/* Main circular image - Mobile */}
                                    <div className="w-96 h-96 rounded-full overflow-hidden z-30">
                                        <Image
                                            src="/bcom/bcom-banner.png"
                                            alt="B.Com Student"
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

                {/* Desktop Circular Image - Absolute positioned */}
                <div className="hidden lg:block absolute right-0 bottom-0 z-30">
                    <div className="w-[700px] h-[550px] rounded-full overflow-hidden">
                        <Image
                            src="/bcom/bcom-banner.png"
                            alt="B.Com Student"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>


            <div className="flex justify-center items-center bg-[#ECECEC] lg:hidden p-4">
                <Image
                    src="/naac-logo.svg"
                    alt="NAAC Accreditation"
                    width={200}
                    height={200}
                    className="object-contain"
                />
            </div>

            {/* Application Announcements Marquee */}
            <ApplicationMarquee announcements={announcements} pageType={pageType} />
        </>
    )
}

export default HeroBannerBcom
