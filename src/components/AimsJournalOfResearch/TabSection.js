import React from "react";
import JournalTabs from "./JournalTabs";

const AdmissionTabsSection = () => {
  const tabsData = [
    {
      title: "Submissions",
      heading: "",

      subheading: "Submission Guidelines",
      subcontent:
        "Authors must ensure the following before submission to minimize the risk of rejection.",
      pointsheading: "Author information:",
      points: [
        "Information of all co-authors to be provided",
        "Information while submitting and in the Manuscript should match",
      ],
      pointsheading2: "Manuscript length and formatting:",
      points2: [
        "Abstract in the proper format and required length",
        "Key messages provided",
      ],
      pointsheading3: "Tables:",
      points3: [
        "Tables to be cited within the text of the article",
        "Tables to be placed within the article",
      ],
      pointsheading4: "Figures:",
      points4: [
        "Figures to be provided in acceptable format",
        "Figures to be labelled appropriately",
        "Figures to be cited within the text of the article",
      ],
      pointsheading5: "References:",
      points5: ["All references to be cited within text of the article"],
      conclusion:
        "We accept Academic Papers (Conceptual or Empirical), Reflective Practice articles, Case Studies, and Book Reviews.",
    },

    {
      title: "Submission Process",
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
      title: "Archives",
      heading: "Individual mentoring",
      points: ["", "", "", ""],
      conclusion:
        "The assessments allow us to determine each student's understanding of subjects, as well as their ability to recall concepts for exams. We can also indicate areas that need to be improved. Remedial classes are available for those who require more assistance. To ensure better performance in final exams, students who require a lot of improvement are mentored individually.",
    },
    {
      title: "Indexing/Abstracting",
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
    {
      title: "Subscription",
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
  ];

  return <JournalTabs tabsData={tabsData} />;
};

export default AdmissionTabsSection;
