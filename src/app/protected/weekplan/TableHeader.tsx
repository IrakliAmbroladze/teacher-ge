import React from "react";
import HeaderCell from "./HeaderCell";

export default function TableHeader() {
  return (
    <>
      <div className="bg-[#88b545] text-black border"></div>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="flex border min-h-[100px] text-black bg-[#88b545] justify-center items-center"
        >
          <HeaderCell index={i} />
        </div>
      ))}
    </>
  );
}
