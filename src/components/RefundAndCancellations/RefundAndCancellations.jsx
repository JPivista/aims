import React from "react"
import Image from "next/image"

const RefundAndCancellations = () => {
  const contentSections = [
    {
      heading: "Payments",
      points: [
        "Online payments using Credit (or) Debit Cards (or) Net Banking can be made through our partner payment gateway provider, which you will automatically be redirected to",
        "Before using this Service, it is recommended that the user gather required information about the charges or fees payable against the Credit or Debit card used from the Credit Card or the Debit Card service provider",
        "The credit card information supplied at the time of using the service is processed by the payment gateway of the service provider, and AIMS does not have access to the information. It is the sole responsibility of the User of the service to ensure that the information entered in the relevant fields is correct. It is recommended that you take and retain a copy of the transaction for record-keeping purposes, which might assist in the resolution of any disputes that may arise out of the usage of the service",
      ],
    },
  ]

  const renderSection = (section, sectionIndex) => {
    return (
      <div key={sectionIndex} className="space-y-4 sm:space-y-6">
        <h2 className="text-2xl md:text-[20px] monser-500">
          {section.heading}
        </h2>
        <ol className="list-decimal space-y-2 sm:space-y-3">
          {section.points.map((point, pointIndex) => (
            <li
              key={`${sectionIndex}-${pointIndex}`}
              className="text-[18px] monser-400 ml-6"
            >
              {point}
            </li>
          ))}
        </ol>
      </div>
    )
  }

  return (
    <>
      <div className="bg-[#E1F9F4] py-16">
        <h1 className="text-2xl lg:text-[65px] text-[#0C2165] playfair-300 text-center">
          Refund & Cancellations
        </h1>
      </div>

      {/* Content Section */}
      <div className="py-8 sm:py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto relative">
            {/* Semi-circle SVG on the right side */}
            <div className="absolute md:bottom-[6%] -right-70 md:block hidden rotate-180">
              <Image
                src="/student-handbook/semi-circle.svg"
                alt="School Circle Background"
                width={120}
                height={120}
                className="rotate-180"
              />
            </div>

            {/* Content */}
            <div className="space-y-6 sm:space-y-8 px-4 md:px-0">
              <div className="space-y-8 sm:space-y-10">
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-2xl md:text-[35px] text-[#0C2165] monser-500">
                    Terms & Conditions
                  </h2>
                  <p className="text-base md:text-[20px] monser-400  max-w-4xl mx-auto px-4 md:px-0">
                    The terms and conditions mentioned here apply to the User
                    who uses the Online Services provided for any payment made
                    to AIMS Institutes (AIMS). Please read these terms and
                    conditions carefully. By authorising a payment to AIMS
                    through the online payment service ("the service"), it would
                    be treated as a deemed acceptance to these terms and
                    conditions. AIMS reserves all the rights to amend these
                    terms and conditions at any time without prior intimation.
                    It is the responsibility of the User to have read the terms
                    and conditions before using the Service.
                  </p>
                </div>
                {contentSections.map((section, index) =>
                  renderSection(section, index)
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RefundAndCancellations
