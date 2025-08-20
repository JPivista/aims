"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const SupportCommunity = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const displayedContent = content.slice(0, 2);
  const hasMoreContent = content.length > 2;

  // ✅ Lock background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";  // Stop scroll
    } else {
      document.body.style.overflow = "auto";    // Restore scroll
    }

    return () => {
      document.body.style.overflow = "auto";    // Cleanup on unmount
    };
  }, [isModalOpen]);

  return (
    <div className="w-full bg-[#E1F9F4] py-10 lg:px-0 px-4">
      <div className="container mx-auto">
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
                <p key={index} className="pe-4">
                  {paragraph.text}
                </p>
              ))}

              {hasMoreContent && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-[#000] text-xl monser-600 hover:underline cursor-pointer mt-4 inline-block"
                >
                  Read More
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          {/* Overlay */}
          <span
            onClick={() => setIsModalOpen(false)}
            className="absolute inset-0 cursor-pointer z-40 bg-black opacity-75"
          ></span>

          {/* Modal Box */}
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative z-50">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h3 className="text-2xl lg:text-3xl playfair-300 text-[#0C2165]">
                Support for Community
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold cursor-pointer"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-6 py-6">
              <div className="max-w-4xl">
                {content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="mt-4 first:mt-0 text-gray-700 leading-relaxed"
                  >
                    {paragraph.text}
                  </p>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-[#0C2165] text-white px-6 py-2 rounded-lg hover:bg-[#0C2165]/90 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportCommunity;
