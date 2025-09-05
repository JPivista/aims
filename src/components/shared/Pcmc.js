"use client";
import React, { useState } from "react";
import Image from "next/image";

const TabbedInfoSection = ({
    mainHeading,
    mainDescription,
    subHeading,
    subDescription,
    tabData,
    bgImage,
    tabDescription,
    style = {} // allow custom styles
}) => {
    const firstTabKey = Object.keys(tabData)[0];
    const [activeTab, setActiveTab] = useState(firstTabKey);

    return (
        <div className="relative overflow-hidden lg:px-8 px-4" style={style}>
            <div className="container mx-auto pt-10">
                {/* First Section */}
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-[90%] pr-6">
                        <h3
                            className="text-2xl font-bold mb-4 leading-snug text-[#0C2165]"
                            dangerouslySetInnerHTML={{ __html: mainHeading }}
                        />

                        {/* ✅ Handle multiple description blocks */}
                        {Array.isArray(mainDescription) ? (
                            mainDescription.map((desc, index) => (
                                <p
                                    key={index}
                                    className="text-gray-700 mb-8"
                                    dangerouslySetInnerHTML={{ __html: desc }}
                                />
                            ))
                        ) : (
                            <p
                                className="text-gray-700 mb-8"
                                dangerouslySetInnerHTML={{ __html: mainDescription }}
                            />
                        )}
                    </div>
                </div>

                {/* Second Section */}
                <div className="w-full bg-white">
                    <h3
                        className="text-2xl font-bold mb-4 text-[#0C2165]"
                        dangerouslySetInnerHTML={{ __html: subHeading }}
                    />
                    {subDescription.map((desc, index) => (
                        <p
                            key={index}
                            className="text-gray-700 mb-4"
                            dangerouslySetInnerHTML={{ __html: desc }}
                        />
                    ))}
                </div>

                {/* Tabs Section */}
                <div className="flex flex-col md:flex-row w-full py-8 gap-8 md:px-12">
                    {/* Left Tabs */}
                    <div className="flex flex-col gap-2 w-full md:w-[40%] items-start">
                        {Object.keys(tabData).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`w-fit px-4 py-2 rounded-full border cursor-pointer mb-2.5 text-sm font-medium text-left ${
                                    activeTab === key
                                        ? "bg-[#a2396e] text-white border-none"
                                        : "bg-white text-black border border-black hover:bg-[#a2396e] hover:text-white hover:border-[#a2396e]"
                                }`}
                            >
                                {tabData[key].title} {tabData[key].subtitle}
                            </button>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px bg-gray-500"></div>

                    {/* Right Content */}
                    <div className="w-full md:w-[60%]">
                        <h5 className="text-2xl text-[#a2396e]" style={{ fontWeight: "600" }}>
                            {tabData[activeTab].title}
                        </h5>
                        <p className="text-gray-600 mb-4">{tabData[activeTab].subtitle}</p>
                        <div className="bg-[#a2396e] text-white p-6 rounded-xl">
                            {tabData[activeTab].description}
                        </div>
                    </div>
                </div>
                <p className="text-gray-600 mb-4">{tabDescription}</p>
            </div>

            {/* Background Image */}
            {bgImage && (
                <div className="absolute top-10 -right-10 z-0 pointer-events-none hidden md:block">
                    <Image
                        src={bgImage}
                        width={200}
                        height={200}
                        alt="Decorative"
                        className="object-contain"
                    />
                </div>
            )}
        </div>
    );
};

export default TabbedInfoSection;
