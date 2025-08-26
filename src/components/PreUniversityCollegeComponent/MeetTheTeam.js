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
    <section className="py-10 text-center container mx-auto">
      {/* Heading */}
      <h3 className="text-3xl font-serif font-bold text-[#243272] mb-12">
        Meet the Team
      </h3>

      {/* Team grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 px-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Circular Gradient Border */}
            <div className="">
              <div className="w-52 h-52 overflow-hidden bg-white flex items-center justify-center">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={180}
                  height={180}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Name & Subject */}
            <p className="mt-4 font-semibold" style={{ fontWeight: "600" }}>{member.name}</p>
            <p className="text-gray-600 pt-2">{member.subject}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
