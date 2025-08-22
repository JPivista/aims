import React from "react"
import Image from "next/image"

const Aiming = () => {
  return (
    <>
      <div className="relative">
        <div className="container mx-auto border border-red-500">
          {/* Row-1 */}
          <div className="max-w-6xl py-6 md:py-10 px-4 md:px-0">
            <h2 className="text-3xl md:text-6xl text-[#0C2165] mb-6 md:mb-8 playfair-300">
              Purpose in Action. <br /> AIM for a More Compassionate World.
            </h2>
            <div className="flex flex-col gap-4 w-full md:w-4/5 lg:w-4/5">
              <p className="text-sm md:text-base  monser-400">
                For collaborations and support, write to us at{" "}
                <span className="text-[#A22877] monser-600 underline">
                  accs@theaims.ac.in
                </span>
              </p>
              <p className="text-sm md:text-base  monser-400">
                Founded in 2009, the AIMS Centre for Community Service (ACCS)
                serves as a bridge between the classroom and the community.
                Designed to foster civic responsibility and empathy, the centre
                helps students turn learning into meaningful action through
                structured college community service programs in Bangalore.
              </p>
              <p className="text-sm md:text-base monser-400">
                From blood donation drives and health camps to sanitation
                campaigns and collaborations with NGOs in Bangalore, ACCS offers
                students opportunities to contribute to the world around them,
                not out of obligation, but out of purpose. These experiences
                build self-awareness, deepen social responsibility, and instil
                values that last well beyond the classroom.
              </p>
            </div>
          </div>

          {/* Row 2: Left Image, Right Content */}
          <div className="flex flex-col md:flex-row lg:flex-row gap-6 py-6 md:py-10 px-4 md:px-0">
            {/* Left Side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center md:justify-start lg:justify-start ">
              <Image
                src="/community-service/our-approach.png"
                alt="Community Approach"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2 space-y-4">
              <h2 className="text-3xl md:text-6xl text-[#0C2165] mb-6 md:mb-8 playfair-300 leading-tight">
                Our Approach
              </h2>
              <p className="text-sm md:text-base monser-400">
                At ACCS, we believe education must extend beyond campus walls.
                That's why we work closely with both urban and rural communities
                to design initiatives that reflect real needs and long-term
                impact.
              </p>
              <p className="text-sm md:text-base monser-400">
                Each initiative is hands-on and inclusive, helping students
                across departments take part in student-led social initiatives
                in Bangalore. Whether it's volunteering at rehabilitation
                centres or running HIV/AIDS awareness programs by colleges in
                Bangalore, ACCS encourages every student to AIM for a better
                tomorrow.
              </p>
            </div>
          </div>

          {/* Row 3: Left Content, Right Image */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-16 py-6 md:py-10 px-4 md:px-0">
            {/* Left Side - Content */}
            <div className="w-full lg:w-1/2 space-y-4">
              <h2 className="text-3xl md:text-6xl text-[#0C2165] mb-6 md:mb-8 playfair-300 leading-tight">
                Objectives
              </h2>
              <h4 className="text-md md:text-lg text-[#0C2165] monser-600 mb-3">
                ACCS works to:
              </h4>
              <ul className="space-y-2 sm:space-y-3 list-disc list-outside md:text-[18px] monser-400">
                {[
                  "Imbibe the feeling of reciprocity among the students, i.e. serving the community back as it serves us",
                  "Involve all the departments and their students collectively in the work",
                  "Bring about social change in the surrounding urban and rural communities",
                  "Strengthen sense of civic responsibility of young people",
                ].map((objective, index) => (
                  <li
                    key={index}
                    className="text-base md:text-[18px] leading-relaxed monser-400"
                  >
                    {objective}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end ">
              <Image
                src="/community-service/objectives.png"
                alt="Community Objectives"
                width={1000}
                height={1000}
                className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[10%] right-0 hidden lg:block">
          <Image
            src="/community-service/semi-circle.svg"
            alt="Community Service"
            width={230}
            height={150}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  )
}

export default Aiming
