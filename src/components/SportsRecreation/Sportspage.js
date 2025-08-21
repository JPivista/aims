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
      text: "Encourages competitive spirit and leadership ",
      gradient: "bg-gradient-to-b from-[#FF6C02] to-[#DF3A68]",
    },
    {
      text: "Enhances the holistic development we promise all AIMers",
      gradient: "bg-gradient-to-b from-[#531675] to-[#4F6BC2]",
    },
  ]

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true, // 👈 loop enabled
    autoplay: true, // 👈 optional (auto slide)
    autoplaySpeed: 3000, // 👈 optional speed
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <div className="text-center px-4 bg-white container mx-auto">
        <h3 className="text-[#0C2165] playfair-300 mb-3 md:mb-6 pt-8">
          AIM Higher, Play Stronger.
        </h3>

        <p className="max-w-4xl mx-auto pt-5">
          At AIMS Institutes, we believe the lessons learned on the field are
          just as valuable as those in the classroom. That&apos;s why we provide
          a well-rounded environment where sports, fitness, and recreation are
          integral to student life.
        </p>
        <p className="max-w-4xl mx-auto pt-5">
          Whether you&apos;re pursuing your MBA from an internationally accredited
          institute or training to become a hospitality professional, we ensure
          that every AIMer has the space to recharge, compete, and grow stronger
          – mentally and physically.
        </p>
      </div>

      <div className="px-4 py-12 text-center">
        {/* Heading */}
        <h3 className="text-[#0C2165] playfair-300 mb-3 md:mb-6">
          Why Sports Matter at AIMS
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
          Sports at AIMS are not an add-on. They are part of our goal-oriented
          approach to education, where performance, perseverance, and
          participation go hand in hand.
        </p>
      </div>
    </>
  )
}

export default Sportspage
