import React from "react";

const PlacementPolicy = () => {
  const data = [
    {
      title: "Pre-Placement Talks (PPTs)",
      description:
        "Recruiting companies will present a Pre-Placement Talk outlining job roles, expectations, and selection criteria. If unavailable, the Centre for Corporate & Public Relations (C&PR) will share the details with students.",
    },
    {
      title: "Registration Rules",
      description:
        "Eligible students must register for company drives within the deadline. Failure to register for at least three companies will result in disqualification from the placement process.",
    },
    {
      title: "Nominations & Mandatory Participation",
      description:
        "For select roles, C&PR may nominate students. Attendance is compulsory for nominated candidates. If selected, the student is considered placed and exits the process.",
    },
    {
      title: "Single Offer Rule",
      description:
        "Once a student receives a confirmed offer, they are withdrawn from the placement process to allow equal opportunity for others.",
    },
    {
      title: "Company Autonomy",
      description:
        "Recruiters may shortlist students based on merit. Selection is not limited by academic specialisation.",
    },
    {
      title: "Underperformance Clause",
      description:
        "Students who miss 10 Group Discussions or 5 Personal Interviews will be temporarily suspended and required to undergo further training before resuming participation.",
    },
    {
      title: "Scheduling Protocol",
      description:
        "C&PR allocates company visit slots. Offers must follow the scheduled timeline. Spot offers are permitted only in cases of international placements, who are paying in a currency other than the rupee",
    },
    {
      title: "Private Placements Clause",
      description:
        "Students placed through AIMS who secure external offers will have both offers cancelled. Transparency is critical to the integrity of the placement process.",
    },
    {
      title: "Offer Letter Policy",
      description:
        "Offer letters are released by the Director, C&PR at convocation, post completion of all academic and financial requirements. There will be no early handovers.",
    },

    {
      title: "Official Communication Channel",
      description: (
        <>
          <p>
            All placement-related communication must go through the{" "}
            <span className="monser-600">C&PR Cell.</span> Direct contact with
            companies is a violation of protocol.
          </p>
        </>
      ),
    },
    {
      title: "Post-Convocation Responsibility",
      description:
        "Once students graduate, AIMS’ placement responsibility ends, unless a specific issue is raised by the recruiting company.",
    },
    {
      title: "No-Rejection Policy",
      description:
        "Once the student appears for the process, the student cannot reject the offer made by the company",
    },
  ];
  return (
    <>
      <div className="lg:px-8 px-4">
        <div className="lg:py-10 lg:pb-0 pb-7">
          <div className="container mx-auto border border-[#A22877] rounded-2xl">
            <div className="p-6">
              <h1 className="text-[#0C2165]">Placement Policy</h1>
              <p>
                AIMS follows a structured placement process to ensure fair
                access and strong outcomes for all eligible students. Please
                refer to the policies below for clarity on expectations and
                responsibilities.
              </p>
              {data.map((item, index) => (
                <div
                  key={index}
                  className="py-5 border-b border-dotted border-[#A22877]"
                >
                  <h6 className="text-[#8A1D64] monser-700 text-lg">
                    {item.title}
                  </h6>
                  <p className="pt-3">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlacementPolicy;
