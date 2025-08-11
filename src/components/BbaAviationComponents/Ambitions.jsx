import React from 'react'
import Image from 'next/image'

const Ambitions = () => {
  return (
    <div className="bg-[#531675] py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          
          {/* Left Side - Image */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              {/* Main Image */}
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white">
                <Image
                  src="/MBA/student.jpg"
                  alt="BBA Aviation Student"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Outer Circle */}
              <div className="absolute -inset-4 border-2 border-white rounded-full"></div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="md:w-2/3">
            <div className="text-white">
              {/* Heading */}
              <h2 className="text-2xl md:text-4xl font-bold mb-6 playfair-300">
                Ambitions in Motion: <br/> Alumni Speak
              </h2>
              
              {/* Paragraph */}
              <p className="text-base md:text-lg mb-6 monser-400 leading-relaxed">
                "A person's early 20s shape their future, and I'm truly grateful that AIMS became part of mine. From my first visit, the vibrant campus atmosphere left me inspired. AIMS provided clarity, confidence, and a global perspective through its diverse student community and supportive faculty. More than just academics, AIMS emphasized all-round development. My journey with the Rotaract Club, especially as President, helped me grow in leadership, time management, and networking. AIMS is more than an institution, it's an emotion. I leave empowered, motivated, and ready to chase limitless success. To all future AIMERS, I wish you an enriching and unforgettable journey!"
              </p>
              
              {/* Name */}
              <div>
                <h4 className="text-white !text-white monser-600 text-[28px]" style={{ color: 'white' }}>- Sanjay R, BBA Aviation</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ambitions
