"use client";
import Image from "next/image";

const AntiSexualHarassment = () => {
  return (
    <>
      <div className="bg-[#FFE2E3] lg:py-10">
        <div className="flex lg:flex-row flex-col gap-4 container mx-auto border-b border-gray-300 py-10">
          <div className="flex flex-col gap-4 w-[90%]">
            <h5 className="text-2xl md:text-4xl font-bold monser-600 lg:px-0 px-4">
              ANTI-SEXUAL <br className="hidden md:block" /> HARASSMENT CELL
            </h5>
            <p className="mt-3 text-gray-600 w-full lg:px-0 px-4">
              AIMS Institutes is committed to creating and maintaining a
              community in which students, teachers, and staff can work together
              in an environment free of violence, harassment, exploitation,
              intimidation and stress. This includes all forms of gender
              violence, sexual harassment and discrimination on the basis of
              sex/gender or amongst the same sex members.
            </p>
          </div>
          {/* Right Side Image */}
          <div className="w-full flex justify-center lg:justify-end lg:w-[50%]">
            <Image
              src="/welfare-committees/anti-sexual.png"
              alt="students"
              width={400}
              height={300}
              className="rounded-xl object-cover lg:px-0 px-4"
            />
          </div>
        </div>

        <div className="relative  py-12 px-6 lg:px-0 overflow-hidden">
          {/* Top Right Overlay */}
          <div className="absolute top-96 right-0  w-40 h-40 md:w-28 md:h-56">
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
            <div>
              <h2 className="text-2xl monser-500">
                What is Sexual Harassment?
              </h2>

              <p className="mt-5 lg:w-[80%] xl:w-[80%] md:w-full w-full lg:px-0">
                “Sexual Harassment” includes any one or more of the following
                unwelcome acts or behavior (whether directly or by implication)
                such as:
              </p>

              {/* Bullet Points */}
              <div className="container mx-auto">
                <ul className="mt-6 space-y-1 text-gray-700 list-disc list-inside">
                  <li>Physical contacts and advances</li>
                  <li>A demand or request for sexual favors</li>
                  <li>Making sexually coloured remarks</li>
                  <li>
                    Showing pornography or other offensive or derogatory
                    pictures, cartoons, representations, graphics, pamphlets or
                    sayings etc.
                  </li>
                  <li>
                    Discussion of a person’s physical characteristics or dress
                  </li>
                  <li>
                    Narrating offensive jokes or sexually explicit stories
                  </li>
                  <li>Objectionable physical proximity or contact</li>
                  <li>
                    Spreading rumors or talking to third parties about a woman
                    in a demeaning fashion
                  </li>
                </ul>
              </div>
              <div className="pt-5">
                <h2 className="text-2xl monser-500 py-5">
                  Policy on Sexual Harassment
                </h2>
                <div className="flex flex-col gap-4">
                  <p>
                    AIMS Institutes shall value the dignity of every individual,
                    enhance the development of its human resources, guarantee
                    full respect for human rights, ensures the full enforcement
                    of “Fundamental Rights” under articles 14, 15, 19 (1) (g)
                    and 21 of the Constitution of India, and uphold the dignity
                    of its students, faculty and staff.
                  </p>
                  <p>
                    Towards this end, all forms of sexual harassment in the
                    employment, education or training environment are hereby
                    declared unlawful.
                  </p>
                  <p>
                    In order to comply with the UGC Regulations and based on the
                    Vishaka guidelines, the Institute has constituted the
                    Internal Complaints Committee (ICC) to carry on the mandate
                    of this policy.
                  </p>
                </div>
              </div>

              <div className="pt-5">
                <h2 className="text-2xl monser-500 py-5">
                  Procedure for Registering Complaints
                </h2>
                <div className="flex flex-col gap-4">
                  <p>
                    An aggrieved person is required to file a written complaint
                    within 3 months from the date of incident.
                  </p>
                  <p>
                    In case of a series of incidents within a period of three
                    months from the date of the last incident. The complaint may
                    be addressed and submitted to the Principal’s Office.
                  </p>
                </div>
              </div>

              <div className="">
                {/* Contact Box */}
                <div className="mt-8 border border-[#A22877] bg-white rounded-lg lg:w-[80%] xl:w-[80%] md:w-full w-full px-4 p-4 md:p-6 shadow-sm">
                  <p>
                    You may also contact:{" "}
                    <strong className="text-[#000] monser-500">
                      Ms. Sudha S -{" "}
                    </strong>{" "}
                    <a href="tel:9448525018" className="text-[#000] monser-500">
                      9448525018
                    </a>
                  </p>
                  <p className="">
                    or use one of the following means:
                    <ul className="list-disc list-inside mt-3 px-4">
                      <li className="underline">
                        <a href="/grievance-redressal" target="_blank">
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
              <div className="pt-5">
                <h2 className="text-2xl monser-500 py-5">False Reporting:</h2>
                <div className="flex flex-col gap-4">
                  <p>
                    Intentionally making a false report or providing false
                    information is grounds for indiscipline. If, at the
                    culmination of the proceedings before it, the Committee is
                    satisfied that the complainant has knowingly brought false
                    charges of sexual harassment against any person, it shall
                    report the same in writing to the Principal/Management, with
                    reasons and with recommendations of the action to be taken
                    against such person.
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

export default AntiSexualHarassment;
