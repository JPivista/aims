"use client";
import Image from "next/image";

const AntiRagging = () => {
  return (
    <>
      <div className="bg-[#E1F9F4] lg:py-10">
        <div className="flex lg:flex-row flex-col gap-4 container mx-auto border-b border-gray-300 py-10">
          <div className="flex flex-col gap-4 w-[90%]">
            <h5 className="text-2xl md:text-4xl font-bold monser-600 lg:px-0 px-4">
              ANTI-RAGGING <br className="hidden md:block" /> COMMITTEE
            </h5>
            <p className="lg:mt-3 text-gray-600 w-full lg:px-0 px-4">
              AIMS Institutes shall ensure that its campus and accommodations
              facilities are free of the menace of ragging.
            </p>
          </div>
          {/* Right Side Image */}
          <div className="w-full flex justify-center lg:justify-end lg:w-[50%]">
            <Image
              src="/welfare-committees/anti-ragging.png"
              alt="students"
              width={400}
              height={300}
              className="rounded-xl object-cover lg:px-0 px-4"
            />
          </div>
        </div>

        <div className="relative  py-12 px-6 md:px-20 lg:px-32 overflow-hidden">
          {/* Top Right Overlay */}
          <div className="absolute top-0 right-0  w-40 h-40 md:w-28 md:h-56">
            <Image
              src="/welfare-committees/circle.svg"
              alt="overlay"
              fill
              className="object-contain rotate-180 hidden md:block"
            />
          </div>

          {/* Bottom Left Overlay */}
          <div className="absolute bottom-0 left-0 w-40 h-40 md:w-28 md:h-56">
            <Image
              src="/welfare-committees/circle.svg"
              alt="overlay"
              fill
              className="object-contain hidden md:block"
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10 gap-8 items-start container mx-auto">
            {/* Left Content */}
            <div>
              <h2 className="text-2xl monser-500">Anti-Ragging Policy</h2>
              <p className="mt-5 lg:w-[80%] xl:w-[80%] md:w-full w-full lg:px-0">
                Ragging is a criminal offence and is governed by the
                Anti-Ragging Code of the UGC. The Institution is firm on
                ensuring that the UGC framed regulations on prohibition,
                prevention, and elimination of ragging are strictly followed on
                campus. It is punishable under Sec. 116 of the Karnataka
                Education Act, 1983 (Karnataka Act No. 1 of 1995).
              </p>

              {/* Bullet Points */}
              <div className="container mx-auto flex flex-col justify-center items-center lg:w-[80%] xl:w-[80%] md:w-full w-full lg:px-0 px-4">
                <ul className="mt-6 space-y-4 text-gray-700">
                  <li className="flex items-center gap-3 border-b border-[#B5C7C3] pb-4">
                    <Image
                      src="/welfare-committees/check.svg"
                      alt="check"
                      width={20}
                      height={20}
                    />
                    <p>
                      Students who violate this rule will be instantly suspended
                      from the institution and accommodations and are subject to
                      severe punishment.
                    </p>
                  </li>
                  <li className="flex items-start gap-3 border-b border-[#B5C7C3] pb-4">
                    <Image
                      src="/welfare-committees/check.svg"
                      alt="check"
                      width={20}
                      height={20}
                    />
                    <p>
                      The matter will be placed before the Anti-Ragging
                      Committee, which will review the incident of ragging and
                      take action according to the due process of law.
                    </p>
                  </li>
                  <li className="flex items-start gap-3 border-b border-[#B5C7C3] pb-4">
                    <Image
                      src="/welfare-committees/check.svg"
                      alt="check"
                      width={20}
                      height={20}
                    />
                    <p>
                      Students must take note that ragging results in their
                      dismissal from the Institutes.
                    </p>
                  </li>
                  <li className="flex items-start gap-3 border-b border-[#B5C7C3] pb-4">
                    <Image
                      src="/welfare-committees/check.svg"
                      alt="check"
                      width={20}
                      height={20}
                    />
                    <p>
                      Attention of the students is also drawn to the judgment of
                      the Hon&apos;ble Supreme Court of India, wherein it is
                      mandatory for the institution to file a complaint with the
                      Police Authority, and with all resulting consequences as
                      per “The Circular of the Education Department, Government
                      of Karnataka dated 16/08/1999 on Prohibition of Ragging in
                      Colleges and Hostels.”
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Image
                      src="/welfare-committees/check.svg"
                      alt="check"
                      width={20}
                      height={20}
                    />
                    <p>
                      In accordance with the directives of the Honorable Supreme
                      Court of India and the UGC Regulations, on curbing the
                      Menace of Ragging in Higher Educational Institutions,
                      2009, the Institute has constituted the Anti-Ragging
                      Committee and Anti-Ragging Squads for overseeing the
                      strict and meticulous implementation of all the
                      directives.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="flex justify-center items-center">
                {/* Contact Box */}
                <div className="mt-8 border border-[#A22877] bg-white rounded-lg lg:w-[80%] xl:w-[80%] md:w-full w-full px-4 p-4 md:p-6 shadow-sm">
                  <p>
                    For any ragging related grievances contact:{" "}
                    <strong>Dr. Shivaprasad</strong>, Mobile:{" "}
                    <a
                      href="tel:9880205105"
                      className="text-[#A22877] monser-500"
                    >
                      9880205105
                    </a>
                  </p>
                  <p className="">
                    or use one of the following means:
                    <ul className="list-disc list-inside mt-3 px-4">
                      <li><a href="/grievance-redressal" target="_blank" className="underline">
                        
                      Grievance Registration Portal Link</a></li>
                      <li>Email:{" "}
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

export default AntiRagging;