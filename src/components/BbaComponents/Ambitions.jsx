import React from 'react'
import Image from 'next/image'

const Ambitions = () => {
  const ambitions = [
    {
      id: 1,
      title: "Corporate Leadership",
      description: "Aspiring to become business leaders and executives in top-tier companies",
      icon: "👔",
      stats: "85%"
    },
    {
      id: 2,
      title: "Entrepreneurship",
      description: "Building innovative startups and creating employment opportunities",
      icon: "🚀",
      stats: "15%"
    },
    {
      id: 3,
      title: "Global Opportunities",
      description: "Pursuing international careers and cross-border business ventures",
      icon: "🌍",
      stats: "60%"
    },
    {
      id: 4,
      title: "Social Impact",
      description: "Creating positive change through sustainable business practices",
      icon: "💚",
      stats: "40%"
    }
  ]

  return (
    <>
     {/* Student Image with Overlay */}
     <div className="relative mx-auto">
          <div className="w-full h-auto">
            <Image
              src="/bba/bba-student.jpg"
              alt="AIMS Students"
              width={800}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
          
          {/* Gradient Overlay */}
          <div 
            className="absolute inset-0 w-1/2 h-full"
            style={{
              background: 'linear-gradient(90deg, var(--Aims-Blue, #0C2165) 1.84%, var(--Aims-Blue, #0C2165) 64.13%, rgba(12, 33, 101, 0.00) 100%)'
            }}
          ></div>
          
                     {/* Text Overlay */}
           <div className="absolute inset-0 flex items-center">
             <div className="w-1/2 px-4 sm:px-6  md:ml-10">
               <h2 className="text-white text-xl md:text-[72px] monser-400 mb-3 md:mb-6 leading-tight">
               BBA + 
               </h2>
                <h3 className='text-white text-xl md:text-[40px] monser-400 mb-3 md:mb-6 leading-tight'>CA/ACCA Training</h3>
               <p className="text-white text-xs sm:text-sm md:text-base monser-400 leading-relaxed">
               Students can opt for CA or ACCA training alongside their BBA to strengthen their professional foundation.
               </p>
                        </div>
         </div>
     </div>

     {/* Additional Section */}
     <div className="bg-[#531675] py-16 md:py-20">
       <div className="container mx-auto px-4 md:px-6">
         <div className="flex flex-col md:flex-row gap-8 items-center">
           {/* Left Side - Image with Circles */}
           <div className="md:w-1/3 flex justify-center relative">
             <div className="relative">
               {/* Outer Circle */}
               <div className="w-80 h-80 rounded-full border-4 border-white opacity-20 absolute inset-0"></div>
               {/* Inner Circle */}
               <div className="w-60 h-60 rounded-full border-4 border-white opacity-30 absolute inset-0 m-10"></div>
               {/* Image */}
               <div className="relative z-10">
                 <Image
                   src="/bba/student.jpg"
                   alt="BBA Student"
                   width={300}
                   height={300}
                   className="rounded-full object-cover"
                 />
               </div>
             </div>
           </div>

           {/* Right Side - Content */}
           <div className="md:w-2/3 flex flex-col space-y-6">
                           <h2 className="text-3xl md:text-[72px] font-bold text-white playfair-300">
                Ambitions in Motion: <br/> Alumni Speak
              </h2>
             <p className="text-lg md:text-xl text-white leading-relaxed monser-400">
               "A person's early 20s shape their future, and I'm truly grateful that AIMS became part of mine. From my first visit, the vibrant campus atmosphere left me inspired. AIMS provided clarity, confidence, and a global perspective through its diverse student community and supportive faculty. More than just academics, AIMS emphasized all-round development. My journey with the Rotaract Club, especially as President, helped me grow in leadership, time management, and networking.
               AIMS is more than an institution, it's an emotion. I leave empowered, motivated, and ready to chase limitless success. To all future AIMERS, I wish you an enriching and unforgettable journey!"
             </p>
             
                           {/* Name */}
              <div>
                <h4 className="text-white !text-white monser-600 text-[28px]" style={{ color: 'white' }}>- Sanjay R, BBA</h4>
              </div>
           </div>
         </div>
       </div>
     </div>
     
     </>
  )
}

export default Ambitions
