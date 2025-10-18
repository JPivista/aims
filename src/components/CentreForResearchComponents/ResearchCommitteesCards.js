import CommitteesCards from "@/components/shared/CommitteesCards";

export default function Page() {
  const committeesData = [
    {
      id: 1,
      bgColor: "bg-[#FDE8EC]",
      borderColor: "border-pink-200",
      icon: "/centre-for-research/arrow_icon_1.svg",
      title: "Research Advisory Committee (RAC)",
      titleColor: "text-[#531574]",
      description:
        "This committee provides guidance to endorse the research proposals and strategic direction for AIMS' research vision. The RAC includes a Chairperson, one patron, six external experts, and three internal members. The Director of ACR serves as the Member Secretary and convenes annual meetings.",
      objectivesTitle: "Objectives of RAC:",
      objectives: [
        "To provide strategic guidance to the Research activities",
        "To guide the faculty and students to prepare research proposals/projects to be submitted to various funding agencies",
        "To endorse the research proposals taken up by the institute and supervise the progress of the research work",
        "Formulating and promoting policies and procedures that enhance and expand research culture",
        "Sharing resources, information and best practices for research",
        "Offering expertise for research communication for writing research papers, paper presentations, etc.",
      ],
      frequencyBorder: "border-pink-300",
      frequencytitle: "Frequency:",
      frequency: "The committee meets once every academic year.",
    },
    {
      id: 2,
      bgColor: "bg-[#E3F4F1]",
      borderColor: "border-teal-200",
      icon: "/centre-for-research/arrow_icon_2.svg",
      title: "Research Review Committee (RRC)",
      titleColor: "text-[#0C2165]",
      description:
        "The RRC reviews all activities of the ACR. The committee reviews whether the research centre follows the advice and recommendations of RAC. The committee also suggests areas of improvement. The RRC is composed of a Chairperson and five members.",
      objectivesTitle: "Objectives of RRC:",
      objectives: [
        "To review the activities of the research centre",
        "To motivate faculty and students to take up research in the areas of management, commerce, IT and humanities",
        "To monitor and implement the policies of ACR",
      ],
      frequencyBorder: "border-teal-300",
      // frequencytitle: "Frequency:",
      // frequency: "As one of the top PU colleges in Bangalore for science, we support future-focused aspirations across disciplines.",
    },
  ];

  return <CommitteesCards committees={committeesData} />;
}
