import React from "react";
import Image from "next/image";

const Accredited = () => {
  return (
    <>
      <div className="lg:px-8 px-4">
      <div className="container mx-auto lg:pt-10 pt-5 lg:px-0 px-4">
        <h1 className="text-[#002561]">
          Accredited for Accuracy. <br className="lg:block hidden" /> Trusted
          for Excellence.
        </h1>
        <p className="lg:w-[75%] w-full">
          Programs offered at AIMS School of Business (AIMS Institutes) are
          accredited for the 2nd time by IACBE, USA which is a CHEA recognised
          global accreditation body. We are also proud to state that we are the
          first institution in India to have our undergraduate course (BBA)
          accredited by IACBE.
        </p>
        <h6 className="monser-600 py-3">
          Following are just a few of the significant benefits of IACBE
          accreditation:
        </h6>
        <div>
          <h5 className="text-2xl monser-600 py-3">Evidence of Quality</h5>
          <p className="lg:w-[75%] w-full">
            The IACBE provides external validation and confirmation of quality
            in an institution’s business programs, and ensures that its academic
            business unit exhibits the characteristics of excellence in business
            education. Both graduates and their employers benefit from this
            external quality assurance.
          </p>
        </div>
        <div>
          <h5 className="text-2xl monser-600 py-3">
            Sharing of Best Practices
          </h5>
          <p className="lg:w-[75%] w-full">
            The IACBE supports and promotes innovation and creativity in
            teaching and learning through the sharing of best practices in
            business education. The IACBE sponsors and conducts conferences and
            workshops throughout the year to assist in the professional
            development of business faculty and to share best practices in
            business education.
          </p>
        </div>
      </div>
      <div className="justify-center items-center flex flex-col relative overflow-hidden ">
        <div className="absolute top-0 right-0 md:block hidden rotate-180">
          <Image
            src="/iacbe/circle.svg"
            alt="School Circle Background"
            width={100}
            height={100}
            className="rotate-183"
          />
        </div>
        <div className="container mx-auto lg:px-0 px-4 lg:pb-10 pb-5">
          <div className="flex flex-col bg-transparent relative z-10">
            <div className="w-full text-[#000]">
              <h5 className="text-2xl monser-600 py-3">
                Public Accountability
              </h5>
            </div>
            <div className="text-lg">
              <p className="lg:w-[75%] w-full">
                As a CHEA (Council for Higher Education Accreditation)
                recognised accreditor, the IACBE Recognizes that the demand for
                public accountability in higher education is increasing rapidly.
                Specialised accreditation by the IACBE provides external
                accountability for the quality of an institution’s business
                programs.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accredited;
