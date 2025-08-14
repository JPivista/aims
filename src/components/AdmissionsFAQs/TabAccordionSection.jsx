import React from "react"
import TabAccordion from "../shared/Admission/TabAccordion"

const TabAccordionSection = () => {
  const tabsData = [
    {
      title: "General Admission Information",
      sections: [
        {
          id: "programs",
          title: "1. What programs are offered at AIMS Institutes?",
          content: [
            "AIMS Institutes offers undergraduate and postgraduate programs and diplomas across Management, Hospitality, Computer Applications, Commerce and more. View the full list on the Programs page.",
          ],
        },
        {
          id: "medium",
          title: "2. What is the medium of instruction?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "eligibility",
          title: "3. What are the eligibility criteria for UG and PG programs?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "accreditation",
          title: "4. Is AIMS a recognised and accredited institution?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "international",
          title: "5. Does AIMS accept international students?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
      ],
    },
    {
      title: "Application Process",
      sections: [
        {
          id: "apply",
          title: "1. How do I apply for admission?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "documents",
          title: "2. What documents are required for application?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "fees",
          title: "3. Is there an application fee?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "multiple",
          title: "4. Can I apply for multiple programs?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "online",
          title: "5. Can I apply online?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
      ],
    },
    {
      title: "Selection & Admission",
      sections: [
        {
          id: "selection",
          title: "1. What is the selection process?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "timeline",
          title: "2. How long does the admission process take?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "interview",
          title: "3. Is there an interview process?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "entrance",
          title: "4. Are there entrance exams?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "provisional",
          title: "5. What if I'm awaiting final-year results?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
      ],
    },
    {
      title: "Fees, Scholarships & Loans",
      sections: [
        {
          id: "fees",
          title: "1. What are the fee structures?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "scholarships",
          title: "2. Are there scholarships available?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "loans",
          title: "3. Do you provide education loans?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "payment",
          title: "4. What are the payment options?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "refund",
          title: "5. Is the fee refundable?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
      ],
    },
    {
      title: "Accommodation & Campus Life",
      sections: [
        {
          id: "hostel",
          title: "1. Is hostel accommodation available?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "facilities",
          title: "2. What are the campus facilities?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "food",
          title: "3. Is food provided in the hostel?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "security",
          title: "4. What about campus security?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "activities",
          title: "5. What extracurricular activities are available?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
      ],
    },
    {
      title: "Deadlines, Confirmations & Support",
      sections: [
        {
          id: "deadlines",
          title: "1. What are the application deadlines?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "confirmation",
          title: "2. How do I confirm my admission?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "support",
          title: "3. What support is available during admission?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "contact",
          title: "4. How can I contact the admissions office?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "updates",
          title: "5. How will I receive admission updates?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
      ],
    },
    {
      title: "Other Questions",
      sections: [
        {
          id: "placement",
          title: "1. What about placement opportunities?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "internship",
          title: "2. Are internships available?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "alumni",
          title: "3. What is the alumni network like?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "location",
          title: "4. Where is the campus located?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
        {
          id: "transport",
          title: "5. What about transportation facilities?",
          content: [
            "English is the primary medium of instruction at AIMS Institutes. All courses, lectures, and examinations are conducted in English to ensure global compatibility and industry standards.",
          ],
        },
      ],
    },
  ]

  return <TabAccordion tabsData={tabsData} />
}

export default TabAccordionSection
