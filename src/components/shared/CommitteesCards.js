import React from "react";
import Image from "next/image";

const CommitteesCards = ({ committees }) => {
    return (
        <div className="lg:px-8 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 container mx-auto my-10">
                {committees.map((committee, index) => (
                    <div
                        key={index}
                        className={`${committee.bgColor} rounded-xl p-6 ${committee.borderColor} border relative`}
                    >
                        {/* Icon */}
                        {committee.icon && (
                            <div className="absolute top-4 right-4">
                                <Image
                                    src={committee.icon}
                                    alt={committee.title}
                                    width={100}
                                    height={100}
                                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-14 md:h-14"
                                />
                            </div>
                        )}

                        {/* Number (only if id exists) */}
                        {committee.id && (
                            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 text-gray-800 text-sm sm:text-md font-semibold bg-white">
                                {committee.id}
                            </div>
                        )}

                        {/* Title */}
                        <h6
                            className={`text-2xl sm:text-3xl md:text-4xl ${committee.titleColor} mt-14`}
                            style={{ fontWeight: "600" }}
                        >
                            {committee.title}
                        </h6>

                        {/* Description */}
                        {committee.description && (
                            <p className="text-gray-700 mt-3 text-sm sm:text-base leading-relaxed">
                                {committee.description}
                            </p>
                        )}

                        {/* Objectives */}
                        {committee.objectives?.length > 0 && (
                            <>
                                <h4
                                    className="text-gray-900 mt-4 font-semibold"
                                    style={{ fontWeight: "600" }}
                                >
                                    {committee.objectivesTitle}
                                </h4>
                                <ul className="mt-2 space-y-2 min-h-[190px]">
                                    {committee.objectives.map((obj, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-xl">•</span>
                                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                                {obj}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {/* Frequency */}
                        {committee.frequency && (
                            <div className={`border-t ${committee.frequencyBorder} mt-4 pt-2`}>
                                <p className="text-sm font-semibold"> {committee.frequencytitle}</p>
                                <p className="text-sm">{committee.frequency}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommitteesCards;
