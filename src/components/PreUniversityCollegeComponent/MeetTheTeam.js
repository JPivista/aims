import React from "react";
import Image from "next/image";

const teamMembers = [
  { name: "Mr. Basavaraj", subject: "Kannada", img: "/pre-university-college/basavaraj.webp" },
  { name: "Mr. A.J Timma Reddy", subject: "M.A Economics", img: "/pre-university-college/timma_reddy.webp" },
  { name: "Ms. Vidyarani B. V", subject: "M.Sc Mathematics", img: "/pre-university-college/vidyarani.webp" },
  { name: "Mr. S R Chethan", subject: "M.Sc B.Ed", img: "/pre-university-college/chethan.webp" },
  { name: "Ms. Aishwarya L", subject: "M.Sc B.Ed", img: "/pre-university-college/aishwarya.webp" },
];

const MeetTheTeam = () => {
  return (
    <section className="py-10 px-4 lg:px-8">
      <div className="text-center container mx-auto">
        {/* Heading */}
        <h3 className="text-3xl font-serif font-bold text-[#243272] mb-12">
          Meet the Team
        </h3>

        {/* Flex container */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-4 lg:flex-nowrap">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
              {/* Circular Gradient Border */}
              <div className="w-52 h-52 overflow-hidden rounded-full bg-white flex items-center justify-center shadow-lg">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={180}
                  height={180}
                  className="object-cover rounded-full"
                />
              </div>

              {/* Name & Subject */}
              <p className="mt-4 font-semibold text-lg">{member.name}</p>
              <p className="text-gray-600 pt-1">{member.subject}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
