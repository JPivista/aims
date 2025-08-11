'use client'
import React, { useState } from "react";

const OurAwardedScholars = () => {
    const scholarsData = {
        "Dr. Kiran Reddy": [
            {
                year: "2022",
                entries: [
                    "Ms. Navya Bhanu - Microfinance for Urban Poor - An Evaluation of Self Help Groups in Bangalore",
                ],
            },
            {
                year: "2021",
                entries: [
                    "Ms. Harshitha S - Impact of Work-life Balance on Performance of Women Employees in Service Industry",
                ],
            },
            {
                year: "2020",
                entries: [
                    "Mr. Arijit Roy - Effectiveness of Advertising in Creating Brand Equity of Product Based E-Tailers",
                    "Ms. Maria Pramila Dsouza - Impact of Accountability of Non-Governmental Organizations (NGOs) on Social Development: A Study of Select NGO's in Karnataka",
                    "Ms. Bhavya Bhanu - Impact of Recruitment Process Outsourcing on Employee Performance in Select Information Technology Organizations",
                    "Mr. Somayeh Azoor - Marketing of Renewable Energy - A Study of Solar Energy Users in Mysore",
                ],
            },
            {
                year: "2018",
                entries: ["Mohammad Javad Ghalambor"],
            },
        ],
        "Dr. Kavitha Desai": [
            { year: "2022", entries: ["Placeholder Scholar - Sample Research Title"] },
        ],
        "Dr. Somanath V.S": [
            { year: "2022", entries: ["Placeholder Scholar - Sample Research Title"] },
        ],
        "Dr. Renati Jayaprakash Reddy": [
            { year: "2022", entries: ["Placeholder Scholar - Sample Research Title"] },
        ],
        "Dr. B.A.Karunakara Reddy": [
            { year: "2022", entries: ["Placeholder Scholar - Sample Research Title"] },
        ],
    };

    const [selectedGuide, setSelectedGuide] = useState("Dr. Kiran Reddy");

    return (
        <div className="border-b border-gray-500 mb-10">
            <div className="p-5 container mx-auto">
                {/* Title */}
                <div className="lg:w-1/2 items-center text-center lg:text-left mb-6">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0c2165]">
                        Our Awarded
                    </h3>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#a22978] italic -mt-2 md:-mt-4">
                        Scholars
                    </h3>
                </div>

                {/* Layout */}
                <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-20">
                    {/* Left Side */}
                    <div className="flex-1 w-full">
                        <div className="text-2xl font-bold mb-2.5">Management</div>
                        {["Dr. Kiran Reddy", "Dr. Kavitha Desai", "Dr. Somanath V.S"].map(
                            (name) => (
                                <button
                                    key={name}
                                    onClick={() => setSelectedGuide(name)}
                                    className={`w-full sm:w-auto px-3.5 py-1 rounded-full border cursor-pointer mb-2.5 text-sm font-medium block ${selectedGuide === name
                                            ? "bg-[#a2396e] text-white border-none"
                                            : "bg-white text-black border border-black hover:bg-[#a2396e] hover:text-white hover:border-none"
                                        }`}
                                >
                                    {name}
                                </button>
                            )
                        )}

                        <div className="text-2xl font-bold mb-2.5 mt-5">Commerce</div>
                        {["Dr. Renati Jayaprakash Reddy", "Dr. B.A.Karunakara Reddy"].map(
                            (name) => (
                                <button
                                    key={name}
                                    onClick={() => setSelectedGuide(name)}
                                    className={`w-full sm:w-auto px-3.5 py-1 rounded-full border cursor-pointer mb-2.5 text-sm font-medium block ${selectedGuide === name
                                            ? "bg-[#a2396e] text-white border-none"
                                            : "bg-white text-black border border-black hover:bg-[#a2396e] hover:text-white hover:border-none"
                                        }`}
                                >
                                    {name}
                                </button>
                            )
                        )}
                    </div>

                    {/* Divider */}
                    <div className="hidden lg:block w-px bg-gray-600 self-stretch"></div>

                    {/* Right Side */}
                    <div className="flex-1 w-full">
                        <div
                            className="text-2xl md:text-4xl mb-5 pl-0 lg:pl-2 text-[#a2396e]"
                            style={{ fontWeight: "600" }}
                        >
                            Guide - {selectedGuide}
                        </div>
                        <div className="overflow-x-auto border border-gray-500 rounded-lg">
                            <table className="min-w-full border border-gray-500 rounded-lg overflow-hidden">
                                <tbody>
                                    {scholarsData[selectedGuide].map((yearBlock, idx) => (
                                        <tr key={idx} className="border-t border-gray-500">
                                            {/* Year cell */}
                                            <td
                                                className="bg-white p-3 font-bold text-center align-top w-20 border-r border-gray-500"
                                                style={{ fontWeight: "600" }}
                                            >
                                                {yearBlock.year}
                                            </td>
                                            {/* Scholars list cell */}
                                            <td className="bg-white p-3">
                                                {yearBlock.entries.length > 1 ? (
                                                    <div className="space-y-2">
                                                        {yearBlock.entries.map((entry, i) => (
                                                            <div key={i} className="flex items-start">
                                                                <span className="pr-2">•</span>
                                                                <span className="text-sm md:text-base">{entry}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <p className="text-sm md:text-base">{yearBlock.entries[0]}</p>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurAwardedScholars;
