"use client"

import Image from "next/image"
import React from "react"

const EsprPurposeScope = () => {
  return (
    <>
      {/* OUR OBJECTIVES */}
      <div className="justify-center items-center flex flex-col lg:px-0 px-4 relative overflow-hidden py-10">
        <div className="container mx-auto">
          <div className="flex flex-col bg-transparent relative z-10">
            {/* Our Purpose */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              <div className="flex flex-col gap-4">
                <Image
                  src="/environment-sustainability-policy-report/purpose.webp"
                  alt="Our Purpose"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col lg:pl-8 pl-0 justify-center">
                <h3 className="text-start text-[32px] lg:text-[56px] playfair-300 text-[#0C2165]">
                  Purpose
                </h3>
                <div>
                  <p>
                    Consistent with AIMS&apos;s Mission, Code of Conduct and the
                    Environmental and Sustainability (E&S) Vision, AIMS is
                    committed to an environmentally sustainable manner of
                    conducting our operations that positively impact our
                    students, staff, employees, the immediate community and the
                    environment. The purpose of this policy is to implement the
                    principles of the Environmental and Sustainability program,
                    which also includes our green initiatives. All individuals
                    associated with AIMS exist to support these principles.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Scope */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              <div className="flex flex-col lg:pl-8 pl-0 order-2 lg:order-1 justify-center">
                <h3 className="text-start text-[32px] lg:text-[56px] playfair-300 text-[#0C2165]">
                  Scope
                </h3>
                <p>
                  AIMS Institutes and all related entities, including students,
                  faculty, staff, support staff, infrastructure, related
                  employees, including contractors working within AIMS and
                  others working on behalf of AIMS.
                </p>
              </div>
              <div className="flex flex-col gap-4 order-1 lg:order-2">
                <Image
                  src="/environment-sustainability-policy-report/scope.webp"
                  alt="Our Scope"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EsprPurposeScope
