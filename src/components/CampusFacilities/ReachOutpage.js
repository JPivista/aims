"use client"
import React from "react"
import Image from "next/image"

const ReachOutpage = () => {
  return (
    <section className="bg-[#A43177] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="md:w-2/3">
          <h3 className=" text-xl md:text-[72px] playfair-300 mb-3 md:mb-6 leading-tight">
            Reach Out to Us
          </h3>

          <p>
            Want to explore the campus or check hostel availability? We&apos;d
            love to hear from you.
          </p>
          <p>
            Contact us at:
            <a
              href="mailto:facilities@theaims.ac.in"
              class="text-white font-semibold hover:underline"
            >
                <span> facilities@theaims.ac.in</span>
            </a>
          </p>

          <p className="pt-3">
          Campus Location: AIMS Institutes, Peenya, Bengaluru
          </p>
        </div>

        {/* Right Icon */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <Image
            src="/life-at-aims/student-loan-icon.svg"
            alt="Arrow"
            width={128}
            height={128}
            className="opacity-50 w-32 h-32"
          />
        </div>
      </div>
    </section>
  )
}

export default ReachOutpage
