import CommitteesCards from "@/components/shared/CommitteesCards";

export default function Page() {
  const committeesData = [
    {
      id: "",
      bgColor: "bg-[#FDE8EC]",
      borderColor: "border-[#A22877]",
      icon: "/centre-for-research/arrow_icon_1.svg",
      title: "Advantages of Choosing PCMC",
      titleColor: "text-[#531574]",
      description:
        "This committee provides guidance to endorse the research proposals and strategic direction for AIMS' research vision. The RAC includes a Chairperson, one patron, six external experts, and three internal members. The Director of ACR serves as the Member Secretary and convenes annual meetings.",
      objectivesTitle: "Career opportunities after adegree include:",
      objectives: [
        "Software Engineer",
        "Industrial Design",
        "Ethical Hacking",
        "Animation & Graphics",
        "Application Developers",
        "Become an Entrepreneur",
      ],
      frequencyBorder: "border-[#A22877]",
      frequencytitle: "",
      frequency: "As one of the top PU colleges in Bangalore for science, we support future-focused aspirations across disciplines.",
    },
    {
      id: "",
      bgColor: "bg-[#E3F4F1]",
      borderColor: "border-[#88BBB1]",
      icon: "/centre-for-research/arrow_icon_2.svg",
      title: "Advantages of Choosing PCMB",
      titleColor: "text-[#0C2165]",
      description:
        "You can opt for multiple courses after PU like Medical/Bio-tech/ B-Pharma/Bachelor of Medical Sciences/BE/BSc/Bioinformatics/ Agricultural Sciences.",
      objectivesTitle: "Career opportunities after degree include:",
      objectives: [
        "Doctor",
        "Molecular Biologist",
        "Forensic Scientist",
        "Biochemical Engineer",
        "Dentist",
        "Pharmacist",
        "Become an Entrepreneur"
      ],
      frequencyBorder: "border-[#88BBB1]",
      frequencytitle: "",
      frequency: "If you're seeking the best PU college for PCMB in Bangalore, AIMS provides the right guidance and exposure to support medical and life sciences careers.",
    },
  ];

  return <CommitteesCards committees={committeesData} />;
}
