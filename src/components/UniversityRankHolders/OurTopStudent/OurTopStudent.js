import React from "react";
import TableComponent from "./TableComponent";

const OurTopStudent = () => {
  return (
    <> 
      <div className="container mx-auto px-6 lg:px-8 flex flex-col gap-3 text-center py-10 lg:w-[80%] border-b border-gray-200">
        <h1 className="text-[#A22877]">Our Top Student Achievers</h1>
        <h6 className="monser-700 text-xl">
          Recognising Excellence in Academic Performance and Leadership
        </h6>   
      </div>
      <TableComponent />
    </>
  );
};

export default OurTopStudent;
