import React from "react"
import Image from "next/image"

const Aiming = () => {
  return (
    <>
     <div className="justify-center items-center flex flex-col lg:px-0 px-4  relative ">
        
        <div className="absolute md:-top-100 mt-[40%] right-0 md:block hidden">
          <Image
            src="/school-circle.svg"
            alt="School Circle Background"
            width={200}
            height={200}
   
          />
        </div>
      </div> 
    <div className="container mx-auto ">
      {/* Row 2: Left Image, Right Content */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-6 lg:gap-6 py-6 sm:py-8 md:py-10 lg:py-10 mt-5">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start  ">
          <Image
            src="/about-aims/About-img1.webp"
            alt="Community Approach"
            width={1000}
            height={1000}
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
            priority
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 px-4 sm:px-6 md:px-8 ">
          <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-[65px] text-[#0C2165] mb-6 sm:mb-8 md:mb-10 playfair-300 leading-tight">
            Our Vision
          </h3>
          <p className="text-base sm:text-lg md:text-[18px] leading-relaxed monser-400">
            Transform youth into professionals of global excellence with a deep
            concern for society.
          </p>
        </div>
      </div>

      

      {/* Row 3: Left Content, Right Image */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-10">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 px-4 sm:px-6 md:px-8 ">
          <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-[65px] text-[#0C2165] mb-6 sm:mb-8 md:mb-10 playfair-300 leading-tight">
          Our Mission
          </h3>
          {/* <h4 className="text-lg sm:text-xl md:text-[20px] text-[#0C2165] monser-600 mb-3 sm:mb-4">
            ACCS works to:
          </h4> */}
          <p>AIMS Institutes continuously strives to:</p>
          <ul className=" sm:space-y-3 list-disc list-outside ml-4 sm:ml-6">
            <li className="text-base sm:text-lg md:text-[18px] leading-relaxed monser-400">
            Establish and maintain the state of-the-art infrastructure
            </li>
            <li className="text-base sm:text-lg md:text-[18px] leading-relaxed monser-400">
            Engage faculty of the highest competence
            </li>
            <li className="text-base sm:text-lg md:text-[18px] leading-relaxed monser-400">
            Improve teaching aids, methodologies, and training tools for both faculty and students
            </li>
            <li className="text-base sm:text-lg md:text-[18px] leading-relaxed monser-400">
            Inculcate in students the spirit of team work, leadership, entrepreneurship, global perspective, quality, values of ethical behaviour and sensitivity to society
            </li>
            <li className="text-base sm:text-lg md:text-[18px] leading-relaxed monser-400">
            Nurture professionalism and effective industry interaction
            </li>
           
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end py-5">
          <Image
            src="/about-aims/About-img2.svg"
            alt="Community Objectives"
            width={1000}
            height={1000}
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default Aiming
