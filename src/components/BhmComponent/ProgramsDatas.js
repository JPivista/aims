// components/ValueAddedPrograms.tsx
"use client";

import { useState } from "react";

const programsData = {
  "2024-2028": [
    {
      course: "BHM",
      vap: "Psychometric Assessment & Career Mapping",
      description:
        "Career Mapping\nDiscover your strengths, interests, and career pathways through structured psychometric assessments and personalized guidance. Implemented through standardized tests and counselling sessions by experts. This program helps students make informed academic and career decisions.",
    },
    {
      course: "BHM",
      vap: "Financial Literacy",
      description:
        "Build real-world money skills—saving, budgeting, investing, and smart financial decisions—for a secure future. Delivered through interactive workshops, case studies, and simulations and insights by industry experts, it empowers students to manage personal finance confidently.",
    },
    {
      course: "BHM",
      vap: "Gig Economy",
      description:
        "Understand freelancing, flexible work, and the gig market to explore diverse career opportunities in today’s digital world. Through hands-on projects and industry case examples, students will learn how to build profiles, manage clients, and thrive in independent careers delivered by professionals.",
    },
  ],
  "2029-2029": [
    {
      course: "BHM",
      vap: "Public Speaking, Communication & Critical Skills",
      description:
        "This program focuses on developing clear communication, confidence in public speaking, and the ability to think critically. Students engage in role plays, group discussions, and short presentations to practice and improve these skills in a supportive environment.",
    },
    {
      course: "BHM",
      vap: "Interview Preparation",
      description:
        "Ace your placements with AI-powered tools and expert guidance on interviews, body language, and impactful responses. Students will practice through mock interviews, receive instant feedback, and build confidence to face real recruiters.",
    },
    {
      course: "BHM",
      vap: "Advanced Readiness & Industry Integration",
      description:
        "This program prepares students for professional life by familiarizing them with workplace practices, professional etiquette, and industry expectations. Discussions with experts and real-world case studies give students a practical perspective on how to succeed after graduation.",
    },
    {
      course: "BHM",
      vap: "MS Office & Analytics",
      description:
        "Learn Excel, Word, PowerPoint, and basic analytics to boost productivity and decision-making. Delivered through hands-on practice sessions, exercises, and mini-projects by industry professionals, this program equips students with essential workplace digital skills.",
    },
    {
      course: "BHM",
      vap: "Entrepreneurship Program",
      description:
        "Preparing tomorrow’s leaders for intrapreneurship (working in a corporate) and entrepreneurship (working for yourself). Turn ideas into ventures with practical insights on innovation, business models, and startup essentials and learn from founders, startup experts and industry professionals. Students work on idea generation, business plans, and pitching exercises and nurture their entrepreneurial mindset from a foundational level of understanding basics all the way to getting an advanced and hands on experience in building ideas from scratch.",
    },
  ],
};

export default function ValueAddedPrograms() {
  const [activeTab, setActiveTab] = useState("2024-2028");

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
        <h3 className="text-3xl lg:text-4xl font-semibold text-[#1A2C6D]">
          Value Added <br /> Programs
        </h3>
        <p className="text-gray-700 max-w-2xl mt-4 lg:mt-0">
          In our effort to build the profile of the participants of the
          program and ensure they meet the requirements of the industry (in
          addition to personality development), we at AIMS incorporate a set of
          value added programs in each semester.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-8">
        {Object.keys(programsData).map((year) => (
          <button
            key={year}
            onClick={() => setActiveTab(year)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
              activeTab === year
                ? "bg-[#6B1E8A] text-white border-[#6B1E8A]"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            Year: {year}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-[#E5B8D9]">
          <thead>
            <tr className="bg-[#6B1E8A] text-white text-left">
              <th className="px-6 py-3 border border-[#E5B8D9] text-sm font-semibold">Course</th>
              <th className="px-6 py-3 border border-[#E5B8D9] text-sm font-semibold">VAP</th>
              <th className="px-6 py-3 border border-[#E5B8D9] text-sm font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            {programsData[activeTab].map((item, idx) => (
              <tr key={idx} className="bg-[#FDF7FA]">
                <td className="px-6 py-4 border border-[#E5B8D9] font-bold text-gray-800">
                  {item.course}
                </td>
                <td className="px-6 py-4 border border-[#E5B8D9] text-gray-900">{item.vap}</td>
                <td className="px-6 py-4 border border-[#E5B8D9] whitespace-pre-line text-gray-700">
                  {item.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
