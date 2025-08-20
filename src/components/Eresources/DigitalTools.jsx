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
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-8">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-[65px] text-[#0C2165] mb-4 md:mb-6 playfair-300">
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
      <div
        className="py-6 md:py-10 border-b mx-4 md:ml-20 md:mr-20"
        style={{ borderColor: "rgba(0, 0, 0, 0.20)" }}
      >
        <div className="mb-4">
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#0C2165] playfair-300">
            Subscribed Resources
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl">
          {subscribedResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white rounded-lg overflow-hidden border border-[#B79AAD]"
            >
              <div className="flex flex-col md:flex-row">
                <div className="bg-[#A22877] px-4 md:px-6 py-4 md:py-6 flex items-center justify-between md:min-w-[140px]">
                  <span className="text-white font-bold text-2xl md:text-[36px] monser-600">
                    {resource.name}
                  </span>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
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
                        className="w-4 h-4 md:w-6 md:h-6 ml-2 md:ml-5"
                      />
                    </motion.div>
                  </a>
                </div>
                <div className="px-4 md:px-6 py-4 md:py-6 flex-1">
                  <p className="text-xs md:text-sm">{resource.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default DigitalTools
