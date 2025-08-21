"use client"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const EventsFestspage = () => {
  const clubs = [
    {
      text: "Real-world exposure through competitions, exhibitions, and speaker series",
      gradient: "bg-gradient-to-b from-[#531675] to-[#4F6BC2]",
    },
    {
      text: "Cross-disciplinary collaboration across management, IT, hospitality, and life sciences",
      gradient: "bg-gradient-to-b from-[#4641AC] to-[#9B29DB]",
    },
    {
      text: "Platform to host and organise, not just participate ",
      gradient: "bg-gradient-to-b from-[#FF6C02] to-[#DF3A68]",
    },
    {
      text: "Opportunities to connect with alumni, industry leaders, and global guests",
      gradient: "bg-gradient-to-b from-[#531675] to-[#4F6BC2]",
    },
    {
      text: "Focus on social responsibility, sustainability, and inclusive engagement",
      gradient: "bg-gradient-to-b from-[#4641AC] to-[#9B29DB]",
    },
  ]

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true, // loop
    autoplay: true, // auto scroll
    autoplaySpeed: 3000, // speed
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <div className="text-center px-4 bg-white container mx-auto">
        <h3 className="text-[#0C2165] playfair-300 pt-8">
          Celebrate Growth, Showcase Talent.
        </h3>

        <p className="max-w-5xl mx-auto pt-5">
          At AIMS Institutes, events and fests are more than celebrations, they
          are opportunities to{" "}
          <span className="monser-500 font-bold text-black">
            learn, lead, and collaborate.
          </span>{" "}
          From business conclaves and cultural festivals to innovation expos and
          alumni meets, every gathering on campus is designed to sharpen skills,
          spark creativity, and build lasting connections.
        </p>

        <p className="max-w-5xl mx-auto pt-5">
          Whether you&apos;re studying at a top business school in Bangalore or
          pursuing a hospitality degree from one of Karnataka&apos;s most reputed
          institutes, there&apos;s a stage for every AIMer to shine.
        </p>
      </div>

      <div className="px-4 py-12 text-center">
        {/* Heading */}
        <h3 className="text-[#0C2165] playfair-300 mb-3 md:mb-6">
          What Makes Our Events Special?
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
        <p className="mt-8 max-w-4xl mx-auto leading-relaxed">
          Our calendar is packed with opportunities that mirror the professional
          world, blending rigour with celebration, competition with learning.
        </p>
      </div>
    </>
  )
}

export default EventsFestspage
