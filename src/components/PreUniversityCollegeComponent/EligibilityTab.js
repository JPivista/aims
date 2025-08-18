import React from "react"
import PreUniversityTab from "../shared/PreUniversityTab"

const EligibilityTab = () => {
    const tabsData = [
        {
            title: "Eligibility",
            heading: "",
            subHeading: "The admission criteria for PCMB/PCMC/CEBA Courses are as follows:",
            points: [
                "Candidates who have passed SSLC or equivalent examination approved by the Board of Pre-University Education, Government of Karnataka, shall be eligible for admission to our Pre-University course",
                "Students should have studied Mathematics & Science as compulsory subjects for PCMB/PCMC",
                "Pre-University is a two-year course, and during this course, students will be able to understand their liking and aptitude, helping them to choose the right course for further graduate studies",
                "",
            ],
            conclusion:
                "",
        },
        {
            title: "Value Additions & Facilities",
            heading: "",
            subHeading: "At AIMS Institutes Pre-University College, advanced and modern teaching methods are used along with the traditional blackboard method. Some key highlights include:",
            points: [
                "Highly qualified and experienced faculty members are trained to bring out the best in the students",
                "Classrooms are well-ventilated and are well-equipped with lights, fans and glass boards",
                "A spacious library with a reading room facility and computers with internet facilities is provided for students' benefit. Students have access to the latest journals from around the world to keep them abreast of the latest developments in various fields",
                "Laboratories with the latest and most sophisticated equipment cater to the students, ensuring that their work goes on unhindered",
                "The well-equipped administrative block is adjacent to the main building and is easily accessible to the students whenever they require assistance",
                "A full-fledged canteen is provided to cater to the needs of the students",
                "An in-house clinical care facility for the students and staff, with the service of a full-time nurse, is available in the clinic",
            ],
            conclusion:
                "",
        },
        {
            title: "Additional Facilities",
            heading: "Additional Facilities:",
            points: [
                "<b>Student Counselling:</b> AIMS believes that student counselling & mentoring is an important factor in making the students comfortable in every way",
                "<b>Career Guidance Cell:</b> Career Guidance is another very important aspect of AIMS Institutes. This cell aims at guiding the students who wish to pursue higher studies in their preferred line in institutions of their choice",
                "<b>Transport Facilities:</b> AIMS is in a prime location in the city & is well connected by public transport and Namma Metro. Besides, we have our own fleet of vehicles to cater to the needs of the students",
                "",
            ],
            conclusion:
                "",
        },
        {
            title: "Admissions",
            heading: "PUC Admission Process:",
            subHeading: "Follow the steps below:",
            points: ["", "", "", ""],
            conclusion: [
                `All the applicants need to complete and submit our online application form using the <a target="_blank" href="https://www.iesonline.co.in/aims-pu-application/" class="text-[#A22877]"><b>Apply Now</b></a>`,
                "Once the application is submitted, a concerned person from our admissions office will contact you."
            ]
        }

    ]

    return <PreUniversityTab tabsData={tabsData} />
}

export default EligibilityTab
