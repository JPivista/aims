import Button from "@/shared/Button"
import Image from "next/image"
import React from "react"

const StudentExitFormalities = () => {
  return (
    <>
      <div className="px-4 md:px-8 lg:px-8 pb-6 md:pb-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-start md:items-start md:order-1 order-2">
              <h1 className="text-[#0C2165] playfair-300 text-5xl">
                Student Exit <br className="hidden md:block" /> Formalities
              </h1>
              <div className="space-y-4">
                <p>
                  Once you successfully complete your final semester exams, you
                  need to follow the respective processes listed in the attached
                  document. You can download your EXIT FORM and approach the
                  respective authorised person at the campus.
                </p>
              </div>

              <div className="flex md:flex-row flex-col gap-4 py-6 items-center">
                <Button href="/student-handbook/Student-Handbook/Student Exit Formalities Process.pdf">
                  Student Exit Formalities Process
                </Button>
                <Button href="/student-handbook/Student-Handbook/Student Exit Formalities Form.pdf">
                  Student Exit Formalities Form
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex flex-col gap-4 lg:order-2 order-1">
              <Image
                src="/alumni-association/events-and-reunions.webp"
                alt="Young men playing basketball outdoors"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentExitFormalities
