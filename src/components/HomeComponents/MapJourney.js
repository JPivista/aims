import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialYoutube } from "react-icons/sl";
import Link from "next/link";

const MapJourney = () => {
  const mapJourney = [
    {
      image: "/home/map-journey/insta-1.webp",
      title: "PG 25th Graduation Day Highlights",
      description:
        "A huge congratulations to the Class of 2024! Your journey is just beginning, and the future is yours to shape!",
      date: "Jan 08, 2025",
      duration: "Duration: 02:24",
    },
    {
      image: "/home/map-journey/insta-2.webp",
      title: "PG 25th Graduation Day Highlights",
      description:
        "A huge congratulations to the Class of 2024! Your journey is just beginning, and the future is yours to shape!",
      date: "Jan 08, 2025",
      duration: "Duration: 02:24",
    },

    {
      image: "/home/map-journey/youtube.webp",
      title: "PG 25th Graduation Day Highlights",
      description:
        "AIMS School of Business MBA Wins Overall Championship Trophy | AIMS Institutes",
      date: "Mar 19, 2025",
      duration: "00:00",
    },
  ];
  return (
    <>
      <div className="bg-[#C6F3EA] py-10 lg:px-8 px-4">
        <div className="container mx-auto ">
          <div>
            <h3 className="text-[#A22877]">
              Map Your <br /> Journey
            </h3>
            <p className="lg:w-[55%] lg:pb-5">
              Stay connected through Instagram, LinkedIn & YouTube for updates,
              student stories, and campus moments.
            </p>
          </div>
        </div>
        <div className="container mx-auto pt-10">
          <div className="flex lg:flex-row flex-col gap-4">
            {mapJourney.map((item, index) => (
              <div
                key={index}
                className="lg:max-w-sm bg-white rounded-2xl shadow-md overflow-hidden"
              >
                {/* Image */}
                <div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h5 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h5>
                  <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-4">
                    <p className="text-[#A22877] text-sm font-medium">
                      {item.date}
                    </p>
                    <p className="text-[#A22877] text-sm font-medium">
                      {item.duration}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto pt-10 flex gap-5 items-center lg:px-0 px-4">
          <div>
            <h5 className="text-2xl monser-700">Follow Us</h5>
          </div>
          <div className="flex gap-4">
            <Link href="https://www.instagram.com/aimsinstitutes1994/?hl=en" target="_blank"><FaInstagram size={30} /></Link>
            <Link href="https://www.facebook.com/aimsinstitutes1994/" target="_blank"><CiFacebook size={30} /></Link>
            <Link href="https://x.com/aimsinstitutes1994" target="_blank"><RiTwitterXFill size={30} /></Link>
            <Link href="https://www.youtube.com/@aimsinstitutes1994" target="_blank"><SlSocialYoutube size={30} /></Link>

          </div>
        </div>
      </div>
    </>
  );
};

export default MapJourney;
