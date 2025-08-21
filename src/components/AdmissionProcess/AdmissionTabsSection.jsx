import React from "react"
import AdmissionTabs from "../shared/Admission/AdmissionTabs"

const AdmissionTabsSection = () => {
  const tabsData = [
    {
      title: "MBA Admission",
      heading: "MBA Admission: A Clear Path to Your Next Step",
      description:
        "Our MBA admissions process focuses on helping you align your career goals with the right foundation. If you're applying to the MBA program (non-PGCET), you'll go through the structured AIMS Selection Process.",
      eligibility: {
        title: "Eligibility Criteria",
        subtitle: "To apply, you must have:",
        requirements: [
          "A recognised bachelor's degree with a minimum of 50% (or 45% for SC/ST/CAT-1)",
          {
            main: "A valid test score:",
            sub: [
              "CAT: 70 percentile or above",
              "MAT/XAT/CMAT/ATMA: 80 percentile or above",
            ],
          },
          "Final-year students may apply provisionally. Offer letters will require submission of final mark sheets before confirmation.",
        ],
      },
      selection: {
        title: "Selection Process",
        subtitle: "The MBA selection process includes four structured rounds:",
        rounds: [
          "Statement of Purpose",
          "Extempore",
          "Group Discussion",
          "Personal Interview",
        ],
        note: "You'll be evaluated not just on academic merit and test scores, but also on your achievements in extracurriculars, leadership, and communication. Selection rounds may be conducted online or in person, depending on current guidelines.",
      },
      afterSelection: {
        title: "Once selected:",
        steps: [
          "An Offer Letter will be sent via email",
          "Your seat will be blocked upon payment of the first fee instalment",
          "Final confirmation requires:",
          "Submission of original documents",
          "Entrance exam scores",
          "Payment of the second instalment",
        ],
      },
    },
    {
      title: "Postgraduate (Non-MBA) Admission",
      heading: "Postgraduate (Non-MBA) Admission",
      description:
        "If you're applying to any other PG program, here's a step-by-step admission process:",
      points: [
        'Submit your application online via the "Apply Now" link',
        "Our admissions team will contact you",
        "You may be invited for a selection round/interview, after which an offer will be extended",
      ],
      conclusion:
        "This is a streamlined process suited to both full-time students and working professionals.",
    },
    {
      title: "Undergraduate Admission",
      heading: "Undergraduate Admission",
      description: "For UG applicants, the steps are similar:",
      points: [
        'Apply online through the "Apply Now" portal',
        "Our admissions office will reach out",
        "If applicable, attend an interview/selection round",
        "You'll receive an offer and further instructions on confirming your seat",
      ],
      conclusion:
        "This process applies across BBA, B.Com, BCA, and other undergraduate streams.",
    },
    {
      title: "PUC",
      heading: "Pre-University (PU) Admission",
      description:
        "Students seeking PU admission at AIMS will follow the same online process:",
      points: [
        'Submit your application via "Apply Now"',
        "Our team will get in touch",
        "Appear for an interview, if required",
      ],
      conclusion:
        "PU programs at AIMS are structured to offer a smooth transition into your future undergraduate goals.",
    },
  ]

  return <AdmissionTabs tabsData={tabsData} />
}

export default AdmissionTabsSection
