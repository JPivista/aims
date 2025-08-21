"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import Button from "@/shared/Button";
import Link from "next/link";

const campusUpdates = [
  {
    id: 1,
    title: "A Proud Moment for BHM Dept. of AIMS Institutes!",
    description: "Celebrating outstanding achievements and academic excellence in our Bachelor of Hotel Management program.",
    date: "Jun 6, 2025",
    location: "AIMS Campus",
    image: "/home/AIMS School of Business MBA Wins .webp",
    type: "Achievement",
    bgColor: "from-purple-600 to-pink-600"
  },
  {
    id: 2,
    title: "UG 28th Graduation Ceremony",
    description: "Join us as we celebrate the remarkable journey and achievements of our graduating class.",
    date: "Jul 14, 2025",
    location: "Main Auditorium",
    image: "/home/banner-001.png",
    type: "Event",
    bgColor: "from-blue-600 to-purple-600"
  },
  {
    id: 3,
    title: "Bronze Glory at the National Games",
    description: "Our students continue to excel not just academically but also in sports, bringing pride to AIMS.",
    date: "Recent",
    location: "National Level",
    image: "/home/AIMS School of Business MBA Wins .webp",
    type: "Sports",
    bgColor: "from-green-600 to-blue-600"
  },
  {
    id: 4,
    title: "UG 27th Graduation Day - Class of 2024",
    description: "Commemorating the successful completion of undergraduate studies and celebrating future leaders.",
    date: "Class of 2024",
    location: "AIMS Campus",
    image: "/home/banner-001.png",
    type: "Graduation",
    bgColor: "from-orange-600 to-red-600"
  }
];

export default function CampusUpdates() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % campusUpdates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + campusUpdates.length) % campusUpdates.length);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#1e3a8a] font-['Montserrat']">Campus</span>{" "}
            <span className="text-[#8b5cf6] italic font-['Montserrat']">Updates</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay connected with the latest happenings, achievements, and events at AIMS Institutes
          </p>
        </div>

        {/* Main Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={campusUpdates[currentIndex].id}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative h-[400px] md:h-[500px] lg:h-[600px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={campusUpdates[currentIndex].image}
                    alt={campusUpdates[currentIndex].title}
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Gradient Overlay */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-r ${campusUpdates[currentIndex].bgColor} opacity-80`}
                  />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Left Side - Content */}
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-white space-y-6"
                      >
                        {/* Type Badge */}
                        <div className="inline-block">
                          <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                            {campusUpdates[currentIndex].type}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                          {campusUpdates[currentIndex].title}
                        </h3>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                          {campusUpdates[currentIndex].description}
                        </p>

                        {/* Meta Information */}
                        <div className="flex flex-col sm:flex-row gap-4 text-white/80">
                          <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-white/70" />
                            <span>{campusUpdates[currentIndex].date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-white/70" />
                            <span>{campusUpdates[currentIndex].location}</span>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          className="pt-4"
                        >
                          <Button showReadMore={true} hoverText="Read More">
                            <Link href="/events" className="text-white">
                              Explore All Updates
                            </Link>
                          </Button>
                        </motion.div>
                      </motion.div>

                      {/* Right Side - Additional Visual Element */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hidden lg:flex justify-center items-center"
                      >
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                          <div className="text-center text-white">
                            <div className="text-4xl font-bold mb-2">30+</div>
                            <div className="text-sm uppercase tracking-wider">Years of Excellence</div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
                aria-label="Previous update"
              >
                <FaChevronLeft className="text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
                aria-label="Next update"
              >
                <FaChevronRight className="text-gray-700" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {campusUpdates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#8b5cf6] scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {campusUpdates.map((update, index) => (
              <motion.button
                key={update.id}
                onClick={() => setCurrentIndex(index)}
                className={`relative rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'border-[#8b5cf6] shadow-lg' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="aspect-video relative">
                  <Image
                    src={update.image}
                    alt={update.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <h4 className="text-white text-xs md:text-sm font-semibold line-clamp-2">
                      {update.title}
                    </h4>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}