import React from "react";
import Button from "@/shared/Button";
const AcademicHub = () => {
  return (
    <div className="container mx-auto py-10 lg:px-10 px-4">
      <div className="">
        <h3 className="text-center text-[#0C2165] font-semibold">
          The Academic Hub
          <br /> That Supports Your Every AIM
        </h3>
        <h6 className="text-center">
          At AIMS Institutes, the Library & Information Centre is more than a
          quiet corner of campus. It is where curiosity finds resources, and
          ambition meets guidance. From extensive print collections to
          cutting-edge digital platforms, our library helps students from all
          backgrounds access the tools they need to succeed.
        </h6>
      </div>
      <div className="flex flex-wrap gap-4 my-8 justify-center">
        <Button
          href="/ugc-preparation"
          showReadMore={false}
        >
          Bangalore University Previous year Question papers
        </Button>
        <Button
          target="_blank"
          href="https://www.ugcnetonline.in/question_papers_dec2014.php"
          showReadMore={false}
        >
          UGC NET Question papers
        </Button>
        <Button href="/eresources" showReadMore={false}>
          E-Resources
        </Button>
      </div>
    </div>
  );
};

export default AcademicHub;
