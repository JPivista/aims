"use client"
import React from "react"

const scholarships = [
  {
    slno: 1,
    name: "Smt. Nagarathnamma Scholarship",
    description:
      "Complete waiver of tuition fee for the entire program duration",
    slots: 2,
    eligibility:
      "90% or above in 12th/‘A’ Level (for UG) or Graduation (for PG)",
    documents: [
      "10th & 12th academic transcripts (UG)",
      "10th, 12th, Graduation transcripts (PG)",
      "Evidence of community service",
      "Certificates of national/international achievements (if any)",
      "2 Letters of Recommendation",
      "Aadhaar Card/PAN Card copies",
      "2 Passport size photographs",
    ],
  },
  {
    slno: 2,
    name: "AIMS Scholarship for Entrepreneurship",
    description: "Monthly stipend of INR 5,000 for the program duration",
    slots: 1,
    eligibility: "Business Idea approval + 60% or above in 12th/Graduation",
    documents: [
      "10th & 12th academic transcripts (UG)",
      "10th, 12th, Graduation transcripts (PG)",
      "Community service evidence (if any)",
      "2 Letters of Recommendation",
      "Aadhaar Card/PAN Card copies",
      "2 Passport size photographs",
    ],
  },
  {
    slno: 3,
    name: "AIMS Scholarship for Sports",
    description:
      "District/Zonal - 50% tuition fee waiver. State/National - 90% waiver",
    slots: 2,
    eligibility:
      "Recognised District/State/National level performer + 60% marks",
    documents: [
      "10th & 12th academic transcripts (UG)",
      "10th, 12th, Graduation transcripts (PG)",
      "Sports achievement certificates",
      "2 Letters of Recommendation",
      "Aadhaar Card/PAN Card copies",
      "2 Passport size photographs",
    ],
  },
  {
    slno: 4,
    name: "AIMS Scholarship for Performing Arts",
    description: "Monthly stipend of INR 5,000 for the program duration",
    slots: 1,
    eligibility: "Recognised District/State/National performer + 60% marks",
    documents: [
      "10th & 12th academic transcripts (UG)",
      "10th, 12th, Graduation transcripts (PG)",
      "Certificates of achievement/participation in performing arts",
      "2 Letters of Recommendation",
      "Aadhaar Card/PAN Card copies",
      "2 Passport size photographs",
    ],
  },
  {
    slno: 5,
    name: "AIMS Scholarship for Liberal Arts",
    description: "Monthly stipend of INR 5,000 for the program duration",
    slots: 1,
    eligibility: "Recognised District/State/National performer + 60% marks",
    documents: [
      "10th & 12th academic transcripts (UG)",
      "10th, 12th, Graduation transcripts (PG)",
      "Certificates of achievement/participation in liberal arts",
      "2 Letters of Recommendation",
      "Aadhaar Card/PAN Card copies",
      "2 Passport size photographs",
    ],
  },
]

const ScholarshipTable = () => {
  return (
    <>
      <section className="">
        {/* Top Paragraph */}
        <div className="max-w-5xl mx-auto text-center text-[#1A2A5B] text-sm md:text-base leading-relaxed py-10 px-4">
          <p className="mb-4">
            At AIMS Institutes, we recognise that ambition needs the right
            foundation and support. Our scholarships and fee concession programs
            are designed to break down financial barriers and help deserving
            students take confident steps toward their goals, no matter where
            they start from.
          </p>
          <p>
            Whether you&apos;re an academic achiever, a future entrepreneur, a
            sportsperson, or a creative thinker, there&apos;s a pathway here to
            make your education more accessible and rewarding.
          </p>
        </div>

        {/* Note Section */}
        <div className="bg-[#FFF5F2] py-4 px-4 text-center text-xs md:text-sm text-gray-700 lg:py-10 mb-10 ">
          <p className="max-w-5xl mx-auto ">
            <strong>Note:</strong> All scholarships and concessions are awarded
            subject to eligibility, documentation, and availability of slots.
            Meeting the criteria does not automatically guarantee selection.
            Final decisions are made by the AIMS Scholarships Committee.
          </p>
        </div>

        {/* Heading Section */}
        <div className="bg-[#E6F8F6]  text-center py-5">
          <h1 className="text-xl md:text-3xl playfair-300 text-[#9B2564] -mt-2">
            Empowering Excellence
          </h1>
          <h5 className="text-lg md:text-4xl playfair-300 text-[#3B2A7B] -mt-6">
            Scholarships at AIMS Institutes
          </h5>
        </div>
      </section>
      <div className="lg:px-8">
        <div className="container mx-auto lg:px-0 md:px-0 px-4 mb-5">
          <h2 className="text-center text-xl md:text-2xl font-bold mb-6 monser-500 ">
            Your Dreams, Our Support: AIMS Scholarship Program
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-[#003366] text-white">
                  <th className="p-3 border border-gray-300 text-center">
                    Sl.No
                  </th>
                  <th className="p-3 border border-gray-300">Scholarship</th>
                  <th className="p-3 border border-gray-300">Description</th>
                  <th className="p-3 border border-gray-300 text-center">
                    Slots Per Programme
                  </th>
                  <th className="p-3 border border-gray-300">Eligibility</th>
                  <th className="p-3 border border-gray-300">
                    Required Documents
                  </th>
                </tr>
              </thead>
              <tbody>
                {scholarships.map((scholarship, index) => (
                  <tr key={index} className="align-top">
                    {/* Sl.No column - Teal background */}
                    <td className="p-3 border border-gray-300 text-center bg-[#E0F9F4] font-medium">
                      {scholarship.slno}
                    </td>

                    {/* Scholarship Name */}
                    <td className="p-3 border border-gray-300 font-medium">
                      {scholarship.name}
                    </td>

                    {/* Description - Light gray */}
                    <td className="p-3 border border-gray-300 bg-[#F3F3F3]">
                      {scholarship.description}
                    </td>

                    {/* Slots Per Programme */}
                    <td className="p-3 border border-gray-300 text-center">
                      {scholarship.slots}
                    </td>

                    {/* Eligibility - Light gray */}
                    <td className="p-3 border border-gray-300 bg-[#F3F3F3]">
                      {scholarship.eligibility}
                    </td>

                    {/* Required Documents - bullet list */}
                    <td className="p-3 border border-gray-300">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        {scholarship.documents.map((doc, idx) => (
                          <li key={idx}>{doc}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default ScholarshipTable
