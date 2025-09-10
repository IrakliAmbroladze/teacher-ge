import React from "react";

export default function Row({
  subject,
}: {
  subject: "მათემატიკა" | "ქართული" | "ბუნება";
}) {
  return (
    <>
      <div className="border min-h-[100px] text-2xl text-center font-semibold overflow-auto">
        {subject}
      </div>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="border"></div>
      ))}
    </>
  );
}
