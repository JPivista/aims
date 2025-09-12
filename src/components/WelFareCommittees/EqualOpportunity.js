"use client";
import Image from "next/image";

const EqualOpportunity = () => {
  return (
    <>
      <div className="bg-[#EFE0F6] lg:py-10">
        <div className="lg:px-8 px-4">
          <div className="flex lg:flex-row flex-col gap-4 container mx-auto border-b border-gray-300 py-10">
            <div className="flex flex-col gap-4 w-[90%]">
              <h5 className="text-2xl md:text-4xl font-bold monser-600 lg:px-0 px-4">
                EQUAL <br className="hidden md:block" /> OPPORTUNITY CELL
              </h5>
              <p className="lg:mt-3 text-gray-600 w-full lg:px-0 px-4">
                AIMS Institutes shall ensure a level playing ground for all
                students in respect of entitlement and opportunity for enjoyment
                of all legitimate rights as specified under UGC (Promotion of
                Equity in Higher Educational Institutions) Regulations 2012.
              </p>
            </div>
            {/* Right Side Image */}
            <div className="w-full flex justify-center lg:justify-end lg:w-[50%]">
              <Image
                src="/welfare-committees/equality.webp"
                alt="students"
                width={400}
                height={300}
                className="rounded-xl object-cover lg:px-0 px-4"
              />
            </div>
          </div>
        </div>

        <div className="relative  py-12 px-6 lg:px-0 overflow-hidden">
          {/* Top Right Overlay */}
          <div className="absolute top-40 right-0  w-40 h-40 md:w-28 md:h-56">
            <Image
              src="/welfare-committees/circle.svg"
              alt="overlay"
              fill
              className="object-contain rotate-180 hidden md:block"
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10 gap-8 items-start container mx-auto">
            {/* Left Content */}
            <div className="lg:px-8 px-4">
              <p className="lg:w-[80%] xl:w-[80%] md:w-full w-full lg:px-0">
                Any kind of discrimination on the basis of caste, creed,
                religion, language, ethnicity, gender and disability is strictly
                prohibited at the Institutes. The Institute will be very
                sensitive while dealing with incidents of caste discrimination
                and a strict action will be taken against such cases.
              </p>
              <p className="pt-5 lg:w-[80%] xl:w-[80%] md:w-full w-full lg:px-0">
                It will also be ensured that no official/faculty member indulge
                in any kind of discrimination against any community or category
                of students and will take strict action against the erring
                official/faculty member, if any such incident comes to the
                notice of the authorities.
              </p>
              <p className="pt-5 lg:w-[80%] xl:w-[80%] md:w-full w-full lg:px-0">
                An Equal Opportunity Cell has been established to address any
                incident of such discrimination/harassment on the basis of
                caste, creed, religion, language, ethnicity, gender and
                disability and any complaint shall be reported in writing to the
                Anti-Discrimination Officer.
              </p>

              {/* Bullet Points */}

              <div className="">
                {/* Contact Box */}
                <div className="mt-8 border border-[#A22877] bg-white rounded-lg lg:w-[80%] xl:w-[80%] md:w-full w-full px-4 p-4 md:p-6 shadow-sm">
                  <p>
                    Complaints may also be submitted in one of the following
                    ways:
                  </p>
                  <p>
                    <ul className="list-decimal list-inside px- pt-3">
                      <li>In writing to the Principal/Registrar</li>
                      <li>Or use one of the following means</li>
                    </ul>
                    <ul className="list-disc list-inside px-4 pt-3">
                      <li className="">
                        <a
                          href="/grievance-redressal"
                          target="_blank"
                          className="underline"
                        >
                          Grievance Registration Portal Link
                        </a>
                      </li>
                      <li>
                        Email:{" "}
                        <a
                          href="mailto:grievances@theaims.ac.in"
                          className="text-[#A22877] monser-500"
                        >
                          grievances@theaims.ac.in
                        </a>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EqualOpportunity;
