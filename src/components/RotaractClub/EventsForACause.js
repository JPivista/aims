import React from "react";
import Image from "next/image";

const EventsForACause = () => {
  return (
    <div className="w-full bg-white pb-10 lg:px-0 px-4">
      <div className='container mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center lg:order-1 order-2">
            <h3 className="text-[#0C2165]">Events for a Cause</h3>
            <div>
              <p>
                The Rotaract Club is committed to creating events for a cause,
                raising awareness and funds for local and global issues. By
                hosting events that educate, engage and inspire the community, we
                aim to create meaningful change and positive impact. We believe
                that events can be a powerful catalyst for social change, and we
                are dedicated to using our platform to make a difference.
              </p>

            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex flex-col gap-4 lg:order-2 order-1">
            <Image
              src="/rotaract-club/events-for-a-cause.webp"
              alt="Young men playing basketball outdoors"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsForACause;
