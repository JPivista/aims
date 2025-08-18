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
        "This committee provides guidance to endorse the research proposals and strategic direction for AIMS' research vision...",
      objectivesTitle: "Objectives of RAC:",
      objectives: [
        "To provide strategic guidance to the Research activities",
        "To guide the faculty and students to prepare research proposals/projects",
        "To endorse the research proposals and supervise progress",
        "Formulating and promoting research policies",
        "Sharing resources and best practices for research",
        "Offering expertise in research communication",
      ],
      frequencyBorder: "border-pink-300",
      frequencytitle: "Frequency:",
      frequency: "As one of the top PU colleges in Bangalore for science, we support future-focused aspirations across disciplines.",
    },
    {
      id: 2,
      bgColor: "bg-[#E3F4F1]",
      borderColor: "border-teal-200",
      icon: "/centre-for-research/arrow_icon_2.svg",
      title: "Research Review Committee (RRC)",
      titleColor: "text-[#0C2165]",
      description:
        "The RRC reviews all activities of the ACR. The committee reviews whether the research centre follows the advice...",
      objectivesTitle: "Objectives of RRC:",
      objectives: [
        "To review the activities of the research centre",
        "To motivate faculty and students to take up research",
        "To monitor and implement ACR policies",
      ],
      frequencyBorder: "border-teal-300",
      frequencytitle: "Frequency:",
      frequency: "As one of the top PU colleges in Bangalore for science, we support future-focused aspirations across disciplines.",
    },
  ];

  return <CommitteesCards committees={committeesData} />;
}
