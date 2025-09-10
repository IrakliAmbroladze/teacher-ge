import React from "react";

export default function Row({
  subject,
}: {
  subject: "მათემატიკა" | "ქართული" | "ბუნება";
}) {
  return (
    <>
      <div className="border min-h-[100px] text-xl font-semibold  flex w-full overflow-auto justify-center items-center">
        {subject}
      </div>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="border"></div>
      ))}
    </>
  );
}
