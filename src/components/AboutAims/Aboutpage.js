"use client"
import React from "react"

const Aboutpage = () => {
  return (
    <section className="py-10  ">
      {/* Empowering Minds Section */}
      <div>
        <h3 className="container mx-auto  text-[#0C2165] playfair-300 mb-3 md:mb-6 pb-5 leading-tight  px-4">
          Empowering Minds <br /> Since 1994
        </h3>
        <div className="bg-[#E0F7F4]  py-3 rounded-md  ">
          <p className="container mx-auto px-4">
            At AIMS Institutes, education is not a routine, it is a deliberate
            pursuit. Since our founding in 1994, we&apos;ve focused on helping
            students set clear goals and build the precision, discipline, and
            confidence required to reach them.
          </p>
          <p className="container mx-auto  mt-4 px-4 ">
            Recognised as one of the top business & hospitality colleges in
            Bangalore, AIMS offers industry-relevant programs, outcome-focused
            lectures, and a strong commitment to student transformation. Our
            ecosystem supports every learner, from first-generation students to
            future entrepreneurs, with a clear roadmap to success.
          </p>
        </div>
      </div>

      {/* What Sets Us Apart Section */}
      <div className="pt-5  ">
        <h3 className=" container mx-auto  text-[#0C2165] playfair-300 leading-tight px-4 ">
          What Sets Us Apart
        </h3>
        <p className="  container mx-auto px-4  ">
          Our learning culture promotes enquiry, innovation, and impact. As one
          of the best MBA colleges in Bangalore, our management programs are
          designed to deliver both breadth and depth, equipping students to lead
          in a competitive, globalised world. Meanwhile, our hospitality,
          commerce, and other professional courses sharpen critical thinking,
          build soft skills, and prepare graduates to thrive across sectors.
        </p>
      </div>
    </section>
  )
}

export default Aboutpage
