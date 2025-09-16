"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"

const AdvantagesOfChoosingEbac = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <div className="lg:px-8 px-4 pb-10">
        <div className="bg-white container mx-auto">
          <h3 className="text-4xl font-bold text-[#531675]" style={{ marginBottom: "0px" }}>
            Advantages of Choosing <br /> EBAC:
          </h3>

          {/* flex-col-reverse by default, stays in tablet (md), switches to flex-row at large (lg) */}
          <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center">

            {/* Left Content */}
            <div className="w-full md:w-full lg:w-1/2 flex flex-col md:text-left">
              <p className="mb-4">
                You can opt for multiple courses after PU, like BCOM/BCA/BBA/
                BBA Aviation/BHM/Law/CA/CMA.
              </p>

              <p
                className="font-bold mb-4"
                style={{
                  fontWeight: "600",
                  fontSize: isMobile ? "20px" : "28px",
                }}
              >
                Can choose career opportunity in various sectors post degree.
              </p>

              <ul className="list-disc pl-6 text-left inline-block">
                <li>BFSI</li>
                <li>Computer application & IT</li>
                <li>Non-IT</li>
                <li>Become an Entrepreneur</li>
                <li>Chartered Accountant</li>
                <li>Consultancy firms</li>
                <li>Legal advisory firms</li>
              </ul>

              <p className="mt-4">
                For more details Call/WhatsApp{" "}
                <span className="text-[#A2396D] font-semibold">+91 9606921945</span> or{" "}
                <span className="text-[#A2396D] font-semibold">puc@theaims.ac.in</span>
              </p>

              <p className="mt-4">
                Our program is an excellent launchpad for those looking at PU as a
                stepping stone for CA coaching, business studies, or IT-enabled
                commerce.
              </p>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-full lg:w-1/2 flex justify-center items-center p-6">
              <Image
                src="/pre-university-college/pcmc_pcmb/ebac-student.webp"
                alt="EBAC Students"
                width={500}
                height={500}
              />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default AdvantagesOfChoosingEbac
