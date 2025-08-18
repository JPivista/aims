import React from "react"
import AdmissionTabs from "../shared/Admission/AdmissionTabs"

const AdmissionTabsSection = () => {
    const tabsData = [
        {
            title: "Course Content",
            heading: "Individual mentoring",
            points: [
                "",
                "",
                "",
                "",
            ],
            conclusion:
                "The assessments allow us to determine each student's understanding of subjects, as well as their ability to recall concepts for exams. We can also indicate areas that need to be improved. Remedial classes are available for those who require more assistance. To ensure better performance in final exams, students who require a lot of improvement are mentored individually.",
        },
        {
            title: "Assessment",
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
            title: "Individual Mentoring",
            heading: "Individual mentoring",
            points: [
                "",
                "",
                "",
                "",
            ],
            conclusion:
                "The assessments allow us to determine each student's understanding of subjects, as well as their ability to recall concepts for exams. We can also indicate areas that need to be improved. Remedial classes are available for those who require more assistance. To ensure better performance in final exams, students who require a lot of improvement are mentored individually.",
        },
        {
            title: "Teaching Methods",
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
