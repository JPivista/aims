import React from "react";
import Image from "next/image";
import Button from "@/shared/Button";
import Link from "next/link";
import Companies from "../shared/Companies";


const Bullseye = () => {
  return (
    <>
      <div className="container mx-auto text-center lg:py-10 py-5">
        <h1 className="text-4xl lg:text-6xl font-light text-[#0C2165] playfair-300 leading-tight">
          Bullseye Outcomes
        </h1>
        <p className="max-w-3xl mx-auto lg:pb-10 lg:px-0 px-4">
          With over 100+ recruiters including EY, Infosys, Deloitte, and
          Accenture, AIMS is where ambition meets real outcomes. Our placement
          support and alumni stories show what’s possible when you aim with
          intent.
        </p>
      </div>
      <div className="container mx-auto hidden lg:block">
        <Image
          src="/home/bullseye/logos.svg"
          alt="bullseye"
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>

      <div className="lg:hidden">
        <Companies />
      </div>
      <div className="flex justify-center w-full">
        <Link href="/placement-policies">
          <Button>Explore Placement</Button>
        </Link>
      </div>
    </>
  );
};

export default Bullseye;
