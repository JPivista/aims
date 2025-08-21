"use client"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Campusfacpage = () => {
  const clubs = [
    {
      text: "Designed for focus, flexibility, and student well-being",
      gradient: "bg-gradient-to-b from-[#531675] to-[#4F6BC2]",
    },
    {
      text: "Equipped with smart classrooms, ICT-enabled tools, and high-speed connectivity",
      gradient: "bg-gradient-to-b from-[#4641AC] to-[#9B29DB]",
    },
    {
      text: "Located near major industry hubs, ideal for real-world learning and placements ",
      gradient: "bg-gradient-to-b from-[#FF6C02] to-[#DF3A68]",
    },
    {
      text: "Supported by dedicated Centres for Research, Sustainability, Consulting, and Entrepreneurship",
      gradient: "bg-gradient-to-b from-[#531675] to-[#4F6BC2]",
    },
    {
      text: "Fully enabled for interdisciplinary collaboration across our Schools of Management, IT, Hospitality, and Commerce",
      gradient: "bg-gradient-to-b from-[#4641AC] to-[#9B29DB]",
    },
  ]

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,       // loop
    autoplay: true,       // auto scroll
    autoplaySpeed: 3000,  // speed
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <div className="text-center px-4 bg-white container mx-auto justify-center items-center">
        <h3 className="text-[#0C2165] playfair-300 pt-8">
          A Reliable Start with
          <br /> Everything You Need
        </h3>

        <p className="max-w-5xl mx-auto pt-5">
          At AIMS Institutes, we believe that infrastructure should do more than
          impress, it should empower. Our purpose-built campus in Peenya,
          Bengaluru offers every student a reliable, accessible, and
          future-ready environment. Whether you&apos;re pursuing a top MBA with
          international accreditation, studying hospitality and tourism, or
          preparing for a career in data science or entrepreneurship, our campus
          gives you the resources to AIM higher.
        </p>
      </div>

      <div className="px-4 py-12 text-center">
        {/* Heading */}
        <h3 className="text-[#0C2165] playfair-300 mb-3 md:mb-6">
          What Makes Our Campus Stand Out?
        </h3>

        {/* Tablet + Desktop view (≥768px) */}
        <div className="hidden md:flex flex-row justify-center items-center container mx-auto">
          {clubs.map((club, index) => (
            <div
              key={index}
              className={`relative md:px-6 sm:px-6 text-white text-sm sm:text-base font-medium ${
                club.gradient
              } flex items-center justify-center text-center w-full container mx-auto h-[180px] overflow-hidden ${
                index !== 0 ? "-ml-9" : ""
              }`}
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 45px) 0, 100% 50%, calc(100% - 45px) 100%, 0 100%, 50px 50%)",
              }}
            >
              <span className="px-6 md:line-clamp-7 ">{club.text}</span>
            </div>
          ))}
        </div>

        {/* Mobile only (<768px) */}
        <div className="block md:hidden">
          <Slider {...sliderSettings}>
            {clubs.map((club, index) => (
              <div key={index}>
                <div
                  className={`relative text-white text-sm font-medium ${club.gradient} flex items-center justify-center text-center w-full h-[180px] overflow-hidden`}
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 45px) 0, 100% 50%, calc(100% - 45px) 100%, 0 100%, 50px 50%)",
                  }}
                >
                  <span className="px-20">{club.text}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Footer text */}
        <p className="mt-8 container mx-auto leading-relaxed">
          At AIMS, student development isn&apos;t a buzzword, it’s a built-in
          feature of the environment we&apos;ve created.
        </p>
      </div>
    </>
  )
}

export default Campusfacpage
