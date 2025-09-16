import React from "react"
import Image from "next/image"
import Breadcrumbs from "../shared/Breadcrumbs"
const RefundAndCancellations = () => {
  const contentSections = [
    {
      heading: "Payments",
      points: [
        "Online payments using Credit (or) Debit Cards (or) Net Banking can be made through our partner payment gateway provider, which you will automatically be redirected to",
        "Before using this Service, it is recommended that the user gather required information about the charges or fees payable against the Credit or Debit card used from the Credit Card or the Debit Card service provider",
        "The credit card information supplied at the time of using the service is processed by the payment gateway of the service provider, and AIMS does not have access to the information. It is the sole responsibility of the User of the service to ensure that the information entered in the relevant fields is correct. It is recommended that you take and retain a copy of the transaction for record-keeping purposes, which might assist in the resolution of any disputes that may arise out of the usage of the service",
        "The Applicant agrees, understands and confirms that his/ her personal data, including without limitation details relating to debit card/ credit card/net banking transmitted over the Internet may be susceptible to misuse, hacking, theft and/ or fraud and that AIMS or the Payment Service Provider(s) have no control over such matters.",
        "The service is provided using a payment gateway service provider through a secure website. However, neither the payment gateway service provider nor AIMS gives any assurance that the information so provided online by a user is secure or may be read or intercepted by a third party. AIMS does not accept or assume any liability in the event of such unauthorised interception, hacking or other unauthorised access to information provided by a user of the service.",
        "AIMS and/or the Payment Service Providers shall not be liable for any inaccuracy, error or delay in, or omission of (a) any data, information or message, or (b) the transmission or delivery of any such data, information or message; or (c) any loss or damage arising from or occasioned by any such inaccuracy, error, delay or omission, non-performance or interruption in any such data, information or message. Under no circumstances shall the AIMS and/or the Payment Service Providers, its employees, directors, and its third party agents involved in processing, delivering or managing the Services, be liable for any direct, indirect, incidental, special or consequential damages, or any damages whatsoever, including punitive or exemplary arising out of or in any way connected with the provision of or any inadequacy or deficiency in the provision of the Services or resulting from unauthorised access or alteration of transmissions of data or arising from suspension or termination of the Service.",
        "The Applicant agrees that AIMS or any of its employees will not be held liable by the Applicant for any loss or damages arising from your use of, or reliance upon the the Services provided, including payment mechanisms, transaction data, or related communications.",
        "Information contained on the Website, or any failure to comply with these Terms and Conditions, where such failure is due to circumstance beyond AIMS's reasonable control.",
        "In case you face any problems with the payment process, please call us on +91(0)80 28390433 or email us at webmaster@theaims.ac.in",
        "The Applicant may pay his/ her application/initial fees to AIMS by using a debit/credit card or through an online banking account. The Applicant warrants, agrees and confirms that when he/ she initiates a payment transaction and/or issues an online payment instruction and provides his/ her card/bank details",
      ],
    },
    {
      heading: "Applicant Responsibilities",
      points: [
        "The Applicant is fully and lawfully entitled to use such credit/debit card, bank account for such transactions",
        "The Applicant is responsible for ensuring that the card/ bank account details provided by him/ her are accurate",
        "The Applicant authorises debit of the nominated card/ bank account for the Payment of fees selected by such Applicant, along with the applicable Fees.",
        "The Applicant is responsible for ensuring that sufficient credit is available on the nominated card/ bank account at the time of making the payment to permit the Payment of the dues payable or fees due selected by the Applicant, inclusive of the applicable Fee.",
      ],
    },
    {
      heading: "Governing law",
      points: [
        "These terms and conditions are governed by the laws of India, and the competent courts at Bangalore, Karnataka, shall have exclusive jurisdiction.",
      ],
    },
    {
      heading: "Dispute Resolution",
      points: [
        "Any dispute arising in relation to the terms and conditions will be submitted to a sole arbitrator appointed by AIMS under the provisions of the Arbitration and Conciliation Act, 1996 and rules framed thereunder. The venue of the Arbitration shall be at Bangalore, Karnataka.",
      ],
    },
    {
      heading: "Refunds And Cancellations",
      points: ["Fees once paid will not be refunded under any circumstances."],
    },
    {
      heading: "Privacy Policy",
      points: [
        'Please review our "Terms of Use" and "Disclaimer" policies at https://theaims.ac.in/terms-of-use.html and https://theaims.ac.in/disclaimer.html, respectively.',
      ],
    },
    {
      heading: "Electronic Communication",
      points: [
        "When you visit www.theaims.ac.in or send e-mails to us, you are communicating with us electronically. By communicating with us, you consent to receive communication from us electronically. We will communicate with you by e-mail or by posting notices on our website. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communication be in writing.",
        "You also agree to receive communication from the institution through Post, Email ID, SMS, and WhatsApp.",
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
              className="text-[18px] monser-400 ml-8"
              dangerouslySetInnerHTML={{
                __html: point
                  .replace(
                    /https:\/\/theaims\.ac\.in\/[^\s]+/g,
                    '<a href="$&" target="_blank" rel="noopener noreferrer" class="text-[#A22877] hover:text-[#A10000] underline">$&</a>'
                  )
                  .replace(
                    /www\.theaims\.ac\.in/g,
                    '<a href="https://www.theaims.ac.in" target="_blank" rel="noopener noreferrer" class="text-[#A22877] hover:text-[#A10000] underline">www.theaims.ac.in</a>'
                  )
                  .replace(
                    /webmaster@theaims\.ac\.in/g,
                    '<a href="mailto:webmaster@theaims.ac.in" class="text-[#A22877] hover:text-[#A10000] underline">webmaster@theaims.ac.in</a>'
                  )
                  .replace(
                    /\+91\(0\)80 28390433/g,
                    '<a href="tel:+918028390433" class="text-[#A22877] hover:text-[#A10000] underline">+91(0)80 28390433</a>'
                  ),
              }}
            />
          ))}
        </ol>
      </div>
    )
  }

  return (
    <>
      <div className="bg-[#E1F9F4] py-6 md:py-10 px-4 md:px-0">
        <h2 className="text-2xl md:text-5xl lg:text-6xl text-[#0C2165] playfair-300 text-center">
          Refund & Cancellations
        </h2>
      </div>
      <Breadcrumbs />
      {/* Content Section */}
      <div className="relative ">
        <div className="px-4 md:px-6 lg:px-8 py-6 md:py-10">
          <div className="container mx-auto overflow-hidden">
            <div className="max-w-6xl mx-auto relative space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-[35px] text-[#0C2165] monser-500">
                  Terms & Conditions
                </h2>
                <p className="text-base md:text-[20px] monser-400  max-w-6xl mx-auto px-4 md:px-0">
                  The terms and conditions mentioned here apply to the User who
                  uses the Online Services provided for any payment made to AIMS
                  Institutes (AIMS). Please read these terms and conditions
                  carefully. By authorising a payment to AIMS through the online
                  payment service ("the service"), it would be treated as a
                  deemed acceptance to these terms and conditions. AIMS reserves
                  all the rights to amend these terms and conditions at any time
                  without prior intimation. It is the responsibility of the User
                  to have read the terms and conditions before using the
                  Service.
                </p>
              </div>
              {contentSections.map((section, index) =>
                renderSection(section, index)
              )}
            </div>
          </div>
        </div>

        <div className="absolute md:top-30 right-0 md:hidden lg:block hidden">
          <Image
            src="/student-handbook/semi-circle.svg"
            alt="School Circle Background"
            width={120}
            height={120}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  )
}

export default RefundAndCancellations
