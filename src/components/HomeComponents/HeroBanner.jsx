import Image from "next/image";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/home/hero-banner-001.png"
        alt="AIMS Student"
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
        priority
      />

      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-purple-600/40 to-purple-800/50"></div> */}

      {/* Purple Arrow Shape */}
      {/* <div className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-600 to-purple-800 transform rotate-45 origin-bottom-right opacity-90 shadow-2xl"></div>
      </div> */}

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="flex items-center space-x-4">
              <div className="space-y-2">
                <p className="text-white text-lg lg:text-xl font-medium">
                  EMPOWERING MINDS
                </p>
                <p className="text-white text-3xl lg:text-5xl font-bold">
                  SINCE 1994
                </p>
              </div>
            </div>

            {/* Right Side - Main Content */}
            <div className="space-y-8">
              {/* Main Headlines */}
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Choose Your Goal.
                </h2>
                <h3 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  AIM for The Future.
                </h3>
                <p className="text-white text-lg lg:text-xl max-w-2xl leading-relaxed">
                  At AIMS, you choose the career you want, and we help you aim
                  for it with the right course, support, and direction.
                </p>
              </div>

              {/* Statistics Boxes */}
              <div className="flex space-x-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-center min-w-[140px]">
                  <div className="text-3xl lg:text-4xl font-bold text-purple-600">
                    ₹8 LPA
                  </div>
                  <div className="text-sm lg:text-base text-gray-700 font-medium">
                    Average Package
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-center min-w-[140px]">
                  <div className="text-3xl lg:text-4xl font-bold text-purple-600">
                    ₹27 LPA
                  </div>
                  <div className="text-sm lg:text-base text-gray-700 font-medium">
                    Highest Package
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accreditation Bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-start">
            <div className="flex items-center">
              <Image
                src="/home/banner-logos.png"
                alt="IACBE"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
