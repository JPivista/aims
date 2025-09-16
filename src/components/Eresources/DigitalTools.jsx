"use client"
import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const DigitalTools = () => {
  const subscribedResources = [
    {
      id: 1,
      name: "DELNET",
      description: "Access shared library resources across India",
      url: "https://delnet.in",
    },
    {
      id: 2,
      name: "NLIST",
      description: "e-Journals and e-Books through UGC-INFONET",
      url: "https://nlist.inflibnet.ac.in",
    },
  ]

  return (
    <>
      <div className="container mx-auto px-4 md:px-0 py-6 md:py-10">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl text-[#0C2165] mb-4 md:mb-6 playfair-300">
            Digital Tools That Bring
            <br />
            The World of Knowledge to You
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            As part of our mission to support dependable, future-focused
            education, the AIMS Library gives students access to essential
            digital tools, both subscribed and open-access.
          </p>
        </div>
      </div>

      {/* Subscribed Resources Section */}
      <div className="px-4 md:px-8 lg:px-8 ">
        <div
          className=" pb-6 md:pb-10 border-b border-gray-300 container mx-auto"
          style={{ borderColor: "rgba(0, 0, 0, 0.20)" }}
        >
          <div className="mb-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#0C2165] playfair-300">
              Subscribed Resources
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-6xl ">
            {subscribedResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-lg overflow-hidden border border-[#B79AAD] hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="bg-[#A22877] px-4 md:px-6 py-4 md:py-6 flex items-center justify-between lg:min-w-[160px] lg:max-w-[200px]">
                    <span className="text-white font-bold text-xl md:text-2xl lg:text-[28px] monser-600 leading-tight">
                      {resource.name}
                    </span>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer flex-shrink-0"
                    >
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Image
                          src="/eresources/white-arrow.svg"
                          alt="Arrow"
                          width={14}
                          height={15}
                          className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ml-2 md:ml-3 lg:ml-4"
                        />
                      </motion.div>
                    </a>
                  </div>
                  <div className="px-4 md:px-6 py-4 md:py-6 flex-1 flex items-center">
                    <p className="text-sm md:text-base lg:text-sm leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default DigitalTools
