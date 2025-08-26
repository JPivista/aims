import React from 'react'
import Image from 'next/image'
import ApplicationMarquee from '@/shared/ApplicationMarquee'

const PhdBanner = ({ announcements, pageType = 'phd' }) => {
  return (
    <>
      <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
        {/* Background Image (people included in bg) */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-cover bg-top bg-no-repeat md:bg-[url('/business_school/phd/phd_banner.webp')] bg-[url('/business_school/phd/phd_mobile_banner.webp')]" />
        </div>

        {/* Content wrapper */}
        <div className="relative z-10 container mx-auto h-full flex flex-col md:justify-between justify-center px-4 md:px-8 lg:px-12 pb-30 md:pb-0">

          {/* Headline */}
          <div className="pt-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight max-w-2xl md:text-left text-center">
              Focused Research.<br /> Real-World Impact.
            </h1>
          </div>
          {/* Program description (with responsive accreditation logos) */}
          <div className="max-w-xl text-white md:text-left text-center">
            <h5 className="text-xl sm:text-2xl lg:text-3xl font-semibold" style={{ fontWeight: "600" }}>
              PhD <span className="hidden md:inline"><br /></span> Doctoral Program
            </h5>
            <p className="mt-3 text-sm sm:text-base lg:text-lg max-w-md mx-auto md:mx-0">
              A doctoral journey designed for scholars who aim to go beyond the expected,
              through structured research, academic rigour, and a future-ready mindset.
            </p>

            {/* Accreditation Logos (responsive across screens) */}
            <div className="hidden md:block mt-6 mx-auto md:mx-0 w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md">
              <Image
                src="/business_school/phd/phd_logo.png"
                alt="Accreditations"
                width={400}
                height={100}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>

        {/* Mobile-only Logo at Bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] sm:w-[250px] md:hidden">
          <Image
            src="/business_school/phd/phd_logo.png"
            alt="Accreditations"
            width={400}
            height={100}
            className="w-full h-auto"
          />
        </div>

        {/* Top-right Logo */}
        <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 z-20">
          <Image
            src="/pre-university-college/empowering_minds_since1994.png"
            alt="Empowering Minds Since 1994"
            width={160}
            height={60}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Application Announcements Marquee */}
      <ApplicationMarquee announcements={announcements} pageType={pageType} />
    </>
  )
}

export default PhdBanner
