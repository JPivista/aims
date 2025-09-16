"use client"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Sportspage = () => {
  const clubs = [
    {
      text: "Builds discipline, confidence, and teamwork",
      gradient: "bg-gradient-to-b from-[#531675] to-[#4F6BC2]",
    },
    {
      text: "Supports student well-being and stress management",
      gradient: "bg-gradient-to-b from-[#4641AC] to-[#9B29DB]",
    },
    {
      text: "Encourages competitive spirit and leadership",
      gradient: "bg-gradient-to-b from-[#FF6C02] to-[#DF3A68]",
    },
    {
      text: "Enhances the holistic development we promise all AIMers",
      gradient: "bg-gradient-to-b from-[#531675] to-[#4F6BC2]",
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
          AIM Higher, Play Stronger.
        </h3>

        <p className="max-w-4xl mx-auto pt-5">
          At AIMS Institutes, we believe the lessons learned on the field
          are just as valuable as those in the classroom. That&apos;s why we
          provide a well-rounded environment where sports, fitness, and
          recreation are integral to student life.
        </p>

        <p className="max-w-4xl mx-auto pt-5">
          Whether you&apos;re pursuing your MBA from an internationally
          accredited institute or training to become a hospitality
          professional, we ensure that every AIMer has the space to
          recharge, compete, and grow stronger – mentally and physically.
        </p>

        {/* Sports Polygons */}
        <div className="py-10">
          <h3 className="text-[#0C2165] playfair-300 mb-3 md:mb-6">
            Why Sports Matter at AIMS
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

          {/* Footer text */}
          <p className="mt-8 max-w-4xl mx-auto leading-relaxed">
            Sports at AIMS are not an add-on. They are part of our
            goal-oriented approach to education, where performance,
            perseverance, and participation go hand in hand.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sportspage
