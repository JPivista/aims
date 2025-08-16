import React from "react"
import Image from "next/image"

const RcContent = () => {
  return (
    <>
      <div className="justify-center items-start py-16 flex flex-col md:px-0 px-4 relative overflow-hidden border-b border-gray-300 ">
        <div className="absolute md:top-[8%] right-0 md:block hidden rotate-180">
          <Image
            src="/student-handbook/semi-circle.svg"
            alt="School Circle Background"
            width={120}
            height={120}
            className=" rotate-180"
          />
        </div>
        <div className="md:max-w-4xl  md:ml-20 text-[20px] px-4 md:px-0">
          <p className="">
            Everything you need as a student - from handbooks, exams, calendars,
            formalities - is housed right here.
          </p>
          <p className="my-2">
            It is our constant endeavour to create a student friendly
            environment across all our facilities, please feel free to share
            your suggestions if you feel anything can be improved further to
            <span className="monser-500"> principal@theaims.ac.in.</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default RcContent
