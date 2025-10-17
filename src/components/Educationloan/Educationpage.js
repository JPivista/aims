"use client"
import React from "react"
import Image from "next/image"

const Educationpage = () => {
  return (
    <div className="w-full font-serif ">
      {/* Top Section */}
      <div className="px-4 lg:px-8">
        <div className="text-center  py-10 bg-white container mx-auto">
          <h3 className="text-[#010066] playfair-300 leading-tight">
            Education Loan Assistance <br /> at AIMS Institutes
          </h3>
          <p className="text-[#1A2A5B] text-sm md:text-base max-w-5xl mx-auto">
            At AIMS Institutes, we believe that financial constraints should
            never stand in the way of your academic goals. That&apos;s why we
            support our applicants and students with access to trusted education
            loan providers, so you can focus on learning, growing, and building
            a future you&apos;re proud of.
          </p>
        </div>
      </div>

      {/* Partnering Section */}
      <section className="bg-[#E0F7F4] px-4 lg:px-8 py-10">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 ">
          {/* Left Column - Text Content */}
          <div className="md:w-1/2">
            <h3 className="text-[#010066] playfair-300 leading-tight">
              Partnering with <br className="md:hidden" /> Trusted Institutions
            </h3>
            <p className="">
              To ease your education financing journey, AIMS Institutes has
              associated with select banking and non-banking organisations
              offering student-friendly loan schemes. 
            </p>
            
          </div>

          {/* Right Column - Logos */}
          <div className="md:w-1/2 flex flex-wrap gap-6 justify-start md:justify-center items-center md:min-h-full">
            <div className="bg-white rounded-lg shadow p-4 flex items-center justify-center w-40 h-24">
              <Image
                src="/educationloan/HDFC_converted.webp"
                alt="HDFC Credila"
                width={140}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="px-4 lg:px-8 py-10 bg-white relative overflow-hidden">
        <div className="container  mx-auto ">
          <h3 className="text-[#A22877] text-xl md:text-[72px] playfair-300 leading-tight">
            What You’ll Need
          </h3>
          <p className=" mb-4">
            While loan requirements vary by provider, students are generally
            expected to submit:
          </p>
          <ul className="list-disc pl-5  space-y-1">
            <li>Admission Offer Letter from AIMS Institutes</li>
            <li>KYC documents (Aadhaar, PAN, Passport photos)</li>
            <li>Guarantor details (if applicable)</li>
            <li>Fee structure and academic transcripts</li>
          </ul>
          <p className="mt-4  text-sm">
            We recommend preparing these in advance for a smoother process.
          </p>
        </div>
        <div className="absolute right-0 top-16 z-40 hidden md:block">
          <Image
            src="/MBA/semi-circle.svg"
            alt="Semicircle"
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
      </section>

      <section className="text-center py-10 bg-[#531574] px-4 lg:px-8">
        <h3 className="text-white playfair-300 leading-tight  container mx-auto">
          Important Note
        </h3>
        
          <p className=" container mx-auto text-white ">
            Disclaimer: AIMS Institutes does not influence loan approvals,
            rates, or repayment terms. Our role is to assist by connecting
            students with relevant financial institutions. Final approval is at
            the lender’s sole discretion.
          </p>
      
      </section>
    </div>
  )
}

export default Educationpage
