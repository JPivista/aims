import CommitteesCards from "@/components/shared/CommitteesCards";

export default function Page() {
  const committeesData = [
    {
      id: "",
      bgColor: "bg-[#FDE8EC]",
      borderColor: "border-[#A22877]",
      icon: "/centre-for-research/arrow_icon_1.svg",
      title: "Advantages of Choosing PCMC:",
      titleColor: "text-[#531574]",
      description:
        "You can opt for multiple courses after PU like Btech/BE/BCA/Bio-tech/BSc Nautical Sciences/BSc Computer Science/BSc Aviation/BDes Industrial Design.",
      objectivesTitle: "Can choose career opportunity in various sectors post degree:",
      objectives: [
        "Software Engineer",
        "Industrial Design",
        "Ethical Hacking",
        "Animation & Graphics",
        "Application Developers",
        "Become an Entrepreneur",
      ],
      frequencyBorder: "",
      frequencytitle: "",
      frequency: "",
    },
    {
      id: "",
      bgColor: "bg-[#E3F4F1]",
      borderColor: "border-[#88BBB1]",
      icon: "/centre-for-research/arrow_icon_2.svg",
      title: "Advantages of Choosing PCMB:",
      titleColor: "text-[#0C2165]",
      description:
        "You can opt for multiple courses after PU like Medical/Bio-tech/B-pharma/Bachelor of Medical Sciences/BE/Bsc/Bioinformatics/Agricultural Sciences.",
      objectivesTitle: "Can choose career opportunity in various sectors post degree:",
      objectives: [
        "Doctor",
        "Molecular Biologist",
        "Forensic Scientist",
        "Biochemical Engineer",
        "Dentist",
        "Pharmacist",
        "Become an Entrepreneur"
      ],
      frequencyBorder: "",
      frequencytitle: "",
      frequency: "",
    },
  ];

  return <CommitteesCards committees={committeesData} />;
}
