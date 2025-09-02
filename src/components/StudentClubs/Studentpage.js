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

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <div className="text-center px-4 bg-white container mx-auto">
        <h3 className="text-[#0C2165] playfair-300 mb-3 md:mb-6 pt-8">
          Find Your Passion.
          <br /> AIM for Excellence.
        </h3>
        <p className="max-w-5xl mx-auto">
          At AIMS Institutes, learning isn&apos;t limited to the classroom. Our
          student clubs offer a structured yet vibrant space for students to
          explore their interests, take initiative, and develop skills that
          extend far beyond academics. Whether you&apos;re pursuing an MBA from
          our IACBE-accredited institute in Bangalore or studying BBA in
          aviation logistics, student-led activities help sharpen your
          leadership, collaboration, and creativity in real time.
        </p>
        <p className="max-w-5xl mx-auto pt-5">
          These clubs reflect our belief in goal-oriented growth, a core part of
          what makes AIMS a dynamic student community in business education.
        </p>
      </div>

      <div className="px-4 py-10 text-center">
        <h3 className="text-[#0C2165] playfair-300 mb-3 md:mb-6">
          Why Join a Student Club?
        </h3>

        <div className="hidden md:flex flex-row justify-center items-center container mx-auto">
          {clubs.map((club, index) => (
            <div
              key={index}
              className={`relative md:px-6 sm:px-6 text-white text-sm sm:text-base font-medium ${
                club.gradient
              } flex items-center justify-center text-center w-full container mx-auto h-[220px] overflow-hidden ${
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

        <p className="mt-8 max-w-4xl mx-auto leading-relaxed">
          From business and debate to theatre and social outreach, each club is
          led by students with faculty mentorship, encouraging independent
          thinking, accountability, and purpose-driven engagement.
        </p>
      </div>
    </>
  )
}

export default StudentClubs
