import React from "react";
import PhdTabs from "../Tab/TabProps"; // Update path as needed

const tabData = [
  {
    key: "important-dates",
    label: "Important Dates",
    content: (
      <>
        <h6 style={{ color: "#A22877", fontSize: "1.2rem", fontWeight: '600' }} className="text-[#932c79] font-semibold text-lg sm:text-xl mb-3">
          Important Dates
        </h6>
        <p className="text-gray-800 text-sm sm:text-base">
          Here you can list important dates related to the PhD program, such as application deadlines, interview schedules, and admission timelines.
        </p>
      </>
    ),
  },
  {
    key: "eligibility",
    label: "Eligibility",
    content: (
      <>
        <h6 style={{ color: "#A22877", fontSize: "1.2rem", fontWeight: '600' }} className="text-[#932c79] font-semibold text-lg sm:text-xl mb-3">
          Any candidate who meets the following requirements is eligible to seek registration for a PhD program:
        </h6>
        <p className="text-gray-800 mb-4 text-sm sm:text-base">
          A candidate shall have a Master&apos;s Degree or any other Degree/Diploma of the University or any other University/Institution recognized as equivalent thereto, with a minimum of 55% marks or equivalent CGPA.
        </p>
        <p style={{fontWeight: '600' }} className="text-gray-800 font-semibold text-sm sm:text-base mb-2">
          However, this condition is relaxed to 50% in case of:
        </p>
        <ul className="list-disc pl-5 text-gray-800 text-sm sm:text-base space-y-1">
          <li>SC/ST/CAT-I candidates</li>
          <li>In service candidates with a minimum of five years of regular experience associated with teaching profession as teachers/library professionals/physical education instructors/laboratory staff in educational institute</li>
        </ul>
      </>
    ),
  },
  {
    key: "selection-process",
    label: "Selection Process",
    content: (
      <>
        <h6 style={{ color: "#A22877", fontSize: "1.2rem", fontWeight: '600' }} className="text-[#932c79] font-semibold text-lg sm:text-xl mb-3">
          Selection Process
        </h6>
        <p className="text-gray-800 text-sm sm:text-base">
          The selection process includes an entrance test followed by an interview. Candidates will be assessed on their research aptitude and subject knowledge.
        </p>
      </>
    ),
  },
];

const PhdTabPage = () => {
  return <PhdTabs tabs={tabData} />;
};

export default PhdTabPage;
