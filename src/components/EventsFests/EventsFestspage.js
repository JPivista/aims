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
      text: "Platform to host and organise, not just participate",
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

  const mobileSlider = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const tabletSlider = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 2, // 2 polygons in one row for iPad
    slidesToScroll: 1,
  }

  return (
    <div className="px-4 lg:px-8">
      <div className="container mx-auto text-center">
        {/* Intro Section */}
        <h3 className="text-[#0C2165] playfair-300 mb-3 md:mb-6 pt-8">
          Celebrate Growth, Showcase Talent.
        </h3>

        <p className="max-w-5xl mx-auto pt-5">
          At AIMS Institutes, events and fests are more than celebrations,
          they are opportunities to{" "}
          <span className="monser-500 font-bold text-black">
            learn, lead, and collaborate.
          </span>{" "}
          From business conclaves and cultural festivals to innovation expos
          and alumni meets, every gathering on campus is designed to sharpen
          skills, spark creativity, and build lasting connections.
        </p>

        <p className="max-w-5xl mx-auto pt-5">
          Whether you&apos;re studying at a top business school in Bangalore
          or pursuing a hospitality degree from one of Karnataka&apos;s most
          reputed institutes, there&apos;s a stage for every AIMer to shine.
        </p>
      </div>

      {/* Special Events Section */}
      <div className="py-12 text-center container mx-auto">
        <h3 className="text-[#0C2165] playfair-300 mb-3 md:mb-6">
          What Makes Our Events Special?
        </h3>

        {/* Desktop view - all polygons in one row */}
        <div className="hidden lg:flex flex-row justify-center items-center">
          {clubs.map((club, index) => (
            <div
              key={index}
              className={`relative px-10 text-white text-sm sm:text-base font-medium ${club.gradient} flex items-center justify-center text-center w-full h-[200px] overflow-hidden ${
                index !== 0 ? "-ml-9" : ""
              }`}
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 45px) 0, 100% 50%, calc(100% - 45px) 100%, 0 100%, 50px 50%)",
              }}
            >
              <span className="px-4 line-clamp-8">{club.text}</span>
            </div>
          ))}
        </div>

        {/* Tablet / iPad view (2 per slide) */}
        <div className="hidden md:block lg:hidden">
          <Slider {...tabletSlider}>
            {clubs.map((club, index) => (
              <div key={index}>
                <div
                  className={`relative px-10 text-white text-sm font-medium ${club.gradient} flex items-center justify-center text-center h-[200px] overflow-hidden`}
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 45px) 0, 100% 50%, calc(100% - 45px) 100%, 0 100%, 50px 50%)",
                  }}
                >
                  <span className="px-6 line-clamp-7">{club.text}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Mobile view (1 per slide) */}
        <div className="block md:hidden">
          <Slider {...mobileSlider}>
            {clubs.map((club, index) => (
              <div key={index}>
                <div
                  className={`relative px-10 text-white text-sm font-medium ${club.gradient} flex items-center justify-center text-center h-[200px] overflow-hidden`}
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 45px) 0, 100% 50%, calc(100% - 45px) 100%, 0 100%, 50px 50%)",
                  }}
                >
                  <span className="px-6 line-clamp-7">{club.text}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Footer text */}
        <p className="mt-8 max-w-4xl mx-auto leading-relaxed">
          Our calendar is packed with opportunities that mirror the
          professional world, blending rigour with celebration, competition
          with learning.
        </p>
      </div>
    </div>
  )
}

export default EventsFestspage
