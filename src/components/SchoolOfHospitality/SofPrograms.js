"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "../../shared/Button"

const SofPrograms = () => {
  const postgraduateProgram = {
    id: "",
    title: "Bachelor of  Hotel Management (BHM)",
    description:
    "Our flagship 4-year BHM program prepares students for high-growth careers in hotels, resorts, airlines, and event management. The curriculum helps students aim for leadership roles in the service industry.",
    image: "/school-of-hospitality/sohospitality-img-01.webp",
    link: "/hospitality-tourism-school/bachelor-hotel-management",
  }

  const undergraduateProgram = {
    id: "",
    title: "Vocational Certificate Program QSR by Chai Point",
    description:
      "Offered in partnership with Chai Point, this short-term vocational certificate trains you in real-world QSR operations. Perfect for learners who want to enter the workforce quickly and grow from the ground up in India's F&B retail sector.",
    image: "/school-of-hospitality/sohospitality-img-02.webp",
    link: "/finance-commerce-school/bachelor-of-commerce",
  }

  return (
    <div className="py-10 relative overflow-hidden bg-[#F4E2FA]">
      {/* Background SVG */}
      <div className="absolute top-[20%] left-0 md:block hidden">
        <Image
          src="/school-circle.svg"
          alt="School Circle Background"
          width={250}
          height={100}
          className=" rotate-180"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Postgraduate Program Section */}

        <section className="mb-10">
          {/* <h3 className="text-[#0C2165]">Postgraduate Program</h3> */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center  ">
            <div className="order-1 relative md:h-[350px] h-52">
              <Image
                src={postgraduateProgram.image}
                alt={postgraduateProgram.title}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className=" order-2 md:p-8 p-4">
              <h4 className="text-2xl lg:text-[24px] font-bold text-[#0C2165] monser-600 text-left">
                {postgraduateProgram.title}
              </h4>
              <p
                className="text-gray-700 text-left mb-6 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: postgraduateProgram.description,
                }}
              />
              <Link href={postgraduateProgram.link}>
                <Button variant="primary" className="text-left">
                  Explore Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Undergraduate Programs Section */}
        <section className="mb-10">
          {/* <h3 className="text-[#0C2165]">Undergraduate Program</h3> */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center   ">
            <div className="lg:order-1 order-2 md:p-8 p-4">
              <h4 className="text-2xl lg:text-[24px] font-bold text-[#0165] monser-600 text-left">
                {undergraduateProgram.title}
              </h4>
              <p
                className="text-gray-700 text-left mb-6 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: undergraduateProgram.description,
                }}
              />
              <Link href={undergraduateProgram.link}>
                <Button variant="primary" className="text-left">
                  Explore Now
                </Button>
              </Link>
            </div>
            <div className="lg:order-2 order-1 relative md:h-[350px] h-52">
              <Image
                src={undergraduateProgram.image}
                alt={undergraduateProgram.title}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SofPrograms
