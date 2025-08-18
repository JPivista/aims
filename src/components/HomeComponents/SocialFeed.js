"use client";
import { useEffect, useState } from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function SocialFeed() {
  const [instagramReels, setInstagramReels] = useState([]);
  const [youtubeShorts, setYoutubeShorts] = useState([]);

  useEffect(() => {
    // Mock data — replace with API calls
    setInstagramReels([
      {
        id: "1",
        caption: "PG 25th Graduation Day Highlights",
        media_url: "https://www.instagram.com/reel/DMaOKTfIM0Q/?hl=en",
        permalink: "#",
        date: "Jan 08, 2025",
        duration: "02:24",
      },
      {
        id: "2",
        caption: "PG 25th Graduation Day Highlights",
        media_url: "/social-feed/Instagram.png",
        permalink: "#",
        date: "Jan 08, 2025",
        duration: "02:24",
      }
    ]);

    setYoutubeShorts([
      {
        id: "3",
        title: "AIMS School of Business MBA Wins Overall Trophy",
        thumbnail: "https://www.instagram.com/reel/DMaOKTfIM0Q/?hl=en",
        link: "#",
        date: "Mar 19, 2025",
      }
    ]);
  }, []);

  return (
    <div className="bg-[#C5EEE6] p-8">
      <h2 className="text-purple-800 text-5xl font-serif leading-tight">Map Your Journey</h2>
      <p className="mt-2 text-gray-800">
        Stay connected through Instagram, LinkedIn & YouTube for updates, student stories, and campus moments.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {instagramReels.map((reel) => (
          <a key={reel.id} href={reel.permalink} target="_blank" rel="noreferrer"
             className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <div className="relative">
              <img src={reel.media_url} alt={reel.caption} className="w-full h-48 object-cover"/>
              <FaInstagram className="absolute top-3 left-3 text-white bg-pink-500 rounded-full p-2 text-3xl"/>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{reel.caption}</h3>
              <p className="text-sm text-gray-600 mt-1">A huge congratulations to the Class of 2024! Your journey is just beginning, and the future is yours to shape!</p>
              <p className="mt-3 text-pink-600">{reel.date}</p>
              <p className="text-pink-600">Duration: {reel.duration}</p>
            </div>
          </a>
        ))}

        {youtubeShorts.map((short) => (
          <a key={short.id} href={short.link} target="_blank" rel="noreferrer"
             className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <div className="relative">
              <img src={short.thumbnail} alt={short.title} className="w-full h-48 object-cover"/>
              <FaYoutube className="absolute top-3 left-3 text-white bg-red-500 rounded-full p-2 text-3xl"/>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{short.title}</h3>
              <p className="mt-3 text-pink-600">{short.date}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
