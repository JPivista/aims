import React from 'react'
import Image from 'next/image'

const ResearchCommitteesCards = () => {
    const committees = [
        {
            id: 1,
            bgColor: "bg-[#FDE8EC]",
            borderColor: "border-pink-200",
            icon: "/centre-for-research/arrow_icon_1.svg",
            title: "Research Advisory Committee (RAC)",
            titleColor: "text-[#531574]",
            description: "This committee provides guidance to endorse the research proposals and strategic direction for AIMS' research vision. The RAC includes a Chairperson, one patron, six external experts, and three internal members. The Director of ACR serves as the Member Secretary and convenes annual meetings.",
            objectivesTitle: "Objectives of RAC:",
            objectives: [
                "To provide strategic guidance to the Research activities",
                "To guide the faculty and students to prepare research proposals/projects",
                "To endorse the research proposals and supervise progress",
                "Formulating and promoting research policies",
                "Sharing resources and best practices for research",
                "Offering expertise in research communication"
            ],
            frequencyBorder: "border-pink-300",
            frequency: "The committee meets once every academic year."
        },
        {
            id: 2,
            bgColor: "bg-[#E3F4F1]",
            borderColor: "border-teal-200",
            icon: "/centre-for-research/arrow_icon_2.svg",
            title: "Research Review Committee (RRC)",
            titleColor: "text-[#0C2165]",
            description: "The RRC reviews all activities of the ACR. The committee reviews whether the research centre follows the advice and recommendations of RAC. The committee also suggests areas of improvement. The RRC is composed of a Chairperson and five members.",
            objectivesTitle: "Objectives of RRC:",
            objectives: [
                "To review the activities of the research centre",
                "To motivate faculty and students to take up research",
                "To monitor and implement ACR policies"
            ],
            frequencyBorder: "border-teal-300",
            frequency: "The committee meets once every academic year."
        }
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 container mx-auto my-10 px-4">
            {committees.map((committee) => (
                <div 
                    key={committee.id} 
                    className={`${committee.bgColor} rounded-xl p-6 ${committee.borderColor} border relative`}
                >
                    {/* Icon */}
                    <div className="absolute top-4 right-4 text-teal-300">
                        <Image 
                            src={committee.icon} 
                            alt={committee.title} 
                            width={100} 
                            height={100} 
                            className="w-12 h-12 sm:w-16 sm:h-16 md:w-12 md:h-12" 
                        />
                    </div>

                    {/* Number */}
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 text-gray-800 text-sm sm:text-md font-semibold bg-white">
                        {committee.id}
                    </div>

                    {/* Title */}
                    <h6 
                        className={`text-2xl sm:text-3xl md:text-4xl ${committee.titleColor} mt-4`} 
                        style={{ fontWeight: "600" }}
                    >
                        {committee.title}
                    </h6>

                    {/* Description */}
                    <p className="text-gray-700 mt-3 text-sm sm:text-base leading-relaxed">
                        {committee.description}
                    </p>

                    {/* Objectives */}
                    <h4 className="text-gray-900 mt-4 font-semibold">
                        {committee.objectivesTitle}
                    </h4>
                    <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 mt-2 space-y-1 min-h-[190px]">
                        {committee.objectives.map((obj, idx) => (
                            <li key={idx}>{obj}</li>
                        ))}
                    </ul>

                    {/* Frequency */}
                    <div className={`border-t ${committee.frequencyBorder} mt-4 pt-2`}>
                        <p className="text-sm font-semibold">Frequency:</p>
                        <p className="text-sm">{committee.frequency}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ResearchCommitteesCards
