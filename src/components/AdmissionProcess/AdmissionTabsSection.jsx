import React from "react"
import AdmissionTabs from "../shared/AdmissionTabs"

const AdmissionTabsSection = () => {
  const tabsData = [
    {
      title: "MBA Admission",
      heading: "MBA Admission Process Overview:",
      points: [
        "Submit online application with required documents",
        "Complete entrance exam or provide valid scores",
        "Attend personal interview and group discussion",
        "Receive admission offer and complete enrollment",
      ],
      conclusion:
        "MBA admissions are competitive and require strong academic background with relevant work experience.",
    },
    {
      title: "Postgraduate (Non-MBA) Admission",
      heading: "Postgraduate Admission Requirements:",
      points: [
        "Bachelor's degree with minimum 50% marks",
        "Submit application with academic transcripts",
        "Complete entrance test if required",
        "Attend interview and receive admission confirmation",
      ],
      conclusion:
        "Postgraduate programs include M.Com, MCA, and other specialized master's degrees.",
    },
    {
      title: "Undergraduate Admission",
      heading: "Undergraduate Admission Steps:",
      points: [
        "Complete 10+2 education with required marks",
        "Fill online application form with details",
        "Submit documents and pay application fee",
        "Attend counseling session and confirm admission",
      ],
      conclusion:
        "Undergraduate programs include BBA, B.Com, BCA, and other bachelor's degrees.",
    },
    {
      title: "PUC",
      heading: "PUC Admission Process:",
      points: [
        "Complete 10th standard with good marks",
        "Apply online for PUC program selection",
        "Submit required certificates and documents",
        "Complete admission formalities and start classes",
      ],
      conclusion:
        "PUC programs provide strong foundation for higher education and career development.",
    },
  ]

  return <AdmissionTabs tabsData={tabsData} />
}

export default AdmissionTabsSection
