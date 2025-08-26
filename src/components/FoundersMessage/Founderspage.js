"use client"
import React from "react"
import Image from "next/image"

const messages = [
  {
    role: "Founder",
    name: "Dr. Kerron G Reddy",
    title1: "Founder",
    title2: "AIMS Institutes",
    image: "/founders-message/img1.webp",
    message: `"Having a single-minded focus on addressing student needs, we are clear that it is our responsibility to help our students realize their goals in an increasingly competitive world. We have consistently produced excellent results and AIMS alumni can be found at premier organizations in India and overseas. From academic excellence to leadership qualities, in a nurturing environment with required infrastructure, AIMS offers everything needed to succeed as a student."`,
  },
  {
    role: "CEO",
    name: "Best Wishes, \n Meka Priyanandan Reddy",
    title1: "CEO",
    title2: "AIMS Institutes",
    image: "/founders-message/img-02.webp",
    message: `"At AIMS, we are driven by a legacy of academic excellence, entrepreneurial spirit, global vision, and social responsibility. Our mission is to inspire and equip students to become professionals of global caliber, fostering a vibrant learning environment where ideas thrive, diversity is celebrated, and every individual is empowered to succeed. Education at AIMS is a journey of growth, discovery, and transformation. With exceptional faculty, dedicated staff, state-of-the-art facilities, and strong industry collaborations, we ensure our students receive an education that is both relevant and future-ready. Our alumni, making their mark across the globe, stand as a proud testament to the strong foundations and skills nurtured at AIMS. I warmly invite you to explore the opportunities at AIMS and take the next steps towards realising your dreams and aspirations."`,
  },
  {
    role: "Executive Director",
    name: "Dr. Roja Reddy Meka",
    title1: "Executive Director",
    title2: "AIMS Institutes",
    image: "/founders-message/img3.webp",
    message: `Dear Students, \n "Congratulations on becoming an ‘AIMER’! Welcome to AIMS Institutes — a place where you will transform into confident, ethical, and globally-minded professionals. At AIMS, we combine multidisciplinary learning with research, entrepreneurship incubation, and real-world projects. Supported by our experienced faculty and expert professionals, you will receive a 360-degree education designed to prepare you for the dynamic global workplace. Our campus celebrates diversity, echoing the spirit of Vasudhaiva Kutumbakam — The World is One Family. Here, you will build lifelong friendships and learn the values of equality, inclusivity, and empathy. We maintain a strong commitment to academic excellence and discipline while nurturing your professional growth and ethical sensitivity. Our alumni have made their mark globally, and we are confident you will too. We look forward to supporting you on this exciting journey and making your time at AIMS Institutes truly unforgettable."`,
  },
  {
    role: "Principal",
    name: "Dr. Rama Murthy",
    title1: "Principal",
    title2: "AIMS Institutes",
    image: "/founders-message/img4.webp",
    message: `Dear Students, \n "Welcome to AIMS Institutes — where your future begins! At AIMS, we provide an environment supported by world-class infrastructure — smart classrooms, innovation labs, a vibrant library, and centers for research and entrepreneurship. Here, learning goes beyond academics, preparing you to be leaders in a globalized world. ‘Great things never come from comfort zones.’ Guided by expert faculty and a diverse student community, your journey here will be full of opportunities for growth, discovery, and success. Dream big, work hard, and make the most of every opportunity. We are proud to have you with us — and excited to see the amazing things you will achieve!"`,
  },
]

const FoundersMessage = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 lg:px-20">
      {/* Main Title */}
      {/* <h1 className="text-center playfair-300 text-[#a5246c] mb-12 uppercase">
        FOUNDER’S MESSAGE
      </h1> */}

      <div className="space-y-16">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-16 container mx-auto ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image with pink border */}
            <div className="flex-shrink-0">
              <div className="w-60 h-60 lg:w-[350px] lg:h-full rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src={msg.image}
                  alt={msg.name}
                  width={1220}
                  height={1220}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Text */}
            <div className="lg:w-3/4">
              {/* Sub-heading */}
              <h3 className="text-xl font-serif mb-4">
                <span className="text-[#0C2165] playfair-300">
                  Message from
                </span>
                <br />
                <span className="text-[#A22877] playfair-300 italic">
                  {msg.role}
                </span>
              </h3>

              {/* Message body */}
              <p className="text-gray-700 leading-relaxed font-serif mb-4 whitespace-pre-line">
  {msg.message}
</p>


              {/* Name */}
              <h2
                className="monser-600 text-xl mb-1"
                dangerouslySetInnerHTML={{
                  __html: msg.name.replace(/\n/g, "<br />"),
                }}
              />

              {/* Title */}
              <h2 className="text-md">
                <span>{msg.title1}</span>, <span>{msg.title2}</span>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FoundersMessage
