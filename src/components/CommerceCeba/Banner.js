import React from 'react'
import Image from 'next/image'
import ApplicationMarquee from '@/shared/ApplicationMarquee'

const ScienceIntegratedPcmbPcmcCetNeetJeeBanner = ({ announcements, pageType = 'phd' }) => {
    return (
        <>
            <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <div className="w-full h-full bg-cover bg-top bg-no-repeat md:bg-[url('/pre-university-college/pcmc_pcmb/aims_ebac_banner.webp')] bg-[url('/pre-university-college/pcmc_pcmb/aims_ebac_banner_mob.webp')]" />
                </div>

                {/* Gradient Overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)'
                    }}
                ></div>



                {/* Text/Logo Content */}
                <div className="absolute inset-0 flex flex-col justify-between z-10">
                    {/* Logo Block */}
                    <div className="container mx-auto px-4 pt-8 text-left">
                        <Image
                            src="/pre-university-college/empowering_minds_since1994_black.png" // 👉 replace with your logo path
                            alt="Pre-University College Logo"
                            width={180} // adjust size
                            height={80}
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Bottom Heading */}
                    <div className="container mx-auto px-4 pb-12 text-left">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl text-white font-bold">
                        AIMS <br />CEBA
                        </h1>
                    </div>
                </div>
            </div>

            {/* Application Announcements Marquee */}
            <ApplicationMarquee announcements={announcements} pageType={pageType} />
        </>
    )
}

export default ScienceIntegratedPcmbPcmcCetNeetJeeBanner