import React from "react";
import AimsCarousel from "./Campus";
import Button from "@/shared/Button";
import Link from "next/link";

const CampusUpdates = () => {
  return (
    <>
      <div className="container mx-auto pt-10 lg:px-0 px-4">
        <h1 className="text-[#0C2165]">Campus Updates</h1>
        <p className="lg:w-[60%] w-full">
          Stay informed about the latest news, events, and developments,
          including achievements and opportunities that shape our community.
        </p>
        <div className="flex lg:flex-row flex-col gap-4 lg:pt-5 pt-3">
          <Link href="/news">
            <Button>Explore News </Button>
          </Link>
          <Link href="/events">
            <Button>Events at AIMS </Button>
          </Link>
        </div>
      </div>
      <div>
        <AimsCarousel />
      </div>
    </>
  );
};

export default CampusUpdates;
