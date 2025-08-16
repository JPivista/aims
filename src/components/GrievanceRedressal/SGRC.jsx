import React from "react"
import Image from "next/image"

const SGRC = () => {
  const paragraphs = [
    "Please share the details about the incident you would like to report. Our Complaint Center will analyze your complaint and take the appropriate measures to resolve it.",
    "We aim to provide a safe, secure and supportive environment for the holistic development of students. A Students Grievance Redressal Committee (SGRC) is established as per guidelines of the UGC to deal with all grievances related to common problems at the institution and its timely redressal.",
    "Grievance is an allegation or a complaint for actual or perceived wrongs as defined in UGC Regulations under clause 2(f) of the Gazette Notification No 14-4/2012 (CPP-II) dated December 2012 and may pertain to academic and non-academic matters.",
    "Department level grievances will be attended to by the respective class coordinators, mentors and programme heads. The grievances may include all academic, co-curricular and extra-curricular grievances. Unresolved grievances may be escalated to the Students Grievance Redressal Committee.",
    "All other grievances may be reported at the immediate levels and unresolved grievances shall be escalated as described. Students may report grievances at the immediate levels and unresolved grievances shall be escalated as shown in the escalation chart.",
    "Unresolved grievances will be forwarded to the Students Grievance Redressal Committee (SGRC), which functions under the ACSD, through the Registrar.",
    "Grievances shall also be submitted in one of the following ways:\na. via this institutional portal\nb. in writing or by email to the Registrar – registrar@theaims.ac.in\nc. by email to grievances@theaims.ac.in\n",
    "(Chart: https://www.theaims.ac.in/grievance-redressal)",
  ]

  const renderParagraph = (paragraph, index) => {
    if (index === 6) {
      // For the paragraph with email addresses
      return (
        <p className="text-base md:text-[24px] monser-400 whitespace-pre-line mb-6">
          Grievances shall also be submitted in one of the following ways:
          <br />
          a. via this institutional portal
          <br />
          b. in writing or by email to the Registrar –{" "}
          <a
            href="mailto:registrar@theaims.ac.in"
            className="underline cursor-pointer"
          >
            registrar@theaims.ac.in
          </a>
          <br />
          c. by email to{" "}
          <a
            href="mailto:grievances@theaims.ac.in"
            className="underline cursor-pointer"
          >
            grievances@theaims.ac.in
          </a>
        </p>
      )
    } else if (index === 7) {
      // For the chart link
      return (
        <p className="text-base md:text-[24px] monser-400 mb-6">
          (Chart:{" "}
          <a
            href="https://www.theaims.ac.in/grievance-redressal"
            target="_blank"
            rel="noopener noreferrer"
            className="underline cursor-pointer"
          >
            https://www.theaims.ac.in/grievance-redressal
          </a>
          )
        </p>
      )
    } else {
      // For regular paragraphs
      return (
        <p className="text-base md:text-[24px] monser-400 whitespace-pre-line mb-6">
          {paragraph}
        </p>
      )
    }
  }

  return (
    <div className="py-8 md:py-8 bg-[#E1F9F4] relative overflow-hidden">
      <div className="lg:ml-20  md:ml-10 px-4 md:px-0">
        {/* Semi-circle SVG on the right side */}
        <div className="absolute lg:top-[20%] md:top-[10%] md:right-0 md:block hidden rotate-180">
          <Image
            src="/student-handbook/semi-circle.svg"
            alt="Semi Circle Background"
            width={120}
            height={120}
            className="rotate-180"
          />
        </div>

        {/* Content */}
        <div className="md:max-w-6xl">
          {paragraphs.map((paragraph, index) => (
            <div key={index}>{renderParagraph(paragraph, index)}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SGRC
