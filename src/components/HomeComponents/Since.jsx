import Button from "@/shared/Button";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Since = () => {
  return (
    <>
      <div className="container mx-auto px-7 lg:py-16 py-5 flex flex-col items-center justify-center gap-5 lg:gap-8">
        <div className="flex items-center justify-center">
          <Image
            src="/home/iacbe-naac.svg"
            alt="Since"
            width={800}
            height={800}
          />
        </div>
        <p className="text-center lg:text-xl">
          Since 1994, AIMS Institutes has focused on discipline, direction, and
          real-world skills, not just prestige. We offer a structured path for
          students ready to grow. With industry-aligned programs, experienced
          mentors, and a distraction-free campus, we prepare learners to build
          careers in business, hospitality, IT, commerce, and more.
        </p>
        <Button showReadMore={true} hoverText="Our Programs">
          <Link href="/about">Choose Your Arrow</Link>
        </Button>
      </div>
    </>
  );
};

export default Since;
