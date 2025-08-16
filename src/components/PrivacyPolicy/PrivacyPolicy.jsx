import React from "react"
import Image from "next/image"

const PrivacyPolicy = () => {
  const contentSections = [
    {
      heading: "Personal information collection",
      subHeading:
        "AIMS Institutes may collect and use the following kinds of personal information:",
      points: [
        "Information about your use of this website (including the choices that you make, your subscriptions, etc.)",
        "Information that you provide for the purpose of registering with the website (including email address, number, city/place)",
        "Information about transactions carried out over this website",
        "Information that you provide for the purpose of subscribing to the website services, if any",
        "Any other information that you send to AIMS Institutes",
      ],
    },
    {
      heading: "Using personal information",
      subHeading: "AIMS Institutes may use personal information to:",
      points: [
        "Administer this website",
        "Personalise the website for you",
        "Enable your access to and use of the website services",
        "Publish information about you on the website",
        "Send to you the services/products that you purchase",
        "Supply you with services that you purchase",
        "Send you statements and invoices",
        "Collect payments from you",
        "Send you marketing communications, including our associates and collaborating institutions & organisations",
      ],
    },
  ]

  const renderSection = (section, sectionIndex) => {
    return (
      <div key={sectionIndex} className="space-y-4 sm:space-y-6">
        <h2 className="text-2xl md:text-[35px] text-[#0C2165] monser-500">
          {section.heading}
        </h2>
        <p className="text-[18px] monser-600 font-semibold">
          {section.subHeading}
        </p>
        <ul className="list-disc space-y-2 sm:space-y-3">
          {section.points.map((point, pointIndex) => (
            <li
              key={`${sectionIndex}-${pointIndex}`}
              className="text-[18px] monser-400 ml-6"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <>
      <div className="bg-[#E1F9F4] py-16">
        <h1 className="text-2xl lg:text-[65px] text-[#0C2165] playfair-300 text-center">
          Privacy Policy
        </h1>
        <p className="text-base  md:text-[20px] monser-400 text-center max-w-5xl mx-auto px-4 md:px-0">
          Your privacy is important to AIMS Institutes. This privacy statement
          provides information about the personal information that AIMS
          Institutes collects and how AIMS Institutes uses that personal
          information.
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
            <div className="space-y-6 sm:space-y-8 px-4 md:px-0">
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

export default PrivacyPolicy
