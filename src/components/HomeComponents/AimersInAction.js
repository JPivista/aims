// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const testimonials = [
//   {
//     id: 1,
//     name: "Aritrika Pal",
//     program: "BBA 2021-24",
//     rating: 5,
//     image: "/home/course/Home/Aritrika Pal,.webp",
//     quote: "Excited to share that I've joined Deloitte as an Advisory Associate Analyst! While I secured the role independently, the solid foundation and support from AIMS Institutes were instrumental in my preparation. Truly grateful for the learning experience that shaped my journey."
//   },
//   {
//     id: 2,
//     name: "Susheel B Gowda",
//     program: "MBA 2022-24",
//     rating: 5,
//     image: "/home/course/Home/Susheel B Gowda,.webp",
//     quote: "The comprehensive curriculum and industry exposure at AIMS Institutes prepared me exceptionally well for my career. The faculty's guidance and practical learning approach made all the difference in my professional journey."
//   },
//   {
//     id: 3,
//     name: "Priya Sharma",
//     program: "BBA Aviation 2020-23",
//     rating: 5,
//     image: "/home/course/Home/Aritrika Pal,.webp",
//     quote: "AIMS Institutes provided me with the perfect platform to launch my career in aviation. The specialized training and industry connections opened doors I never thought possible."
//   },
//   {
//     id: 4,
//     name: "Rahul Kumar",
//     program: "MBA Finance 2021-23",
//     rating: 5,
//     image: "/home/course/Home/Susheel B Gowda,.webp",
//     quote: "The finance program at AIMS was exactly what I needed to transition into the financial sector. The practical projects and mentorship were invaluable."
//   }
// ];

// export default function AimersInAction() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 1));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + (testimonials.length - 1)) % (testimonials.length - 1));
//   };

//   // Auto slide
//   useEffect(() => {
//     const timer = setInterval(nextSlide, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="w-full py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
//           {/* LEFT SIDE - HEADING AND BUTTON */}
//           <div className="space-y-6">
//             <div className="space-y-2">
//               <h2 className="text-4xl font-bold text-[#1e3a8a] font-['Montserrat']">
//                 AIMers in
//               </h2>
//               <h2 className="text-5xl font-bold text-[#8b5cf6] italic font-['Montserrat']">
//                 Action
//               </h2>
//             </div>
//             <button className="px-8 py-4 bg-[#8B3A62] text-white rounded-lg hover:bg-[#7a2f52] transition-colors duration-300 flex items-center gap-2 font-medium">
//               Read All Alumni Journeys
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
//           </div>

//           {/* RIGHT SIDE - TESTIMONIAL CARDS */}
//           <div className="relative">
//             <div className="overflow-hidden">
//               <div
//                 className="flex transition-transform duration-500 ease-in-out"
//                 style={{
//                   transform: `translateX(-${currentIndex * 50}%)`,
//                   width: `${testimonials.length * 50}%`
//                 }}
//               >
//                 {testimonials.map((testimonial, index) => (
//                   <div
//                     key={testimonial.id}
//                     className="w-1/2 flex-shrink-0 px-3"
//                   >
//                     <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
//                       {/* Image with overlay */}
//                       <div className="relative h-64">
//                         <img
//                           src={testimonial.image}
//                           alt={testimonial.name}
//                           className="w-full h-full object-cover"
//                         />
//                         {/* Semi-transparent orange overlay */}
//                         <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-orange-400/30 to-transparent"></div>
//                       </div>
                      
//                       {/* Content */}
//                       <div className="p-6 space-y-4">
//                         {/* Rating Stars */}
//                         <div className="flex text-yellow-500">
//                           {[...Array(testimonial.rating)].map((_, i) => (
//                             <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
//                               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                             </svg>
//                           ))}
//                         </div>
                        
//                         {/* Name and Program */}
//                         <h3 className="font-bold text-lg text-gray-900">
//                           {testimonial.name}, {testimonial.program}
//                         </h3>
                        
//                         {/* Quote */}
//                         <p className="text-gray-700 text-sm leading-relaxed">
//                           "{testimonial.quote}"
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Navigation Arrows */}
//             <div className="flex justify-center mt-8 space-x-4">
//               <button
//                 onClick={prevSlide}
//                 className="w-12 h-12 bg-white rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 shadow-sm"
//               >
//                 <FaChevronLeft className="text-gray-700" />
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="w-12 h-12 bg-white rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 shadow-sm"
//               >
//                 <FaChevronRight className="text-gray-700" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
