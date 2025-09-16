"use client"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const StudentClubs = () => {
  const clubs = [
    {
      text: "Build leadership and teamwork skills in practical settings",
      gradient: "bg-gradient-to-b from-[#531675] to-[#4F6BC2]",
    },
    {
      text: "Network with peers, faculty, and industry professionals",
      gradient: "bg-gradient-to-b from-[#4641AC] to-[#9B29DB]",
    },
    {
      text: "Explore entrepreneurship, sustainability, arts, and technology",
      gradient: "bg-gradient-to-b from-[#FF6C02] to-[#DF3A68]",
    },
    {
      text: "Participate in national and international competitions",
      gradient: "bg-gradient-to-b from-[#531675] to-[#4F6BC2]",
    },
    {
      text: "Showcase your talents and organise real-world events",
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
    slidesToShow: 2,
    slidesToScroll: 1,
  }

  return (
    <div className="px-4 lg:px-8">
      <div className="container mx-auto text-center">
        {/* Top Section */}
        <h3 className="text-[#0C2165] playfair-300 mb-3 md:mb-6 pt-8">
          Find Your Passion.
          <br /> AIM for Excellence.
        </h3>
        <p className="max-w-5xl mx-auto">
          At AIMS Institutes, learning isn&apos;t limited to the classroom.
          Our student clubs offer a structured yet vibrant space for
          students to explore their interests, take initiative, and develop
          skills that extend far beyond academics.
        </p>

        {/* Why Join a Club Section */}
        <div className="py-10">
          <h3 className="text-[#0C2165] playfair-300 mb-3 md:mb-6">
            Why Join a Student Club?
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
                <span className="px-6 line-clamp-7">{club.text}</span>
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
        </div>
      </div>
    </div>
  )
}

export default StudentClubs
