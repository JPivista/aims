// import Image from "next/image";
// import React from "react";

// const HeroBanner = () => {
//   return (
//     // <div className="relative w-full h-[100vh] overflow-hidden">
//     //   <Image
//     //     src="/home/home-banner.png"
//     //     alt="AIMS Student"
//     //     width={1920}
//     //     height={1080}
//     //     className="w-full h-full object-cover"
//     //     priority
//     //   />

//     //   <div className="absolute inset-0 flex items-center justify-center">
//     //     <div className="container mx-auto px-6 lg:px-8">
//     //       <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
//     //         <div className="flex items-center space-x-4">
//     //           <div className="space-y-2">
//     //             <p className="text-white text-lg lg:text-xl font-medium">
//     //               EMPOWERING MINDS
//     //             </p>
//     //             <p className="text-white text-3xl lg:text-5xl font-bold">
//     //               SINCE 1994
//     //             </p>
//     //           </div>
//     //         </div>

//     //         <div className="space-y-8">
//     //           <div className="space-y-4">
//     //             <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
//     //               Choose Your Goal.
//     //             </h2>
//     //             <h3 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
//     //               AIM for The Future.
//     //             </h3>
//     //             <p className="text-white text-lg lg:text-xl max-w-2xl leading-relaxed">
//     //               At AIMS, you choose the career you want, and we help you aim
//     //               for it with the right course, support, and direction.
//     //             </p>
//     //           </div>

//     //           <div className="flex space-x-6">
//     //             <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-center min-w-[140px]">
//     //               <div className="text-3xl lg:text-4xl font-bold text-purple-600">
//     //                 ₹8 LPA
//     //               </div>
//     //               <div className="text-sm lg:text-base text-gray-700 font-medium">
//     //                 Average Package
//     //               </div>
//     //             </div>
//     //             <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-center min-w-[140px]">
//     //               <div className="text-3xl lg:text-4xl font-bold text-purple-600">
//     //                 ₹27 LPA
//     //               </div>
//     //               <div className="text-sm lg:text-base text-gray-700 font-medium">
//     //                 Highest Package
//     //               </div>
//     //             </div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>

//     //   <div className="absolute bottom-0 left-0 right-0">
//     //     <div className="container mx-auto py-4">
//     //       <div className="flex items-center justify-start">
//     //         <div className="flex items-center">
//     //           <Image
//     //             src="/home/banner-logos.png"
//     //             alt="IACBE"
//     //             width={400}
//     //             height={400}
//     //           />
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//     <div className="h-[100vh] w-full">
//       <Image
//         src="/home/banner-001.png"  
//         alt="Hero Banner"
//         width={1200}
//         height={1000}
//         className="w-full h-full object-cover"
//       />
//     </div>
//   );
// };

// export default HeroBanner;





import React from "react"
import ApplicationMarquee from "../../shared/ApplicationMarquee"
import Image from "next/image"

const HeroBannerSoB = ({ announcements, pageType = "engineering" }) => {
  return (
    <>
      <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
        {/* Background Image - Desktop */}
        <div className="hidden md:block w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/home/banner-01.webp')]" />

        {/* Background Image - Mobile */}
        <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/home/mobile-banner-002.webp')]" />

        {/* Gradient Overlay - Figma Design */}
        {/* <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
          }}
        ></div> */}
             <div className="absolute lg:top-10 top-0 lg:right-0 -right-5">
          <div className="container mx-auto py-4 px-6 lg:px-8">
            <div className="flex lg:flex-row flex-col items-start justify-between md:gap-10 gap-4">
              <div className="flex items-center">
                <Image
                  src="/white-empower.svg"
                  alt="Recruiters"
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Content Container */}
        <div className="absolute bottom-10 left-0 right-0 px-4 lg:px-0">
          <div className="container mx-auto">
            <div className="flex lg:flex-row flex-col items-center justify-between md:gap-4 gap-4">
              <div className="flex items-center">
              {/* <h1 className="text-white text-center lg:text-left md:text-left xl:text-left text-2xl lg:text-[60px] playfair-300 lg:leading-16">
                  Safeguarding Integrity.
                  <br className="hidden md:block" />
                  Empowering Voices.
                </h1> */}
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

export default HeroBannerSoB