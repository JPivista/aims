import React from 'react'
import Image from 'next/image'
import ApplicationMarquee from '@/shared/ApplicationMarquee'

const PhdBanner = ({ announcements, pageType = 'phd' }) => {
  return (
    <>
      <div className="relative w-full h-[100vh] md:h-[83vh] bg-[url('/business_school/phd/phd_banner.png')] bg-no-repeat bg-cover bg-center">

        {/* Content container */}
        <div className="container mx-auto h-full grid grid-cols-1 lg:grid-cols-2 items-center relative z-10 px-4 sm:px-6 lg:px-12">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-between h-full pt-16 sm:pt-20 lg:pt-0">

            {/* Headline */}
            <div className='lg:pt-30 mt-8 sm:mt-12 lg:mt-0'>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
                Focused Research.<br /> Real-World Impact.
              </h1>
            </div>

            {/* Program description */}
            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h5 className="text-xl sm:text-2xl lg:text-4xl text-white font-semibold">
                PhD <br />  Doctoral Program
              </h5>
              <p className="text-sm sm:text-base lg:text-xl text-white max-w-lg mt-2 pb-6 sm:pb-8 lg:pb-10">
                A doctoral journey designed for scholars who aim to go beyond the expected, through structured research, academic rigour, and a future-ready mindset.
              </p>

              {/* Accreditation Logos */}
              <div className="max-w-xs sm:max-w-sm lg:max-w-md">
                <Image
                  src="/business_school/phd/phd_logo.png"
                  alt="Accreditations"
                  width={400}
                  height={100}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Top-right text */}
        <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 text-right z-20">
          <p className="tracking-wider text-xs sm:text-sm lg:text-base" style={{ color: "#FFFFFF" }}>EMPOWERING MINDS</p>
          <p className="text-lg sm:text-xl lg:text-2xl text-start font-black" style={{ color: "#FFFFFF" }}>SINCE 1994</p>
        </div>
      </div>
      {/* Application Announcements Marquee */}
      <ApplicationMarquee announcements={announcements} pageType={pageType} />
    </>
  )
}

export default PhdBanner
