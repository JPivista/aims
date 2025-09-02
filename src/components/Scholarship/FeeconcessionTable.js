"use client"
import React from "react"

const concessions = [
  {
    slno: 1,
    category: "AIMS Alumni",
    description:
      "10% concession on total fee (excluding university eligibility, exam, boarding & lodging fees)",
    slots: "N/A",
    eligibility:
      "Completion of 12th/‘A’ Level for UG, graduation for PG from a recognised institution",
    documents: [
      "Academic transcripts",
     
      "Aadhaar Card",
      "PAN Card",
      "2 Letters of Recommendation",
      "2 passport photos",
    ],
  },
  {
    slno: 2,
    category: "Defence & Armed Forces",
    description: "INR 5,000 concession per semester",
    slots: "N/A",
    eligibility:
      "Indian citizen; Completion of 12th/‘A’ Level for UG, graduation for PG",
    documents: [
      "Academic transcripts",
      "2 Recommendation letters",
      "Defence ID Proof",
      "Aadhaar",
      "PAN",
      "2 passport photos",
    ],
  },
  {
    slno: 3,
    category: "Peenya Industrial Association Employees",
    description: "INR 2,500 concession per semester",
    slots: "N/A",
    eligibility: "Completion of 12th/‘A’ Level for UG, graduation for PG",
    documents: [
      "Academic transcripts",
      "2 Recommendation letters (one from employer)",
      "Aadhaar",
      "PAN",
      "2 passport photos",
    ],
  },
  {
    slno: 4,
    category: "Siblings of AIMERS",
    description:
      "10% concession on total fee (excluding university eligibility, exam, boarding & lodging fees)",
    slots: "N/A",
    eligibility: "Completion of 12th/‘A’ Level for UG, graduation for PG",
    documents: [
      "Academic transcripts",
      "2 Recommendation letters",
      "Aadhaar Card",
      "PAN Card",
      "2 passport photos",
    ],
  },
  {
    slno: 5,
    category: "Physically Challenged",
    description: "INR 5,000 concession per semester",
    slots: "N/A",
    eligibility: "Completion of 12th/‘A’ Level for UG, graduation for PG",
    documents: [
      "Academic transcripts",
      "2 Recommendation letters",
      "Aadhaar Card",
      "PAN Card",
      "2 passport photos",
    ],
  },
  {
    slno: 6,
    category: "SC/ST Karnataka Students",
    description: "INR 5,000 concession per semester",
    slots: "N/A",
    eligibility:
      "Indian citizen; Completion of 12th/‘A’ Level for UG, graduation for PG",
    documents: [
      "Academic transcripts",
      "2 Recommendation letters",
      "Caste Certificate",
      "Aadhaar",
      "PAN",
      "2 passport photos",
    ],
  },
  {
    slno: 7,
    category: "Economically Weak",
    description: "INR 5,000 concession per semester",
    slots: "3",
    eligibility:
      "Completion of 12th/‘A’ Level for UG, graduation for PG; Family income < INR 2L per annum",
    documents: [
      "Academic transcripts",
      "2 Recommendation letters",
      "Income Certificate",
      "Aadhaar",
      "PAN",
      "2 passport photos",
    ],
  },
  {
    slno: 8,
    category: "Girl Child & Single Mother",
    description:
      "5% concession on total fee (excluding university eligibility, exam, boarding & lodging fees)",
    slots: "3",
    eligibility: "Completion of 12th/‘A’ Level for UG, graduation for PG",
    documents: [
      "Academic transcripts",
      "2 Recommendation letters",
      "Aadhaar Card",
      "PAN Card",
      "2 passport photos",
    ],
  },
]

const FeeconcessionTable = () => {
  return (
    <>
      <div className="bg-[#E6F8F6]  text-center py-5">
      <h1 className="text-2xl md:text-3xl playfair-300 text-[#9B2564] -mt-2">
          AIMS Commitment to Affordability
        </h1>
        <h5 className="text-lg md:text-4xl playfair-300 text-[#3B2A7B] -mt-6">
          Fee Concession for Eligible Students
        </h5>
      </div>

      <div className="container mx-auto p-6 mb-5">
      <h2 className="text-center text-xl md:text-2xl font-bold mb-6 monser-500 ">
          Student Fee Concession Categories
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-[#003366] text-white">
                <th className="p-3 border border-gray-300 text-center">
                  Sl.No
                </th>
                <th className="p-3 border border-gray-300">
                  Concession Category
                </th>
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
              {concessions.map((item, index) => (
                <tr key={index} className="align-top">
                  {/* Sl.No - Teal */}
                  <td className="p-3 border border-gray-300 text-center bg-[#E0F9F4] font-medium">
                    {item.slno}
                  </td>

                  {/* Category */}
                  <td className="p-3 border border-gray-300 font-medium">
                    {item.category}
                  </td>

                  {/* Description - Gray */}
                  <td className="p-3 border border-gray-300 bg-[#F3F3F3]">
                    {item.description}
                  </td>

                  {/* Slots */}
                  <td className="p-3 border border-gray-300 text-center">
                    {item.slots}
                  </td>

                  {/* Eligibility - Gray */}
                  <td className="p-3 border border-gray-300 bg-[#F3F3F3]">
                    {item.eligibility}
                  </td>

                  {/* Required Documents - Bullet list */}
                  <td className="p-3 border border-gray-300">
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {item.documents.map((doc, idx) => (
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
    </>
  )
}

export default FeeconcessionTable
