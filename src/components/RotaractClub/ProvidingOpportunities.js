import React from "react";
import Image from "next/image";

const ProvidingOpportunities = () => {
  return (
    <div className="w-full pb-10 lg:px-0 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* Left Column - Image */}
        <div className="flex flex-col gap-4 col-span-1">
          <Image
            src="/rotaract-club/providing-oppertunities.png"
            alt="Providing Opportunities"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl lg:text-5xl playfair-300 text-[#0C2165] leading-tight">
            Providing Opportunities
          </h2>

          <div className="text-gray-800 leading-relaxed space-y-4">
            <p className="text-lg">
              The Rotaract Club is dedicated to providing opportunities for
              personal and professional growth to our members. Through
              leadership development programs, mentorship, and networking
              events, we aim to equip our members with the skills and resources
              they need to succeed in their careers and make a positive impact
              in the world. We believe in the power of investing in young
              leaders and are committed to helping our members unlock their full
              potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvidingOpportunities;
