import React from "react";
import Image from "next/image";

const AlumniSpeak = ({
    name,
    batch,
    quote,
    description1,
    description2,
    description3,
    description4,
    closingNote,
    imageSrc,
}) => {
    return (
        <div className="bg-[#531675] text-white py-12 lg:px-8 px-4">
    <div className="container mx-auto">
        <h3 className="text-3xl font-semibold mb-4">Alumni Speak</h3>
        <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Left Section - Image & Info */}
            <div className="flex flex-col items-center w-full lg:w-[30%]">
                <div className="relative">
                    <Image
                        src={imageSrc}
                        alt={name}
                        className="z-10 rounded-full w-64 h-64"
                        width={200}
                        height={200}
                    />
                </div>
                {name && (
                    <h5 className="mt-4 font-bold text-lg" style={{ fontWeight: "600" }}>
                        {name}
                    </h5>
                )}
                {batch && (
                    <p className="text-sm italic opacity-80">{batch}</p>
                )}
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-[70%]">
                {quote && (
                    <p
                        className="italic text-lg mb-4"
                        style={{ fontWeight: "600" }}
                    >
                        “{quote}”
                    </p>
                )}
                {description1 && <p className="mb-4">{description1}</p>}
                {description2 && <p className="mb-4">{description2}</p>}
                {description3 && <p className="mb-4">{description3}</p>}
                {description4 && <p className="mb-4">{description4}</p>}
                {closingNote && (
                    <p
                        className="font-bold mt-6"
                        style={{ fontWeight: "600" }}
                    >
                        {closingNote}
                    </p>
                )}
            </div>
        </div>
    </div>
</div>

    );
};

export default AlumniSpeak;
