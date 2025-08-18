"use client"
import React from "react"
import Image from "next/image"

const AdvantagesOfChoosingEbac = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white container mx-auto py-10 px-4">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
        <h3 className="text-4xl font-bold text-[#531675] mb-6">
          Advantages of Choosing EBAC:
        </h3>
        <p className="mb-4">
          You can opt for multiple courses after PU, like BCOM/BCA/BBA/
          BBA Aviation/BHM/Law/CA/CMA.
        </p>
        <p className="font-bold mb-4" style={{ fontWeight: "600",fontSize: "28px" }}>
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
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <Image
          src="/pre-university-college/pcmc_pcmb/ebac-students.png"
          alt="EBAC Students"
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}

export default AdvantagesOfChoosingEbac
