import React from "react";

export default function TableHeader() {
  return (
    <>
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="border min-h-[100px] text-black bg-[#88b545]"
        ></div>
      ))}
    </>
  );
}
