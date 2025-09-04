"use client";
import React from "react";
import Image from "next/image";

const Partnerships = () => {
  return (
    <>
    <div className=" px-4 lg:px-8">
    <div className="container mx-auto py-10 space-y-12">
      {/* EUHOFA Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 border-b pb-8">
        {/* Image for mobile first */}
        <div className="flex justify-center md:order-2">
        <div className="shadow-lg rounded-lg p-4  lg:w-60  w-44 h-full">
            <Image
              src="/bhm-img/euhofa-img_converted.webp"
              alt="EUHOFA Logo"
              width={200}
              height={100}
              className="object-contain w-60 h-full"
            />
          </div>
        </div>
        {/* Text */}
        <div className="md:col-span-2 md:order-1">
    
          <h4 className="text-xl lg:text-[24px] font-bold text-[#000000] monser-600 mb-3">
            AIMS School of Hospitality & Tourism has been a member of EUHOFA
            International since July 2017 and has been elected to the board in
            October 2023.
          </h4>
          <p   className="text-gray-700 mb-6 leading-relaxed">
            Founded in 1955, EUHOFA INTERNATIONAL is the first international
            association of universities and schools of hospitality management
            and tourism. It was created by the Alpine hotel schools with the aim
            of assessing the latest trends and development of the hotel sector
            and its impact on hotel training. In 1974, it became an advisory
            member of the Council of Europe.
          </p>
          <p   className="text-gray-700 mb-6 leading-relaxed">
            Currently, EUHOFA International has more than 200 universities and
            schools of hospitality management, tourism, and culinary arts on
            five continents. The members of the association are the directors
            and deans of these institutions, leaders in their territory.
          </p>
        </div>
      </div>

      {/* HOSCO Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
        {/* Image for mobile first */}
        <div className="flex justify-center md:order-2">
          <div className="shadow-lg rounded-lg p-4 lg:w-60  w-44 h-full">
            <Image
              src="/bhm-img/hosco-img_converted.webp"
              alt="Hosco Logo"
              width={200}
              height={100}
              className="object-contain  w-60 h-full"
            />
          </div>
        </div>
        {/* Text */}
        <div className="md:col-span-2 md:order-1">
        <h4 className="text-xl lg:text-[24px] font-bold text-[#000000] monser-600 mb-3">
            AIMS School of Hospitality & Tourism is associated with HOSCO which
            manages and operates a private online community that brings together
            leading employers, schools and top talents of the hospitality
            industry to maximise interactions and optimise the recruiting
            process.
          </h4>
          <p   className="text-gray-700 mb-6 leading-relaxed">
            All the students and alumni of AIMS School of Hospitality & Tourism
            can utilise the HOSCO platform and connect with leading
            employers/hotels globally at any point in their careers. This
            provides an amazing opportunity for the students and alumni of AIMS
            to start their professional careers on a global platform and make
            their mark.
          </p>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Partnerships;
