"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'

const OurTrackRecord = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint

        handleResize(); // run once on mount
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const data = [
        { id: "01", type: "Minor", number: 7, revenue: "5,35,630" },
        { id: "02", type: "Major", number: 1, revenue: "6,13,103" },
        { id: "03", type: "Inter-Disciplinary", number: 1, revenue: "1,00,000" },
        { id: "04", type: "Inter-Sponsored", number: 2, revenue: "8,12,070" },
        { id: "05", type: "Others", number: 2, revenue: "1,75,000" },
    ];

    return (
        <>
            {/* Image */}
            <div className="w-full">
                <Image
                    src={
                        isMobile
                            ? "/centre-for-research/our_track_record_mob.webp"
                            : "/centre-for-research/our_track_record.webp"
                    }
                    alt="Our Track Record"
                    width={1920}   // set the original image width
                    height={800}   // set the original image height
                    className="w-full h-auto object-cover"
                    priority
                />
            </div>

            {/* Table */}
            <div className="max-w-4xl mx-auto my-10 px-2 sm:px-4">
                <h2 className="text-center text-lg sm:text-2xl font-bold mb-6">
                    Research Projects and Revenue Generated
                </h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden shadow-lg text-center text-xs sm:text-sm md:text-base">
                        <thead>
                            <tr className="bg-gradient-to-r from-[#531574] to-[#8C4AB0] text-white border-b border-gray-300">
                                <th className="px-2 sm:px-4 py-2 sm:py-3 border-r border-gray-300">Sl.No</th>
                                <th className="px-2 sm:px-4 py-2 sm:py-3 border-r border-gray-300">Type of Project</th>
                                <th className="px-2 sm:px-4 py-2 sm:py-3 border-r border-gray-300">Number</th>
                                <th className="px-2 sm:px-4 py-2 sm:py-3">Revenue Generated (INR)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-300">
                            {data.map((row) => (
                                <tr key={row.id} className="bg-[#e1f9f4]">
                                    <td className="px-2 sm:px-4 py-2 border-r border-gray-300">{row.id}</td>
                                    <td className="px-2 sm:px-4 py-2 border-r border-gray-300">{row.type}</td>
                                    <td className="px-2 sm:px-4 py-2 border-r border-gray-300">{row.number}</td>
                                    <td className="px-2 sm:px-4 py-2">{row.revenue}</td>
                                </tr>
                            ))}
                            <tr className="bg-[#c7e7e0] font-semibold">
                                <td className="px-2 sm:px-4 py-2" style={{ fontWeight: "600" }}>TOTAL</td>
                                <td className="px-2 sm:px-4 py-2"></td>
                                <td className="px-2 sm:px-4 py-2" style={{ fontWeight: "600" }}>13</td>
                                <td className="px-2 sm:px-4 py-2" style={{ fontWeight: "600" }}>22,35,803</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default OurTrackRecord
