// import React from 'react'
// import Image from 'next/image'
// import ApplicationMarquee from '@/shared/ApplicationMarquee'

// const ScienceIntegratedPcmbPcmcCetNeetJeeBanner = ({ announcements, pageType = 'phd' }) => {
//     return (
//         <>
//             <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
//                 {/* Background Image */}
//                 <div className="absolute inset-0">
//                     <div className="w-full h-full bg-cover bg-top bg-no-repeat md:bg-[url('/pre-university-college/pcmc_pcmb/aims_ebac_banner.webp')] bg-[url('/pre-university-college/pcmc_pcmb/aims_ebac_banner_mob.webp')]" />
//                 </div>

//                 {/* Gradient Overlay */}
//                 <div
//                     className="absolute inset-0"
//                     style={{
//                         background:
//                             'linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)'
//                     }}
//                 ></div>

//                 {/* Text/Logo Content */}
//                 <div className="absolute inset-0 flex flex-col justify-between z-10">
//                     {/* Logo Block */}
//                     <div className="container mx-auto px-4 pt-8 text-left">
//                         <Image
//                             src="/pre-university-college/empowering_minds_since1994_black.webp" // 👉 replace with your logo path
//                             alt="Pre-University College Logo"
//                             width={200}
//                             height={200}
//                             className="object-contain"
//                             priority
//                         />
//                     </div>

//                     {/* Bottom Heading */}
//                     <h1 className="text-white font-bold text-center md:text-center lg:text-left pb-12 px-8">
//                         AIMS<br className="hidden lg:block" /> CEBA
//                     </h1>
//                 </div>
//             </div>

//             {/* Application Announcements Marquee */}
//             <ApplicationMarquee announcements={announcements} pageType={pageType} />
//         </>
//     )
// }

// export default ScienceIntegratedPcmbPcmcCetNeetJeeBanner


import React from "react"
import Image from "next/image"
import ApplicationMarquee from "../../shared/ApplicationMarquee"

const CommerceCeba = ({ announcements, pageType = 'phd' }) => {
    return (
        <>
            <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
                {/* Background Image - Desktop */}
                <div className="hidden md:block w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/pre-university-college/pcmc_pcmb/aims_ebac_banner.webp')]" />

                {/* Background Image - Mobile */}
                <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/pre-university-college/pcmc_pcmb/aims_ebac_banner_mob.webp')]" />

                {/* Gradient Overlay - Figma Design */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
                    }}
                ></div>

                {/* Bottom Content Container */}
                <div className="absolute bottom-10 left-0 right-0">
                    <div className="px-4 lg:px-8">
                        <div className="container mx-auto">
                            <div className="flex lg:flex-row flex-col items-center justify-between md:gap-4 gap-4">
                                <div className="flex items-center">
                                    <h1 className="text-white text-2xl lg:text-[60px] playfair-300 lg:leading-16 lg:text-start text-center">
                                        AIMS<br className="hidden lg:block" /> CEBA
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-5 left-0 right-0 ">
                    <div className="px-4 lg:px-8">
                        <div className="container mx-auto">
                            <div className="flex lg:flex-row flex-col items-start justify-between md:gap-10 gap-4">
                                <div className="flex items-center">
                                    <Image
                                        src="/iacbe/since-black.svg"
                                        alt="Recruiters"
                                        width={200}
                                        height={200}
                                    />
                                </div>
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

export default CommerceCeba
