"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "../../shared/Button"

const SofPrograms = () => {
  const postgraduateProgram = {
    id: "",
    title: "Bachelor of Hotel Management (BHM)",
    description: `Our flagship 4-year BHM program prepares students for high\u2011growth careers in hotels, resorts, airlines, and event management. The curriculum helps students aim for leadership roles in the service industry.`,

    image: "/school-of-hospitality/sohospitality-img-01.webp",
    link: "/hospitality-tourism-school/bachelor-hotel-management",
  }

  const undergraduateProgram = {
    id: "",
    title: "Vocational Certificate Program QSR by Chai Point",
    description:
      "Offered in partnership with Chai Point, this short-term vocational certificate trains you in real-world QSR operations. Perfect for learners who want to enter the workforce quickly and grow from the ground up in India's F&B retail sector.",
    image: "/school-of-hospitality/sohospitality-img-02.webp",
    link: "https://www.aimsenrich.com/vocational-certificate-qsr-chaipoint",
  }

  return (
    <>
      <div className="lg:py-10 relative overflow-hidden bg-[#F4E2FA]">
        {/* Background SVG */}
        <div className="absolute top-[20%] left-0 md:block hidden">
          <Image
            src="/school-circle.svg"
            alt="School Circle Background"
            width={250}
            height={100}
            className="rotate-180"
          />
        </div>

        <div className="px-4 lg:px-8 relative z-30">
          <div className="lg:container mx-auto">
            {/* Postgraduate Program Section */}
            <section className="mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
                {/* Image */}
                <div className="order-1 relative md:h-[550px] lg:h-[400px] h-52 overflow-hidden rounded-2xl">
                  <Image
                    src={postgraduateProgram.image}
                    alt={postgraduateProgram.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="order-2 md:p-8 p-4">
                  <h4 className="text-2xl lg:text-[24px] font-bold text-[#0C2165] monser-600 text-left ">
                    {postgraduateProgram.title}
                  </h4>
                  <p
                    className="text-black text-left mb-6 leading-relaxed "
                    dangerouslySetInnerHTML={{
                      __html: postgraduateProgram.description,
                    }}
                  />
                  <Link
                    href={postgraduateProgram.link}
                    scroll={true}
                    className=""
                  >
                    <Button variant="primary" className="text-left">
                      Explore Now
                    </Button>
                  </Link>
                </div>
              </div>
            </section>

            {/* Undergraduate Programs Section */}
            <section className="mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
                {/* Content */}
                <div className="lg:order-1 order-2 md:p-8 p-4">
                  <h4 className="text-2xl lg:text-[24px] font-bold text-[#0C2165] monser-600 text-left">
                    {undergraduateProgram.title}
                  </h4>
                  <p
                    className="text-black text-left mb-6 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: undergraduateProgram.description,
                    }}
                  />
                  <Link
                    href={undergraduateProgram.link}
                    scroll={true} // 👈 also scrolls to top
                  >
                    <Button variant="primary" className="text-left">
                      Explore Now
                    </Button>
                  </Link>
                </div>

                {/* Image */}
                <div className="lg:order-2 order-1 relative md:h-[550px] lg:h-[400px] h-52">
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
      </div>
    </>
  )
}

export default SofPrograms
