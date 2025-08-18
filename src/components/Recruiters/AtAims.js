import React from "react";
import Image from "next/image";

const AtAims = () => {
  return (
    <>
      <div className="container mx-auto flex lg:flex-row flex-col-reverse py-10 justify-center items-center gap-10">
        <div className="flex flex-col items-center justify-center gap-5 lg:px-x px-4">
          <p>
            At AIMS Institutes, we believe every career path is a target
            achieved through preparation and clear aim. As one of the leading
            colleges with placement assistance, our Placement Cell forges strong
            ties with top recruiters across industries, ensuring our students
            are ready to step confidently into the professional world.
          </p>
          <p>
            Our dedicated Corporate & Public Relations (CPR) team works closely
            with recruiting partners to identify the right fit, streamline the
            placement process, and ensure timely coordination across
            departments.
          </p>
          <p>
            With more than 100 companies including global majors, fortune-500
            companies, startups, hotels, among many others recruiting AIMERS and
            providing amazing platform to start their careers with, it is always
            a privilege to work closely with the companies and the students and
            create a meaningful platform to help each other find the right fit
            for close to 3 decades now.
          </p>
        </div>
        <div>
          <Image
            src="/recruiters/at-aims.png"
            alt="Recruiters"
            width={1000}
            height={1000}
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default AtAims;
