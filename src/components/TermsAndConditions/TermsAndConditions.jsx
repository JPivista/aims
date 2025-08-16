import React from "react"
import Image from "next/image"

const TermsAndConditions = () => {
  const contentSections = [
    {
      heading: "General Terms",
      paragraphs: [
        "By accessing and applying to AIMS Institutes, you confirm that you are in agreement with and bound by the terms of service contained in the Terms & Conditions outlined below. These terms apply to the entire website and any email or other type of communication between you and AIMS Institutes.",
        "Under no circumstances shall AIMS Institutes team be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if AIMS Institutes team or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof.",
        "AIMS Institutes will not be responsible for any outcome that may occur during the course of usage of our resources. We reserve the rights to change prices and revise the resource usage policy at any moment.",
      ],
    },
    {
      heading: "License",
      paragraphs: [
        "AIMS grants you a revocable, non-exclusive, non-transferable, limited license to download, install and use the website strictly in accordance with the terms of this Agreement.",
        'These Terms & Conditions are a contract between you and AIMS Institutes (referred to in these Terms & Conditions as "AIMS", "us", "we" or "our"), the provider of the AIMS Institutes website and the services accessible from AIMS website (which are collectively referred to in these Terms & Conditions as "AIMS Service").',
        'You are agreeing to be bound by these Terms & Conditions. If you do not agree to these Terms & Conditions, please do not use the AIMS Service. In these Terms & Conditions, "you" refers both to you as an individual and to the entity you represent. If you violate any of these Terms & Conditions, we reserve the right to cancel your account or block access to your account without notice.',
      ],
    },
  ]

  const renderSection = (section, sectionIndex) => {
    return (
      <div key={sectionIndex} className="space-y-4 sm:space-y-6">
        <h3 className="text-xl sm:text-2xl md:text-3xl text-[#0C2165] playfair-300">
          {section.heading}
        </h3>
        {section.paragraphs.map((paragraph, paragraphIndex) => (
          <p
            key={`${sectionIndex}-${paragraphIndex}`}
            className="text-base sm:text-lg text-gray-700 leading-relaxed monser-400"
          >
            {paragraph}
          </p>
        ))}
      </div>
    )
  }

  return (
    <>
      <div className="bg-[#E1F9F4] py-16">
        <h1 className="text-2xl lg:text-[65px] text-[#0C2165] playfair-300 text-center">
          Terms and Conditions
        </h1>
        <p className="text-base  md:text-xl monser-400 text-center">
          Updated in January 2023
        </p>
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
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-8 sm:space-y-10">
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

export default TermsAndConditions
