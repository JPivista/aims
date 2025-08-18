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
                    points: ["Economics, Business Studies, Accountancy, Computer Science(EBACs)",],
                },
            ],
            conclusion:
                "",
        },
        {
            title: "Assessment",
            heading: "",
            subHeading: [
                "Assessment plays a crucial role while studying 11th & 12th.",
                "Our assessment methods are designed to evaluate students understanding, application, and mastery of the subjects while also fostering critical thinking and analytical skills essential for success in the business world.",
            ],
            pointGroups: [
                {
                    heading: "Continuous Evaluation:",
                    points: [
                        "We believe in the importance of continuous evaluation to monitor students' progress throughout the academic year. Regular assessments, including quizzes, class tests, and assignments, enable teachers to gauge students' comprehension of concepts and identify areas that may require additional support. ",
                    ],
                },
                {
                    heading: "Comprehensive Examinations:",
                    points: [
                        "At the end of each term or semester, students undergo comprehensive examinations that assess their proficiency in all the subjects covered in the EBAC programme. These examinations are structured to test both theoretical knowledge and practical application, ensuring a thorough evaluation of students' academic performance. ",
                    ],
                },
                {
                    heading: "Practical Assessments:",
                    points: [
                        "In subjects like Computer Science, practical assessments are integral components of the evaluation process. Students are required to demonstrate their ability to apply theoretical concepts to real-world scenarios through projects, simulations, or practical exercises. This hands-on approach not only reinforces learning but also prepares students for the practical demands of the business environment. ",
                    ],
                },
                {
                    heading: "Case Studies and Problem-Solving Tasks:",
                    points: [
                        "Case studies and problem-solving tasks are used to assess students' analytical and problem-solving skills. By presenting students with real-life business scenarios or complex problems, we encourage them to analyze information, make informed decisions, and propose viable solutions, thereby sharpening their critical thinking abilities. ",
                    ],
                },
                {
                    heading: "Feedback and Remedial Support:",
                    points: [
                        "Feedback is an essential aspect of the assessment process at AIMS PU College. Teachers provide constructive feedback to students on their performance, highlighting areas of strength and areas for improvement. Additionally, we offer remedial support to students who may require extra assistance, ensuring that every student has the opportunity to reach their full potential. ",
                    ],
                },
                {
                    heading: "Holistic Assessment:",
                    points: [
                        "We believe in a holistic approach to assessment that takes into account not only academic performance but also students' overall growth and development. In addition to subject-specific assessments, we also evaluate students' soft skills, such as communication, teamwork, and leadership, through various co-curricular activities and projects.  ",
                    ],
                },
               

            ],
            conclusion:
                "At AIMS PU College, our assessment practices are designed to inspire excellence, promote continuous learning, and prepare students for the challenges and opportunities that await them in the field of commerce. Through rigorous evaluation and supportive feedback, we empower our students to excel academically and become confident, competent professionals in their chosen fields.",
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
            heading: "Teaching Methods:",
            points: [
                "",
                "",
                "",
                "",
            ],
            conclusion:
                "In the classroom, our teachers use a mix of modern, traditional, and traditional teaching approaches. Students are taught using blackboards, PowerPoint presentations, seminars, and audio-visual aids. Students can also perform role plays or enact plays in language classes. While each department operates autonomously, our main goal is to provide all of our students with a high-quality education. Our teachers attend workshops and trainings on a regular basis to stay up to date on the latest teaching techniques. This helps them construct their own portfolio, and allows them to enhance their teaching methods.",
        },
    ]

    return <PreUniversityTab tabsData={tabsData} />
}

export default AdmissionTabsSection
