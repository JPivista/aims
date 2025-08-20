"use client"
import React, { useState } from "react";
import Image from "next/image";

const SupportCommunity = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const content = [
    {
      text: "At the Rotaract Club, we believe in the power of community and the positive impact that collective action can have on the world. Our club is dedicated to supporting our local and global communities through service projects, advocacy, and collaboration. We recognise that there are a wide range of issues that affect our communities, and we are committed to working to address those issues in meaningful and impactful ways."
    },
    {
      text: "One way that we support our community is through service projects. Our club regularly organises service projects that aim to address a range of social and environmental issues."
    },
    {
      text: "The Rotaract Club of AIMS embodies the spirit of community support through various impactful initiatives. For instance, we organise events such as planting saplings at Bydrahalli Govt. School, conducting exercise sessions under \"PROJECT FITKIDS,\" and educating on menstrual health through \"PROJECT VIVAFEMINA.\""
    },
    {
      text: "Additionally, our commitment extends to organising healthy playing tournaments (\"PROJECT EMPOWERPLAY\"), fun Rangoli competitions (\"PROJECT RANGOLI RENDEZVOUS\"), and distributing essentials to Anganwadi kids in Agalagurki village (\"PROJECT CHALK IT UP\")."
    },
    {
      text: "We also champion financial literacy through collaboration with Rotary Bangalore Udyog, commemorate the triumph of the Kargil Conflict through \"PROJECT YODHA,\" and promote literacy among children by donating books and stationery under \"PROJECT JNANADHAARE.\""
    },
    {
      text: "Moreover, we actively participate in community welfare, exemplified by our involvement in a blood donation program hosted by Rac Nagasandra and RAC Surana at CMS."
    },
    {
      text: "In summary, the Rotaract Club of AIMS is dedicated to making a positive impact on our communities through service projects, advocacy, and collaboration, echoing the belief that supporting our communities is both a privilege and a responsibility. We aim to foster meaningful change and contribute to a better world."
    }
  ];

  const displayedContent = isExpanded ? content : content.slice(0, 2);
  const hasMoreContent = content.length > 2;

  return (
    <div className="w-full bg-[#E1F9F4] py-10 lg:px-0 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Image */}
        <div className="flex flex-col gap-4 h-fit">
          <div className="w-full h-[400px] md:h-[500px] relative">
            <Image
              src="/rotaract-club/support-for-community.png"
              alt="Community Support Event"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col md:pl-8 pl-0 justify-start">
          <h3 className="text-start text-[32px] lg:text-[56px] playfair-300 text-[#0C2165] mb-6">
            Support for Community
          </h3>
          <div>
            {displayedContent.map((paragraph, index) => (
              <p key={index} className="mt-4 pe-4">
                {paragraph.text}
              </p>
            ))}
            
            {hasMoreContent && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#000] text-xl monser-600 hover:underline cursor-pointer mt-4 inline-block"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportCommunity;
