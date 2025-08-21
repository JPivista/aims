import React from "react"
import PreUniversityTab from "../shared/PreUniversityTab"

const AdmissionTabsSection = () => {
    const tabsData = [
        {
            title: "Course Content",
            heading: "",
            subHeading: "For both I and II Pre-University courses, we follow the curriculum set forth by the Department of Pre-University Education in Karnataka. ",
            pointGroups: [
                {
                    heading: "PART 1 ",
                    points: ["English is compulsory for all ", "Second language options:  Kannada and Hindi ",],
                },
                {
                    heading: "PART II ",
                    points: ["Physics, Chemistry, Mathematics, Biology (PCMB) ", "Physics, Chemistry, Mathematics, Computer Science (PCMCs) ",],
                },
            ],
            conclusion:
                "",
        },
        {
            title: "Assessment",
            heading: "",
            pointGroups: [
                {
                    heading: "We assess the learning, skills, and abilities of our students through the format prescribed by the Pre-University College Board. ",
                    points: [
                        "<b>Tests and Examinations</b> The college conducts unit tests worth 30 marks, terminal exams for 40 marks (Non Practical subjects) & 35 Marks for Practical subjects, mid-term exams for 80 marks for Non Practical subjects & 70 marks for Practical Subjects, and preparatory exams for 80 marks for Non Practical subjects & 70 marks for Practical Subjects. The board conducts annual examinations (theory) in the month of March for II PUC and in the month of February for I PUC.",// <-- no bullet, just spacing
                        "<b>Practical Examinations</b> Students pursuing physics, chemistry, biology and computer science have practical examinations as well. The practical examinations are conducted in the exam centres in the month of January/February for II PUC with an external examiner and in the month of January for I PUC in the college.",
                        "<b>Practical Record Assessment</b> This is done on a weekly basis during practical classes and also during practical examinations. Viva voces are conducted based on the experiments that are carried out by the students."
                    ]
                }
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
            heading: "Teaching Methods",
            points: [
                "Complete 10th standard with good marks",
                "Apply online for PUC program selection",
                "Submit required certificates and documents",
                "Complete admission formalities and start classes",
            ],
            conclusion:
                "In the classroom, our teachers use a mix of modern, traditional, and traditional teaching approaches. Students are taught using blackboards, PowerPoint presentations, seminars, and audio-visual aids. Students can also perform role plays or enact plays in language classes. While each department operates autonomously, our main goal is to provide all of our students with a high-quality education. Our teachers attend workshops and trainings on a regular basis to stay up to date on the latest teaching techniques. This helps them construct their own portfolio, and allows them to enhance their teaching methods.",
        },
    ]

    return <PreUniversityTab tabsData={tabsData} />
}

export default AdmissionTabsSection
