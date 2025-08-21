import React from "react"
import Image from "next/image"

const PrivacyPolicy = () => {
  const contentSections = [
    {
      heading: "Personal Information Collection",
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
      heading: "Using Personal Information",
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
    {
      heading: "Disclosing Personal Information",
      subHeading: "AIMS Institutes may disclose your personal information:",
      points: [
        "Where AIMS Institutes discloses your personal information to its agents or sub-contractors for these purposes, the agent or sub-contractor in question will be obligated to use that personal information in accordance with the terms of this privacy statement.",
        "In addition to the disclosures reasonably necessary for the purposes identified elsewhere, AIMS Institutes may disclose your personal information to the extent that it is required to do so by law, in connection with any legal proceedings or prospective legal proceedings, and in order to establish, exercise or defend its legal rights.",
      ],
    },
    {
      heading: "Securing Your Data",
      subHeading: "AIMS Institutes data security measures:",
      points: [
        "AIMS Institutes will take reasonable technical and organisational precautions to prevent the loss, misuse or alteration of your personal information.",
        "AIMS Institutes will store all the personal information you provide on its secure servers.",
        "Information relating to electronic transactions entered into via this website will be protected by encryption technology.",
        "When you voluntarily send us electronic mail, we will keep a record of this information so that we can respond to you. We only collect information from you when you register on our site or fill out a form. Also, when filling out a form on our site, you may be asked to enter your name, e-mail address or phone number.",
        "You may, however, visit our site anonymously. In case you have submitted your personal information and contact details, we reserve the right to call, SMS, Email or WhatsApp you about our products and offers, even if your number has DND activated on it.",
      ],
    },
    {
      heading: "Cross-border Data Transfers",
      subHeading: "International data handling:",
      points: [
        "Information that AIMS Institutes collects may be stored and processed in and transferred between any of the countries in which AIMS Institutes operates to enable the use of the information in accordance with this privacy policy.",
        "In addition, personal information that you submit for publication on the website will be published on the internet and may be available around the world.",
        "You agree to such cross-border transfers of personal information.",
      ],
    },
    {
      heading: "Updating This Statement",
      subHeading: "Policy updates and notifications:",
      points: [
        "AIMS Institutes may update this privacy policy by posting a new version on this website. You should check this page occasionally to ensure you are familiar with any changes.",
      ],
    },
    {
      heading: "Other Websites",
      subHeading: "External website links:",
      points: [
        "This website contains links to other websites. AIMS Institutes is not responsible for the privacy policies or practices of any third party.",
      ],
    },
    {
      heading: "Contact AIMS Institutes",
      subHeading: "Privacy policy inquiries:",
      points: [
        "If you have any questions about this privacy policy or AIMS Institutes' treatment of your personal information, please write to webmaster@theaims.ac.in",
      ],
    },
    {
      heading: "This Privacy Statement",
      subHeading: "Statement basis:",
      points: [
        "This privacy statement is based on a precedent created by employmentlawcontracts.co.uk and published by freenetlaw.com.",
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
              dangerouslySetInnerHTML={{
                __html: point
                  .replace(
                    /https:\/\/[^\s]+/g,
                    '<a href="$&" target="_blank" rel="noopener noreferrer" class="text-[#A22877] hover:text-[#A10000] underline">$&</a>'
                  )
                  .replace(
                    /www\.theaims\.ac\.in/g,
                    '<a href="https://www.theaims.ac.in" target="_blank" rel="noopener noreferrer" class="text-[#A22877] hover:text-[#A10000] underline">www.theaims.ac.in</a>'
                  )
                  .replace(
                    /freenetlaw\.com/g,
                    '<a href="https://freenetlaw.com" target="_blank" rel="noopener noreferrer" class="text-[#A22877] hover:text-[#A10000] underline">freenetlaw.com</a>'
                  )
                  .replace(
                    /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
                    '<a href="mailto:$&" class="text-[#A22877] hover:text-[#A10000] underline">$&</a>'
                  )
                  .replace(
                    /\+91[-\s]?\(?[0-9]+\)?[-\s]?[0-9]+[-\s]?[0-9]+/g,
                    '<a href="tel:$&" class="text-[#A22877] hover:text-[#A10000] underline">$&</a>'
                  ),
              }}
            />
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
            {/* <div className="fixed md:top-[20%] right-0 md:block hidden rotate-180 z-10">
              <Image
                src="/student-handbook/semi-circle.svg"
                alt="School Circle Background"
                width={120}
                height={120}
                className="rotate-180"
              />
            </div> */}

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
